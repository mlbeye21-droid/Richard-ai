import Link from "next/link";
import type { ReactNode } from "react";
import { NAV_ITEMS } from "../_data/nav";

// Petite bibliothèque de composants de présentation réutilisés par toutes les
// pages de cours. Volontairement sans état : ce sont des Server Components.

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="border-b border-slate-200 bg-gradient-to-b from-emerald-50/70 to-transparent">
      <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
          {eyebrow}
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{lead}</p>
      </div>
    </header>
  );
}

export function Section({
  title,
  id,
  children,
}: {
  title?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-10 scroll-mt-24 first:mt-0">
      {title && (
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
      )}
      <div className="space-y-4 text-[1.05rem] leading-relaxed text-slate-700">
        {children}
      </div>
    </section>
  );
}

export function Callout({
  title,
  tone = "info",
  children,
}: {
  title: string;
  tone?: "info" | "warning" | "success";
  children: ReactNode;
}) {
  const tones = {
    info: "border-sky-200 bg-sky-50 text-sky-900",
    warning: "border-amber-200 bg-amber-50 text-amber-900",
    success: "border-emerald-200 bg-emerald-50 text-emerald-900",
  } as const;
  const icons = { info: "ℹ️", warning: "⚠️", success: "✅" } as const;
  return (
    <aside className={`rounded-xl border p-5 ${tones[tone]}`}>
      <p className="mb-1 flex items-center gap-2 font-bold">
        <span aria-hidden>{icons[tone]}</span>
        {title}
      </p>
      <div className="text-[0.98rem] leading-relaxed [&_a]:underline">
        {children}
      </div>
    </aside>
  );
}

export function Card({
  title,
  children,
  badge,
}: {
  title: string;
  children: ReactNode;
  badge?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="font-bold text-slate-900">{title}</h3>
        {badge && (
          <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
            {badge}
          </span>
        )}
      </div>
      <div className="text-[0.98rem] leading-relaxed text-slate-600">
        {children}
      </div>
    </div>
  );
}

export function Grid({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">{children}</div>
  );
}

// Navigation séquentielle bas de page, basée sur l'ordre de NAV_ITEMS
// (en excluant l'accueil et le quiz pour suivre le fil du cours).
export function PrevNext({ current }: { current: string }) {
  const flow = NAV_ITEMS.filter(
    (i) => i.short !== "Accueil" && i.short !== "Quiz",
  );
  const idx = flow.findIndex((i) => i.href === current);
  const prev = idx > 0 ? flow[idx - 1] : null;
  const next = idx >= 0 && idx < flow.length - 1 ? flow[idx + 1] : null;

  return (
    <nav className="mt-14 grid gap-3 border-t border-slate-200 pt-6 sm:grid-cols-2">
      {prev ? (
        <Link
          href={prev.href}
          className="group rounded-xl border border-slate-200 p-4 transition-colors hover:border-emerald-300 hover:bg-emerald-50/50"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            ← Précédent
          </span>
          <span className="mt-1 block font-semibold text-slate-800 group-hover:text-emerald-700">
            {prev.label}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          href={next.href}
          className="group rounded-xl border border-slate-200 p-4 text-right transition-colors hover:border-emerald-300 hover:bg-emerald-50/50 sm:col-start-2"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Suivant →
          </span>
          <span className="mt-1 block font-semibold text-slate-800 group-hover:text-emerald-700">
            {next.label}
          </span>
        </Link>
      )}
    </nav>
  );
}

// Conteneur d'article standard pour les pages de cours.
export function Article({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 md:py-14">{children}</main>
  );
}
