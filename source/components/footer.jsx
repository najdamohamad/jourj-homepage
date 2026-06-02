function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={(window.__resources && window.__resources.calendarIcon) || 'assets/jour_j_calendar_icon.svg'} alt="" width="40" height="40"/>
              <span>Jour J</span>
            </div>
            <p style={{color:'var(--muted)', maxWidth: 360, marginTop: 16, fontSize: 14, lineHeight: 1.6}}>
              Service d'opérations de célébrations d'équipe pour les scaleups parisiennes. Anniversaires et anniversaires de travail, sans charge opérationnelle.
            </p>
            <div className="footer-divider" />
            <div className="sparkle-line">
              <span className="sl-dot"/>
              <span className="sl-star">✦</span>
              <span className="sl-dot"/>
            </div>
            <p className="footer-tag">Aucune célébration oubliée. <span style={{color:'var(--coral)'}}>Zéro charge opérationnelle.</span></p>
          </div>

          <div className="footer-cols">
            <div>
              <div className="fc-title">Produit</div>
              <a href="#top">Accueil</a>
              <a href="#fonctionnement">Fonctionnement</a>
              <a href="#celebrations">Célébrations</a>
              <a href="#fiabilite">Fiabilité fournisseur</a>
              <a href="#tarifs">Pilote</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <div className="fc-title">Zones</div>
              <a><span className="now">Paris</span></a>
              <a><span className="muted">Île-de-France</span> <span className="soon">Bientôt</span></a>
              <a><span className="muted">Lyon</span> <span className="soon">Bientôt</span></a>
              <a><span className="muted">Lille</span> <span className="soon">Bientôt</span></a>
              <a><span className="muted">Bordeaux</span> <span className="soon">Bientôt</span></a>
            </div>
            <div>
              <div className="fc-title">Suivez-nous</div>
              <a>LinkedIn</a>
              <a>Instagram</a>
              <a>TikTok</a>
              <div className="fc-title" style={{marginTop: 24}}>Légal</div>
              <a>Mentions légales</a>
              <a>Confidentialité</a>
              <a>RGPD</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Jour J · Fait à Paris</span>
          <span>Service d'opérations de célébrations d'équipe</span>
        </div>
      </div>
      <style>{`
        .site-footer { background: var(--cream-deep); padding: 80px 0 40px; margin-top: 40px; }
        .footer-top { display: grid; grid-template-columns: 1.2fr 2fr; gap: 56px; }
        .footer-logo { display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 26px; color: var(--forest); letter-spacing: -0.025em; }
        .footer-divider { display:none; }
        .sparkle-line { display: flex; align-items: center; gap: 10px; margin-top: 28px; color: var(--gold); }
        .sl-dot { width: 38px; height: 1px; background: var(--gold); opacity: 0.5; }
        .sl-star { font-size: 14px; }
        .footer-tag { margin-top: 12px; font-weight: 600; color: var(--forest); font-size: 15px; }
        .footer-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .fc-title { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; }
        .footer-cols a {
          display: flex; align-items: center; gap: 8px;
          padding: 6px 0; font-size: 14px; color: var(--charcoal); cursor: pointer;
          transition: color .15s;
        }
        .footer-cols a:hover { color: var(--forest); }
        .now { color: var(--forest); font-weight: 600; }
        .muted { color: var(--muted); }
        .soon { font-family: var(--font-mono); font-size: 10px; padding: 2px 6px; border-radius: 999px; background: rgba(212,168,67,0.18); color: #8c6a1a; }
        .footer-bottom {
          margin-top: 56px; padding-top: 24px; border-top: 1px solid var(--line);
          display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;
          font-size: 12.5px; color: var(--muted);
        }
        @media (max-width: 820px) {
          .footer-top { grid-template-columns: 1fr; gap: 40px; }
          .footer-cols { grid-template-columns: repeat(2,1fr); }
        }
      `}</style>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
