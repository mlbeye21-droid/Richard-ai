This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Inscription des testeurs (e-mail de bienvenue + Google Sheet)

Le formulaire de la landing envoie les coordonnées à la route `POST /api/register`, qui :

1. envoie un **e-mail de bienvenue** au testeur depuis `richardlecomptable@gmail.com` (Gmail SMTP) ;
2. envoie une **copie de notification** à l'équipe (`ADMIN_EMAIL`, par défaut `GMAIL_USER`) ;
3. ajoute une ligne au **Google Sheet** de recensement (`date ISO`, `nom`, `email`).

Copie `.env.example` vers `.env.local` et renseigne les variables :

```bash
cp .env.example .env.local
```

### 1. Gmail (envoi de l'e-mail)

- Active la **validation en 2 étapes** sur le compte `richardlecomptable@gmail.com`.
- Crée un **mot de passe d'application** : https://myaccount.google.com/apppasswords
- Renseigne `GMAIL_USER` et `GMAIL_APP_PASSWORD` (le mot de passe à 16 caractères, sans espaces).

### 2. Google Sheet (recensement)

1. Crée une feuille Google. Optionnel : mets une ligne d'en-tête `Date | Nom | Email`.
2. Récupère son **ID** (entre `/d/` et `/edit` dans l'URL) → `GOOGLE_SHEETS_ID`.
3. Sur [Google Cloud Console](https://console.cloud.google.com/) : crée un projet, active **Google Sheets API**.
4. Crée un **compte de service**, génère une **clé JSON**.
5. Depuis le JSON : `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `private_key` → `GOOGLE_PRIVATE_KEY`.
6. **Partage la feuille** (bouton *Partager*) avec l'e-mail du compte de service en **Éditeur**.

> En production (Vercel), ajoute ces mêmes variables dans *Project Settings → Environment Variables*.
> Pour `GOOGLE_PRIVATE_KEY`, conserve les `\n` littéraux (ils sont reconvertis côté serveur).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
