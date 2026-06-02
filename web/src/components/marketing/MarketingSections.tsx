"use client";

import { useState } from "react";
import { I, type IconName } from "./icons";
import "./marketing-sections.css";

// All major content sections — refocused on launch scope: birthdays + work anniversaries


/* ---------- Social Proof Strip ---------- */
export function SocialProof() {
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
      
    </section>
  );
}

/* ---------- Problem Section ---------- */
export function ProblemSection() {
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
                <span className="pc-icon">{I[c.icon as IconName]({size:18, color:'var(--coral)'})}</span>
                <div className="pc-text">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}

/* ---------- Solution / Operational Workflow ---------- */
export function SolutionSection() {
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
      
    </section>
  );
}

/* ---------- How It Works ---------- */
export function HowItWorks() {
  const [active, setActive] = useState(0);
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

      
    </section>
  );
}

/* ---------- Supported Celebrations ---------- */
export function Celebrations() {
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
      
    </section>
  );
}

/* ---------- Formats Section ---------- */
export function Formats() {
  const formats = [
    {
      title: "Attention individuelle",
      icon: "gift",
      tone: "coral",
      image: "/assets/cupcacke-jourj.png",
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
      image: "/assets/fraisier-jourj.png",
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
      image: "/assets/JourJ-sweets.png",
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
  type Tone = keyof typeof toneFg;
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
                  <span className="format-icon" style={{ background: toneBg[f.tone as Tone], color: toneFg[f.tone as Tone] }}>
                    {I[f.icon as IconName]({size:18, color: toneFg[f.tone as Tone]})}
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
      
    </section>
  );
}


/* ---------- Branded customization examples ---------- */
export function BrandedFormats() {
  const items = [
    { image: "/assets/Doctolib-cupcakes-jourj.png", label: "Cupcakes personnalisés", alt: "Mockup conceptuel de cupcakes personnalisés dans une box Jour J — ne représente pas un client réel." },
    { image: "/assets/mistral-jourj-cake.png",      label: "Gâteau d'équipe brandé", alt: "Mockup conceptuel de gâteau brandé livré au bureau — ne représente pas un client réel." },
    { image: "/assets/qonto-jourj-donuts.png",      label: "Donuts personnalisés", alt: "Mockup conceptuel de donuts personnalisés dans une box Jour J — ne représente pas un client réel." },
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

      
    </section>
  );
}



/* ---------- Supplier reliability ---------- */
export function ParisOps() {
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
                <img src="/assets/cake-in-box-jourj.png" alt="Conditionnement Jour J : boîte de pâtisserie scellée, prête pour livraison B2B." loading="lazy" />
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
                <span className="cr-icon">{I[c.icon as IconName]({size:16, color:'var(--forest)'})}</span>
                <div className="cr-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </section>
  );
}

/* ---------- Integrations ---------- */
export function Integrations() {
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
      
    </section>
  );
}

/* ---------- Trust / GDPR ---------- */
export function Trust() {
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
              <span className="trust-icon">{I[it.icon as IconName]({size:18, color:'var(--forest)'})}</span>
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
      
    </section>
  );
}

/* ---------- Pricing — Pilot Offer ---------- */
export function Pricing() {
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
      
    </section>
  );
}

/* ---------- Gatherings (emotional proof) ---------- */
export function Gatherings() {
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
              <img src="/assets/gathering-sweets.jourj.png" alt="Équipe parisienne réunie autour d'une box de pâtisseries Jour J pour célébrer un collaborateur." loading="lazy" />
            </div>
            <figcaption className="polaroid-caption">
              <span className="cap-title">Anniversaire de Clara</span>
              <span className="cap-date">14 · 03</span>
            </figcaption>
          </figure>
          <figure className="gather-card tilt-r">
            <div className="polaroid-photo">
              <img src="/assets/gatherings-cookies-jourj.png" alt="Collègues partageant des cookies Jour J autour d'une table." loading="lazy" />
            </div>
            <figcaption className="polaroid-caption">
              <span className="cap-title">Cookies du vendredi</span>
              <span className="cap-date">07 · 06</span>
            </figcaption>
          </figure>
          <figure className="gather-card tilt-l-sm">
            <div className="polaroid-photo">
              <img src="/assets/gathering-jourJ.png" alt="Équipe partageant un gâteau Jour J lors d'un anniversaire de travail." loading="lazy" />
            </div>
            <figcaption className="polaroid-caption">
              <span className="cap-title">5 ans chez Notos</span>
              <span className="cap-date">22 · 09</span>
            </figcaption>
          </figure>
        </div>
      </div>

      
    </section>
  );
}



/* ---------- Final CTA ---------- */
export function FinalCTA() {
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
              <a href="#contact" className="btn btn-coral">Tester un pilote <span className="arrow">→</span></a>
              <a href="#contact" className="btn btn-ghost-light">Échanger sur mon besoin</a>
            </div>
            <ul className="cta-reassure">
              <li><span className="r-dot"/> Paris uniquement au lancement</li>
              <li><span className="r-dot"/> Startups et scaleups · 100–300 collaborateurs</li>
              <li><span className="r-dot"/> Anniversaires et anniversaires de travail</li>
            </ul>
          </div>

          <figure className="cta-visual">
            <div className="cta-visual-frame">
              <img src="/assets/cookies-jourj.png" alt="Boîte Jour J de cookies artisanaux, prête pour une livraison B2B." loading="lazy" />
            </div>
            <figcaption className="cta-visual-cap">
              <span className="cvc-dot"/>
              <span className="cvc-text">Box Jour J · expédiée semaine 12</span>
            </figcaption>
          </figure>
        </div>
      </div>
      
    </section>
  );
}











