import Link from "next/link";
import type { ReactNode } from "react";
import { COURSE_FLOW, NAV_ITEMS } from "../_data/nav";

// Bibliothèque de composants de présentation (Server Components), charte
// RICHARD : contenu clair et lisible posé sur un fond vert sombre.

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
    <header className="border-b border-brand/15 bg-gradient-to-b from-brand-panel to-transparent">
      <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mint">
          {eyebrow}
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">{lead}</p>
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
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
          {title}
        </h2>
      )}
      <div className="space-y-4 text-[1.05rem] leading-relaxed text-slate-300 [&_strong]:text-white">
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
    info: "border-sky-400/30 bg-sky-500/10 text-sky-100",
    warning: "border-amber-400/30 bg-amber-500/10 text-amber-100",
    success: "border-brand/30 bg-brand/10 text-emerald-100",
  } as const;
  const icons = { info: "ℹ️", warning: "⚠️", success: "✅" } as const;
  return (
    <aside className={`rounded-xl border p-5 ${tones[tone]}`}>
      <p className="mb-1 flex items-center gap-2 font-bold text-white">
        <span aria-hidden>{icons[tone]}</span>
        {title}
      </p>
      <div className="text-[0.98rem] leading-relaxed [&_a]:text-brand-mint [&_a]:underline [&_strong]:text-white">
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
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-brand/30">
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="font-bold text-white">{title}</h3>
        {badge && (
          <span className="shrink-0 rounded-full bg-brand/15 px-2.5 py-0.5 text-xs font-semibold text-brand-mint">
            {badge}
          </span>
        )}
      </div>
      <div className="text-[0.98rem] leading-relaxed text-slate-300 [&_strong]:text-white">
        {children}
      </div>
    </div>
  );
}

export function Grid({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}

// Navigation séquentielle bas de page, basée sur le fil pédagogique.
export function PrevNext({ current }: { current: string }) {
  const idx = COURSE_FLOW.indexOf(current);
  const prevHref = idx > 0 ? COURSE_FLOW[idx - 1] : null;
  const nextHref =
    idx >= 0 && idx < COURSE_FLOW.length - 1 ? COURSE_FLOW[idx + 1] : null;
  const item = (href: string | null) =>
    href ? NAV_ITEMS.find((i) => i.href === href) ?? null : null;
  const prev = item(prevHref);
  const next = item(nextHref);

  return (
    <nav className="mt-14 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
      {prev ? (
        <Link
          href={prev.href}
          className="group rounded-xl border border-white/10 p-4 transition-colors hover:border-brand/40 hover:bg-brand/5"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            ← Précédent
          </span>
          <span className="mt-1 block font-semibold text-slate-200 group-hover:text-brand-mint">
            {prev.label}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          href={next.href}
          className="group rounded-xl border border-white/10 p-4 text-right transition-colors hover:border-brand/40 hover:bg-brand/5 sm:col-start-2"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Suivant →
          </span>
          <span className="mt-1 block font-semibold text-slate-200 group-hover:text-brand-mint">
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
