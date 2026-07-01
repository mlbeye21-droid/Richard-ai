import Link from "next/link";
import { NAV_ITEMS } from "./_data/nav";
import { InfinityMark } from "./_components/Logo";

export default function AccueilPage() {
  // On retire l'accueil des cartes du sommaire.
  const cards = NAV_ITEMS.filter((i) => i.href !== "/");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand/15">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 15%, rgba(69,187,30,0.22), transparent 45%), radial-gradient(circle at 82% 0%, rgba(16,185,129,0.20), transparent 42%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <span className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5">
            <InfinityMark className="h-5 w-8" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-mint">
              RICHARD CI
            </span>
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Maîtriser le{" "}
            <span className="text-brand-bright">contrôle interne</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Un cours complet et sourcé pour les étudiants en gestion,
            comptabilité et audit : histoire, référentiel COSO, cycles de
            l'entreprise, dispositifs, acteurs, limites — avec une base de
            connaissances (Jacques Renard, IFACI…), un quiz et un assistant
            intelligent.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/definition"
              className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-black shadow-lg shadow-brand/20 transition-colors hover:bg-brand-mint"
            >
              Commencer le cours
            </Link>
            <Link
              href="/assistant"
              className="rounded-lg border border-brand/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand/10"
            >
              💬 Poser une question à l'assistant
            </Link>
          </div>
        </div>
      </section>

      {/* En une phrase */}
      <section className="border-b border-brand/15 bg-white/[0.03]">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <p className="text-xl leading-relaxed text-slate-200 md:text-2xl">
            <span className="font-bold text-white">En une phrase :</span> le
            contrôle interne est l'ensemble des{" "}
            <span className="text-brand-mint">
              dispositifs, procédures et comportements
            </span>{" "}
            mis en place par une organisation pour{" "}
            <span className="text-brand-mint">maîtriser ses activités</span>,
            fiabiliser son information et se conformer aux règles — avec une{" "}
            <em>assurance raisonnable</em>, jamais absolue.
          </p>
        </div>
      </section>

      {/* Sommaire en cartes */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Au programme
        </h2>
        <p className="mt-2 text-slate-400">
          Parcourez les chapitres dans l'ordre, ou directement la notion qui
          vous intéresse.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:bg-brand/5"
            >
              <span className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-brand/15 text-sm font-black text-brand-mint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-bold text-white group-hover:text-brand-mint">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
              <span className="mt-4 text-sm font-semibold text-brand-mint">
                Découvrir →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* À qui s'adresse ce site */}
      <section className="border-t border-brand/15 bg-white/[0.03]">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Pour qui ?
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "Étudiants",
                d: "Gestion, comptabilité, finance, audit, droit des affaires. Une base claire pour réviser et comprendre.",
              },
              {
                t: "Candidats aux examens",
                d: "DCG, DSCG, licences et masters, concours : repères, définitions et quiz d'entraînement.",
              },
              {
                t: "Professionnels débutants",
                d: "Auditeurs juniors, comptables, contrôleurs : un rappel synthétique des fondamentaux.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="font-bold text-white">{x.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
