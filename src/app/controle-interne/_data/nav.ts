// Structure de navigation partagée entre l'en-tête, le pied de page et les
// cartes de la page d'accueil. Centraliser ici évite les divergences.

export type NavItem = {
  href: string;
  label: string;
  short: string;
  description: string;
};

export const BASE = "/controle-interne";

export const NAV_ITEMS: NavItem[] = [
  {
    href: `${BASE}`,
    label: "Accueil",
    short: "Accueil",
    description: "Point de départ pour comprendre le contrôle interne.",
  },
  {
    href: `${BASE}/histoire`,
    label: "Histoire",
    short: "Histoire",
    description:
      "Des premiers contrôles comptables à COSO, Sarbanes-Oxley et l'OHADA.",
  },
  {
    href: `${BASE}/definition`,
    label: "Définition & objectifs",
    short: "Définition",
    description:
      "Ce qu'est (et n'est pas) le contrôle interne, et à quoi il sert.",
  },
  {
    href: `${BASE}/composantes`,
    label: "Les 5 composantes (COSO)",
    short: "Composantes",
    description: "Le référentiel COSO et ses 17 principes structurants.",
  },
  {
    href: `${BASE}/dispositifs`,
    label: "Dispositifs & types de contrôles",
    short: "Dispositifs",
    description:
      "Contrôles préventifs, détectifs, séparation des tâches, automatisation…",
  },
  {
    href: `${BASE}/acteurs`,
    label: "Acteurs & responsabilités",
    short: "Acteurs",
    description: "Qui fait quoi : le modèle des trois lignes de maîtrise.",
  },
  {
    href: `${BASE}/limites`,
    label: "Limites",
    short: "Limites",
    description:
      "Pourquoi un contrôle interne, même bien conçu, n'est jamais absolu.",
  },
  {
    href: `${BASE}/glossaire`,
    label: "Glossaire",
    short: "Glossaire",
    description: "Les définitions clés à connaître pour l'examen.",
  },
  {
    href: `${BASE}/quiz`,
    label: "Quiz",
    short: "Quiz",
    description: "Testez vos connaissances avec 10 questions corrigées.",
  },
];
