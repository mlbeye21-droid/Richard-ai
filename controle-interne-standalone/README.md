# Contrôle interne — site pédagogique

Site autonome (Next.js + Tailwind) qui explique le **contrôle interne** aux
étudiants en gestion, comptabilité et audit. Le cours est servi directement
à la racine `/`, sans aucun lien avec d'autres projets.

## Contenu

- `/` — Accueil et sommaire
- `/histoire` — Histoire du contrôle interne (COSO, SOX, LSF, OHADA)
- `/definition` — Définition & objectifs
- `/composantes` — Les 5 composantes COSO et leurs 17 principes
- `/dispositifs` — Types de contrôles et dispositifs
- `/acteurs` — Les trois lignes de maîtrise
- `/limites` — Les limites du contrôle interne
- `/glossaire` — Définitions clés
- `/quiz` — Quiz interactif de 10 questions corrigées

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Déploiement (domaine gratuit)

Ce projet est conçu pour être déployé **seul**, sur son propre domaine gratuit.

### Option A — Vercel (`*.vercel.app`)

1. Pousse ce dossier dans un dépôt GitHub dédié.
2. Sur [vercel.com](https://vercel.com), « Add New Project » → importe le dépôt.
3. Si ce projet est dans un sous-dossier d'un dépôt plus large, règle
   **Root Directory** sur `controle-interne-standalone`.
4. Vercel détecte Next.js et déploie : tu obtiens une URL gratuite du type
   `https://controle-interne.vercel.app`.

### Option B — Netlify (`*.netlify.app`) ou Cloudflare Pages (`*.pages.dev`)

Même principe : importer le dépôt, framework « Next.js », laisser les
commandes par défaut (`npm run build`). Un sous-domaine gratuit est fourni.

## Pile technique

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v3
- 100 % statique (le quiz est un Client Component) — aucun service externe requis.
