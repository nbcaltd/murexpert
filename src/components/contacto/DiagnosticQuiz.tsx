"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  Shield,
  Clock,
} from "lucide-react";

const FORM_ENDPOINT = "/api/contact";

// Step 1 — Problem type
const problems = [
  {
    value: "moisissure",
    label: "Moisissure",
    desc: "Taches noires, champignons",
    image: "/images/moisissure.jpg",
  },
  {
    value: "salpetre",
    label: "Salpetre",
    desc: "Depots blanchatres sur les murs",
    image: "/images/salpetre.jpg",
  },
  {
    value: "remontee-capillaire",
    label: "Remontee capillaire",
    desc: "Humidite en bas des murs",
    image: "/images/remontee-capillaire.jpg",
  },
  {
    value: "infiltration",
    label: "Infiltration d'eau",
    desc: "Taches au plafond ou murs",
    image: "/images/infiltration.jpg",
  },
  {
    value: "condensation",
    label: "Condensation",
    desc: "Buee sur les fenetres",
    image: "/images/condensation.jpg",
  },
  {
    value: "autre",
    label: "Je ne sais pas",
    desc: "Un expert identifiera le probleme",
    image: null,
  },
];

// Step 2 — Location
const locations = [
  { value: "chambre", label: "Chambre", icon: "🛏️" },
  { value: "salon", label: "Salon", icon: "🛋️" },
  { value: "salle-de-bain", label: "Salle de bain", icon: "🚿" },
  { value: "cuisine", label: "Cuisine", icon: "🍳" },
  { value: "cave", label: "Cave / Sous-sol", icon: "🏚️" },
  { value: "garage", label: "Garage", icon: "🚗" },
  { value: "exterieur", label: "Murs exterieurs", icon: "🏠" },
  { value: "plusieurs", label: "Plusieurs pieces", icon: "📐" },
];

// Step 3 — Duration
const durations = [
  { value: "recent", label: "Moins de 3 mois", desc: "C'est recent" },
  { value: "moyen", label: "3 a 12 mois", desc: "Ca dure depuis un moment" },
  { value: "ancien", label: "Plus d'un an", desc: "Probleme installe" },
  { value: "inconnu", label: "Je ne sais pas", desc: "Difficile a dire" },
];

// Step 4 — Property type
const propertyTypes = [
  { value: "maison", label: "Maison", icon: "🏡" },
  { value: "appartement", label: "Appartement", icon: "🏢" },
  { value: "immeuble", label: "Immeuble", icon: "🏗️" },
  { value: "local-pro", label: "Local professionnel", icon: "🏭" },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function DiagnosticQuiz() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    problemType: "",
    location: [] as string[],
    duration: "",
    propertyType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    description: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  function select(key: string, value: string) {
    if (key === "location") {
      // Multi-select for location — no auto-advance
      setData((prev) => {
        const current = prev.location as string[];
        const updated = current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value];
        return { ...prev, location: updated as never };
      });
      return;
    }
    setData((prev) => ({ ...prev, [key]: value }));
    // Auto-advance for single-select steps, but never past step 4 (contact form)
    const nextStep = step + 1;
    if (nextStep <= 4) {
      setTimeout(() => setStep(nextStep), 300);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const body = await res.json().catch(() => null);
        setErrorMessage(body?.error ?? "Erreur lors de l'envoi. Veuillez reessayer.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Impossible de se connecter au serveur. Verifiez votre connexion.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-[1.5rem] bg-beige-100 px-8 py-20 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E8952D]/10">
          <CheckCircle2 className="h-10 w-10 text-[#E8952D]" />
        </div>
        <h3
          className="mt-6 text-2xl text-[#1A1A1A] sm:text-3xl"
          style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
        >
          Demande envoyee !
        </h3>
        <p className="mt-3 max-w-md text-base text-[#6B6B6B]">
          Merci ! Notre equipe analyse votre situation et vous recontactera sous 24 heures
          pour planifier votre diagnostic gratuit.
        </p>
        <div className="mt-8 flex items-center gap-3 text-sm text-[#6B6B6B]">
          <Shield className="h-4 w-4 text-[#E8952D]" />
          100% gratuit et sans engagement
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-[0.9375rem] border border-beige-200 bg-white px-5 py-3.5 text-[0.9375rem] text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 transition-colors focus:border-[#E8952D] focus:outline-none";

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-[#1A1A1A]">
            Etape {step + 1} sur {totalSteps}
          </span>
          <span className="text-sm text-[#6B6B6B]">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 rounded-full bg-beige-200">
          <div
            className="h-2 rounded-full bg-[#E8952D] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step 0: Problem type */}
      {step === 0 && (
        <div>
          <h2
            className="text-xl text-[#1A1A1A] sm:text-2xl mb-2"
            style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
          >
            Quel probleme constatez-vous ?
          </h2>
          <p className="text-sm text-[#6B6B6B] mb-6">Selectionnez le probleme qui correspond le mieux a votre situation.</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <button
                key={p.value}
                onClick={() => select("problemType", p.value)}
                className={`group cursor-pointer overflow-hidden rounded-xl border-2 text-left transition-all hover:border-[#E8952D] hover:shadow-md ${
                  data.problemType === p.value ? "border-[#E8952D] shadow-md" : "border-gray-100"
                }`}
              >
                {p.image ? (
                  <div className="h-28 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.label}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-28 items-center justify-center bg-beige-100">
                    <span className="text-3xl">❓</span>
                  </div>
                )}
                <div className="p-3">
                  <p className="text-sm font-semibold text-[#1A1A1A]">{p.label}</p>
                  <p className="text-xs text-[#6B6B6B]">{p.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Location (multi-select) */}
      {step === 1 && (
        <div>
          <h2
            className="text-xl text-[#1A1A1A] sm:text-2xl mb-2"
            style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
          >
            Ou se situe le probleme ?
          </h2>
          <p className="text-sm text-[#6B6B6B] mb-6">Selectionnez une ou plusieurs pieces concernees.</p>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
            {locations.map((l) => (
              <button
                key={l.value}
                onClick={() => select("location", l.value)}
                className={`cursor-pointer rounded-xl border-2 p-5 text-center transition-all hover:border-[#E8952D] hover:shadow-md ${
                  (data.location as unknown as string[]).includes(l.value) ? "border-[#E8952D] shadow-md bg-[#E8952D]/5" : "border-gray-100"
                }`}
              >
                <span className="text-2xl">{l.icon}</span>
                <p className="mt-2 text-sm font-medium text-[#1A1A1A]">{l.label}</p>
                {(data.location as unknown as string[]).includes(l.value) && (
                  <CheckCircle2 className="mx-auto mt-1.5 h-4 w-4 text-[#E8952D]" />
                )}
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={(data.location as unknown as string[]).length === 0}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E8952D] px-7 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            Continuer <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Step 2: Duration */}
      {step === 2 && (
        <div>
          <h2
            className="text-xl text-[#1A1A1A] sm:text-2xl mb-2"
            style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
          >
            Depuis combien de temps ?
          </h2>
          <p className="text-sm text-[#6B6B6B] mb-6">Estimez la duree du probleme.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {durations.map((d) => (
              <button
                key={d.value}
                onClick={() => select("duration", d.value)}
                className={`cursor-pointer rounded-xl border-2 p-5 text-left transition-all hover:border-[#E8952D] hover:shadow-md ${
                  data.duration === d.value ? "border-[#E8952D] shadow-md bg-[#E8952D]/5" : "border-gray-100"
                }`}
              >
                <p className="text-base font-semibold text-[#1A1A1A]">{d.label}</p>
                <p className="mt-1 text-sm text-[#6B6B6B]">{d.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Property type */}
      {step === 3 && (
        <div>
          <h2
            className="text-xl text-[#1A1A1A] sm:text-2xl mb-2"
            style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
          >
            Quel type de bien ?
          </h2>
          <p className="text-sm text-[#6B6B6B] mb-6">Selectionnez le type de logement concerne.</p>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
            {propertyTypes.map((p) => (
              <button
                key={p.value}
                onClick={() => select("propertyType", p.value)}
                className={`cursor-pointer rounded-xl border-2 p-5 text-center transition-all hover:border-[#E8952D] hover:shadow-md ${
                  data.propertyType === p.value ? "border-[#E8952D] shadow-md bg-[#E8952D]/5" : "border-gray-100"
                }`}
              >
                <span className="text-2xl">{p.icon}</span>
                <p className="mt-2 text-sm font-medium text-[#1A1A1A]">{p.label}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Contact info */}
      {step === 4 && (
        <div>
          <h2
            className="text-xl text-[#1A1A1A] sm:text-2xl mb-2"
            style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
          >
            Vos coordonnees
          </h2>
          <p className="text-sm text-[#6B6B6B] mb-6">Pour que notre expert puisse vous recontacter rapidement.</p>

          {status === "error" && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
              <p>{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="quiz-lastName" className="mb-1.5 block text-sm font-semibold text-[#1A1A1A]">Nom</label>
                <input
                  type="text" id="quiz-lastName" required placeholder="Votre nom"
                  value={data.lastName} onChange={(e) => setData((d) => ({ ...d, lastName: e.target.value }))}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="quiz-firstName" className="mb-1.5 block text-sm font-semibold text-[#1A1A1A]">Prenom</label>
                <input
                  type="text" id="quiz-firstName" required placeholder="Votre prenom"
                  value={data.firstName} onChange={(e) => setData((d) => ({ ...d, firstName: e.target.value }))}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="quiz-phone" className="mb-1.5 block text-sm font-semibold text-[#1A1A1A]">Telephone</label>
                <input
                  type="tel" id="quiz-phone" required placeholder="06 XX XX XX XX"
                  value={data.phone} onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="quiz-email" className="mb-1.5 block text-sm font-semibold text-[#1A1A1A]">Email</label>
                <input
                  type="email" id="quiz-email" required placeholder="votre@email.fr"
                  value={data.email} onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="quiz-city" className="mb-1.5 block text-sm font-semibold text-[#1A1A1A]">Ville / Code postal</label>
              <input
                type="text" id="quiz-city" required placeholder="Votre ville"
                value={data.city} onChange={(e) => setData((d) => ({ ...d, city: e.target.value }))}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="quiz-description" className="mb-1.5 block text-sm font-semibold text-[#1A1A1A]">
                Description <span className="font-normal text-[#6B6B6B]">(optionnel)</span>
              </label>
              <textarea
                id="quiz-description" rows={3} placeholder="Precisez votre probleme si besoin..."
                value={data.description} onChange={(e) => setData((d) => ({ ...d, description: e.target.value }))}
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="quiz-privacy" required className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-beige-200 accent-[#E8952D]" />
              <label htmlFor="quiz-privacy" className="text-xs leading-relaxed text-[#6B6B6B] cursor-pointer">
                J&apos;accepte la{" "}
                <a href="/politique-de-confidentialite/" className="underline text-[#E8952D]">politique de confidentialite</a>.
                Je consens au traitement de mes donnees conformement au RGPD.
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#E8952D] px-8 py-4 text-[0.9375rem] font-semibold text-white transition-transform duration-300 hover:scale-[1.02] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "submitting" ? (
                <>Envoi en cours... <Loader2 className="h-4 w-4 animate-spin" /></>
              ) : (
                <>Recevoir mon diagnostic gratuit <ArrowRight className="h-4 w-4" /></>
              )}
            </button>

            <div className="flex items-center justify-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
                <Shield className="h-3.5 w-3.5 text-[#E8952D]" /> 100% gratuit
              </div>
              <div className="flex items-center gap-2 text-xs text-[#6B6B6B]">
                <Clock className="h-3.5 w-3.5 text-[#E8952D]" /> Reponse sous 24h
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Back button */}
      {step > 0 && step < 5 && (
        <button
          onClick={() => setStep((s) => s - 1)}
          className="mt-6 inline-flex items-center gap-2 text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Etape precedente
        </button>
      )}

      {/* Phone CTA */}
      {step < 4 && (
        <div className="mt-8 rounded-xl bg-beige-50 p-5 flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8952D]/10">
            <Phone className="h-5 w-5 text-[#E8952D]" />
          </div>
          <div>
            <p className="text-sm text-[#6B6B6B]">Vous preferez en parler de vive voix ?</p>
            <a href="tel:+33745881675" className="text-base font-semibold text-[#E8952D]">07 45 88 16 75</a>
          </div>
        </div>
      )}
    </div>
  );
}
