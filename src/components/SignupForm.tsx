"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Une erreur est survenue.");
      }
      setStatus("success");
      setMessage("Bienvenue ! Vérifie ta boîte mail, ton accès arrive bientôt.");
      setName("");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#10B981]/20 text-3xl">
          🎉
        </div>
        <p className="text-xl font-bold text-white mb-2">Inscription confirmée !</p>
        <p className="text-gray-300 font-light">{message}</p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom complet"
        autoComplete="name"
        className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#10B981] transition-colors"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Adresse email"
        required
        autoComplete="email"
        className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#10B981] transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full mt-2 p-4 bg-[#10B981] hover:bg-[#059669] rounded-xl font-bold text-white transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Envoi en cours…" : "Accéder en exclusivité"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400 mt-1">{message}</p>
      )}
    </form>
  );
}
