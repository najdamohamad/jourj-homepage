// All major content sections — refocused on launch scope: birthdays + work anniversaries
const { useState: useStateS, useEffect: useEffectS } = React;

/* ---------- Social Proof Strip ---------- */
function SocialProof() {
  const tags = ["Office Managers","People Ops","Employee Experience","Startups","Scale-ups","100–300 collaborateurs","Paris","Tech","SaaS","Fintech","Workplace Experience"];
  return (
    <section className="social-proof">
      <div className="container">
        <div className="sp-head" data-reveal>
          <h2>Pensé pour les scaleups parisiennes.</h2>
          <p className="lead" style={{marginTop: 16, maxWidth: 680}}>
            Jour J est conçu pour les Office Managers, People Ops et Employee Experience des startups et scaleups parisiennes de 100 à 300 collaborateurs.
          </p>
        </div>
        <div className="marquee" data-reveal>
          <div className="track">
            {[...tags, ...tags].map((t,i) => (
              <span key={i} className="tag"><span className="tag-dot" />{t}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .social-proof { padding-top: clamp(40px, 5vw, 64px); padding-bottom: clamp(60px, 7vw, 96px); }
        .sp-head { max-width: 720px; }
        .marquee { margin-top: 40px; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); overflow: hidden; }
        .track { display: flex; gap: 12px; width: max-content; animation: marquee 38s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .tag { display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 999px; background: white; border: 1px solid var(--line); font-size: 14px; font-weight: 500; white-space: nowrap; }
        .tag-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); }
      `}</style>
    </section>
  );
}

/* ---------- Problem Section ---------- */
function ProblemSection() {
  const cards = [
    { title: "Dates oubliées", desc: "Les moments collaborateurs dépendent de rappels manuels et de fichiers rarement à jour.", icon: "calendar" },
    { title: "Relances manager", desc: "L'Office Manager doit vérifier la présence, le timing, le budget ou le message.", icon: "bell" },
    { title: "Préférences dispersées", desc: "Sans alcool, allergies, vegan ou sans gluten sont souvent vérifiés trop tard.", icon: "diet" },
    { title: "Fournisseurs et factures", desc: "Commandes, livraisons, incidents et petites factures s'accumulent dans l'opérationnel.", icon: "doc" },
    { title: "Expérience inégale", desc: "Certains collaborateurs sont célébrés, d'autres passent entre les mailles du filet.", icon: "users" },
  ];
  return (
    <section className="problem">
      <div className="container">
        <div className="problem-panel" id="probleme">
          <div className="problem-head" data-reveal>
            <span className="eyebrow"><span className="dot"/> Le problème</span>
            <h2 style={{marginTop: 18}}>Les petits moments deviennent vite une charge opérationnelle.</h2>
            <p className="lead" style={{marginTop: 18}}>
              Dans beaucoup d'entreprises, les anniversaires et anniversaires de travail reposent encore sur des tableurs, des rappels calendrier, des messages Slack et des commandes passées à la dernière minute.
            </p>
            <p style={{marginTop: 18, color: 'var(--charcoal)', fontWeight: 600, fontSize: 15.5}}>
              Le problème n'est pas le gâteau. <span style={{color:'var(--coral)'}}>C'est tout ce qu'il faut faire pour que le bon moment arrive au bon employé, au bon endroit, sans oubli.</span>
            </p>
          </div>

          <div className="problem-cards" data-reveal>
            {cards.map((c, i) => (
              <div key={i} className="problem-card">
                <span className="pc-icon">{I[c.icon]({size:18, color:'var(--coral)'})}</span>
                <div className="pc-text">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .problem { padding: clamp(56px, 7vw, 96px) 0; }
        .problem-panel { background: var(--cream-deep); border-radius: var(--radius-lg); padding: clamp(32px, 4vw, 56px); display: grid; grid-template-columns: 0.9fr 1.1fr; gap: clamp(32px, 5vw, 64px); align-items: center; }
        .problem-head { max-width: 520px; }
        .problem-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .problem-card { background: white; border: 1px solid var(--line); border-radius: var(--radius); padding: 20px; display: flex; flex-direction: column; gap: 14px; }
        .pc-icon { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 10px; background: rgba(232,115,90,0.10); flex: none; }
        .problem-card h3 { font-size: 15.5px; }
        .problem-card p { color: var(--muted); margin-top: 6px; font-size: 13.5px; line-height: 1.5; }
        @media (max-width: 980px) { .problem-panel { grid-template-columns: 1fr; } .problem-head { max-width: 100%; } }
        @media (max-width: 540px) { .problem-cards { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

/* ---------- Solution / Operational Workflow ---------- */
function SolutionSection() {
  const items = [
    "Planning des anniversaires et anniversaires de travail",
    "Import CSV ou liste collaborateurs",
    "Règles simples par type d'événement",
    "Budget par collaborateur ou par ancienneté",
    "Validation manager si nécessaire",
    "Préférences alimentaires et allergies déclarées",
    "Sélection d'un fournisseur adapté",
    "Confirmation de commande",
    "Suivi de livraison",
    "Gestion des incidents",
    "Récapitulatif mensuel",
    "Facturation simplifiée",
  ];
  return (
    <section id="perimetre" className="solution">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow"><span className="dot"/> Ce que Jour J prend en charge</span>
          <h2 style={{marginTop: 18}}>Jour J prend en charge l'exécution.</h2>
          <p className="lead">Vous gardez le contrôle. Nous gérons l'opérationnel.</p>
        </div>
        <div className="checklist" data-reveal>
          {items.map((label, i) => (
            <div key={i} className="check-item">
              <span className="check-mark"><I.check size={14} color="var(--forest)" stroke={2.6}/></span>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="sol-quote" data-reveal>
          <p>Jour J ne vend pas seulement une attention.<br/><span style={{color:'var(--coral)'}}>Jour J vend la tranquillité que le moment sera bien géré.</span></p>
        </div>
      </div>
      <style>{`
        .checklist { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 10px; }
        .check-item { display: flex; align-items: center; gap: 12px; background: white; border: 1px solid var(--line); border-radius: 14px; padding: 14px 16px; font-size: 14.5px; font-weight: 500; }
        .check-mark { width: 26px; height: 26px; border-radius: 8px; background: var(--sage-pale); display: inline-flex; align-items: center; justify-content: center; flex: none; }
        @media (max-width: 980px) { .checklist { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 540px) { .checklist { grid-template-columns: 1fr; } }
        .sol-quote { margin-top: 36px; padding: 28px 32px; background: white; border: 1px solid var(--line); border-radius: var(--radius-lg); text-align: center; }
        .sol-quote p { font-size: clamp(18px, 1.6vw, 22px); font-weight: 600; letter-spacing: -0.015em; line-height: 1.45; }
      `}</style>
    </section>
  );
}

/* ---------- How It Works ---------- */
function HowItWorks() {
  const [active, setActive] = useStateS(0);
  const steps = [
    {
      title: "On configure vos règles",
      desc: "Un court échange pour définir les moments couverts, les budgets, les équipes, les adresses et les validations nécessaires.",
      preview: (
        <div className="prev-card">
          <div className="prev-row"><span className="dot-g"/> 142 collaborateurs importés</div>
          <div className="prev-row"><span className="dot-g"/> 3 bureaux · Paris, Lyon, remote</div>
          <div className="prev-row"><span className="dot-g"/> 47 préférences alimentaires</div>
          <div className="prev-bar"><span style={{width:'92%'}}/></div>
          <div className="prev-foot">Import CSV · OK</div>
        </div>
      ),
    },
    {
      title: "Vous transmettez une liste collaborateurs",
      desc: "Au lancement, Jour J fonctionne avec un import CSV ou une liste sécurisée. Pas besoin d'intégration SIRH pour tester.",
      preview: (
        <div className="prev-card">
          <div className="rule-row"><strong>Anniversaire de travail · 1 an</strong><span className="chip-coral">45 €</span></div>
          <div className="rule-row"><strong>Anniversaire de travail · 3 ans</strong><span className="chip-coral">75 €</span></div>
          <div className="rule-row"><strong>Anniversaire de travail · 5 ans</strong><span className="chip-coral">120 €</span></div>
          <div className="rule-row"><strong>Anniversaire collaborateur</strong><span className="chip-gold">45 €</span></div>
        </div>
      ),
    },
    {
      title: "Jour J opère les célébrations",
      desc: "Nous planifions les dates, confirmons les besoins, coordonnons les fournisseurs et suivons les livraisons.",
      preview: (
        <div className="prev-card">
          <div className="auto-line"><span className="auto-dot done"/> Date détectée · Sophie L.</div>
          <div className="auto-line"><span className="auto-dot done"/> Règle appliquée · 5 ans · 120 €</div>
          <div className="auto-line"><span className="auto-dot live"/> Email manager envoyé · J-7</div>
          <div className="auto-line"><span className="auto-dot wait"/> Validation en attente</div>
        </div>
      ),
    },
    {
      title: "Vous mesurez la valeur",
      desc: "Chaque mois, vous recevez un récapitulatif : moments gérés, incidents éventuels, budget utilisé et temps économisé.",
      preview: (
        <div className="prev-card prev-card-final">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="av-big">CM</div>
            <div>
              <div style={{fontWeight:700}}>Clara Martin</div>
              <div style={{color:'var(--muted)', fontSize:12.5}}>3 ans chez Notos</div>
            </div>
          </div>
          <div className="msg">"Merci pour ces 3 années, Clara. L'équipe Produit te doit beaucoup." — Camille</div>
          <div className="prev-foot ok">Livraison confirmée · 10h30</div>
        </div>
      ),
    },
  ];
  return (
    <section id="fonctionnement" className="how">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow"><span className="dot"/> Comment ça marche</span>
          <h2 style={{marginTop: 18}}>Un pilote simple avant toute intégration complexe.</h2>
          <p className="lead" style={{marginTop: 16, maxWidth: 720}}>Les intégrations SIRH viennent après validation du besoin, pas avant.</p>
        </div>

        <div className="how-layout">
          <div className="how-steps">
            {steps.map((s,i) => (
              <button key={i} className={`how-step ${i === active ? 'active' : ''}`} onClick={() => setActive(i)}>
                <span className="step-num">{String(i+1).padStart(2,'0')}</span>
                <span className="step-body">
                  <span className="step-title">{s.title}</span>
                  <span className="step-desc">{s.desc}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="how-preview">
            <div className="prev-frame">
              <div className="prev-frame-head">
                <span className="dotr r"/><span className="dotr y"/><span className="dotr g"/>
                <span className="prev-frame-title">Étape {active + 1} · Jour J</span>
              </div>
              <div className="prev-frame-body">{steps[active].preview}</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .how-layout { display: grid; grid-template-columns: 1.05fr 1fr; gap: clamp(36px, 5vw, 72px); align-items: stretch; }
        .how-steps { display: flex; flex-direction: column; gap: 8px; }
        .how-step { text-align: left; display: grid; grid-template-columns: 56px 1fr; gap: 16px; padding: 18px 20px; background: transparent; border: 1px solid transparent; border-radius: var(--radius); transition: background .2s ease, border-color .2s ease; }
        .how-step:hover { background: rgba(28,28,28,0.02); }
        .how-step.active { background: white; border-color: var(--line); box-shadow: var(--shadow-soft); }
        .step-num { font-family: var(--font-mono); font-weight: 500; font-size: 14px; color: var(--muted); padding-top: 2px; }
        .how-step.active .step-num { color: var(--coral); }
        .step-title { display: block; font-weight: 700; font-size: 18.5px; letter-spacing: -0.02em; margin-bottom: 6px; }
        .step-desc { display: block; color: var(--muted); font-size: 14.5px; line-height: 1.55; }
        .how-preview { position: sticky; top: 92px; align-self: flex-start; }
        .prev-frame { background: white; border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: var(--shadow-card); overflow: hidden; }
        .prev-frame-head { display: flex; align-items: center; gap: 6px; padding: 12px 14px; border-bottom: 1px solid var(--line); background: var(--cream-deep); }
        .dotr { width: 10px; height: 10px; border-radius: 50%; }
        .dotr.r{background:#E8735A;} .dotr.y{background:#D4A843;} .dotr.g{background:#6B9E7E;}
        .prev-frame-title { margin-left: 10px; font-family: var(--font-mono); font-size: 11.5px; color: var(--muted); }
        .prev-frame-body { padding: 24px; min-height: 300px; }
        .prev-card { font-size: 14px; }
        .prev-row { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px dashed var(--line); }
        .dot-g { width: 8px; height: 8px; border-radius: 50%; background: var(--sage); }
        .prev-bar { height: 6px; background: var(--cream-deep); border-radius: 999px; margin-top: 18px; overflow: hidden; }
        .prev-bar > span { display: block; height: 100%; background: var(--forest); border-radius: 999px; }
        .prev-foot { margin-top: 14px; font-family: var(--font-mono); font-size: 11.5px; color: var(--muted); letter-spacing: 0.06em; text-transform: uppercase; }
        .prev-foot.ok { color: var(--forest); }
        .rule-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; background: var(--cream); border-radius: 12px; margin-bottom: 8px; font-size: 14px; }
        .chip-coral { padding: 4px 10px; border-radius: 999px; background: rgba(232,115,90,0.14); color: var(--coral); font-weight: 600; font-size: 12px; }
        .chip-gold  { padding: 4px 10px; border-radius: 999px; background: rgba(212,168,67,0.18); color: #8c6a1a; font-weight: 600; font-size: 12px; }
        .auto-line { display: flex; align-items: center; gap: 10px; padding: 12px 0; font-size: 14px; }
        .auto-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--line-strong); }
        .auto-dot.done { background: var(--forest); }
        .auto-dot.live { background: var(--coral); box-shadow: 0 0 0 4px rgba(232,115,90,0.18); animation: pulse 1.6s infinite; }
        .auto-dot.wait { background: var(--cream-deep); border: 1.5px dashed var(--line-strong); }
        .prev-card-final { display: flex; flex-direction: column; gap: 16px; }
        .av-big { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #E8C9A8, #E8735A); color: white; font-weight: 700; display: flex; align-items: center; justify-content: center; }
        .msg { background: var(--cream); border-radius: 14px; padding: 14px 16px; font-size: 14px; line-height: 1.55; font-style: italic; color: var(--charcoal); }
        @media (max-width: 920px) { .how-layout { grid-template-columns: 1fr; } .how-preview { position: static; } }
      `}</style>
    </section>
  );
}

/* ---------- Supported Celebrations ---------- */
function Celebrations() {
  return (
    <section id="celebrations" className="celebs">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow"><span className="dot"/> Célébrations</span>
          <h2 style={{marginTop: 18}}>Deux moments pour commencer. Une catégorie à construire.</h2>
          <p className="lead">Jour J démarre sur les deux moments qui pèsent le plus dans la charge opérationnelle d'un Office Manager.</p>
        </div>

        <div className="celeb-pair" data-reveal>
          <div className="celeb-card">
            <span className="celeb-icon" style={{background:'rgba(232,115,90,0.12)'}}>{I.cake({size:24, color:'var(--coral)'})}</span>
            <h3>Anniversaires collaborateurs</h3>
            <p>Une attention simple, fiable et adaptée aux préférences déclarées.</p>
            <ul className="celeb-list">
              <li><I.check size={14} color="var(--forest)" stroke={2.4}/> Détection automatique des dates</li>
              <li><I.check size={14} color="var(--forest)" stroke={2.4}/> Préférences alimentaires prises en compte</li>
              <li><I.check size={14} color="var(--forest)" stroke={2.4}/> Message personnalisable par l'équipe</li>
            </ul>
          </div>
          <div className="celeb-card celeb-card-featured">
            <span className="celeb-icon" style={{background:'rgba(212,168,67,0.18)'}}>{I.trophy({size:24, color:'#8c6a1a'})}</span>
            <h3>Anniversaires de travail</h3>
            <p>Célébrez 1 an, 3 ans, 5 ans et plus avec des règles de budget et de message adaptées.</p>
            <ul className="celeb-list">
              <li><I.check size={14} color="var(--forest)" stroke={2.4}/> Budget par seniorité</li>
              <li><I.check size={14} color="var(--forest)" stroke={2.4}/> Validation manager si requise</li>
              <li><I.check size={14} color="var(--forest)" stroke={2.4}/> Reporting RH par trimestre</li>
            </ul>
          </div>
        </div>

        <div className="celeb-soon" data-reveal>
          <div className="soon-label"><I.spark size={14} color="var(--sage)" stroke={2}/> Extensions futures</div>
          <p>À construire avec les premiers clients, selon les besoins récurrents observés.</p>
          <div className="soon-chips">
            {["Onboarding","Promotions","Départs","Team wins","Moments de fin d'année","Client ou partner gifting"].map((s,i) => (
              <span key={i} className="soon-chip">{s}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .celeb-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 32px; }
        .celeb-card { background: white; border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 32px; transition: transform .25s ease, box-shadow .25s ease; }
        .celeb-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-card); }
        .celeb-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 16px; margin-bottom: 20px; }
        .celeb-card h3 { font-size: 22px; }
        .celeb-card > p { color: var(--muted); margin-top: 10px; font-size: 15px; line-height: 1.6; }
        .celeb-list { list-style: none; padding: 0; margin: 22px 0 0; display: flex; flex-direction: column; gap: 8px; }
        .celeb-list li { display: flex; align-items: center; gap: 10px; font-size: 14px; }
        .celeb-soon { background: var(--mint); border: 1px dashed var(--sage); border-radius: var(--radius-lg); padding: 24px 28px; }
        .soon-label { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--forest); font-weight: 600; }
        .celeb-soon p { color: var(--charcoal); margin-top: 10px; font-size: 14.5px; max-width: 720px; }
        .soon-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
        .soon-chip { padding: 6px 12px; border-radius: 999px; background: white; border: 1px solid var(--line); font-size: 13px; color: var(--muted); }
        @media (max-width: 820px) { .celeb-pair { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

/* ---------- Formats Section ---------- */
function Formats() {
  const formats = [
    {
      title: "Attention individuelle",
      icon: "gift",
      tone: "coral",
      image: "assets/cupcacke-jourj.png",
      imageAlt: "Visuel illustratif d'une pâtisserie individuelle",
      desc: "Une attention pensée pour un collaborateur précis, adaptée à son contexte et à ses préférences.",
      operates: [
        "Sélection du format adapté",
        "Coordination fournisseur",
        "Préférences alimentaires",
        "Livraison ou remise au bureau",
        "Suivi et récapitulatif",
      ],
      budget: "20–25 €",
      budgetUnit: "/ collaborateur célébré",
      budgetNote: "Selon volume, format et zone de livraison.",
    },
    {
      title: "Gâteau d'équipe",
      icon: "cake",
      tone: "gold",
      featured: true,
      image: "assets/fraisier-jourj.png",
      imageAlt: "Visuel illustratif d'un gâteau livré au bureau",
      desc: "Un moment collectif autour d'un gâteau ou assortiment livré pour célébrer un collaborateur avec son équipe.",
      operates: [
        "Planification de la date",
        "Validation manager si nécessaire",
        "Commande fournisseur",
        "Livraison au bon créneau",
        "Gestion des imprévus",
      ],
      budget: "75–120 €",
      budgetUnit: "/ célébration",
      budgetNote: "Selon taille, fournisseur, personnalisation et livraison.",
    },
    {
      title: "Box mensuelle",
      icon: "calendar",
      tone: "sage",
      image: "assets/JourJ-sweets.png",
      imageAlt: "Visuel illustratif d'une box mensuelle groupée",
      desc: "Une livraison groupée pour les anniversaires et anniversaires de travail du mois.",
      operates: [
        "Regroupement des moments",
        "Optimisation des livraisons",
        "Coordination fournisseur",
        "Budget maîtrisé",
        "Facturation simplifiée",
      ],
      budget: "20–30 €",
      budgetUnit: "/ collaborateur célébré",
      budgetNote: "Format recommandé pour réduire les coûts et simplifier l'opération.",
    },
  ];
  const toneBg = { coral: 'rgba(232,115,90,0.10)', gold: 'rgba(212,168,67,0.18)', sage: 'var(--sage-pale)' };
  const toneFg = { coral: 'var(--coral)', gold: '#8c6a1a', sage: 'var(--forest)' };
  return (
    <section id="formats" className="formats">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow"><span className="dot"/> Formats de pilote</span>
          <h2 style={{marginTop: 18}}>Choisissez le format adapté à votre culture d'entreprise.</h2>
          <p className="lead" style={{marginTop: 18, maxWidth: 780}}>
            Pendant le pilote, Jour J vous aide à tester le format le plus naturel pour vos équipes : attention individuelle, gâteau partagé ou box mensuelle. Chaque format inclut l'organisation opérationnelle du moment, pas seulement le produit livré.
          </p>
        </div>

        <div className="formats-grid" data-reveal>
          {formats.map((f,i) => (
            <article key={i} className={`format-card ${f.featured ? 'featured' : ''}`}>
              <div className="format-media">
                <img src={f.image} alt={f.imageAlt} loading="lazy" />
                <span className="format-media-caption">Visuel illustratif</span>
              </div>
              <div className="format-body">
                <span className="format-pill">Format de pilote</span>
                <div className="format-head">
                  <span className="format-icon" style={{ background: toneBg[f.tone], color: toneFg[f.tone] }}>
                    {I[f.icon]({size:18, color: toneFg[f.tone]})}
                  </span>
                  <h3>{f.title}</h3>
                </div>
                <p className="format-desc">{f.desc}</p>

                <div className="format-best-label">Ce que Jour J opère</div>
                <ul className="format-list">
                  {f.operates.map((b, j) => (
                    <li key={j}><I.check size={14} color="var(--forest)" stroke={2.4}/> {b}</li>
                  ))}
                </ul>

                <div className="format-budget">
                  <div className="fb-line">
                    <span className="fb-label">Budget indicatif opéré :</span>
                    {' '}{f.budget} {f.budgetUnit}
                  </div>
                  <div className="fb-note">{f.budgetNote}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="formats-note" data-reveal>
          <span className="fn-icon"><I.shield size={14} color="var(--muted)" stroke={2}/></span>
          <p>
            Ces montants sont des budgets indicatifs de <strong>service opéré</strong>, pas des prix catalogue de pâtisserie. Le tarif exact dépend du volume, du format, des contraintes alimentaires, du niveau de personnalisation et de la zone de livraison.
          </p>
        </div>
      </div>
      <style>{`
        .formats { background: var(--cream-deep); }
        .formats-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; align-items: stretch; }
        .format-card {
          background: white; border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .format-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-card); border-color: var(--line-strong); }
        .format-card.featured { border-color: var(--gold); box-shadow: 0 1px 0 rgba(28,28,28,0.04), 0 18px 44px -20px rgba(212,168,67,0.35); }

        .format-media {
          position: relative;
          aspect-ratio: 4 / 3;
          background: var(--cream);
          overflow: hidden;
        }
        .format-media img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .6s cubic-bezier(.2,.7,.2,1);
        }
        .format-card:hover .format-media img { transform: scale(1.03); }
        .format-media-caption {
          position: absolute;
          left: 12px; bottom: 12px;
          padding: 4px 10px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--charcoal);
          background: rgba(255,255,255,0.86);
          backdrop-filter: blur(4px);
          border-radius: 999px;
          border: 1px solid rgba(28,28,28,0.06);
        }

        .format-body {
          padding: 24px 28px 28px;
          display: flex; flex-direction: column;
          flex: 1;
        }
        .format-pill {
          align-self: flex-start;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--forest);
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 999px;
          background: var(--sage-pale);
          margin-bottom: 16px;
        }
        .format-card.featured .format-pill {
          background: rgba(212,168,67,0.18);
          color: #8c6a1a;
        }
        .format-head { display: flex; align-items: center; gap: 12px; }
        .format-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 38px; height: 38px; border-radius: 11px;
          flex: none;
        }
        .format-card h3 { color: var(--forest); font-size: 21px; letter-spacing: -0.02em; margin: 0; }
        .format-desc { color: var(--charcoal); font-size: 14.5px; line-height: 1.6; margin-top: 14px; }
        .format-best-label {
          margin-top: 22px;
          font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--muted); font-weight: 600;
        }
        .format-list { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-direction: column; gap: 8px; }
        .format-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--charcoal); line-height: 1.45; }
        .format-list li svg { margin-top: 3px; flex: none; }

        .format-budget {
          margin-top: auto;
          padding-top: 18px;
          border-top: 1px dashed var(--line);
          margin-top: 24px;
        }
        .fb-label {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 600;
          margin-right: 2px;
        }
        .fb-line {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.55;
        }
        .fb-note {
          margin-top: 6px;
          font-size: 12.5px;
          color: var(--muted);
          line-height: 1.5;
        }

        .formats-note {
          margin-top: 28px;
          display: flex; align-items: flex-start; gap: 14px;
          background: transparent; border: 1px dashed var(--line-strong);
          border-radius: var(--radius); padding: 16px 20px;
        }
        .fn-icon {
          flex: none;
          width: 28px; height: 28px; border-radius: 8px;
          background: rgba(28,28,28,0.04);
          display: inline-flex; align-items: center; justify-content: center;
          margin-top: 1px;
        }
        .formats-note p { color: var(--muted); font-size: 13.5px; line-height: 1.6; max-width: 920px; }
        .formats-note p strong { color: var(--charcoal); font-weight: 650; }

        @media (max-width: 980px) { .formats-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

window.Formats = Formats;

/* ---------- Branded customization examples ---------- */
function BrandedFormats() {
  const items = [
    { image: "assets/Doctolib-cupcakes-jourj.png", label: "Cupcakes personnalisés", alt: "Mockup conceptuel de cupcakes personnalisés dans une box Jour J — ne représente pas un client réel." },
    { image: "assets/mistral-jourj-cake.png",      label: "Gâteau d'équipe brandé", alt: "Mockup conceptuel de gâteau brandé livré au bureau — ne représente pas un client réel." },
    { image: "assets/qonto-jourj-donuts.png",      label: "Donuts personnalisés", alt: "Mockup conceptuel de donuts personnalisés dans une box Jour J — ne représente pas un client réel." },
  ];
  return (
    <section id="personnalisation" className="branded">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow"><span className="dot"/> Mockups conceptuels · événements d'équipe · à venir</span>
          <h2 style={{marginTop: 18}}>Des attentions à vos couleurs.</h2>
          <p className="lead" style={{marginTop: 18, maxWidth: 780}}>
            Plus tard, pour la gestion de vos événements d'équipe et moments forts, Jour J pourra proposer des attentions personnalisées aux couleurs de votre entreprise — pour des moments encore plus alignés avec votre culture et votre image.
          </p>
          <p style={{marginTop: 14, color: 'var(--muted)', maxWidth: 780, fontSize: 14}}>
            Les visuels ci-dessous sont des <strong style={{color:'var(--charcoal)'}}>mockups conceptuels</strong>. Les logos figurant sur les produits sont utilisés à titre purement illustratif et <strong style={{color:'var(--charcoal)'}}>ne reflètent aucune relation client</strong> ni partenariat avec ces marques.
          </p>
        </div>

        <div className="branded-grid" data-reveal>
          {items.map((it, i) => (
            <figure key={i} className="branded-card">
              <div className="branded-media">
                <img src={it.image} alt={it.alt} loading="lazy" />
                <span className="branded-tag">Mockup conceptuel</span>
              </div>
              <figcaption className="branded-label">{it.label}</figcaption>
            </figure>
          ))}
        </div>

        <p className="branded-note" data-reveal>
          Mockups conceptuels. Les marques visibles sur les produits sont utilisées uniquement à titre illustratif et ne sont pas clientes ni partenaires de Jour J. Disponibilité réelle selon format, volume et partenaire mobilisé.
        </p>
      </div>

      <style>{`
        .branded { background: var(--cream); }
        .branded-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }
        .branded-card {
          margin: 0;
          background: transparent;
          display: flex; flex-direction: column;
          gap: 14px;
        }
        .branded-media {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--cream-deep);
          border: 1px solid var(--line);
          box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset, 0 18px 36px -22px rgba(28, 36, 30, 0.20);
          transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s ease;
        }
        .branded-card:hover .branded-media {
          transform: translateY(-3px);
          box-shadow: 0 1px 0 rgba(255,255,255,0.6) inset, 0 26px 48px -22px rgba(28, 36, 30, 0.30);
        }
        .branded-media img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .6s cubic-bezier(.2,.7,.2,1);
        }
        .branded-card:hover .branded-media img { transform: scale(1.04); }
        .branded-tag {
          position: absolute;
          left: 12px; bottom: 12px;
          padding: 5px 10px;
          font-family: var(--font-mono);
          font-size: 9.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--charcoal);
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(4px);
          border-radius: 999px;
          border: 1px solid rgba(28,28,28,0.06);
        }
        .branded-label {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--forest);
          line-height: 1.4;
          padding: 0 4px;
        }
        .branded-note {
          margin-top: 32px;
          font-size: 13px;
          color: var(--muted);
          line-height: 1.55;
          max-width: 720px;
          font-style: italic;
        }

        @media (max-width: 980px) {
          .branded-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; }
        }
        @media (max-width: 620px) {
          .branded-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

window.BrandedFormats = BrandedFormats;

/* ---------- Supplier reliability ---------- */
function ParisOps() {
  const criteria = [
    {
      title: "Capacité B2B",
      desc: "Des partenaires capables de gérer des commandes récurrentes et de facturer proprement.",
      icon: "doc",
    },
    {
      title: "Qualité répétable",
      desc: "Pas seulement une belle vitrine : une qualité stable, semaine après semaine.",
      icon: "check",
    },
    {
      title: "Informations allergènes",
      desc: "Documentation fournisseur et processus clair pour éviter les substitutions risquées.",
      icon: "diet",
    },
    {
      title: "Plan de secours",
      desc: "En cas d'imprévu, Jour J doit pouvoir proposer une solution de remplacement.",
      icon: "shield",
    },
    {
      title: "Responsabilités claires",
      desc: "Qualité, livraison, retard, erreur ou remplacement doivent être cadrés.",
      icon: "filter",
    },
  ];
  return (
    <section id="fiabilite" className="suppliers">
      <div className="container">
        <div className="suppliers-head" data-reveal>
          <span className="eyebrow"><span className="dot"/> Fiabilité fournisseur</span>
          <h2 style={{marginTop: 18}}>Des fournisseurs choisis pour leur fiabilité,<br/>pas seulement pour leur image.</h2>
          <p className="lead" style={{marginTop: 18}}>
            Jour J travaille avec un nombre limité de partenaires capables de gérer des commandes B2B récurrentes, des informations allergènes, des créneaux de livraison et des processus de remplacement.
          </p>
        </div>

        <div className="suppliers-layout">
          <div className="suppliers-media" data-reveal>
            <figure className="proof">
              <div className="proof-frame">
                <img src="assets/cake-in-box-jourj.png" alt="Conditionnement Jour J : boîte de pâtisserie scellée, prête pour livraison B2B." loading="lazy" />
              </div>
              <figcaption className="proof-caption">
                <div className="proof-meta">
                  <span className="proof-kbd">REF</span>
                  <span className="proof-ref">JJ-PKG-01</span>
                </div>
                <div className="proof-rows">
                  <div className="proof-row">
                    <span className="proof-label">Conditionnement</span>
                    <span className="proof-value">Scellé · étiquette allergènes</span>
                  </div>
                  <div className="proof-row">
                    <span className="proof-label">Traçabilité</span>
                    <span className="proof-value">Lot · fournisseur · date</span>
                  </div>
                  <div className="proof-row">
                    <span className="proof-label">Statut</span>
                    <span className="proof-value ok"><span className="ok-dot"/> Validé pour commande B2B</span>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>

          <ul className="criteria" data-reveal>
            {criteria.map((c, i) => (
              <li key={i} className="criterion">
                <span className="cr-num">{String(i+1).padStart(2,'0')}</span>
                <span className="cr-icon">{I[c.icon]({size:16, color:'var(--forest)'})}</span>
                <div className="cr-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`
        .suppliers { background: var(--cream); }
        .suppliers-head { max-width: 820px; }
        .suppliers-head h2 { text-wrap: balance; }

        .suppliers-layout {
          margin-top: clamp(36px, 4.5vw, 56px);
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: clamp(28px, 4vw, 56px);
          align-items: start;
        }

        /* ----- Packaging proof (image card) ----- */
        .proof {
          margin: 0;
          background: white;
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          position: sticky;
          top: 92px;
        }
        .proof-frame {
          position: relative;
          aspect-ratio: 1 / 1;
          background: var(--cream-deep);
          overflow: hidden;
        }
        .proof-frame img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .proof-caption {
          padding: 18px 22px 20px;
          border-top: 1px solid var(--line);
          background: white;
        }
        .proof-meta {
          display: flex; align-items: center; gap: 8px;
          padding-bottom: 12px;
          margin-bottom: 12px;
          border-bottom: 1px dashed var(--line);
        }
        .proof-kbd {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          padding: 3px 7px;
          border-radius: 6px;
          background: var(--cream-deep);
          color: var(--muted);
          font-weight: 600;
        }
        .proof-ref {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--charcoal);
          letter-spacing: 0.04em;
        }
        .proof-rows { display: flex; flex-direction: column; gap: 8px; }
        .proof-row {
          display: flex; align-items: baseline; justify-content: space-between;
          gap: 14px;
          font-size: 13px;
        }
        .proof-label {
          color: var(--muted);
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .proof-value {
          color: var(--charcoal);
          font-weight: 500;
          text-align: right;
        }
        .proof-value.ok {
          display: inline-flex; align-items: center; gap: 6px;
          color: var(--forest);
          font-weight: 600;
        }
        .ok-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--forest);
          box-shadow: 0 0 0 3px rgba(45,90,61,0.14);
        }

        /* ----- Criteria list ----- */
        .criteria {
          list-style: none;
          margin: 0; padding: 0;
          display: flex; flex-direction: column;
          gap: 10px;
        }
        .criterion {
          background: white;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 20px 22px;
          display: grid;
          grid-template-columns: auto auto 1fr;
          gap: 16px;
          align-items: start;
          transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease;
        }
        .criterion:hover {
          border-color: var(--line-strong);
          box-shadow: var(--shadow-soft);
          transform: translateY(-1px);
        }
        .cr-num {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--muted);
          letter-spacing: 0.10em;
          padding-top: 4px;
          min-width: 24px;
        }
        .cr-icon {
          width: 32px; height: 32px;
          border-radius: 9px;
          background: var(--sage-pale);
          display: inline-flex; align-items: center; justify-content: center;
          flex: none;
        }
        .cr-body h3 {
          font-size: 16.5px;
          letter-spacing: -0.015em;
          color: var(--charcoal);
        }
        .cr-body p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.55;
          margin-top: 6px;
        }

        @media (max-width: 980px) {
          .suppliers-layout { grid-template-columns: 1fr; }
          .proof { position: static; max-width: 520px; }
        }
        @media (max-width: 540px) {
          .criterion { grid-template-columns: auto 1fr; }
          .cr-num { display: none; }
        }
      `}</style>
    </section>
  );
}

/* ---------- Integrations ---------- */
function Integrations() {
  const integ = [
    { name: "CSV",      tag: "Disponible au lancement", primary: true,  letter: "C" },
    { name: "Workday",  tag: "Extension future", letter: "W" },
    { name: "Lucca",    tag: "Extension future", letter: "L" },
    { name: "PayFit",   tag: "Extension future", letter: "P" },
    { name: "HiBob",    tag: "Extension future", letter: "H" },
    { name: "Personio", tag: "Extension future", letter: "P" },
    { name: "BambooHR", tag: "Extension future", letter: "B" },
    { name: "Autre SIRH", tag: "Étudié à la demande", letter: "+" },
  ];
  return (
    <section className="integ">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow"><span className="dot"/> Import des collaborateurs</span>
          <h2 style={{marginTop:18}}>Commencez par un simple CSV.</h2>
          <p className="lead">Au lancement, Jour J fonctionne avec un import CSV ou une liste sécurisée — aucune intégration SIRH requise pour démarrer un pilote.</p>
          <p style={{marginTop: 12, color:'var(--muted)', maxWidth: 720}}>
            Les intégrations SIRH sont une <strong style={{color:'var(--charcoal)', fontWeight: 600}}>extension future</strong>, étudiée à la demande après validation du pilote, selon votre environnement technique et vos besoins de sécurité.
          </p>
        </div>
        <div className="integ-grid" data-reveal>
          {integ.map((it,i) => (
            <div key={i} className={`integ-card ${it.primary ? 'primary':''}`}>
              <div className="integ-logo">{it.letter}</div>
              <div className="integ-name">{it.name}</div>
              <div className="integ-tag">{it.tag}</div>
            </div>
          ))}
        </div>
        <div className="integ-cta" data-reveal>
          <a href="#contact" className="btn btn-ghost">Tester un pilote en CSV <span className="arrow">→</span></a>
        </div>
      </div>
      <style>{`
        .integ-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 12px; }
        .integ-card { background: white; border: 1px solid var(--line); border-radius: var(--radius); padding: 22px 18px; display: flex; flex-direction: column; align-items: flex-start; gap: 10px; transition: transform .25s ease, box-shadow .25s ease; }
        .integ-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-card); }
        .integ-card.primary { background: var(--forest); color: var(--cream); border-color: var(--forest); }
        .integ-logo { width: 40px; height: 40px; border-radius: 10px; background: var(--cream-deep); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px; color: var(--forest); letter-spacing: -0.02em; }
        .integ-card.primary .integ-logo { background: rgba(255,255,255,0.12); color: var(--cream); }
        .integ-name { font-weight: 700; font-size: 16px; }
        .integ-tag { font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); padding: 4px 8px; border-radius: 999px; background: var(--cream-deep); }
        .integ-card.primary .integ-tag { background: rgba(212,168,67,0.20); color: var(--gold); }
        .integ-cta { margin-top: 28px; }
        @media (max-width: 980px) { .integ-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 540px) { .integ-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>
    </section>
  );
}

/* ---------- Trust / GDPR ---------- */
function Trust() {
  const items = [
    { label: "Données minimales", icon: "filter", desc: "Nous ne collectons que les informations nécessaires à la préparation des célébrations." },
    { label: "Accès par rôle", icon: "lock", desc: "L'équipe RH configure les règles. Les managers valident uniquement les célébrations de leur équipe." },
    { label: "Hébergement européen", icon: "shield", desc: "Vos données restent stockées chez des hébergeurs européens conformes aux exigences RGPD." },
    { label: "Préférences alimentaires encadrées", icon: "diet", desc: "Utilisées uniquement pour adapter les commandes et éviter les erreurs alimentaires." },
    { label: "Suppression sur demande", icon: "trash", desc: "Vos données peuvent être supprimées à tout moment, en fin de pilote ou de contrat." },
    { label: "DPA disponible", icon: "doc", desc: "Un accord de traitement des données vous est fourni dès la phase pilote." },
  ];
  return (
    <section className="trust">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow"><span className="dot"/> Confiance</span>
          <h2 style={{marginTop:18}}>Pensé pour les données RH.</h2>
          <p className="lead">
            Jour J traite uniquement les données nécessaires à l'organisation des célébrations : identité professionnelle, dates utiles, équipe, manager, bureau, préférences alimentaires et historique. Rien de plus.
          </p>
        </div>
        <div className="trust-grid">
          {items.map((it,i) => (
            <div key={i} className="trust-card" data-reveal>
              <span className="trust-icon">{I[it.icon]({size:18, color:'var(--forest)'})}</span>
              <div>
                <div className="trust-label">{it.label}</div>
                <div className="trust-desc">{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="trust-meta" data-reveal>
          <span><I.shield size={14} color="var(--forest)" stroke={2}/> Connexion sécurisée</span>
          <span><I.shield size={14} color="var(--forest)" stroke={2}/> Conformité RGPD</span>
          <span><I.doc size={14} color="var(--forest)" stroke={2}/> DPA disponible pour les clients pilotes</span>
        </div>
      </div>
      <style>{`
        .trust-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
        .trust-card { display: flex; gap: 14px; align-items: flex-start; background: white; border: 1px solid var(--line); border-radius: var(--radius); padding: 22px; }
        .trust-icon { width: 40px; height: 40px; border-radius: 12px; background: var(--sage-pale); display: flex; align-items: center; justify-content: center; flex: none; }
        .trust-label { font-weight: 700; font-size: 16px; }
        .trust-desc { color: var(--muted); font-size: 13.5px; line-height: 1.55; margin-top: 4px; }
        .trust-meta { margin-top: 28px; display: flex; gap: 18px; flex-wrap: wrap; padding: 16px 20px; background: var(--cream-deep); border-radius: 14px; font-size: 13px; color: var(--charcoal); }
        .trust-meta span { display: inline-flex; align-items: center; gap: 8px; }
        @media (max-width: 720px) { .trust-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

/* ---------- Pricing — Pilot Offer ---------- */
function Pricing() {
  const pilotIncludes = [
    "Import CSV de vos collaborateurs",
    "Configuration de vos règles internes",
    "Couverture anniversaires + anniversaires de travail",
    "Validation manager par email",
    "Coordination des fournisseurs",
    "Suivi de livraison et gestion d'incidents",
    "Feedback collaborateur post-célébration",
    "Récapitulatif mensuel et bilan de fin de pilote",
  ];
  return (
    <section id="tarifs" className="pricing">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow"><span className="dot"/> Pilote</span>
          <h2 style={{marginTop:18}}>Une offre pilote claire, sans engagement long.</h2>
          <p className="lead">Trois mois pour valider la valeur sur vos vraies célébrations, dans votre vrai contexte.</p>
        </div>

        <div className="pilot-wrap" data-reveal>
          <div className="pilot-card">
            <span className="plan-badge">Offre de lancement</span>
            <div className="pilot-name">Pilote 3 mois</div>
            <div className="pilot-tag">Démarrez sur vos vraies célébrations, avec un accompagnement dédié.</div>
            <div className="pilot-price">
              <span className="price-num">Tarif sur mesure</span>
            </div>
            <div className="pilot-note">Forfait pilote défini selon la taille de l'équipe, le périmètre couvert et le volume estimé. Coût des célébrations livrées facturé au réel.</div>
            <ul className="pilot-list">
              {pilotIncludes.map((inc,j) => (
                <li key={j}><I.check size={15} color="var(--gold)" stroke={2.4}/> {inc}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-coral pilot-cta">Tester un pilote <span className="arrow">→</span></a>
            <p className="pilot-after">À l'issue du pilote, vous décidez : poursuivre, ajuster le périmètre, ou s'arrêter là.</p>
          </div>

          <div className="pilot-future">
            <div className="pf-title">Plans à venir</div>
            <p className="pf-sub">Une fois le pilote validé, vous choisissez l'offre qui correspond à votre équipe.</p>
            <div className="pf-list">
              <div className="pf-row"><strong>Starter</strong><span>Petites équipes</span></div>
              <div className="pf-row"><strong>Growth</strong><span>Scale-ups</span></div>
              <div className="pf-row"><strong>Sur mesure</strong><span>Multi-sites · SIRH</span></div>
            </div>
            <div className="pf-foot">Tarifs précisés à l'issue du pilote.</div>
          </div>
        </div>
      </div>
      <style>{`
        .pilot-wrap { display: grid; grid-template-columns: 1.4fr 1fr; gap: 16px; align-items: stretch; }
        .pilot-card { position: relative; background: var(--forest); color: var(--cream); border-radius: var(--radius-lg); padding: 36px; box-shadow: 0 24px 48px -24px rgba(45,90,61,0.45); }
        .plan-badge { position: absolute; top: -12px; left: 36px; background: var(--coral); color: white; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; padding: 5px 12px; border-radius: 999px; text-transform: uppercase; }
        .pilot-name { font-size: 14px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.8; }
        .pilot-tag { font-size: 16px; line-height: 1.5; margin-top: 8px; opacity: 0.8; max-width: 460px; }
        .pilot-price { display: flex; align-items: baseline; gap: 10px; margin: 24px 0 4px; flex-wrap: wrap; }
        .price-from { font-size: 14px; opacity: 0.65; }
        .price-num { font-size: 56px; font-weight: 700; letter-spacing: -0.03em; }
        .price-period { font-size: 14px; opacity: 0.6; }
        .pilot-note { font-size: 13px; opacity: 0.65; }
        .pilot-list { list-style: none; padding: 0; margin: 24px 0; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 16px; }
        .pilot-list li { display: flex; align-items: center; gap: 10px; font-size: 14px; }
        .pilot-cta { background: var(--coral); color: white; margin-top: 8px; }
        .pilot-cta:hover { background: #d96448; }
        .pilot-after { margin-top: 18px; font-size: 12.5px; opacity: 0.65; max-width: 520px; }
        .pilot-future { background: white; border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 28px; display: flex; flex-direction: column; }
        .pf-title { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); }
        .pf-sub { color: var(--muted); font-size: 13.5px; line-height: 1.55; margin-top: 10px; }
        .pf-list { display: flex; flex-direction: column; gap: 8px; margin-top: 20px; }
        .pf-row { display: flex; justify-content: space-between; align-items: center; padding: 14px 16px; background: var(--cream); border-radius: 12px; font-size: 14px; }
        .pf-row span { color: var(--muted); font-size: 13px; }
        .pf-foot { margin-top: auto; padding-top: 18px; font-size: 12px; color: var(--muted); }
        @media (max-width: 980px) { .pilot-wrap { grid-template-columns: 1fr; } .pilot-list { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

/* ---------- Gatherings (emotional proof) ---------- */
function Gatherings() {
  return (
    <section className="gatherings">
      <div className="container">
        <div className="gather-head" data-reveal>
          <span className="eyebrow"><span className="dot"/> Moments d'équipe</span>
          <h2 style={{marginTop: 18}}>Des moments qui rassemblent.</h2>
          <p className="lead" style={{marginTop: 18}}>
            Au-delà du produit, Jour J aide les équipes à créer des moments simples, chaleureux et bien organisés autour des anniversaires et anniversaires de travail.
          </p>
        </div>

        <div className="gather-grid" data-reveal>
          <figure className="gather-card hero tilt-l">
            <div className="polaroid-photo">
              <img src="assets/gathering-sweets.jourj.png" alt="Équipe parisienne réunie autour d'une box de pâtisseries Jour J pour célébrer un collaborateur." loading="lazy" />
            </div>
            <figcaption className="polaroid-caption">
              <span className="cap-title">Anniversaire de Clara</span>
              <span className="cap-date">14 · 03</span>
            </figcaption>
          </figure>
          <figure className="gather-card tilt-r">
            <div className="polaroid-photo">
              <img src="assets/gatherings-cookies-jourj.png" alt="Collègues partageant des cookies Jour J autour d'une table." loading="lazy" />
            </div>
            <figcaption className="polaroid-caption">
              <span className="cap-title">Cookies du vendredi</span>
              <span className="cap-date">07 · 06</span>
            </figcaption>
          </figure>
          <figure className="gather-card tilt-l-sm">
            <div className="polaroid-photo">
              <img src="assets/gathering-jourJ.png" alt="Équipe partageant un gâteau Jour J lors d'un anniversaire de travail." loading="lazy" />
            </div>
            <figcaption className="polaroid-caption">
              <span className="cap-title">5 ans chez Notos</span>
              <span className="cap-date">22 · 09</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <style>{`
        .gatherings {
          background: var(--cream);
          padding-top: clamp(40px, 5vw, 64px);
          padding-bottom: clamp(40px, 5vw, 64px);
        }
        .gather-head {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }
        .gather-head h2 { text-wrap: balance; }
        .gather-head .lead { text-wrap: pretty; }

        .gather-grid {
          margin-top: clamp(36px, 4vw, 56px);
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          grid-template-rows: auto auto;
          gap: clamp(16px, 2vw, 28px);
          max-width: 880px;
          margin-left: auto;
          margin-right: auto;
        }
        .gather-card {
          margin: 0;
          background: #fdfcf8;
          border-radius: 4px;
          padding: 10px 10px 32px;
          box-shadow:
            0 1px 0 rgba(255,255,255,0.9) inset,
            0 1px 1px rgba(28, 28, 28, 0.04),
            0 12px 24px -12px rgba(28, 36, 30, 0.22),
            0 26px 44px -22px rgba(28, 36, 30, 0.18);
          transition: transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s ease;
          display: flex; flex-direction: column;
          will-change: transform;
        }
        .gather-card.tilt-l    { transform: rotate(-2.2deg); }
        .gather-card.tilt-r    { transform: rotate(2.6deg); }
        .gather-card.tilt-l-sm { transform: rotate(-1.6deg); }
        .gather-card:hover {
          transform: rotate(0deg) translateY(-3px);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.9) inset,
            0 1px 1px rgba(28, 28, 28, 0.04),
            0 18px 34px -12px rgba(28, 36, 30, 0.30),
            0 36px 56px -22px rgba(28, 36, 30, 0.22);
          z-index: 2;
        }
        .polaroid-photo {
          background: var(--cream-deep);
          overflow: hidden;
          aspect-ratio: 4 / 3;
        }
        .polaroid-photo img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(0.96) contrast(0.98);
          transition: transform .8s cubic-bezier(.2,.7,.2,1);
        }
        .gather-card:hover .polaroid-photo img { transform: scale(1.03); }
        .polaroid-caption {
          padding: 10px 4px 0;
          display: flex; align-items: baseline; justify-content: space-between;
          gap: 10px;
        }
        .cap-title {
          font-family: 'Caveat', 'Brush Script MT', cursive;
          font-size: 17px;
          color: var(--charcoal);
          line-height: 1;
          letter-spacing: -0.005em;
        }
        .cap-date {
          font-family: var(--font-mono);
          font-size: 9.5px;
          color: var(--muted);
          letter-spacing: 0.08em;
          white-space: nowrap;
        }
        .gather-card.hero {
          grid-row: span 2;
          grid-column: 1;
          padding: 12px 12px 38px;
        }
        .gather-card.hero .polaroid-photo { aspect-ratio: 4 / 5; }
        .gather-card.hero .cap-title { font-size: 20px; }
        .gather-card.hero .polaroid-caption { padding-top: 12px; padding-left: 6px; padding-right: 6px; }

        @media (max-width: 820px) {
          .gather-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            gap: 20px;
            max-width: 560px;
          }
          .gather-card.hero {
            grid-row: auto;
            grid-column: 1 / -1;
            max-width: 360px;
            justify-self: center;
          }
          .gather-card.hero .polaroid-photo { aspect-ratio: 4 / 3; }
        }
        @media (max-width: 520px) {
          .gather-grid { grid-template-columns: 1fr; max-width: 320px; }
          .gather-card.hero { grid-column: auto; }
        }
      `}</style>
    </section>
  );
}

window.Gatherings = Gatherings;

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section id="contact" className="cta-final">
      <div className="container cta-wrap" data-reveal>
        <div className="cta-bg">
          <div className="cta-glow g1"/>
          <div className="cta-glow g2"/>
        </div>
        <div className="cta-layout">
          <div className="cta-inner">
            <span className="eyebrow" style={{background:'rgba(212,168,67,0.20)', color: 'var(--gold)'}}><span className="dot" style={{background:'var(--gold)'}}/> Démarrage en 2026</span>
            <h2 style={{marginTop: 22, color: 'var(--cream)'}}>Commencez par vos prochaines célébrations.</h2>
            <p className="lead" style={{color: 'rgba(250,247,242,0.78)', marginTop: 22, maxWidth: 560}}>
              Si votre équipe gère encore les anniversaires ou anniversaires de travail avec des tableurs, des rappels et des commandes de dernière minute, Jour J peut prendre le relais sur un pilote simple de 3 mois.
            </p>
            <div className="cta-actions">
              <a href="#" className="btn btn-coral">Tester un pilote <span className="arrow">→</span></a>
              <a href="#" className="btn btn-ghost-light">Échanger sur mon besoin</a>
            </div>
            <ul className="cta-reassure">
              <li><span className="r-dot"/> Paris uniquement au lancement</li>
              <li><span className="r-dot"/> Startups et scaleups · 100–300 collaborateurs</li>
              <li><span className="r-dot"/> Anniversaires et anniversaires de travail</li>
            </ul>
          </div>

          <figure className="cta-visual">
            <div className="cta-visual-frame">
              <img src="assets/cookies-jourj.png" alt="Boîte Jour J de cookies artisanaux, prête pour une livraison B2B." loading="lazy" />
            </div>
            <figcaption className="cta-visual-cap">
              <span className="cvc-dot"/>
              <span className="cvc-text">Box Jour J · expédiée semaine 12</span>
            </figcaption>
          </figure>
        </div>
      </div>
      <style>{`
        .cta-final { padding: clamp(72px, 9vw, 128px) 0; }
        .cta-wrap { position: relative; background: var(--forest); border-radius: var(--radius-xl); padding: clamp(48px, 6vw, 80px) clamp(28px, 4.5vw, 64px); overflow: hidden; color: var(--cream); }
        .cta-bg { position: absolute; inset: 0; pointer-events: none; }
        .cta-glow { position: absolute; border-radius: 50%; filter: blur(80px); }
        .cta-glow.g1 { width: 360px; height: 360px; background: rgba(232,115,90,0.30); top: -10%; right: -10%; }
        .cta-glow.g2 { width: 280px; height: 280px; background: rgba(212,168,67,0.22); bottom: -10%; left: 10%; }

        .cta-layout {
          position: relative;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
        }
        .cta-inner { max-width: 620px; }

        .cta-actions { display: flex; gap: 12px; margin-top: 32px; flex-wrap: wrap; }
        .btn-ghost-light { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); color: var(--cream); }
        .btn-ghost-light:hover { background: rgba(255,255,255,0.14); }

        .cta-reassure {
          list-style: none; padding: 0; margin: 28px 0 0;
          display: flex; flex-direction: column; gap: 8px;
          color: rgba(250,247,242,0.68);
          font-size: 13px;
          font-weight: 500;
        }
        .cta-reassure li { display: flex; align-items: center; gap: 10px; }
        .r-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--gold);
          opacity: 0.85;
          flex: none;
        }

        .cta-visual {
          margin: 0;
          display: flex; flex-direction: column;
          gap: 14px;
          align-self: stretch;
          justify-content: center;
        }
        .cta-visual-frame {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--cream-deep);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.10) inset,
            0 28px 60px -22px rgba(0,0,0,0.45);
          aspect-ratio: 1 / 1;
        }
        .cta-visual-frame img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .cta-visual-cap {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: rgba(250,247,242,0.65);
          padding-left: 4px;
        }
        .cvc-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--gold);
          box-shadow: 0 0 0 3px rgba(212,168,67,0.20);
        }

        @media (max-width: 980px) {
          .cta-layout { grid-template-columns: 1fr; }
          .cta-visual { max-width: 480px; }
          .cta-visual-frame { aspect-ratio: 4 / 3; }
        }
      `}</style>
    </section>
  );
}

window.SocialProof = SocialProof;
window.ProblemSection = ProblemSection;
window.SolutionSection = SolutionSection;
window.HowItWorks = HowItWorks;
window.Celebrations = Celebrations;
window.ParisOps = ParisOps;
window.Integrations = Integrations;
window.Trust = Trust;
window.Pricing = Pricing;
window.FinalCTA = FinalCTA;
