// Structure de navigation partagée entre l'en-tête, le pied de page et les
// cartes de la page d'accueil. Le cours est servi à la racine du domaine.

export type NavItem = {
  href: string;
  label: string;
  short: string;
  description: string;
};

export const BASE = "";

export const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    label: "Accueil",
    short: "Accueil",
    description: "Point de départ pour comprendre le contrôle interne.",
  },
  {
    href: "/histoire",
    label: "Histoire",
    short: "Histoire",
    description:
      "Des premiers contrôles comptables à COSO, Sarbanes-Oxley et l'OHADA.",
  },
  {
    href: "/definition",
    label: "Définition & objectifs",
    short: "Définition",
    description:
      "Ce qu'est (et n'est pas) le contrôle interne, et à quoi il sert.",
  },
  {
    href: "/composantes",
    label: "Les 5 composantes (COSO)",
    short: "Composantes",
    description: "Le référentiel COSO et ses 17 principes structurants.",
  },
  {
    href: "/cycles",
    label: "Les cycles de l'entreprise",
    short: "Cycles",
    description:
      "Ce qu'est un cycle, et le contrôle interne appliqué à chaque cycle.",
  },
  {
    href: "/dispositifs",
    label: "Dispositifs & types de contrôles",
    short: "Dispositifs",
    description:
      "Contrôles préventifs, détectifs, séparation des tâches, automatisation…",
  },
  {
    href: "/acteurs",
    label: "Acteurs & responsabilités",
    short: "Acteurs",
    description: "Qui fait quoi : le modèle des trois lignes de maîtrise.",
  },
  {
    href: "/limites",
    label: "Limites",
    short: "Limites",
    description:
      "Pourquoi un contrôle interne, même bien conçu, n'est jamais absolu.",
  },
  {
    href: "/ressources",
    label: "Base de connaissances & sources",
    short: "Ressources",
    description:
      "Bibliographie sourcée (Jacques Renard, COSO, IFACI…) et notions approfondies.",
  },
  {
    href: "/glossaire",
    label: "Glossaire",
    short: "Glossaire",
    description: "Les définitions clés à connaître pour l'examen.",
  },
  {
    href: "/quiz",
    label: "Quiz",
    short: "Quiz",
    description: "Testez vos connaissances : les questions changent à chaque partie.",
  },
  {
    href: "/assistant",
    label: "Assistant RICHARD CI",
    short: "Assistant",
    description:
      "Posez vos questions sur le contrôle interne à l'assistant intelligent.",
  },
];

// Fil pédagogique (ordre des chapitres), pour la navigation précédent/suivant.
export const COURSE_FLOW = [
  "/histoire",
  "/definition",
  "/composantes",
  "/cycles",
  "/dispositifs",
  "/acteurs",
  "/limites",
  "/ressources",
  "/glossaire",
];
