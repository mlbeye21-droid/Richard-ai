import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Désactivé : le double-montage du StrictMode (dev) est incompatible avec le
  // portail HTML de <Scroll html> de @react-three/drei (createRoot appelé 2x).
  reactStrictMode: false,

  // La racine "/" redirige vers la carte de visite (sur tous les domaines).
  // La landing 3D n'est plus servie à la racine (son code reste dans le repo).
  async redirects() {
    return [{ source: "/", destination: "/carte", permanent: false }];
  },

  // /carte -> fichier statique de la carte.
  async rewrites() {
    return [{ source: "/carte", destination: "/carte/index.html" }];
  },

  // Pas de cache agressif sur la carte (les mises à jour sont vues tout de suite).
  async headers() {
    const noCache = [
      { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
    ];
    return [
      { source: "/", headers: noCache },
      { source: "/carte", headers: noCache },
      { source: "/carte/:path*", headers: noCache },
    ];
  },
};

export default nextConfig;
