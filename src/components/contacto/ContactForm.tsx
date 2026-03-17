"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const FORM_ENDPOINT = "/api/contact";

const problemTypes = [
  { value: "moisissure", label: "Moisissure" },
  { value: "salpetre", label: "Salpetre" },
  { value: "remontee-capillaire", label: "Remontee capillaire" },
  { value: "infiltration", label: "Infiltration d'eau" },
  { value: "condensation", label: "Condensation" },
  { value: "humidite-cave", label: "Humidite en cave/sous-sol" },
  { value: "autre", label: "Autre" },
];

const sources = [
  { value: "google", label: "Google" },
  { value: "recommandation", label: "Recommandation" },
  { value: "reseaux-sociaux", label: "Reseaux sociaux" },
  { value: "autre", label: "Autre" },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      city: fd.get("city"),
      problemType: fd.get("problemType"),
      description: fd.get("description"),
      source: fd.get("source"),
    };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => null);
        setErrorMessage(
          body?.error ?? "Erreur lors de l'envoi. Veuillez reessayer."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Impossible de se connecter au serveur. Verifiez votre connexion et reessayez."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-[1.5rem] bg-beige-100 px-8 py-20 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8952D]/10">
          <CheckCircle2 className="h-8 w-8 text-[#E8952D]" />
        </div>
        <h3
          className="mt-6 text-2xl text-[#1A1A1A]"
          style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
        >
          Demande envoyee
        </h3>
        <p className="mt-3 max-w-sm text-base text-[#6B6B6B]">
          Merci pour votre demande. Notre equipe d&apos;experts analysera votre
          situation et vous recontactera sous 24 heures pour planifier votre
          diagnostic gratuit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error banner */}
      {status === "error" && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Nom + Prenom row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            placeholder="Votre nom"
            className="w-full rounded-[0.9375rem] border border-beige-200 bg-white px-5 py-3.5 text-[0.9375rem] text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 transition-colors focus:border-[#E8952D] focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Prenom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            placeholder="Votre prenom"
            className="w-full rounded-[0.9375rem] border border-beige-200 bg-white px-5 py-3.5 text-[0.9375rem] text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 transition-colors focus:border-[#E8952D] focus:outline-none"
          />
        </div>
      </div>

      {/* Email + Telephone row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="votre@email.fr"
            className="w-full rounded-[0.9375rem] border border-beige-200 bg-white px-5 py-3.5 text-[0.9375rem] text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 transition-colors focus:border-[#E8952D] focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Telephone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="06 XX XX XX XX"
            className="w-full rounded-[0.9375rem] border border-beige-200 bg-white px-5 py-3.5 text-[0.9375rem] text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 transition-colors focus:border-[#E8952D] focus:outline-none"
          />
        </div>
      </div>

      {/* Ville */}
      <div>
        <label htmlFor="city" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
          Adresse / Ville
        </label>
        <input
          type="text"
          id="city"
          name="city"
          required
          placeholder="Votre ville ou code postal"
          className="w-full rounded-[0.9375rem] border border-beige-200 bg-white px-5 py-3.5 text-[0.9375rem] text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 transition-colors focus:border-[#E8952D] focus:outline-none"
        />
      </div>

      {/* Type de probleme */}
      <div>
        <label htmlFor="problemType" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
          Type de probleme
        </label>
        <select
          id="problemType"
          name="problemType"
          required
          className="w-full cursor-pointer rounded-[0.9375rem] border border-beige-200 bg-white px-5 py-3.5 text-[0.9375rem] text-[#1A1A1A] transition-colors focus:border-[#E8952D] focus:outline-none"
        >
          <option value="">Selectionnez le type de probleme</option>
          {problemTypes.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
          Description du probleme
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Decrivez votre probleme d'humidite : localisation, anciennete, surface concernee..."
          className="w-full resize-none rounded-[0.9375rem] border border-beige-200 bg-white px-5 py-3.5 text-[0.9375rem] text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 transition-colors focus:border-[#E8952D] focus:outline-none"
        />
      </div>

      {/* Comment nous avez-vous connu */}
      <div>
        <label htmlFor="source" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
          Comment nous avez-vous connu ?
        </label>
        <select
          id="source"
          name="source"
          className="w-full cursor-pointer rounded-[0.9375rem] border border-beige-200 bg-white px-5 py-3.5 text-[0.9375rem] text-[#1A1A1A] transition-colors focus:border-[#E8952D] focus:outline-none"
        >
          <option value="">Selectionnez une option</option>
          {sources.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      {/* RGPD consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-beige-200 accent-[#E8952D]"
        />
        <label htmlFor="privacy" className="text-xs leading-relaxed text-[#6B6B6B] cursor-pointer">
          J&apos;accepte la{" "}
          <a href="/politique-de-confidentialite/" className="underline text-[#E8952D] hover:text-[#E8952D]/80">
            politique de confidentialite
          </a>
          . Je consens au traitement de mes donnees personnelles pour la gestion de ma demande conformement au RGPD.
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#E8952D] px-8 py-4 text-[0.9375rem] font-semibold text-white transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(198,11,30,0.25)] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            Envoi en cours...
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Demander mon diagnostic gratuit
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
