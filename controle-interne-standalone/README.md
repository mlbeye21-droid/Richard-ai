# RICHARD CI — le contrôle interne pour les étudiants

Site autonome (Next.js + Tailwind) aux couleurs de **RICHARD**, qui explique le
**contrôle interne** aux étudiants en gestion, comptabilité et audit. Le cours
est servi directement à la racine `/`.

## Contenu

- `/` — Accueil et sommaire
- `/histoire` — Histoire du contrôle interne (COSO, SOX, LSF, OHADA)
- `/definition` — Définition & objectifs
- `/composantes` — Les 5 composantes COSO et leurs 17 principes
- `/cycles` — Définition d'un cycle + contrôle interne par cycle (achats, ventes, paie…)
- `/dispositifs` — Types de contrôles et dispositifs
- `/acteurs` — Les trois lignes de maîtrise
- `/limites` — Les limites du contrôle interne
- `/ressources` — Base de connaissances sourcée (Jacques Renard, COSO, IFACI, IIA, AMF, SOX, LSF, ISA, OHADA)
- `/glossaire` — Définitions clés
- `/quiz` — Quiz : 10 questions tirées au hasard, différentes à chaque partie
- `/assistant` — Assistant intelligent RICHARD CI (chatbot)

## L'assistant (chatbot)

L'assistant fonctionne **immédiatement**, sans configuration : la route
`/api/chat` interroge une base de connaissances locale (`src/app/_data/knowledge.ts`)
par un moteur de récupération et cite ses sources.

Pour passer en **mode IA générative** (réponses plus riches, toujours ancrées sur
la même base de connaissances), ajoutez au déploiement la variable
d'environnement `ANTHROPIC_API_KEY` (et, optionnellement, `ANTHROPIC_MODEL`,
par défaut `claude-sonnet-5`).

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Déploiement (domaine gratuit)

Importer ce dépôt sur Vercel, Netlify ou Cloudflare Pages : le framework
Next.js est détecté automatiquement et un sous-domaine gratuit est fourni
(par ex. `https://richard-ci.vercel.app`).

## Pile technique

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v3
- Charte RICHARD : vert vif `#45BB1E` / `#10B981` sur vert sombre `#06120d`.
