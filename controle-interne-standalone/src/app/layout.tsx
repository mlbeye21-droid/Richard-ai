import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Nav } from "./_components/Nav";
import { InfinityMark } from "./_components/Logo";

export const metadata: Metadata = {
  title: {
    default: "RICHARD CI — le contrôle interne pour les étudiants",
    template: "%s · RICHARD CI",
  },
  description:
    "RICHARD CI : cours complet et sourcé sur le contrôle interne — histoire, référentiel COSO, cycles de l'entreprise, dispositifs, acteurs, limites, base de connaissances (Jacques Renard, IFACI…), glossaire, quiz et assistant intelligent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="antialiased">
      <body className="min-h-screen bg-brand-black text-slate-200">
        <Nav />
        {children}
        <footer className="border-t border-brand/15 bg-brand-black">
          <div className="mx-auto max-w-6xl px-5 py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="flex items-center gap-2 font-bold text-white">
                  <InfinityMark className="h-6 w-9" />
                  RICHARD <span className="text-brand-bright">CI</span>
                </p>
                <p className="mt-2 max-w-md text-sm text-slate-400">
                  Une ressource pédagogique pour comprendre le contrôle interne,
                  de ses origines à sa pratique. Un projet de la famille
                  RICHARD AI.
                </p>
              </div>
              <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <Link
                  href="/cycles"
                  className="text-slate-300 hover:text-brand-mint"
                >
                  Cycles
                </Link>
                <Link
                  href="/ressources"
                  className="text-slate-300 hover:text-brand-mint"
                >
                  Sources
                </Link>
                <Link
                  href="/glossaire"
                  className="text-slate-300 hover:text-brand-mint"
                >
                  Glossaire
                </Link>
                <Link
                  href="/quiz"
                  className="text-slate-300 hover:text-brand-mint"
                >
                  Quiz
                </Link>
                <Link
                  href="/assistant"
                  className="text-brand-mint hover:text-brand-bright"
                >
                  Assistant
                </Link>
              </nav>
            </div>
            <p className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-500">
              Contenu à visée pédagogique. Les référentiels et œuvres cités
              (COSO, AMF, IFACI, IIA, normes ISA, Acte uniforme OHADA, ouvrages
              de Jacques Renard…) restent la propriété de leurs auteurs
              respectifs.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
