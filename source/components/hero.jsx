// Hero — repositioned for HR/People teams launching with birthdays + work anniversaries
const { useState, useEffect, useRef } = React;

function HeroVisual() {
  const steps = [
    { label: "Date détectée",          sub: "3 ans · Clara M. · Équipe Produit",  icon: "calendar", tone: "forest" },
    { label: "Préférences vérifiées",  sub: "Sans gluten · Sans alcool",          icon: "diet",     tone: "sage" },
    { label: "Manager notifié",        sub: "Validation reçue · Camille B.",      icon: "check",    tone: "gold" },
    { label: "Livraison programmée",   sub: "Aujourd'hui · 10h30 · 2ᵉ",           icon: "truck",    tone: "coral" },
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % (steps.length + 1)), 1700);
    return () => clearInterval(t);
  }, []);

  const days = Array.from({length: 35}, (_, i) => i - 2);
  const today = 17;
  const otherDots = [5, 9, 22, 27];

  const toneBg = { forest: 'var(--sage-pale)', sage: '#E8F0E9', gold: '#F8EFD3', coral: '#FCE3DB' };
  const toneFg = { forest: 'var(--forest)', sage: 'var(--forest)', gold: '#8C6A1A', coral: '#A8412B' };

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
            <span className="dot pulse" />
            7 à venir
          </div>
        </div>
        <div className="cal-weekdays">
          {['L','M','M','J','V','S','D'].map((d,i) => <div key={i}>{d}</div>)}
        </div>
        <div className="cal-grid">
          {days.map((d, i) => {
            const inMonth = d > 0 && d <= 31;
            const isToday = i === today;
            const hasDot = otherDots.includes(i);
            return (
              <div key={i} className={`cal-cell ${inMonth ? '' : 'muted'} ${isToday ? 'today' : ''}`}>
                <span className="num">{inMonth ? d : ''}</span>
                {isToday && (
                  <span className="badge">
                    <span className="ring" />
                    <span className="star"><I.star size={9} stroke={2.4} color="white"/></span>
                  </span>
                )}
                {hasDot && <span className="celeb-dot" />}
              </div>
            );
          })}
        </div>
        <div className="cal-foot">
          <div className="legend"><span className="sw sw-coral"/> Anniversaire</div>
          <div className="legend"><span className="sw sw-gold"/> Anniv. de travail</div>
        </div>
      </div>

      <div className="step-stack">
        {steps.map((s, i) => {
          const active = i <= idx;
          const isCurrent = i === idx;
          return (
            <div key={i} className={`step ${active ? 'active' : ''} ${isCurrent ? 'current' : ''}`}>
              <div className="step-icon" style={{ background: toneBg[s.tone], color: toneFg[s.tone] }}>
                {I[s.icon]({ size: 18, stroke: 1.8 })}
              </div>
              <div className="step-text">
                <div className="step-label">{s.label}</div>
                <div className="step-sub">{s.sub}</div>
              </div>
              <div className="step-status">
                {active ? <I.check size={16} stroke={2.4} color="var(--forest)"/> : <span className="pending" />}
              </div>
            </div>
          );
        })}
        <div className={`step-final ${idx >= steps.length ? 'shown' : ''}`}>
          <div className="step-final-row">
            <div className="step-final-icon">
              <I.spark size={18} stroke={2} color="var(--gold)"/>
            </div>
            <div>
              <div className="step-final-title">Célébration prête</div>
              <div className="step-final-sub">Clara M. · 3 ans chez Notos · 10h30</div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="moment-card" aria-hidden="false">
        <img
          src="assets/gathering-cake-jourj.png"
          alt="Collègues réunis autour d'un gâteau Jour J"
          loading="lazy"
        />
        <div className="moment-caption">
          <span className="moment-dot" />
          <span>Moment réel · bureau parisien</span>
        </div>
      </div>

      <style>{`
        .hero-visual { position: relative; width: 100%; max-width: 580px; margin: 0 auto; }
        .showcase { position: relative; width: 100%; aspect-ratio: 1.05 / 1; min-height: 470px; }
        .glow { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.5; pointer-events: none; }
        .glow-1 { width: 320px; height: 320px; background: rgba(232, 115, 90, 0.28); top: -10%; right: -10%; }
        .glow-2 { width: 320px; height: 320px; background: rgba(107, 158, 126, 0.30); bottom: -10%; left: -10%; }
        .cal-card { position: absolute; left: 0; top: 6%; width: 70%; background: white; border-radius: var(--radius-lg); border: 1px solid var(--line); box-shadow: var(--shadow-card); padding: 22px 22px 18px; z-index: 2; }
        .cal-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; }
        .cal-eyebrow { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        .cal-title { font-weight: 700; font-size: 18px; letter-spacing: -0.02em; margin-top: 2px; }
        .cal-tag { display: inline-flex; align-items: center; gap: 6px; font-size: 11.5px; font-weight: 600; background: var(--cream-deep); padding: 5px 10px; border-radius: 999px; color: var(--forest); }
        .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--coral); display: inline-block; }
        .pulse { animation: pulse 1.6s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { transform: scale(1); opacity: 1;} 50% { transform: scale(1.5); opacity: .4;} }
        .cal-weekdays { display: grid; grid-template-columns: repeat(7,1fr); gap: 2px; font-size: 10px; color: var(--muted); font-family: var(--font-mono); text-align: center; margin-bottom: 6px; }
        .cal-grid { display: grid; grid-template-columns: repeat(7,1fr); gap: 4px; }
        .cal-cell { position: relative; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; font-size: 12.5px; font-weight: 500; border-radius: 8px; color: var(--charcoal); }
        .cal-cell.muted .num { color: rgba(28,28,28,0.18); }
        .cal-cell.today { background: var(--cream-deep); color: var(--forest); font-weight: 700; }
        .cal-cell .badge { position: absolute; top: -3px; right: -3px; width: 16px; height: 16px; }
        .cal-cell .ring { position: absolute; inset: -3px; border-radius: 50%; background: rgba(232,115,90,0.28); animation: pulseRing 1.8s ease-in-out infinite; }
        @keyframes pulseRing { 0%,100% { transform: scale(.85); opacity: .6;} 50% { transform: scale(1.4); opacity: 0;} }
        .cal-cell .star { position: relative; display: flex; align-items: center; justify-content: center; width: 16px; height: 16px; border-radius: 50%; background: var(--coral); box-shadow: 0 4px 8px -2px rgba(232,115,90,0.5); }
        .celeb-dot { position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%); width: 4px; height: 4px; border-radius: 50%; background: var(--gold); }
        .cal-foot { margin-top: 14px; padding-top: 12px; border-top: 1px dashed var(--line); display: flex; gap: 14px; flex-wrap: wrap; }
        .legend { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; color: var(--muted); }
        .sw { width: 8px; height: 8px; border-radius: 50%; }
        .sw-coral { background: var(--coral); } .sw-gold { background: var(--gold); } .sw-sage { background: var(--sage); }
        .step-stack { position: absolute; right: 0; top: 14%; width: 56%; display: flex; flex-direction: column; gap: 10px; z-index: 3; }
        .step { display: grid; grid-template-columns: 36px 1fr auto; align-items: center; gap: 12px; background: white; border: 1px solid var(--line); border-radius: 16px; padding: 12px 14px; box-shadow: var(--shadow-soft); opacity: 0.45; transform: translateX(8px); transition: opacity .4s ease, transform .4s cubic-bezier(.2,.7,.2,1); }
        .step.active { opacity: 1; transform: translateX(0); }
        .step.current { box-shadow: 0 0 0 3px rgba(45,90,61,0.08), var(--shadow-card); }
        .step-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
        .step-label { font-weight: 600; font-size: 13.5px; letter-spacing: -0.01em; }
        .step-sub { font-size: 11.5px; color: var(--muted); margin-top: 1px; }
        .pending { width: 14px; height: 14px; border-radius: 50%; border: 1.5px dashed var(--line-strong); }
        .step-final { margin-top: 8px; background: var(--forest); color: var(--cream); border-radius: 16px; padding: 14px 16px; opacity: 0; transform: translateY(6px); transition: opacity .5s ease, transform .5s cubic-bezier(.2,.7,.2,1); box-shadow: 0 14px 30px -14px rgba(45,90,61,.5); }
        .step-final.shown { opacity: 1; transform: none; }
        .step-final-row { display: flex; align-items: center; gap: 12px; }
        .step-final-icon { width: 36px; height: 36px; border-radius: 10px; background: rgba(212,168,67,0.18); display: flex; align-items: center; justify-content: center; }
        .step-final-title { font-weight: 700; font-size: 14px; }
        .step-final-sub { font-size: 11.5px; opacity: 0.7; margin-top: 2px; }

        /* Secondary supporting photo — proof of the real employee moment, sits BELOW the showcase */
        .moment-card {
          position: relative;
          width: 56%;
          margin: 18px 0 0 6%;
          aspect-ratio: 5 / 4;
          background: white;
          padding: 8px 8px 10px;
          border-radius: 18px;
          border: 1px solid var(--line);
          box-shadow:
            0 28px 52px -22px rgba(28, 36, 30, 0.35),
            0 10px 22px -10px rgba(28, 36, 30, 0.16);
          transform: rotate(-2.4deg);
          z-index: 4;
        }
        .moment-card img {
          width: 100%;
          height: calc(100% - 22px);
          object-fit: cover;
          object-position: center 45%;
          border-radius: 12px;
          display: block;
        }
        .moment-caption {
          margin-top: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 9.5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          padding: 0 2px;
        }
        .moment-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--coral);
          box-shadow: 0 0 0 3px rgba(232,115,90,0.16);
        }

        @media (max-width: 760px) {
          .hero-visual { max-width: 100%; }
          .showcase { aspect-ratio: auto; }
          .cal-card { width: 100%; position: relative; top: 0; }
          .step-stack { position: relative; width: 100%; right: auto; top: auto; margin-top: 16px; }
          .moment-card { width: 78%; margin: 18px auto 0; transform: none; }
        }
      `}</style>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow"><span className="dot"/> Service d'opérations de célébrations · Paris</span>
          <h1 style={{ marginTop: 22 }}>
            Aucune célébration <span className="ink-coral">oubliée</span>.<br/>
            <span className="ink-forest">Zéro charge opérationnelle.</span>
          </h1>
          <p className="lead" style={{ marginTop: 22, maxWidth: 600 }}>
            Jour J aide les Office Managers, People Ops et équipes Employee Experience des scaleups parisiennes à gérer les anniversaires et anniversaires de travail sans tableurs, rappels manuels, commandes de dernière minute ni coordination fournisseur.
          </p>
          <p style={{ marginTop: 14, color: 'var(--muted)', maxWidth: 600, fontSize: 15.5 }}>
            Vous nous transmettez vos collaborateurs et vos règles. Jour J planifie, coordonne les partenaires, suit la livraison et vous envoie un récapitulatif clair.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Tester un pilote <span className="arrow">→</span></a>
            <a href="#fonctionnement" className="btn btn-ghost">Voir comment ça marche</a>
          </div>

          <div className="hero-meta">
            <div className="meta-row">
              <span className="avatars">
                <span className="av" style={{background:'#E8C9A8'}}>C</span>
                <span className="av" style={{background:'#C9D9CC'}}>M</span>
                <span className="av" style={{background:'#E8B6AC'}}>S</span>
                <span className="av" style={{background:'#CFD7C8'}}>+</span>
              </span>
              <div className="meta-text">
                <strong>Conçu pour</strong> Office Managers, People Ops et Employee Experience<br/>
                <span style={{color:'var(--muted)'}}>Startups et scaleups · 100–300 collaborateurs</span>
              </div>
            </div>
            <div className="meta-divider" />
            <div className="meta-row">
              <span className="meta-icon"><I.pin size={16} color="var(--coral)" stroke={2}/></span>
              <div className="meta-text">
                <strong>Livraison à Paris</strong><br/>
                <span style={{color:'var(--muted)'}}>Île-de-France ensuite</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual-wrap" data-reveal>
          <HeroVisual />
        </div>
      </div>

      <style>{`
        .hero { padding-top: clamp(56px, 6vw, 88px); padding-bottom: clamp(72px, 8vw, 120px); }
        .hero-grid { display: grid; grid-template-columns: 1.05fr 1fr; gap: clamp(40px, 5vw, 72px); align-items: center; }
        .ink-forest { color: var(--forest); }
        .ink-coral { color: var(--coral); }
        .hero-cta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; }
        .hero-meta { display: flex; align-items: center; gap: 24px; margin-top: 44px; padding-top: 28px; border-top: 1px solid var(--line); flex-wrap: wrap; }
        .meta-row { display: flex; align-items: center; gap: 12px; }
        .meta-divider { width: 1px; height: 36px; background: var(--line); }
        .meta-text { font-size: 13px; line-height: 1.45; }
        .meta-text strong { font-weight: 600; }
        .meta-icon { width: 36px; height: 36px; border-radius: 10px; background: var(--cream-deep); display: flex; align-items: center; justify-content: center; }
        .avatars { display: inline-flex; }
        .av { width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 11.5px; font-weight: 700; color: var(--charcoal); margin-left: -8px; border: 2px solid var(--cream); }
        .av:first-child { margin-left: 0; }
        @media (max-width: 920px) { .hero-grid { grid-template-columns: 1fr; } .meta-divider { display: none; } }
      `}</style>
    </section>
  );
}

window.Hero = Hero;
