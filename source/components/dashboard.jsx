// Dashboard mockup section + Footer
const { useState: useStateD } = React;

function DashboardMockup() {
  return (
    <section className="dashboard-section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow"><span className="dot"/> Le cockpit</span>
          <h2 style={{marginTop: 18}}>Un cockpit clair, pas un nouvel outil à maîtriser.</h2>
          <p className="lead">Vous gardez la main sur les règles, les budgets et les validations. Jour J s'occupe de l'exécution. Vous voyez ce qui arrive, ce qui est livré, et ce qui demande votre attention — rien d'autre.</p>
        </div>

        <div className="dash-frame" data-reveal>
          <div className="dash-chrome">
            <span className="dotr r"/><span className="dotr y"/><span className="dotr g"/>
            <span className="dash-url">app.jourj.fr / dashboard</span>
          </div>

          <div className="dash-body">
            {/* Sidebar */}
            <aside className="dash-side">
              <div className="dash-brand">
                <img src={(window.__resources && window.__resources.calendarIcon) || 'assets/jour_j_calendar_icon.svg'} alt="" width="22" height="22"/>
                <span>Jour J</span>
              </div>
              <nav className="dash-nav">
                {[
                  ["Tableau de bord","calendar", true],
                  ["Prochaines","bell"],
                  ["Collaborateurs","users"],
                  ["Règles","rules"],
                  ["Budgets","budget"],
                  ["Partenaires","handshake"],
                  ["Notifications","bell"],
                  ["Paramètres","rules"],
                ].map(([l,ic,act],i) => (
                  <a key={i} className={act ? 'active':''}>
                    {I[ic]({size:15, color: act ? 'var(--forest)' : 'var(--muted)'})}
                    <span>{l}</span>
                  </a>
                ))}
              </nav>
              <div className="dash-side-foot">
                <div className="dsf-row">
                  <div className="dsf-av">CB</div>
                  <div>
                    <div style={{fontWeight:600, fontSize: 13}}>Camille B.</div>
                    <div style={{fontSize: 11.5, color: 'var(--muted)'}}>People · Notos</div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="dash-main">
              <div className="dash-topline">
                <div>
                  <div style={{fontFamily:'var(--font-mono)', fontSize: 11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--muted)'}}>Jeudi 14 mai · Notos</div>
                  <h3 style={{fontSize: 22, marginTop: 4}}>Bonjour Camille — 4 célébrations cette semaine.</h3>
                </div>
                <button className="dash-btn">+ Nouvelle règle</button>
              </div>

              <div className="dash-kpis">
                {[
                  ["12","À venir ce mois","var(--forest)"],
                  ["3","En attente de validation","var(--coral)"],
                  ["1 240 €","Budget engagé","var(--gold)"],
                  ["98%","Satisfaction collab.","var(--sage)"],
                  ["18h","Temps RH économisé","var(--forest)"],
                ].map(([n,l,c],i) => (
                  <div key={i} className="kpi">
                    <div className="kpi-num" style={{color: c}}>{n}</div>
                    <div className="kpi-label">{l}</div>
                  </div>
                ))}
              </div>

              <div className="dash-cols">
                <div className="dash-col">
                  <div className="dash-card-title">Prochaines célébrations</div>
                  <div className="upcoming">
                    {[
                      { name:"Clara Martin", role:"3 ans · Produit", when:"Aujourd'hui · 10h30", status:"Confirmé", tone:"forest" },
                      { name:"Antoine Roux", role:"Anniversaire · 32 ans · Sales", when:"Demain · 15h00", status:"En préparation", tone:"gold" },
                      { name:"Sophie Lemaire", role:"5 ans · Design", when:"Vendredi · 11h00", status:"À valider", tone:"coral" },
                      { name:"Yacine Berrada", role:"1 an · Customer Success", when:"Lundi · 10h00", status:"Confirmé", tone:"forest" },
                    ].map((u,i) => (
                      <div key={i} className="up-row">
                        <div className="up-av" style={{background: ['#E8C9A8','#C9D9CC','#E8B6AC','#CFD7C8'][i%4]}}>{u.name.split(' ').map(s=>s[0]).join('')}</div>
                        <div className="up-info">
                          <div className="up-name">{u.name}</div>
                          <div className="up-role">{u.role}</div>
                        </div>
                        <div className="up-when">{u.when}</div>
                        <span className={`up-status t-${u.tone}`}>{u.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="dash-col">
                  <div className="dash-card">
                    <div className="dash-card-title">Règle active</div>
                    <div className="rule-card">
                      <div className="rc-row"><strong>Anniversaire de travail</strong></div>
                      <div className="rc-line"><span>Budget</span><span className="chip-coral">75 €</span></div>
                      <div className="rc-line"><span>Notification</span><span>J-7, J-1</span></div>
                      <div className="rc-line"><span>Message personnalisé</span><span className="dash-toggle on"><span/></span></div>
                      <div className="rc-line"><span>Validation manager</span><span className="dash-toggle on"><span/></span></div>
                    </div>
                  </div>

                  <div className="dash-card" style={{marginTop: 14}}>
                    <div className="dash-card-title">Livraison · Aujourd'hui</div>
                    <div style={{fontSize: 13.5, fontWeight: 600, marginBottom: 10}}>Le gâteau de Clara est presque arrivé.</div>
                    <div className="del-row">
                      <div className="del-step done">Préparé</div>
                      <span className="del-bar" />
                      <div className="del-step done">En route</div>
                      <span className="del-bar half" />
                      <div className="del-step">Livré</div>
                    </div>
                    <div className="del-meta">
                      <div><I.pin size={12} color="var(--muted)"/> 12 rue de Cléry · Paris 2ᵉ</div>
                      <div><I.truck size={12} color="var(--muted)"/> ETA 10h30</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dash-frame {
          background: white; border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          box-shadow: 0 30px 60px -30px rgba(28,28,28,0.18);
          overflow: hidden;
        }
        .dash-chrome {
          display: flex; align-items: center; gap: 6px;
          padding: 12px 16px; border-bottom: 1px solid var(--line);
          background: var(--cream-deep);
        }
        .dash-url {
          margin-left: auto; margin-right: auto;
          font-family: var(--font-mono); font-size: 11.5px; color: var(--muted);
        }
        .dash-body {
          display: grid; grid-template-columns: 220px 1fr;
          min-height: 580px;
        }
        .dash-side {
          background: var(--cream); border-right: 1px solid var(--line);
          padding: 18px 14px; display: flex; flex-direction: column;
        }
        .dash-brand { display: flex; align-items: center; gap: 8px; padding: 4px 8px; font-weight: 700; color: var(--forest); margin-bottom: 16px; }
        .dash-nav { display: flex; flex-direction: column; gap: 2px; }
        .dash-nav a {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 10px; border-radius: 10px;
          font-size: 13.5px; color: var(--muted); cursor: pointer;
        }
        .dash-nav a.active { background: white; color: var(--charcoal); font-weight: 600; box-shadow: var(--shadow-soft); }
        .dash-side-foot { margin-top: auto; padding: 12px 8px 4px; border-top: 1px solid var(--line); }
        .dsf-row { display: flex; align-items: center; gap: 10px; }
        .dsf-av { width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg,#E8C9A8,#E8735A); color: white; font-weight: 700; font-size: 11.5px; display: flex; align-items: center; justify-content: center; }

        .dash-main { padding: 24px 28px; background: white; }
        .dash-topline { display: flex; justify-content: space-between; align-items: flex-end; gap: 16px; flex-wrap: wrap; }
        .dash-btn {
          background: var(--forest); color: var(--cream); border: none;
          padding: 10px 14px; border-radius: 10px; font-weight: 600; font-size: 13px;
        }
        .dash-kpis { display: grid; grid-template-columns: repeat(5,1fr); gap: 10px; margin-top: 22px; }
        .kpi { background: var(--cream); border: 1px solid var(--line); border-radius: 14px; padding: 14px 16px; }
        .kpi-num { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }
        .kpi-label { font-size: 12px; color: var(--muted); margin-top: 2px; }

        .dash-cols { display: grid; grid-template-columns: 1.4fr 1fr; gap: 14px; margin-top: 22px; }
        .dash-card-title { font-size: 12px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); margin-bottom: 10px; }
        .upcoming { background: var(--cream); border: 1px solid var(--line); border-radius: 14px; }
        .up-row {
          display: grid; grid-template-columns: 36px 1fr auto auto; gap: 12px;
          padding: 12px 14px; align-items: center;
          border-bottom: 1px solid var(--line);
        }
        .up-row:last-child { border-bottom: none; }
        .up-av { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 11.5px; }
        .up-name { font-weight: 600; font-size: 13.5px; }
        .up-role { color: var(--muted); font-size: 11.5px; }
        .up-when { font-size: 12px; color: var(--charcoal); font-family: var(--font-mono); }
        .up-status { font-size: 11.5px; font-weight: 600; padding: 4px 10px; border-radius: 999px; }
        .t-forest { background: var(--sage-pale); color: var(--forest); }
        .t-gold { background: rgba(212,168,67,0.18); color: #8c6a1a; }
        .t-coral { background: rgba(232,115,90,0.14); color: var(--coral); }

        .dash-card { background: var(--cream); border: 1px solid var(--line); border-radius: 14px; padding: 14px 16px; }
        .rule-card { font-size: 13.5px; }
        .rc-row { padding-bottom: 8px; border-bottom: 1px dashed var(--line); margin-bottom: 6px; }
        .rc-line { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; color: var(--muted); }
        .rc-line span:last-child { color: var(--charcoal); font-weight: 500; }
        .dash-toggle { display: inline-flex; width: 30px; height: 18px; background: var(--line-strong); border-radius: 999px; padding: 2px; transition: background .2s; }
        .dash-toggle > span { width: 14px; height: 14px; border-radius: 50%; background: white; transition: transform .2s; }
        .dash-toggle.on { background: var(--forest); }
        .dash-toggle.on > span { transform: translateX(12px); }

        .del-row { display: flex; align-items: center; gap: 6px; margin-bottom: 12px; }
        .del-step {
          padding: 6px 10px; border-radius: 999px; font-size: 11.5px; font-weight: 600;
          background: var(--cream-deep); color: var(--muted);
        }
        .del-step.done { background: var(--sage-pale); color: var(--forest); }
        .del-bar { flex: 1; height: 2px; background: var(--line-strong); border-radius: 2px; position: relative; }
        .del-bar::after { content:''; position: absolute; inset: 0; background: var(--forest); border-radius: 2px; }
        .del-bar.half::after { width: 50%; }
        .del-meta { display: flex; justify-content: space-between; font-size: 11.5px; color: var(--muted); }
        .del-meta > div { display: inline-flex; align-items: center; gap: 6px; }

        @media (max-width: 980px) {
          .dash-body { grid-template-columns: 1fr; }
          .dash-side { flex-direction: row; gap: 4px; overflow-x: auto; padding: 12px; }
          .dash-side-foot, .dash-brand { display: none; }
          .dash-nav { flex-direction: row; flex: none; }
          .dash-nav a { white-space: nowrap; }
          .dash-kpis { grid-template-columns: repeat(2,1fr); }
          .dash-kpis > .kpi:nth-child(5) { grid-column: span 2; }
          .dash-cols { grid-template-columns: 1fr; }
          .up-row { grid-template-columns: 32px 1fr auto; }
          .up-when { display: none; }
        }
      `}</style>
    </section>
  );
}

window.DashboardMockup = DashboardMockup;
