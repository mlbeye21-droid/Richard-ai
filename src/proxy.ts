import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Next.js 16 : "Middleware" s'appelle désormais "Proxy".
// Sur le sous-domaine dédié carte.richardlecomptable.com, la racine "/" doit
// afficher directement la carte de visite (et non la landing).
export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  if (host === "carte.richardlecomptable.com") {
    return NextResponse.rewrite(new URL("/carte/index.html", request.url));
  }
  return NextResponse.next();
}

export const config = {
  // Ne s'exécute que sur la racine.
  matcher: "/",
};
