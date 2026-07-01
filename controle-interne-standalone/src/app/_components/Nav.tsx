"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "../_data/nav";
import { InfinityMark } from "./Logo";

// En-tête collant, charte RICHARD (vert sombre). Surligne l'onglet courant,
// met l'assistant en avant, et propose un menu déroulant sur mobile.
export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // L'assistant est mis en avant comme un bouton, à part des chapitres.
  const chapters = NAV_ITEMS.filter((i) => i.href !== "/assistant");
  const assistant = NAV_ITEMS.find((i) => i.href === "/assistant")!;

  return (
    <header className="sticky top-0 z-40 border-b border-brand/20 bg-brand-black/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          <InfinityMark className="h-7 w-11" />
          <span className="text-base">
            RICHARD <span className="text-brand-bright">CI</span>
          </span>
        </Link>

        {/* Navigation bureau */}
        <nav className="hidden max-w-3xl flex-wrap items-center justify-end gap-1 xl:flex">
          {chapters.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-brand/15 text-brand-mint"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.short}
            </Link>
          ))}
          <Link
            href={assistant.href}
            className="ml-1 rounded-md bg-brand px-3 py-1.5 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-mint"
          >
            💬 {assistant.short}
          </Link>
        </nav>

        {/* Bouton menu mobile */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-brand/30 text-slate-200 xl:hidden"
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Navigation mobile */}
      {open && (
        <nav className="border-t border-brand/20 bg-brand-black px-3 pb-4 pt-2 xl:hidden">
          <ul className="grid gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    isActive(item.href)
                      ? "bg-brand/15 text-brand-mint"
                      : item.href === "/assistant"
                        ? "text-brand-mint hover:bg-white/5"
                        : "text-slate-200 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
