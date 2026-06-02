"use client";

import Image from "next/image";
import { I, type IconName } from "./icons";
import "./dashboard.css";

export default function DashboardMockup() {
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
                <Image
                  src="/assets/jour_j_calendar_icon.svg"
                  alt=""
                  width={22}
                  height={22}
                  unoptimized
                />
                <span>Jour J</span>
              </div>
              <nav className="dash-nav">
                {(
                  [
                    ["Tableau de bord", "calendar", true],
                    ["Prochaines", "bell"],
                    ["Collaborateurs", "users"],
                    ["Règles", "rules"],
                    ["Budgets", "budget"],
                    ["Partenaires", "handshake"],
                    ["Notifications", "bell"],
                    ["Paramètres", "rules"],
                  ] as const
                ).map(([l, ic, act], i) => (
                  <a key={i} className={act ? "active" : ""} href="#">
                    {I[ic as IconName]({
                      size: 15,
                      color: act ? "var(--forest)" : "var(--muted)",
                    })}
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

      
    </section>
  );
}


