"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { I } from "./icons";
import "./hero.css";

const toneBg: Record<string, string> = {
  forest: "var(--sage-pale)",
  sage: "#E8F0E9",
  gold: "#F8EFD3",
  coral: "#FCE3DB",
};

const toneFg: Record<string, string> = {
  forest: "var(--forest)",
  sage: "var(--forest)",
  gold: "#8C6A1A",
  coral: "#A8412B",
};

export function HeroVisual() {
  const steps = [
    {
      label: "Date détectée",
      sub: "3 ans · Clara M. · Équipe Produit",
      icon: "calendar" as const,
      tone: "forest",
    },
    {
      label: "Préférences vérifiées",
      sub: "Sans gluten · Sans alcool",
      icon: "diet" as const,
      tone: "sage",
    },
    {
      label: "Manager notifié",
      sub: "Validation reçue · Camille B.",
      icon: "check" as const,
      tone: "gold",
    },
    {
      label: "Livraison programmée",
      sub: "Aujourd'hui · 10h30 · 2ᵉ",
      icon: "truck" as const,
      tone: "coral",
    },
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = window.setInterval(
      () => setIdx((i) => (i + 1) % (steps.length + 1)),
      1700,
    );
    return () => window.clearInterval(t);
  }, [steps.length]);

  const days = Array.from({ length: 35 }, (_, i) => i - 2);
  const today = 17;
  const otherDots = [5, 9, 22, 27];

  return (
    <div className="hero-visual">
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <div className="showcase">
        <div className="cal-card">
          <div className="cal-head">
            <div>
              <div className="cal-eyebrow">Calendrier des célébrations</div>
              <div className="cal-title">Mai 2026</div>
            </div>
            <div className="cal-tag">
              <span className="dot pulse" />7 à venir
            </div>
          </div>
          <div className="cal-weekdays">
            {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
              <div key={i}>{d}</div>
            ))}
          </div>
          <div className="cal-grid">
            {days.map((d, i) => {
              const inMonth = d > 0 && d <= 31;
              const isToday = i === today;
              const hasDot = otherDots.includes(i);
              return (
                <div
                  key={i}
                  className={`cal-cell ${inMonth ? "" : "muted"} ${isToday ? "today" : ""}`}
                >
                  <span className="num">{inMonth ? d : ""}</span>
                  {isToday && (
                    <span className="badge">
                      <span className="ring" />
                      <span className="star">
                        <I.star size={9} stroke={2.4} color="white" />
                      </span>
                    </span>
                  )}
                  {hasDot && <span className="celeb-dot" />}
                </div>
              );
            })}
          </div>
          <div className="cal-foot">
            <div className="legend">
              <span className="sw sw-coral" /> Anniversaire
            </div>
            <div className="legend">
              <span className="sw sw-gold" /> Anniv. de travail
            </div>
          </div>
        </div>

        <div className="step-stack">
          {steps.map((s, i) => {
            const active = i <= idx;
            const isCurrent = i === idx;
            const IconComp = I[s.icon];
            return (
              <div
                key={i}
                className={`step ${active ? "active" : ""} ${isCurrent ? "current" : ""}`}
              >
                <div
                  className="step-icon"
                  style={{
                    background: toneBg[s.tone],
                    color: toneFg[s.tone],
                  }}
                >
                  <IconComp size={18} stroke={1.8} />
                </div>
                <div className="step-text">
                  <div className="step-label">{s.label}</div>
                  <div className="step-sub">{s.sub}</div>
                </div>
                <div className="step-status">
                  {active ? (
                    <I.check size={16} stroke={2.4} color="var(--forest)" />
                  ) : (
                    <span className="pending" />
                  )}
                </div>
              </div>
            );
          })}
          <div className={`step-final ${idx >= steps.length ? "shown" : ""}`}>
            <div className="step-final-row">
              <div className="step-final-icon">
                <I.spark size={18} stroke={2} color="var(--gold)" />
              </div>
              <div>
                <div className="step-final-title">Célébration prête</div>
                <div className="step-final-sub">
                  Clara M. · 3 ans chez Notos · 10h30
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="moment-card" aria-hidden="false">
        <Image
          src="/assets/gathering-cake-jourj.png"
          alt="Collègues réunis autour d'un gâteau Jour J"
          width={560}
          height={448}
          sizes="(max-width: 760px) 78vw, 320px"
          loading="lazy"
        />
        <div className="moment-caption">
          <span className="moment-dot" />
          <span>Moment réel · bureau parisien</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow">
            <span className="dot" /> Service d&apos;opérations de célébrations · Paris
          </span>
          <h1 style={{ marginTop: 22 }}>
            Aucune célébration <span className="ink-coral">oubliée</span>.
            <br />
            <span className="ink-forest">Zéro charge opérationnelle.</span>
          </h1>
          <p className="lead" style={{ marginTop: 22, maxWidth: 600 }}>
            Jour J aide les Office Managers, People Ops et équipes Employee
            Experience des scaleups parisiennes à gérer les anniversaires et
            anniversaires de travail sans tableurs, rappels manuels, commandes de
            dernière minute ni coordination fournisseur.
          </p>
          <p
            style={{
              marginTop: 14,
              color: "var(--muted)",
              maxWidth: 600,
              fontSize: 15.5,
            }}
          >
            Vous nous transmettez vos collaborateurs et vos règles. Jour J
            planifie, coordonne les partenaires, suit la livraison et vous envoie
            un récapitulatif clair.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Tester un pilote <span className="arrow">→</span>
            </a>
            <a href="#fonctionnement" className="btn btn-ghost">
              Voir comment ça marche
            </a>
          </div>

          <div className="hero-meta">
            <div className="meta-row">
              <span className="avatars">
                <span className="av" style={{ background: "#E8C9A8" }}>
                  C
                </span>
                <span className="av" style={{ background: "#C9D9CC" }}>
                  M
                </span>
                <span className="av" style={{ background: "#E8B6AC" }}>
                  S
                </span>
                <span className="av" style={{ background: "#CFD7C8" }}>
                  +
                </span>
              </span>
              <div className="meta-text">
                <strong>Conçu pour</strong> Office Managers, People Ops et
                Employee Experience
                <br />
                <span style={{ color: "var(--muted)" }}>
                  Startups et scaleups · 100–300 collaborateurs
                </span>
              </div>
            </div>
            <div className="meta-divider" />
            <div className="meta-row">
              <span className="meta-icon">
                <I.pin size={16} color="var(--coral)" stroke={2} />
              </span>
              <div className="meta-text">
                <strong>Livraison à Paris</strong>
                <br />
                <span style={{ color: "var(--muted)" }}>
                  Île-de-France ensuite
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual-wrap" data-reveal>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
