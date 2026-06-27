import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Désactivé : le double-montage du StrictMode (dev) est incompatible avec le
  // portail HTML de <Scroll html> de @react-three/drei (createRoot appelé 2x).
  reactStrictMode: false,

  // URL propre pour la carte de visite, servie indépendamment de la landing.
  // - Sur le sous-domaine carte.richardlecomptable.com : la racine "/" affiche
  //   directement la carte (URL toute propre).
  // - Partout ailleurs : /carte -> /carte/index.html (la landing reste sur "/").
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: "carte.richardlecomptable.com" }],
          destination: "/carte/index.html",
        },
      ],
      afterFiles: [{ source: "/carte", destination: "/carte/index.html" }],
    };
  },

  // Empêche la mise en cache agressive de la carte : le navigateur revalide à
  // chaque chargement et voit donc les nouvelles versions immédiatement.
  async headers() {
    const noCache = [
      { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
    ];
    return [
      { source: "/carte", headers: noCache },
      { source: "/carte/:path*", headers: noCache },
    ];
  },
};

export default nextConfig;
