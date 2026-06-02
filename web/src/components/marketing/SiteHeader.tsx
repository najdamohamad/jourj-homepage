"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    ["Problème", "#probleme"],
    ["Fonctionnement", "#fonctionnement"],
    ["Périmètre", "#perimetre"],
    ["Fiabilité", "#fiabilite"],
    ["Pilote", "#tarifs"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <>
      <header
        className={`site-header${scrolled ? " scrolled" : ""}`}
        id="siteHeader"
      >
        <div className="container">
          <Link href="#top" className="brand" aria-label="Jour J">
            <Image
              src="/assets/jour_j_calendar_icon.svg"
              alt=""
              width={32}
              height={32}
              className="brand-icon"
              unoptimized
            />
            <span className="brand-mark">Jour J</span>
          </Link>
          <nav className="nav" aria-label="Navigation principale">
            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-cta">
            <Link href="#fonctionnement" className="btn btn-ghost">
              Voir comment ça marche
            </Link>
            <Link href="#contact" className="btn btn-primary">
              Tester un pilote <span className="arrow">→</span>
            </Link>
            <button
              type="button"
              className="burger"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d="M3 3l12 12M15 3L3 15"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="18" height="12" viewBox="0 0 18 12">
                  <path
                    d="M0 1h18M0 6h18M0 11h18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-drawer-backdrop${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`mobile-drawer${menuOpen ? " open" : ""}`} role="dialog" aria-modal="true">
        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <div className="drawer-cta">
          <Link
            href="#fonctionnement"
            className="btn btn-ghost"
            onClick={() => setMenuOpen(false)}
          >
            Voir comment ça marche
          </Link>
          <Link
            href="#contact"
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            Tester un pilote <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
