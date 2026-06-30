import Link from "next/link";
import { NAV_ITEMS } from "./_data/nav";

export default function AccueilPage() {
  // On retire l'accueil lui-même des cartes du sommaire.
  const cards = NAV_ITEMS.filter((i) => i.href !== "/");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-900">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(16,185,129,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(56,189,248,0.25), transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <span className="inline-block rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Ressource pédagogique
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Comprendre le{" "}
            <span className="text-emerald-400">contrôle interne</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Tout ce qu'un étudiant en gestion, comptabilité ou audit doit
            savoir : son histoire, ses définitions, le référentiel COSO, ses
            dispositifs concrets, ses acteurs et ses limites. Avec un quiz pour
            s'auto-évaluer.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/definition"
              className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-colors hover:bg-emerald-400"
            >
              Commencer le cours
            </Link>
            <Link
              href="/quiz"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Tester mes connaissances
            </Link>
          </div>
        </div>
      </section>

      {/* En une phrase */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <p className="text-xl leading-relaxed text-slate-700 md:text-2xl">
            <span className="font-bold text-slate-900">En une phrase :</span>{" "}
            le contrôle interne est l'ensemble des{" "}
            <span className="text-emerald-600">
              dispositifs, procédures et comportements
            </span>{" "}
            mis en place par une organisation pour{" "}
            <span className="text-emerald-600">maîtriser ses activités</span>,
            fiabiliser son information et se conformer aux règles — avec une{" "}
            <em>assurance raisonnable</em>, jamais absolue.
          </p>
        </div>
      </section>

      {/* Sommaire en cartes */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Au programme
        </h2>
        <p className="mt-2 text-slate-600">
          Parcourez les chapitres dans l'ordre, ou directement la notion qui
          vous intéresse.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
            >
              <span className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-sm font-black text-emerald-700">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-bold text-slate-900 group-hover:text-emerald-700">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
              <span className="mt-4 text-sm font-semibold text-emerald-600">
                Découvrir →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* À qui s'adresse ce site */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
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
                className="rounded-xl border border-slate-200 p-5"
              >
                <p className="font-bold text-slate-900">{x.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
