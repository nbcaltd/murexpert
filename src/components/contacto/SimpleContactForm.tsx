"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const FORM_ENDPOINT = "/api/contact";

const subjects = [
  { value: "question", label: "Question generale" },
  { value: "devis", label: "Demande de devis" },
  { value: "partenariat", label: "Devenir partenaire" },
  { value: "reclamation", label: "Reclamation" },
  { value: "autre", label: "Autre" },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function SimpleContactForm() {
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
      subject: fd.get("subject"),
      message: fd.get("message"),
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
          Message envoye
        </h3>
        <p className="mt-3 max-w-sm text-base text-[#6B6B6B]">
          Merci pour votre message. Notre equipe vous repondra dans les plus brefs delais.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-[0.9375rem] border border-beige-200 bg-white px-5 py-3.5 text-[0.9375rem] text-[#1A1A1A] placeholder:text-[#6B6B6B]/50 transition-colors focus:border-[#E8952D] focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Nom + Prenom */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-lastName" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Nom
          </label>
          <input
            type="text"
            id="contact-lastName"
            name="lastName"
            required
            placeholder="Votre nom"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-firstName" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Prenom
          </label>
          <input
            type="text"
            id="contact-firstName"
            name="firstName"
            required
            placeholder="Votre prenom"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email + Telephone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Email
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            placeholder="votre@email.fr"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
            Telephone <span className="font-normal text-[#6B6B6B]">(optionnel)</span>
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            placeholder="06 XX XX XX XX"
            className={inputClass}
          />
        </div>
      </div>

      {/* Sujet */}
      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
          Sujet
        </label>
        <select
          id="contact-subject"
          name="subject"
          required
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Selectionnez un sujet</option>
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-[#1A1A1A]">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="Votre message..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* RGPD */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="contact-privacy"
          name="privacy"
          required
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-beige-200 accent-[#E8952D]"
        />
        <label htmlFor="contact-privacy" className="text-xs leading-relaxed text-[#6B6B6B] cursor-pointer">
          J&apos;accepte la{" "}
          <a href="/politique-de-confidentialite/" className="underline text-[#E8952D] hover:text-[#E8952D]/80">
            politique de confidentialite
          </a>
          . Je consens au traitement de mes donnees personnelles conformement au RGPD.
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#E8952D] px-8 py-4 text-[0.9375rem] font-semibold text-white transition-transform duration-300 hover:scale-[1.02] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            Envoi en cours...
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Envoyer le message
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
