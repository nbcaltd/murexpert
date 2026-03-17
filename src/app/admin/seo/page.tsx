"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import {
  Search,
  TrendingUp,
  Target,
  CheckCircle2,
  AlertCircle,
  ArrowUpDown,
  Lock,
  Send,
  Filter,
  Zap,
  FileText,
  BarChart3,
  Loader2,
  Calendar,
  Plus,
  Trash2,
  RefreshCw,
} from "lucide-react";

type PlanningItem = {
  id: string;
  keyword: string;
  cluster: string;
  volume: number;
  kd: number;
  status: "planned" | "writing" | "review" | "published";
  priority: "high" | "medium" | "low";
  targetUrl: string;
  type: string;
  notes: string;
  targetDate: string;
  createdAt: string;
};

type Keyword = {
  keyword: string;
  volume: number;
  kd: number;
  cpc: number;
  traffic: number;
  cluster: string;
  sources: string[];
  intent: { informational: boolean; commercial: boolean; transactional: boolean };
};

type KeywordData = {
  generated: string;
  stats: {
    totalRaw: number;
    totalUnique: number;
    covered: number;
    uncovered: number;
    clusters: Record<string, { count: number; totalVolume: number }>;
  };
  existingPages: { url: string; keywords: string[] }[];
  keywords: Keyword[];
  opportunities: Keyword[];
};

const clusterLabels: Record<string, string> = {
  moisissure: "Moisissure",
  salpetre: "Salpetre",
  remontee_capillaire: "Remontee capillaire",
  infiltration: "Infiltration",
  condensation: "Condensation / VMC",
  humidite_generale: "Humidite generale",
  cave_sous_sol: "Cave / Sous-sol",
  merule: "Merule",
  traitement: "Traitement",
  diagnostic: "Diagnostic / Devis",
  injection: "Injection resine",
  cuvelage: "Cuvelage",
  drainage: "Drainage",
  odeur: "Odeur humidite",
  peinture: "Peinture / Degats",
  ville: "Villes",
  autre: "Autre",
};

const clusterColors: Record<string, string> = {
  moisissure: "bg-red-100 text-red-700",
  salpetre: "bg-yellow-100 text-yellow-700",
  remontee_capillaire: "bg-blue-100 text-blue-700",
  infiltration: "bg-cyan-100 text-cyan-700",
  condensation: "bg-purple-100 text-purple-700",
  humidite_generale: "bg-orange-100 text-orange-700",
  cave_sous_sol: "bg-gray-100 text-gray-700",
  merule: "bg-emerald-100 text-emerald-700",
  traitement: "bg-green-100 text-green-700",
  diagnostic: "bg-indigo-100 text-indigo-700",
  injection: "bg-pink-100 text-pink-700",
  cuvelage: "bg-teal-100 text-teal-700",
  drainage: "bg-sky-100 text-sky-700",
  odeur: "bg-amber-100 text-amber-700",
  peinture: "bg-rose-100 text-rose-700",
  ville: "bg-violet-100 text-violet-700",
  autre: "bg-stone-100 text-stone-700",
};

export default function SEODashboard() {
  // Auth state
  const [authed, setAuthed] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [authStep, setAuthStep] = useState<"idle" | "code-sent" | "error">("idle");
  const [authCode, setAuthCode] = useState("");
  const [authError, setAuthError] = useState("");
  const [codeSending, setCodeSending] = useState(false);

  const [data, setData] = useState<KeywordData | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"overview" | "planning" | "keywords" | "opportunities" | "generate">("overview");
  const [planning, setPlanning] = useState<PlanningItem[]>([]);
  const [planningFilter, setPlanningFilter] = useState<"all" | "planned" | "writing" | "review" | "published">("all");
  const [search, setSearch] = useState("");
  const [filterCluster, setFilterCluster] = useState("all");
  const [sortBy, setSortBy] = useState<"volume" | "kd" | "cpc">("volume");
  const [generating, setGenerating] = useState(false);
  const [genKeyword, setGenKeyword] = useState("");
  const [genResult, setGenResult] = useState("");

  // Check existing session on mount
  useEffect(() => {
    const token = localStorage.getItem("seo-session");
    if (!token) { setAuthLoading(false); return; }
    fetch("/api/seo/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "verify-session", token }),
    })
      .then((r) => r.json())
      .then((d) => { if (d.valid) setAuthed(true); })
      .finally(() => setAuthLoading(false));
  }, []);

  // Load data when authed
  useEffect(() => {
    if (!authed) return;
    Promise.all([
      fetch("/api/seo/keywords").then((r) => r.json()),
      fetch("/api/seo/planning").then((r) => r.json()),
    ]).then(([kwData, planData]) => {
      setData(kwData);
      setPlanning(planData);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [authed]);

  async function requestCode() {
    setCodeSending(true);
    setAuthError("");
    try {
      await fetch("/api/seo/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "request-code", userAgent: navigator.userAgent }),
      });
      setAuthStep("code-sent");
    } catch {
      setAuthError("Erreur d'envoi");
    }
    setCodeSending(false);
  }

  async function verifyCode() {
    setAuthError("");
    try {
      const res = await fetch("/api/seo/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "verify-code", code: authCode }),
      });
      const data = await res.json();
      if (data.valid) {
        localStorage.setItem("seo-session", data.token);
        setAuthed(true);
      } else {
        setAuthError(data.error || "Code invalide");
      }
    } catch {
      setAuthError("Erreur de verification");
    }
  }

  async function autoGeneratePlanning() {
    const res = await fetch("/api/seo/planning", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "auto-generate" }),
    });
    const result = await res.json();
    const updated = await fetch("/api/seo/planning").then((r) => r.json());
    setPlanning(updated);
    return result;
  }

  async function updatePlanningStatus(id: string, status: string) {
    await fetch("/api/seo/planning", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "update", id, updates: { status } }),
    });
    setPlanning((prev) => prev.map((p) => p.id === id ? { ...p, status: status as PlanningItem["status"] } : p));
  }

  async function deletePlanningItem(id: string) {
    await fetch("/api/seo/planning", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", id }),
    });
    setPlanning((prev) => prev.filter((p) => p.id !== id));
  }

  const filteredKeywords = useMemo(() => {
    if (!data) return [];
    let kws = data.keywords;
    if (search) kws = kws.filter((k) => k.keyword.includes(search.toLowerCase()));
    if (filterCluster !== "all") kws = kws.filter((k) => k.cluster === filterCluster);
    kws = [...kws].sort((a, b) => {
      if (sortBy === "volume") return b.volume - a.volume;
      if (sortBy === "kd") return a.kd - b.kd;
      return b.cpc - a.cpc;
    });
    return kws.slice(0, 100);
  }, [data, search, filterCluster, sortBy]);

  async function generateContent() {
    if (!genKeyword) return;
    setGenerating(true);
    setGenResult("");
    try {
      const res = await fetch("/api/seo/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: genKeyword }),
      });
      const result = await res.json();
      setGenResult(result.content || result.error || "Erreur");
    } catch {
      setGenResult("Erreur de connexion");
    }
    setGenerating(false);
  }

  // Auth loading
  if (authLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-[#E8952D]" />
      </div>
    );
  }

  // Login screen
  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#E8952D]/10 mb-4">
              <Lock className="h-7 w-7 text-[#E8952D]" />
            </div>
            <h1 className="text-xl font-bold text-[#1A1A1A]">SEO Dashboard</h1>
            <p className="mt-1 text-sm text-[#6B6B6B]">Acces restreint — MurExpert</p>
          </div>

          {authStep === "idle" && (
            <button
              onClick={requestCode}
              disabled={codeSending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#E8952D] px-6 py-3.5 text-sm font-semibold text-white hover:scale-[1.02] transition-transform cursor-pointer disabled:opacity-50"
            >
              {codeSending ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Envoi...</>
              ) : (
                <><Send className="h-4 w-4" /> Recevoir le code sur Discord</>
              )}
            </button>
          )}

          {authStep === "code-sent" && (
            <div className="space-y-4">
              <p className="text-sm text-center text-green-600 font-medium">Code envoye sur Discord !</p>
              <input
                type="text"
                placeholder="Entrez le code a 6 chiffres"
                value={authCode}
                onChange={(e) => setAuthCode(e.target.value)}
                maxLength={6}
                className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-center text-2xl font-bold tracking-[0.3em] focus:border-[#E8952D] focus:outline-none"
                autoFocus
              />
              <button
                onClick={verifyCode}
                disabled={authCode.length !== 6}
                className="w-full rounded-xl bg-[#1A1A1A] px-6 py-3.5 text-sm font-semibold text-white hover:scale-[1.02] transition-transform cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Verifier
              </button>
              <button
                onClick={requestCode}
                className="w-full text-sm text-[#6B6B6B] hover:text-[#E8952D] transition-colors cursor-pointer"
              >
                Renvoyer un code
              </button>
            </div>
          )}

          {authError && (
            <p className="mt-4 text-sm text-center text-red-600 font-medium">{authError}</p>
          )}
        </div>
      </div>
    );
  }

  // Data loading (after auth)
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#E8952D]" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-[#6B6B6B]">Erreur de chargement des donnees</p>
      </div>
    );
  }

  const coveredKws = new Set(data.existingPages.flatMap((p) => p.keywords));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1A1A1A] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-6">
          <h1 className="text-2xl font-bold">SEO Dashboard — MurExpert</h1>
          <p className="mt-1 text-sm text-white/50">
            {data.stats.totalUnique.toLocaleString()} keywords · Genere le {new Date(data.generated).toLocaleDateString("fr-FR")}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex gap-1">
            {[
              { id: "overview", label: "Vue d'ensemble", icon: BarChart3 },
              { id: "planning", label: "Planning", icon: Calendar },
              { id: "keywords", label: "Keywords", icon: Search },
              { id: "opportunities", label: "Opportunites", icon: Target },
              { id: "generate", label: "Generer contenu", icon: Zap },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id as typeof tab)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
                  tab === t.id
                    ? "border-[#E8952D] text-[#E8952D]"
                    : "border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]"
                }`}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-8">
        {/* ═══ OVERVIEW ═══ */}
        {tab === "overview" && (
          <div className="space-y-8">
            {/* Stat cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Keywords uniques", value: data.stats.totalUnique.toLocaleString(), icon: Search, color: "text-blue-600" },
                { label: "Keywords couverts", value: data.stats.covered.toString(), icon: CheckCircle2, color: "text-green-600" },
                { label: "Non couverts", value: data.stats.uncovered.toLocaleString(), icon: AlertCircle, color: "text-red-600" },
                { label: "Opportunites", value: data.opportunities.length.toString(), icon: TrendingUp, color: "text-[#E8952D]" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-[#6B6B6B]">{s.label}</p>
                    <s.icon className={`h-5 w-5 ${s.color}`} />
                  </div>
                  <p className="mt-2 text-3xl font-bold text-[#1A1A1A]">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Clusters */}
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-[#1A1A1A] mb-4">Clusters de mots-cles</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(data.stats.clusters)
                  .sort((a, b) => b[1].totalVolume - a[1].totalVolume)
                  .map(([cluster, stats]) => (
                    <button
                      key={cluster}
                      onClick={() => { setFilterCluster(cluster); setTab("keywords"); }}
                      className="flex items-center justify-between rounded-lg border border-gray-100 p-4 hover:border-[#E8952D] hover:shadow-sm transition-all cursor-pointer text-left"
                    >
                      <div>
                        <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${clusterColors[cluster] || "bg-gray-100 text-gray-700"}`}>
                          {clusterLabels[cluster] || cluster}
                        </span>
                        <p className="mt-1.5 text-xs text-[#6B6B6B]">{stats.count} keywords</p>
                      </div>
                      <p className="text-lg font-bold text-[#1A1A1A]">{stats.totalVolume.toLocaleString()}</p>
                    </button>
                  ))}
              </div>
            </div>

            {/* Existing pages */}
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-[#1A1A1A] mb-4">Pages existantes</h2>
              <div className="space-y-2">
                {data.existingPages.map((p) => (
                  <div key={p.url} className="flex items-center gap-3 rounded-lg bg-green-50 px-4 py-2.5">
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                    <span className="text-sm font-medium text-[#1A1A1A]">{p.url}</span>
                    <span className="text-xs text-[#6B6B6B]">→ {p.keywords.join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══ PLANNING ═══ */}
        {tab === "planning" && (
          <div className="space-y-6">
            {/* Stats row */}
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
              {[
                { label: "Planifies", count: planning.filter((p) => p.status === "planned").length, color: "bg-blue-100 text-blue-700" },
                { label: "En redaction", count: planning.filter((p) => p.status === "writing").length, color: "bg-yellow-100 text-yellow-700" },
                { label: "En relecture", count: planning.filter((p) => p.status === "review").length, color: "bg-purple-100 text-purple-700" },
                { label: "Publies", count: planning.filter((p) => p.status === "published").length, color: "bg-green-100 text-green-700" },
              ].map((s) => (
                <button
                  key={s.label}
                  onClick={() => setPlanningFilter(s.label === "Planifies" ? "planned" : s.label === "En redaction" ? "writing" : s.label === "En relecture" ? "review" : "published")}
                  className={`rounded-xl p-4 text-center cursor-pointer border-2 transition-all ${
                    planningFilter === (s.label === "Planifies" ? "planned" : s.label === "En redaction" ? "writing" : s.label === "En relecture" ? "review" : "published")
                      ? "border-[#E8952D]" : "border-transparent"
                  } ${s.color}`}
                >
                  <p className="text-3xl font-bold">{s.count}</p>
                  <p className="text-xs font-medium mt-1">{s.label}</p>
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {planning.length === 0 && (
                <button
                  onClick={async () => { await autoGeneratePlanning(); }}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8952D] px-5 py-2.5 text-sm font-semibold text-white hover:scale-105 transition-transform cursor-pointer"
                >
                  <Zap className="h-4 w-4" /> Generer le planning automatiquement
                </button>
              )}
              {planning.length > 0 && (
                <button
                  onClick={() => setPlanningFilter("all")}
                  className={`rounded-lg px-4 py-2 text-sm font-medium cursor-pointer transition-colors ${
                    planningFilter === "all" ? "bg-[#1A1A1A] text-white" : "bg-white text-[#6B6B6B] border border-gray-200 hover:border-[#E8952D]"
                  }`}
                >
                  Tout ({planning.length})
                </button>
              )}
            </div>

            {/* Volume objectives */}
            {planning.length > 0 && (
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-[#1A1A1A] mb-4">Objectifs de volume par cluster</h3>
                <div className="space-y-3">
                  {Object.entries(
                    planning.reduce((acc, p) => {
                      if (!acc[p.cluster]) acc[p.cluster] = { total: 0, published: 0, volume: 0 };
                      acc[p.cluster].total++;
                      acc[p.cluster].volume += p.volume;
                      if (p.status === "published") acc[p.cluster].published++;
                      return acc;
                    }, {} as Record<string, { total: number; published: number; volume: number }>)
                  )
                    .sort((a, b) => b[1].volume - a[1].volume)
                    .map(([cluster, stats]) => (
                      <div key={cluster} className="flex items-center gap-4">
                        <span className={`inline-block w-36 rounded-full px-2.5 py-0.5 text-xs font-medium text-center ${clusterColors[cluster] || "bg-gray-100 text-gray-700"}`}>
                          {clusterLabels[cluster] || cluster}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-[#6B6B6B]">{stats.published}/{stats.total} articles</span>
                            <span className="text-xs font-medium text-[#1A1A1A]">{stats.volume.toLocaleString()} vol. cible</span>
                          </div>
                          <div className="h-2 rounded-full bg-gray-100">
                            <div
                              className="h-2 rounded-full bg-[#E8952D] transition-all"
                              style={{ width: `${stats.total > 0 ? (stats.published / stats.total) * 100 : 0}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Planning table */}
            {planning.length > 0 && (
              <div className="overflow-x-auto rounded-xl bg-white shadow-sm border border-gray-100">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Mot-cle cible</th>
                      <th className="px-4 py-3 font-semibold">Cluster</th>
                      <th className="px-4 py-3 font-semibold text-right">Volume</th>
                      <th className="px-4 py-3 font-semibold text-right">KD</th>
                      <th className="px-4 py-3 font-semibold">Priorite</th>
                      <th className="px-4 py-3 font-semibold">Date cible</th>
                      <th className="px-4 py-3 font-semibold">Statut</th>
                      <th className="px-4 py-3 font-semibold">URL cible</th>
                      <th className="px-4 py-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planning
                      .filter((p) => planningFilter === "all" || p.status === planningFilter)
                      .sort((a, b) => {
                        const priorityOrder = { high: 0, medium: 1, low: 2 };
                        return priorityOrder[a.priority] - priorityOrder[b.priority] || b.volume - a.volume;
                      })
                      .map((item) => (
                        <tr key={item.id} className="border-t border-gray-50 hover:bg-gray-50">
                          <td className="px-4 py-2.5 font-medium text-[#1A1A1A]">{item.keyword}</td>
                          <td className="px-4 py-2.5">
                            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${clusterColors[item.cluster] || "bg-gray-100 text-gray-700"}`}>
                              {clusterLabels[item.cluster] || item.cluster}
                            </span>
                          </td>
                          <td className="px-4 py-2.5 text-right font-mono">{item.volume.toLocaleString()}</td>
                          <td className="px-4 py-2.5 text-right">
                            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                              item.kd <= 10 ? "bg-green-100 text-green-700" :
                              item.kd <= 30 ? "bg-yellow-100 text-yellow-700" :
                              "bg-red-100 text-red-700"
                            }`}>{item.kd}</span>
                          </td>
                          <td className="px-4 py-2.5">
                            <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                              item.priority === "high" ? "bg-red-100 text-red-700" :
                              item.priority === "medium" ? "bg-yellow-100 text-yellow-700" :
                              "bg-gray-100 text-gray-600"
                            }`}>
                              {item.priority === "high" ? "Haute" : item.priority === "medium" ? "Moyenne" : "Basse"}
                            </span>
                          </td>
                          <td className="px-4 py-2.5 text-xs text-[#6B6B6B]">
                            {item.targetDate ? new Date(item.targetDate).toLocaleDateString("fr-FR") : "—"}
                          </td>
                          <td className="px-4 py-2.5">
                            <select
                              value={item.status}
                              onChange={(e) => updatePlanningStatus(item.id, e.target.value)}
                              className={`rounded-lg px-2 py-1 text-xs font-medium cursor-pointer border-0 ${
                                item.status === "planned" ? "bg-blue-100 text-blue-700" :
                                item.status === "writing" ? "bg-yellow-100 text-yellow-700" :
                                item.status === "review" ? "bg-purple-100 text-purple-700" :
                                "bg-green-100 text-green-700"
                              }`}
                            >
                              <option value="planned">Planifie</option>
                              <option value="writing">En redaction</option>
                              <option value="review">En relecture</option>
                              <option value="published">Publie</option>
                            </select>
                          </td>
                          <td className="px-4 py-2.5 text-xs text-[#6B6B6B] font-mono">{item.targetUrl}</td>
                          <td className="px-4 py-2.5">
                            <div className="flex gap-1">
                              <button
                                onClick={() => { setGenKeyword(item.keyword); setTab("generate"); }}
                                className="rounded-lg bg-[#E8952D] p-1.5 text-white hover:scale-110 transition-transform cursor-pointer"
                                title="Generer le contenu"
                              >
                                <Zap className="h-3.5 w-3.5" />
                              </button>
                              <button
                                onClick={() => deletePlanningItem(item.id)}
                                className="rounded-lg bg-red-100 p-1.5 text-red-600 hover:scale-110 transition-transform cursor-pointer"
                                title="Supprimer"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}

            {planning.length === 0 && (
              <div className="rounded-xl bg-white p-12 shadow-sm border border-gray-100 text-center">
                <Calendar className="mx-auto h-12 w-12 text-[#6B6B6B]/30" />
                <h3 className="mt-4 text-lg font-bold text-[#1A1A1A]">Aucun planning</h3>
                <p className="mt-2 text-sm text-[#6B6B6B]">
                  Cliquez sur &quot;Generer le planning automatiquement&quot; pour creer un calendrier editorial
                  base sur les meilleures opportunites de mots-cles.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ═══ KEYWORDS TABLE ═══ */}
        {tab === "keywords" && (
          <div className="space-y-4">
            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B6B6B]" />
                <input
                  type="text"
                  placeholder="Rechercher un mot-cle..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 py-2.5 text-sm focus:border-[#E8952D] focus:outline-none"
                />
              </div>
              <select
                value={filterCluster}
                onChange={(e) => setFilterCluster(e.target.value)}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm cursor-pointer focus:border-[#E8952D] focus:outline-none"
              >
                <option value="all">Tous les clusters</option>
                {Object.entries(clusterLabels).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm cursor-pointer focus:border-[#E8952D] focus:outline-none"
              >
                <option value="volume">Volume (desc)</option>
                <option value="kd">Difficulte (asc)</option>
                <option value="cpc">CPC (desc)</option>
              </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl bg-white shadow-sm border border-gray-100">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-[#1A1A1A]">Keyword</th>
                    <th className="px-4 py-3 font-semibold text-[#1A1A1A] text-right">Volume</th>
                    <th className="px-4 py-3 font-semibold text-[#1A1A1A] text-right">KD</th>
                    <th className="px-4 py-3 font-semibold text-[#1A1A1A] text-right">CPC</th>
                    <th className="px-4 py-3 font-semibold text-[#1A1A1A]">Cluster</th>
                    <th className="px-4 py-3 font-semibold text-[#1A1A1A]">Statut</th>
                    <th className="px-4 py-3 font-semibold text-[#1A1A1A]">Intent</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredKeywords.map((kw, i) => (
                    <tr key={kw.keyword + i} className="border-t border-gray-50 hover:bg-gray-50">
                      <td className="px-4 py-2.5 font-medium text-[#1A1A1A]">{kw.keyword}</td>
                      <td className="px-4 py-2.5 text-right font-mono">{kw.volume.toLocaleString()}</td>
                      <td className="px-4 py-2.5 text-right">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                          kw.kd <= 10 ? "bg-green-100 text-green-700" :
                          kw.kd <= 30 ? "bg-yellow-100 text-yellow-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {kw.kd}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono text-[#6B6B6B]">{kw.cpc.toFixed(2)}€</td>
                      <td className="px-4 py-2.5">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${clusterColors[kw.cluster] || "bg-gray-100 text-gray-700"}`}>
                          {clusterLabels[kw.cluster] || kw.cluster}
                        </span>
                      </td>
                      <td className="px-4 py-2.5">
                        {coveredKws.has(kw.keyword) ? (
                          <span className="text-green-600 text-xs font-medium">Couvert</span>
                        ) : (
                          <span className="text-red-500 text-xs font-medium">Manquant</span>
                        )}
                      </td>
                      <td className="px-4 py-2.5 text-xs text-[#6B6B6B]">
                        {kw.intent.transactional && "💰 "}
                        {kw.intent.commercial && "🛒 "}
                        {kw.intent.informational && "ℹ️"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-4 py-3 text-xs text-[#6B6B6B] bg-gray-50">
                Affichage des 100 premiers resultats sur {data.keywords.filter(k =>
                  (!search || k.keyword.includes(search.toLowerCase())) &&
                  (filterCluster === "all" || k.cluster === filterCluster)
                ).length}
              </div>
            </div>
          </div>
        )}

        {/* ═══ OPPORTUNITIES ═══ */}
        {tab === "opportunities" && (
          <div className="space-y-4">
            <div className="rounded-xl bg-[#E8952D]/5 border border-[#E8952D]/20 p-4">
              <p className="text-sm text-[#1A1A1A]">
                <strong>{data.opportunities.length} opportunites</strong> identifiees : volume &ge; 100, difficulte &le; 30, hors marques concurrentes.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl bg-white shadow-sm border border-gray-100">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left">
                  <tr>
                    <th className="px-4 py-3 font-semibold">#</th>
                    <th className="px-4 py-3 font-semibold">Keyword</th>
                    <th className="px-4 py-3 font-semibold text-right">Volume</th>
                    <th className="px-4 py-3 font-semibold text-right">KD</th>
                    <th className="px-4 py-3 font-semibold text-right">CPC</th>
                    <th className="px-4 py-3 font-semibold">Cluster</th>
                    <th className="px-4 py-3 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.opportunities.map((kw, i) => (
                    <tr key={kw.keyword} className="border-t border-gray-50 hover:bg-gray-50">
                      <td className="px-4 py-2.5 text-[#6B6B6B]">{i + 1}</td>
                      <td className="px-4 py-2.5 font-medium text-[#1A1A1A]">{kw.keyword}</td>
                      <td className="px-4 py-2.5 text-right font-mono">{kw.volume.toLocaleString()}</td>
                      <td className="px-4 py-2.5 text-right">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                          kw.kd <= 10 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {kw.kd}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono text-[#6B6B6B]">{kw.cpc.toFixed(2)}€</td>
                      <td className="px-4 py-2.5">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${clusterColors[kw.cluster] || "bg-gray-100 text-gray-700"}`}>
                          {clusterLabels[kw.cluster] || kw.cluster}
                        </span>
                      </td>
                      <td className="px-4 py-2.5">
                        <button
                          onClick={() => { setGenKeyword(kw.keyword); setTab("generate"); }}
                          className="inline-flex items-center gap-1 rounded-lg bg-[#E8952D] px-3 py-1.5 text-xs font-medium text-white hover:scale-105 transition-transform cursor-pointer"
                        >
                          <Zap className="h-3 w-3" /> Generer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ═══ GENERATE CONTENT ═══ */}
        {tab === "generate" && (
          <div className="space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-[#1A1A1A] mb-4">Generer un article SEO</h2>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Mot-cle cible (ex: peinture anti humidité)"
                  value={genKeyword}
                  onChange={(e) => setGenKeyword(e.target.value)}
                  className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:border-[#E8952D] focus:outline-none"
                />
                <button
                  onClick={generateContent}
                  disabled={generating || !genKeyword}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8952D] px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {generating ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Generation...</>
                  ) : (
                    <><Zap className="h-4 w-4" /> Generer avec Claude</>
                  )}
                </button>
              </div>
            </div>

            {genResult && (
              <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#1A1A1A]">Contenu genere</h3>
                  <button
                    onClick={() => navigator.clipboard.writeText(genResult)}
                    className="text-xs text-[#E8952D] font-medium hover:underline cursor-pointer"
                  >
                    Copier
                  </button>
                </div>
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap text-sm text-[#1A1A1A] font-sans leading-relaxed bg-gray-50 p-4 rounded-lg overflow-auto max-h-[600px]">
                    {genResult}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
