#!/usr/bin/env node
/**
 * Parse all Ahrefs CSV exports and merge into a single keywords.json
 * Run: node scripts/parse-keywords.js
 */

const fs = require("fs");
const path = require("path");

// File configs
const competitorFiles = [
  { file: "/Users/julien/Downloads/murprotec.fr-organic-keywords-subdomains-fr_2026-03-16_18-51-36.csv", source: "murprotec.fr" },
  { file: "/Users/julien/Downloads/www.actimur.fr-organic-keywords-subdomains_2026-03-16_18-51-51.csv", source: "actimur.fr" },
  { file: "/Users/julien/Downloads/murhumide.fr-organic-keywords-subdomains-fr_2026-03-16_18-56-46.csv", source: "murhumide.fr" },
  { file: "/Users/julien/Downloads/www.maison-etanche.com-organic-keywords-sub_2026-03-16_19-04-14.csv", source: "maison-etanche.com" },
];

const googleFiles = [
  { file: "/Users/julien/Downloads/google_fr_salpetre_termes-correspondants_2026-03-16_15-51-54.csv", source: "google_salpetre" },
  { file: "/Users/julien/Downloads/google_fr_traitement-hu_termes-correspondants_2026-03-16_15-52-06.csv", source: "google_traitement" },
  { file: "/Users/julien/Downloads/google_fr_traitement-humidite_termes-connexes_2026-03-16_15-52-12.csv", source: "google_traitement_connexes" },
  { file: "/Users/julien/Downloads/google_fr_humidité-mais_termes-correspondants_2026-03-16_15-52-17.csv", source: "google_humidite_maison" },
  { file: "/Users/julien/Downloads/google_fr_moisissure-mu_termes-correspondants_2026-03-16_15-52-25.csv", source: "google_moisissure" },
];

function readCSV(filePath) {
  let raw = fs.readFileSync(filePath);
  // Handle BOM and UTF-16
  if (raw[0] === 0xff && raw[1] === 0xfe) {
    return raw.toString("utf16le").replace(/^\ufeff/, "");
  }
  return raw.toString("utf8").replace(/^\ufeff/, "");
}

function parseCSVLine(line) {
  const fields = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "\t" && !inQuotes) {
      fields.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current.trim());
  return fields;
}

function parseCompetitorCSV(filePath, source) {
  const content = readCSV(filePath);
  const lines = content.split(/\r?\n/).filter((l) => l.trim());
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]);
  const kwIdx = headers.findIndex((h) => h.toLowerCase().includes("keyword"));
  const volIdx = headers.findIndex((h) => h.toLowerCase() === "volume");
  const kdIdx = headers.findIndex((h) => h.toLowerCase() === "kd");
  const cpcIdx = headers.findIndex((h) => h.toLowerCase() === "cpc");
  const trafficIdx = headers.findIndex((h) => h.toLowerCase().includes("organic traffic"));
  const posIdx = headers.findIndex((h) => h.toLowerCase().includes("current position"));
  const urlIdx = headers.findIndex((h) => h.toLowerCase().includes("current url"));
  const infoIdx = headers.findIndex((h) => h.toLowerCase() === "informational");
  const commIdx = headers.findIndex((h) => h.toLowerCase() === "commercial");
  const transIdx = headers.findIndex((h) => h.toLowerCase() === "transactional");

  const results = [];
  for (let i = 1; i < lines.length; i++) {
    const fields = parseCSVLine(lines[i]);
    if (!fields[kwIdx]) continue;
    results.push({
      keyword: fields[kwIdx]?.toLowerCase().trim(),
      volume: parseInt(fields[volIdx]) || 0,
      kd: parseInt(fields[kdIdx]) || 0,
      cpc: parseFloat(fields[cpcIdx]) || 0,
      traffic: parseInt(fields[trafficIdx]) || 0,
      position: parseInt(fields[posIdx]) || 0,
      url: fields[urlIdx] || "",
      intent: {
        informational: fields[infoIdx] === "true",
        commercial: fields[commIdx] === "true",
        transactional: fields[transIdx] === "true",
      },
      source,
      type: "competitor",
    });
  }
  return results;
}

function parseGoogleCSV(filePath, source) {
  const content = readCSV(filePath);
  const lines = content.split(/\r?\n/).filter((l) => l.trim());
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]);
  const kwIdx = headers.findIndex((h) => h.toLowerCase().includes("keyword"));
  const volIdx = headers.findIndex((h) => h.toLowerCase() === "volume");
  const kdIdx = headers.findIndex((h) => h.toLowerCase().includes("difficulty"));
  const cpcIdx = headers.findIndex((h) => h.toLowerCase() === "cpc");
  const tpIdx = headers.findIndex((h) => h.toLowerCase().includes("traffic potential"));
  const intentIdx = headers.findIndex((h) => h.toLowerCase() === "intents");

  const results = [];
  for (let i = 1; i < lines.length; i++) {
    const fields = parseCSVLine(lines[i]);
    if (!fields[kwIdx]) continue;
    const intentStr = (fields[intentIdx] || "").toLowerCase();
    results.push({
      keyword: fields[kwIdx]?.toLowerCase().trim(),
      volume: parseInt(fields[volIdx]) || 0,
      kd: parseInt(fields[kdIdx]) || 0,
      cpc: parseFloat(fields[cpcIdx]) || 0,
      traffic: parseInt(fields[tpIdx]) || 0,
      position: 0,
      url: "",
      intent: {
        informational: intentStr.includes("informational"),
        commercial: intentStr.includes("commercial"),
        transactional: intentStr.includes("transactional"),
      },
      source,
      type: "google_research",
    });
  }
  return results;
}

// Keyword clustering rules
const clusters = {
  moisissure: ["moisissure", "moisi", "champignon", "fungus", "mold"],
  salpetre: ["salpetre", "salpêtre", "efflorescence", "nitrate"],
  remontee_capillaire: ["remontee capillaire", "remontée capillaire", "capillarite", "capillary"],
  infiltration: ["infiltration", "fuite", "étanchéité", "etancheite", "etanche"],
  condensation: ["condensation", "buee", "buée", "ventilation", "vmc", "vmi", "aeration"],
  humidite_generale: ["humidite", "humidité", "humid", "mur humide", "maison humide"],
  cave_sous_sol: ["cave", "sous-sol", "sous sol", "souterrain", "basement"],
  merule: ["merule", "mérule", "lignivore", "champignon bois"],
  traitement: ["traitement", "solution", "reparer", "réparer", "assechement", "asséchement"],
  diagnostic: ["diagnostic", "expert", "devis", "gratuit", "prix", "cout", "coût", "tarif"],
  injection: ["injection", "resine", "résine", "barriere", "barrière"],
  cuvelage: ["cuvelage", "impermeabilisation", "imperméabilisation"],
  drainage: ["drainage", "drain", "evacuation", "évacuation"],
  odeur: ["odeur", "renfermé", "renferme", "sent"],
  peinture: ["peinture", "cloque", "ecaille", "écaille", "decolle", "décolle"],
  ville: ["paris", "lyon", "marseille", "bordeaux", "nantes", "toulouse", "lille", "strasbourg", "nice", "montpellier", "rennes", "rouen"],
};

function clusterKeyword(kw) {
  for (const [cluster, terms] of Object.entries(clusters)) {
    if (terms.some((t) => kw.includes(t))) {
      return cluster;
    }
  }
  return "autre";
}

// Parse all files
console.log("Parsing competitor CSVs...");
let allKeywords = [];
for (const { file, source } of competitorFiles) {
  const kws = parseCompetitorCSV(file, source);
  console.log(`  ${source}: ${kws.length} keywords`);
  allKeywords.push(...kws);
}

console.log("\nParsing Google research CSVs...");
for (const { file, source } of googleFiles) {
  const kws = parseGoogleCSV(file, source);
  console.log(`  ${source}: ${kws.length} keywords`);
  allKeywords.push(...kws);
}

console.log(`\nTotal raw keywords: ${allKeywords.length}`);

// Deduplicate — keep highest volume version
const kwMap = new Map();
for (const kw of allKeywords) {
  const existing = kwMap.get(kw.keyword);
  if (!existing || kw.volume > existing.volume) {
    const sources = existing ? [...new Set([...existing.sources, kw.source])] : [kw.source];
    kwMap.set(kw.keyword, { ...kw, sources });
  } else {
    existing.sources = [...new Set([...existing.sources, kw.source])];
  }
}

// Convert to array, cluster, and sort
const deduped = [...kwMap.values()].map((kw) => ({
  ...kw,
  cluster: clusterKeyword(kw.keyword),
}));

deduped.sort((a, b) => b.volume - a.volume);

console.log(`Deduplicated: ${deduped.length} unique keywords`);

// Stats by cluster
const clusterStats = {};
for (const kw of deduped) {
  if (!clusterStats[kw.cluster]) clusterStats[kw.cluster] = { count: 0, totalVolume: 0 };
  clusterStats[kw.cluster].count++;
  clusterStats[kw.cluster].totalVolume += kw.volume;
}

console.log("\nClusters:");
Object.entries(clusterStats)
  .sort((a, b) => b[1].totalVolume - a[1].totalVolume)
  .forEach(([c, s]) => console.log(`  ${c}: ${s.count} kws, ${s.totalVolume.toLocaleString()} vol total`));

// Check which keywords we already cover
const existingPages = [
  { url: "/moisissure-mur/", keywords: ["moisissure mur", "moisissure", "moisissure sur les murs"] },
  { url: "/salpetre/", keywords: ["salpetre", "salpetre mur"] },
  { url: "/remontee-capillaire/", keywords: ["remontee capillaire", "remontée capillaire"] },
  { url: "/humidite-maison/", keywords: ["humidite maison", "humidité maison", "infiltration eau"] },
  { url: "/traitement-humidite/", keywords: ["traitement humidite", "traitement humidité"] },
  { url: "/diagnostic-humidite/", keywords: ["diagnostic humidite", "diagnostic humidité"] },
  { url: "/diagnostic-gratuit/", keywords: ["diagnostic gratuit", "devis humidite"] },
  { url: "/moisissure-chambre/", keywords: ["moisissure chambre"] },
  { url: "/moisissure-noire/", keywords: ["moisissure noire"] },
  { url: "/moisissure-plafond/", keywords: ["moisissure plafond"] },
  { url: "/merule/", keywords: ["merule", "mérule"] },
  { url: "/salpetre-cave/", keywords: ["salpetre cave"] },
  { url: "/odeur-humidite/", keywords: ["odeur humidite", "odeur humidité", "odeur moisi"] },
  { url: "/infiltration-eau-mur/", keywords: ["infiltration eau mur"] },
  { url: "/cave-humide/", keywords: ["cave humide"] },
];

const coveredKeywords = new Set();
for (const page of existingPages) {
  for (const kw of page.keywords) coveredKeywords.add(kw);
}

const covered = deduped.filter((kw) => coveredKeywords.has(kw.keyword));
const uncovered = deduped.filter((kw) => !coveredKeywords.has(kw.keyword));

console.log(`\nCoverage: ${covered.length} covered, ${uncovered.length} uncovered`);

// Top uncovered opportunities (high volume, low KD)
const opportunities = uncovered
  .filter((kw) => kw.volume >= 100 && kw.kd <= 30 && !kw.keyword.includes("murprotec") && !kw.keyword.includes("actimur"))
  .sort((a, b) => b.volume - a.volume)
  .slice(0, 50);

console.log(`\nTop 20 uncovered opportunities (vol >= 100, KD <= 30):`);
opportunities.slice(0, 20).forEach((kw, i) =>
  console.log(`  ${i + 1}. "${kw.keyword}" — vol: ${kw.volume}, KD: ${kw.kd}, cluster: ${kw.cluster}`)
);

// Save output
const output = {
  generated: new Date().toISOString(),
  stats: {
    totalRaw: allKeywords.length,
    totalUnique: deduped.length,
    covered: covered.length,
    uncovered: uncovered.length,
    clusters: clusterStats,
  },
  existingPages,
  keywords: deduped,
  opportunities,
};

const outPath = path.join(__dirname, "../src/data/keywords.json");
fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
console.log(`\nSaved to ${outPath} (${(fs.statSync(outPath).size / 1024 / 1024).toFixed(1)} MB)`);
