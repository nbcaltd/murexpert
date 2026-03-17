import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const PLANNING_FILE = path.join(process.cwd(), "src/data/planning.json");

function readPlanning() {
  try {
    return JSON.parse(fs.readFileSync(PLANNING_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function writePlanning(data: unknown) {
  fs.writeFileSync(PLANNING_FILE, JSON.stringify(data, null, 2));
}

export async function GET() {
  return NextResponse.json(readPlanning());
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const planning = readPlanning();

  if (body.action === "add") {
    const item = {
      id: Date.now().toString(),
      keyword: body.keyword,
      cluster: body.cluster || "autre",
      volume: body.volume || 0,
      kd: body.kd || 0,
      status: "planned", // planned | writing | review | published
      priority: body.priority || "medium", // high | medium | low
      targetUrl: body.targetUrl || "",
      type: body.type || "article", // article | page_ville | landing
      notes: body.notes || "",
      targetDate: body.targetDate || "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    planning.push(item);
    writePlanning(planning);
    return NextResponse.json(item);
  }

  if (body.action === "update") {
    const idx = planning.findIndex((p: { id: string }) => p.id === body.id);
    if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
    planning[idx] = { ...planning[idx], ...body.updates, updatedAt: new Date().toISOString() };
    writePlanning(planning);
    return NextResponse.json(planning[idx]);
  }

  if (body.action === "delete") {
    const filtered = planning.filter((p: { id: string }) => p.id !== body.id);
    writePlanning(filtered);
    return NextResponse.json({ ok: true });
  }

  if (body.action === "auto-generate") {
    // Auto-generate planning from top opportunities
    const keywordData = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src/data/keywords.json"), "utf-8"));
    const opportunities = keywordData.opportunities || [];
    const existingKeywords = new Set(planning.map((p: { keyword: string }) => p.keyword));

    const priorityClusters = [
      "humidite_generale", "moisissure", "salpetre", "remontee_capillaire",
      "condensation", "infiltration", "cave_sous_sol", "traitement",
      "diagnostic", "injection", "cuvelage", "drainage", "odeur", "merule",
    ];

    let added = 0;
    const today = new Date();

    for (const opp of opportunities) {
      if (existingKeywords.has(opp.keyword)) continue;
      if (opp.cluster === "autre" || opp.cluster === "peinture") continue;

      const weekOffset = Math.floor(added / 3); // 3 articles per week
      const targetDate = new Date(today);
      targetDate.setDate(targetDate.getDate() + weekOffset * 7);

      const priority =
        opp.volume >= 5000 ? "high" :
        opp.volume >= 1000 ? "medium" : "low";

      const item = {
        id: Date.now().toString() + added,
        keyword: opp.keyword,
        cluster: opp.cluster,
        volume: opp.volume,
        kd: opp.kd,
        status: "planned",
        priority,
        targetUrl: `/${opp.keyword.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}/`,
        type: priorityClusters.includes(opp.cluster) ? "article" : "article",
        notes: "",
        targetDate: targetDate.toISOString().split("T")[0],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      planning.push(item);
      existingKeywords.add(opp.keyword);
      added++;
      if (added >= 30) break; // Max 30 items auto-generated
    }

    writePlanning(planning);
    return NextResponse.json({ added, total: planning.length });
  }

  return NextResponse.json({ error: "Action inconnue" }, { status: 400 });
}
