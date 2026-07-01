// Marque RICHARD : le symbole de l'infini, en dégradé vert de la charte.
// Version SVG (nette à toute taille, transparente, lisible sur fond sombre).
export function InfinityMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 56"
      className={className}
      role="img"
      aria-label="Logo RICHARD"
    >
      <defs>
        <linearGradient id="richardGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#45BB1E" />
          <stop offset="0.5" stopColor="#10B981" />
          <stop offset="1" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <path
        d="M28 28c0-9-7-15-14-15S0 19 0 28s7 15 14 15c9 0 15-8 22-15 7-7 13-15 22-15 7 0 14 6 14 15s-7 15-14 15-14-6-22-15"
        fill="none"
        stroke="url(#richardGreen)"
        strokeWidth="8"
        strokeLinecap="round"
        transform="translate(14 0)"
      />
    </svg>
  );
}

// Bloc logo + wordmark « RICHARD CI ».
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <InfinityMark className="h-7 w-11" />
      <span className="text-base font-extrabold tracking-tight text-white">
        RICHARD <span className="text-brand-bright">CI</span>
      </span>
    </span>
  );
}
