import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "./_components/Nav";
import { BASE } from "./_data/nav";

export const metadata: Metadata = {
  title: {
    default: "Le contrôle interne — guide pour étudiants",
    template: "%s · Contrôle interne",
  },
  description:
    "Cours en ligne sur le contrôle interne : histoire, définition, référentiel COSO, dispositifs, acteurs, limites, glossaire et quiz. Pensé pour les étudiants en gestion, comptabilité et audit.",
};

export default function ControleInterneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // On force un thème clair et lisible : le <body> global est vert foncé,
  // ce conteneur le recouvre entièrement pour cette section du site.
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Nav />
      {children}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-slate-900">
                Contrôle <span className="text-emerald-600">interne</span>
              </p>
              <p className="mt-1 max-w-md text-sm text-slate-500">
                Une ressource pédagogique libre pour comprendre le contrôle
                interne, de ses origines à sa pratique.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link
                href={`${BASE}/definition`}
                className="text-slate-600 hover:text-emerald-700"
              >
                Définition
              </Link>
              <Link
                href={`${BASE}/composantes`}
                className="text-slate-600 hover:text-emerald-700"
              >
                COSO
              </Link>
              <Link
                href={`${BASE}/glossaire`}
                className="text-slate-600 hover:text-emerald-700"
              >
                Glossaire
              </Link>
              <Link
                href={`${BASE}/quiz`}
                className="text-slate-600 hover:text-emerald-700"
              >
                Quiz
              </Link>
            </nav>
          </div>
          <p className="mt-8 border-t border-slate-100 pt-6 text-xs text-slate-400">
            Contenu à visée pédagogique. Les référentiels cités (COSO, AMF,
            IFACI, normes ISA, Acte uniforme OHADA) restent la propriété de
            leurs auteurs respectifs.
          </p>
        </div>
      </footer>
    </div>
  );
}
