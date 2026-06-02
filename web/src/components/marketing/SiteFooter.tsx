"use client";

import Image from "next/image";
import Link from "next/link";
import "./footer.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image
                src="/assets/jour_j_calendar_icon.svg"
                alt=""
                width={40}
                height={40}
                unoptimized
              />
              <span>Jour J</span>
            </div>
            <p
              style={{
                color: "var(--muted)",
                maxWidth: 360,
                marginTop: 16,
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Service d&apos;opérations de célébrations d&apos;équipe pour les
              scaleups parisiennes. Anniversaires et anniversaires de travail,
              sans charge opérationnelle.
            </p>
            <div className="footer-divider" />
            <div className="sparkle-line">
              <span className="sl-dot" />
              <span className="sl-star">✦</span>
              <span className="sl-dot" />
            </div>
            <p className="footer-tag">
              Aucune célébration oubliée.{" "}
              <span style={{ color: "var(--coral)" }}>
                Zéro charge opérationnelle.
              </span>
            </p>
          </div>

          <div className="footer-cols">
            <div>
              <div className="fc-title">Produit</div>
              <Link href="#top">Accueil</Link>
              <Link href="#fonctionnement">Fonctionnement</Link>
              <Link href="#celebrations">Célébrations</Link>
              <Link href="#fiabilite">Fiabilité fournisseur</Link>
              <Link href="#tarifs">Pilote</Link>
              <Link href="#contact">Contact</Link>
            </div>
            <div>
              <div className="fc-title">Zones</div>
              <span className="footer-static">
                <span className="now">Paris</span>
              </span>
              <span className="footer-static">
                <span className="muted">Île-de-France</span>{" "}
                <span className="soon">Bientôt</span>
              </span>
              <span className="footer-static">
                <span className="muted">Lyon</span>{" "}
                <span className="soon">Bientôt</span>
              </span>
              <span className="footer-static">
                <span className="muted">Lille</span>{" "}
                <span className="soon">Bientôt</span>
              </span>
              <span className="footer-static">
                <span className="muted">Bordeaux</span>{" "}
                <span className="soon">Bientôt</span>
              </span>
            </div>
            <div>
              <div className="fc-title">Suivez-nous</div>
              <span className="footer-static">LinkedIn</span>
              <span className="footer-static">Instagram</span>
              <span className="footer-static">TikTok</span>
              <div className="fc-title" style={{ marginTop: 24 }}>
                Légal
              </div>
              <span className="footer-static">Mentions légales</span>
              <span className="footer-static">Confidentialité</span>
              <span className="footer-static">RGPD</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Jour J · Fait à Paris</span>
          <span>Service d&apos;opérations de célébrations d&apos;équipe</span>
        </div>
      </div>
    </footer>
  );
}
