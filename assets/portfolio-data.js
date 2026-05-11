/* ── PALETTE ─────────────────────────────────────────── */
var C={
  bg:'rgba(248,243,234,.92)',
  bg1:'#ffffff',
  bg2:'rgba(255,255,255,.88)',
  bg3:'rgba(240,233,220,.9)',
  text:'#1a1614',
  muted:'#6b5f56',
  coral:'#ff6b4a',
  green:'#00875a',
  yellow:'#e8a800',
  purple:'#7c5ce7',
  border:'rgba(26,22,20,.09)',
  border2:'rgba(26,22,20,.16)',
};

/* ── DATA ─────────────────────────────────────────────── */
var PROJECTS_PERSO=[
  {id:'cine',name:'CinéAppMovies',badge:'Projet Perso',status:'En ligne',emoji:'🎬',color:'#E50914',colorBg:'rgba(229,9,20,.1)',img:'uploads/pasted-1777140233564-0.png',cat:'Web · Entertainment',tagline:'Tous tes films, une seule décision.',stack:['TMDB API','React','Filtres temps réel'],problem:'Les users jonglent entre 4 apps pour choisir quoi regarder — friction à chaque étape.',hypothesis:'Agréger tout en un seul endroit réduit le temps de décision de >50%.',build:'TMDB API + React + filtres dynamiques par plateforme, genre, durée',outcome:'3 redesigns majeurs du système de filtres avant de trouver le bon flow. Utilisé par mes proches — pas encore de traction au-delà, mais c\'est assez pour continuer à itérer.',screenshots:['uploads/screens/CINEAPPMOVIES/CINEAPP SCREEN 1.png','uploads/screens/CINEAPPMOVIES/cineappsCreen2.png','uploads/screens/CINEAPPMOVIES/ScreenCliccarte.png'],github:'https://github.com/Deady31/Cineappmovies'},
  {id:'fooder',name:'Fooder',badge:'Projet Perso',status:'En cours',emoji:'🍜',color:'#22C55E',colorBg:'rgba(34,197,94,.1)',img:'uploads/pasted-1777140311412-0.png',cat:'Mobile · Food',tagline:'Décide en 30 secondes. Swipe, match, mange.',stack:['React Native','Géolocalisation','Swipe UX'],problem:'Choisir un restaurant prend en moyenne 15 minutes entre les apps. Trop d\'options, interfaces lourdes, décision jamais satisfaisante.',hypothesis:'Une décision binaire par card réduit la charge cognitive vs une liste de 50 restos et génère un engagement supérieur.',build:'React Native + géoloc + swipe gestures + filtre budget/cuisine. UX inspirée du pattern Tinder appliqué à la découverte locale.',outcome:'15 personnes de mon entourage testées. Concept compris en 10 secondes par tout le monde. Le gain sur le temps de décision est réel — empirique, pas analytique.',screenshots:['uploads/screens/APPFOODER SCREEN/01-onboarding.png','uploads/screens/APPFOODER SCREEN/01b-onboarding-cta.png','uploads/screens/APPFOODER SCREEN/02-swipe-deck.png','uploads/screens/APPFOODER SCREEN/03-filters-drawer.png','uploads/screens/APPFOODER SCREEN/04-wishlist.png','uploads/screens/APPFOODER SCREEN/05-detail-modal.png','uploads/screens/APPFOODER SCREEN/05b-detail-modal-menu.png'],github:'https://github.com/Deady31'},
  {id:'saas',name:'Invoicity',badge:'Projet Perso',status:'En cours',emoji:'💼',color:'#6366F1',colorBg:'rgba(99,102,241,.1)',img:'uploads/screens/Plbomberie/SCREEN 2 PLOMBIERAPP.png',cat:'Mobile · Artisans',tagline:'J\'ai buildé une app pour mon tonton. Il méritait mieux qu\'Excel.',stack:['Mobile-first','Devis PDF','Gestion clients'],problem:'Mon oncle artisan plombier passait ses soirées à jongler entre des carnets, des mails et des fichiers Excel pour ses devis et sa compta client. Une paperasse chronophage qui l\'épuisait alors qu\'il aurait juste voulu se reposer après ses chantiers.',hypothesis:'Un outil ultra-simple, taillé pour lui — pas pour une PME de 50 personnes — lui permettrait de gérer ses devis en quelques taps et de les envoyer directement en PDF sans sortir du canapé.',build:'Application mobile-first avec création de devis en 3 étapes, génération PDF téléchargeable, carnet clients, et suivi du statut des devis (en attente / accepté / refusé). Interface pensée pour quelqu\'un qui n\'est pas à l\'aise avec les outils numériques.',outcome:'Mon tonton l\'utilise. Il m\'a dit "c\'est la première fois qu\'un truc comme ça me semble fait pour moi." C\'est le meilleur feedback produit que j\'aie jamais reçu.',sections:[{label:"L'histoire",text:"Mon tonton est plombier. Après ses chantiers, au lieu de se reposer, il jonglait entre carnets, mails et Excel pour ses devis. Ça l'épuisait — il me l'avait dit plusieurs fois.",isOutcome:false},{label:"Ce que j'ai voulu faire",text:"Pas une app pour PME de 50 personnes. Une app pour lui. Ultra-simple, pensée pour quelqu'un pas à l'aise avec le numérique — créer un devis en 3 étapes, l'envoyer en PDF sans sortir du canapé.",isOutcome:false},{label:"Ce que ça a donné",text:"Mon tonton l'utilise. Il m'a dit \"c'est la première fois qu'un truc comme ça me semble fait pour moi.\" C'est le meilleur feedback produit que j'aie jamais reçu.",isOutcome:true}],screenshots:['uploads/screens/Plbomberie/SCREEN 1 PLOMBIERAPP.png','uploads/screens/Plbomberie/SCREEN 2 PLOMBIERAPP.png','uploads/screens/Plbomberie/SCREEN 3 PLOMBIER APP.png','uploads/screens/Plbomberie/SCREEN 4 APP PLOMBIER.png'],github:'https://github.com/Deady31'},
  {id:'ow',name:'Overwatch Nexus',badge:'Projet Perso · AI',status:'En ligne',emoji:'🤖',color:'#7C5CE7',colorBg:'rgba(124,92,231,.1)',img:'uploads/pasted-1777143694753-0.png',cat:'Web · Gaming · AI',tagline:'Le counter parfait en < 3 secondes.',stack:['Claude API','AI','React'],problem:'En lobby, 30s max pour trouver le bon counter — info dispersée sur des sites lents.',hypothesis:'Un agent IA avec domain expertise bat n\'importe quel wiki statique sur la vitesse.',build:'Claude API + prompts co-designés avec joueurs + interface native',outcome:'< 3s de réponse. Premier produit IA live.',screenshots:['uploads/screens/OVERWATCH SCREEN/1_enemy-composition-analysis.png','uploads/screens/OVERWATCH SCREEN/2_recommended-counters.png','uploads/screens/OVERWATCH SCREEN/3_map-based-recommendations.png','uploads/screens/OVERWATCH SCREEN/4_detailed-hero-stats.png'],github:'https://github.com/Deady31/Overwatch-Nexus'},

];

var PROJECTS_PRO=[
  {id:'shippingbo_ai',name:'AI-Powered Features — Shippingbo',badge:'Shippingbo · Feature',status:'En cours',emoji:'🤖',color:'#ff6b4a',colorBg:'rgba(255,107,74,.1)',img:'uploads/Logo%20divers/Shippingbo%20logo.jfif',cat:'SaaS B2B · IA · Logistique',tagline:'Analyse data, agent conversationnel, reco commandes, ABC catalogue.',stack:['LLM','Agent IA','Vector DB','Recommandation','Data analyse','Product Management'],
   problem:'Les opérateurs logistique perdaient des heures sur des tâches répétitives : analyser des exports data, répondre aux tickets support, identifier les commandes à risque, auditer le catalogue produit.',
   hypothesis:'4 features IA ciblées — chacune avec une valeur mesurable — éliminent ces frictions et créent un avantage compétitif fort sur le marché SaaS logistique.',
   build:'① Miranda IA — chatbot conversationnel logistique (questions en langage naturel, analyses automatiques, navigation data) ② Audit IA — génération automatique d\'audits business (ventes, produits, retours, transports) ③ Classes de vente IA — classification Pareto ABCD des produits par rotation ④ Détection commandes identiques — identification automatique des doublons. 137 tickets rédigés au total sur 9 mois.',
   outcome:'−30% tickets Tier 1 dès la bêta. Feature team IA pilotée de 0 à la production en 9 mois. Première expérience IA B2B à impact direct et mesurable sur les métriques support.'},
  {id:'shippingbo_tiktok',name:'Connecteur TikTok Shop',badge:'Shippingbo · Feature',status:'En cours',emoji:'📦',color:'#FF0050',colorBg:'rgba(255,0,80,.08)',img:'uploads/Tiktok.jpg',cat:'SaaS B2B · Intégration API · Partnership',tagline:'Intégration officielle TikTok Shop en partenariat.',stack:['TikTok Shop API','Schémas API','Partenariat','Marketing','Coordination'],
   problem:'Les e-commerçants utilisant Shippingbo devaient gérer TikTok Shop manuellement — aucune synchronisation avec leur flux logistique, double saisie, erreurs fréquentes.',
   hypothesis:'Une intégration native TikTok Shop en statut partenaire officiel ouvre un segment e-commerce en forte croissance et différencie Shippingbo sur un canal stratégique.',
   build:'Définition des schémas API d\'intégration. Montage et soumission du dossier de candidature au programme partenaire TikTok Shop. Coordination avec l\'équipe marketing pour les visuels et la communication de lancement.',
   outcome:'Intégration TikTok Shop livrée en statut de partenaire officiel. Nouveau canal e-commerce couvert nativement. Coordination cross-fonctionnelle (tech, marketing, CSM) menée de bout en bout.'},
  {id:'shippingbo_modules',name:'Page Modules & Extensions',badge:'Shippingbo · Feature',status:'En cours',emoji:'🧩',color:'#6366F1',colorBg:'rgba(99,102,241,.1)',img:'uploads/Logo%20divers/Shippingbo%20logo.jfif',cat:'SaaS B2B · Headless CMS · Product',tagline:'Page modules sur Directus, 2 devs pilotés, content autonome.',stack:['Directus','Headless CMS','Product Management','UI Design','Marketing'],
   problem:'La page modules existante était statique et entièrement dépendante des devs — chaque mise à jour de contenu nécessitait un déploiement technique complet.',
   hypothesis:'Migrer sur un CMS headless (Directus) permet aux équipes non-techniques de gérer le contenu autonomement et libère les devs pour des tâches à plus haute valeur.',
   build:'Coordination de 2 développeurs sur la migration Directus. Rédaction des specs fonctionnelles et suivi des itérations UI. Pilotage de la production des visuels marketing pour chaque module partenaire.',
   outcome:'Page modules entièrement autonome, mise à jour sans déploiement. Gain de vélocité notable côté content et marketing. Architecture scalable pour les futurs modules.'},
  {id:'shippingbo_ux',name:'Refonte Interface Legacy',badge:'Shippingbo · Feature',status:'En cours',emoji:'🎨',color:'#00875a',colorBg:'rgba(0,135,90,.1)',img:'uploads/Logo%20divers/Shippingbo%20logo.jfif',cat:'SaaS B2B · UX · Product Design',tagline:'Dépreciation d\'une interface, transition sans friction.',stack:['User Research','UX Design','Full-stack','Product Design','Interviews'],
   problem:'Une interface legacy complexe bloquait l\'adoption des nouvelles features IA — les utilisateurs existants ne migraient pas spontanément vers la nouvelle version.',
   hypothesis:'Des interviews user research ciblées + une transition co-designée (PM, designer, dev full-stack) réduit la friction perçue et accélère l\'adoption.',
   build:'Conduite d\'interviews user research pour identifier les blocages. Collaboration étroite avec un product designer et un développeur full-stack pour co-designer la transition pas à pas. Rédaction des specs de migration et des guides utilisateur.',
   outcome:'Migration vers la nouvelle interface réussie sans friction majeure. Retours positifs des users ayant participé aux interviews. Réduction significative des demandes support liées à l\'ancienne interface.'},
];

var PROJECTS=PROJECTS_PERSO.concat(PROJECTS_PRO);

var GAMES=[
  {id:'ow',img:'uploads/games/Overwatch_circle_logo.svg.png',name:'Overwatch',color:'#F99E1A',since:'2016',years:'10 ans',emoji:'🎮',
   synopsis:"Depuis 2016, Overwatch fait partie de mon quotidien. Ce jeu compétitif ultra-rapide — où les situations changent en millisecondes — m'a appris à m'adapter à toute situation en temps réel, à analyser mes erreurs sans excuses et à m'améliorer constamment.\n\nEn cherchant à progresser, j'ai commencé à regarder des streams, des analyses tactiques, des guides — tout en anglais. C'est littéralement ce jeu qui m'a donné mon niveau d'anglais C1 aujourd'hui. Un investissement qui me sert tous les jours au boulot.",
   color2:'rgba(249,158,26,.15)'},
  {id:'lol',img:'uploads/games/League-of-Legends-Embleme.png',name:'League of Legends',color:'#C89B3C',since:'2012',years:'14 ans',emoji:'⚔️',
   synopsis:"J'ai commencé League of Legends en 2012 — j'avais 10 ans. 14 ans plus tard, ce jeu reste une référence dans ma vie.\n\nLoL m'a enseigné deux choses fondamentales que j'applique chaque jour : garder son sang-froid sous pression extrême, et comprendre la dynamique d'équipe. C'est un jeu de 5v5 où si tu perds ton calme ou tu lâches tes coéquipiers, tu perds — peu importe ton niveau individuel. J'ai appris à communiquer sous stress, à adapter mon rôle selon les besoins de l'équipe, et à accepter qu'une défaite individuelle ne définit pas ta valeur.",
   color2:'rgba(200,155,60,.15)'},
  {id:'p5r',img:'uploads/games/p5r.jpg',name:'Persona 5 Royal',color:'#E42E2E',since:'—',years:'—',emoji:'🎭',
   synopsis:"Persona 5 Royal est plus qu'un jeu — c'est une œuvre d'art narrative qui m'a changé.\n\nEn plongeant dans Tokyo, dans les lycées japonais, dans la culture pop et philosophique du Japon, ce jeu a décuplé mon attrait pour ce pays. Il m'a éduqué sur des aspects sociaux et culturels que je ne connaissais pas — la notion de face, la hiérarchie, l'esthétique du quotidien. Il a solidifié un rêve qui ne me lâche pas : vivre au Japon.",
   color2:'rgba(228,46,46,.15)'},
  {id:'bl3',img:'uploads/games/bd3%20logo.png',name:'Borderlands 3',color:'#F5B80E',since:'—',years:'—',emoji:'🔫',
   synopsis:"Borderlands 3 n'est pas juste un jeu — c'est la raison pour laquelle je reparle à mon meilleur ami d'enfance.\n\nOn se connaît depuis que j'ai 3 ans. La vie nous avait séparés, on avait perdu contact. Un jour, je le vois en ligne sur ce jeu. On lance une partie ensemble sans vraiment se parler. Et puis ça repart comme avant — les blagues, les souvenirs, la complicité. Depuis ce jour, on se parle tous les jours. Le jeu comme pont entre les gens, c'est quelque chose que j'ai vécu concrètement.",
   color2:'rgba(245,184,14,.15)'},
];

var FILMS=[
  {title:'Babylon',img:'uploads/Films/Babylon.jpg',year:'2022',director:'Damien Chazelle',note:'★★★★★',color:'#d4a843'},
  {title:'Whiplash',img:'uploads/Films/whiplash.jpg',year:'2014',director:'Damien Chazelle',note:'★★★★★',color:'#e50914'},
  {title:'Goodfellas',img:'uploads/Films/goodfellas.jpg',year:'1990',director:'Martin Scorsese',note:'★★★★★',color:'#22c55e'},
  {title:'The Irishman',img:'uploads/Films/irishman.jpg',year:'2019',director:'Martin Scorsese',note:'★★★★½',color:'#6366f1'},
  {title:'Taxi Driver',img:'uploads/Films/taxi-driver.jpg',year:'1976',director:'Martin Scorsese',note:'★★★★★',color:'#7c5ce7'},
];

var CHANGELOG=[
  {version:'v2.6',date:'09 Mai 2026',items:[
    'Icônes → dossiers 3D animés : hover ouvre le dossier avec 3 mini-cards qui s\'envolent (perspective CSS)',
    'Skills cards : hover plus doux (5° au lieu de 11°), items en bullet points lisibles',
    'Easter egg 🎈 : zone invisible en haut de l\'écran, hover la révèle, clic lance des ballons',
  ]},
  {version:'v2.5',date:'09 Mai 2026',items:[
    'Icônes responsives — taille adaptée à la hauteur d\'écran (plus de débordement sur petits écrans)',
    'Séparation Expérience Pro / Projets Persos — deux fenêtres distinctes',
    'Expérience Pro placée avant Projets Persos dans la roadmap',
    'Skills redesigné — cards 3D avec hover effect tilt + typographie améliorée',
    'Correction bug critique : les icônes "Projets" et "Expérience Pro" ne pointaient plus vers la même page',
    'Changelog ajouté — visible en bas de l\'écran',
  ]},
  {version:'v2.4',date:'08 Mai 2026',items:[
    'RecruteurModal — 4 AI-Powered Features nommées (Miranda IA, Audit IA, Classes de vente IA, Détection commandes)',
    'Projet Shippingbo — descriptions mises à jour avec les vrais noms des features',
  ]},
  {version:'v2.3',date:'08 Mai 2026',items:[
    'SEO meta tags (og:title, og:description, canonical, keywords)',
    'Roadmap — animation du chemin supprimée (statique)',
    'WelcomeFlow — bouton 3D DÉCOUVRIR, plus d\'auto-dismiss',
    'Curseur — retour au curseur natif macOS (suppression du glow)',
    'Boutons fermeture — toujours visibles, taille augmentée',
    'Label "Parcours recruteur" supprimé',
    'Fond obscurci quand RecruteurModal est ouvert',
    'Nouvelle accroche héro : "A ship des AI-Powered Features en production"',
    'Bottom-right — CTA clair "Voir mon impact terrain"',
    '"En cours" badges sur tous les projets',
    'RecruteurModal — métriques et explication features IA mises à jour',
  ]},
];

var SPOTIFY_TRACKS=[
  {title:'Whiplash',artist:'Justin Hurwitz (OST)',bg:'linear-gradient(135deg,#c41e3a,#1a1a2e)',emoji:'🥁'},
  {title:'Accordion',artist:'MF DOOM',bg:'linear-gradient(135deg,#2d2d2d,#5a3a1a)',emoji:'🎭'},
  {title:'Lost in Paradise',artist:'Ali (JJK OST)',bg:'linear-gradient(135deg,#7c5ce7,#1a1a3e)',emoji:'⚡'},
  {title:'Sexy Dance',artist:'Masayoshi Takanaka',bg:'linear-gradient(135deg,#00875a,#1a3a2a)',emoji:'🎸'},
  {title:'Jackpot',artist:'Alpha Wann',bg:'linear-gradient(135deg,#1a1a1a,#3a2a4a)',emoji:'🎤'},
];

var SKILLS_DATA=[
  {cat:'Product Management',color:'#ff6b4a',icon:'🎯',items:['User interviews','Jobs-to-be-done','OKRs & KPIs','Road mapping','User stories','Sprint planning','Backlog grooming','Priorisation','Go-to-market']},
  {cat:'UX & Design',color:'#7c5ce7',icon:'🎨',items:['Figma','Wireframing','Prototypage','Usability testing','Design thinking','Maquettes','User flows','Design system']},
  {cat:'AI & Outils',color:'#00875a',icon:'🤖',items:['Claude API','Prompt engineering','ChatGPT','Cursor','Notion AI','LLM evals','Agents IA','Figma AI']},
  {cat:'Analyse & Data',color:'#6366f1',icon:'📊',items:['SQL basique','Mixpanel','Google Analytics','A/B testing','Métriques produit','Tableaux de bord','Cohort analysis']},
  {cat:'Communication',color:'#e8a800',icon:'💬',items:['Stakeholder mgmt','Storytelling','Pitch deck','Documentation','Leadership','Facilitation','Cross-fonctionnel']},
];

var TL_EVENTS=[
  {year:'2007',title:'Premier PC',text:'Découverte de la tech et des jeux vidéo. Le premier "pourquoi ça marche ?" qui ne s\'est jamais arrêté.',emoji:'💻',color:'#6b5f56',detail:'L\'accès à un PC à 5 ans a tout déclenché. Curiosité infinie pour la technologie, les interfaces, comment les choses fonctionnent sous le capot.'},
  {year:'Juin 2018',title:'BAC STMG — Gestion & Finance',text:'Mention Très Bien. Premier contact sérieux avec la comptabilité, l\'économie et le management.',emoji:'🎓',color:'#22C55E',detail:'Découverte des mécaniques d\'entreprise : gestion, finance, mercatique, droit. Une base solide qui m\'a donné le goût des systèmes business — comprendre comment une boîte fonctionne avant même d\'y travailler.'},
  {year:'Juin 2021',title:'Licence AES — Toulouse',text:'Licence Administration Économique et Sociale. Couteau-suisse académique : éco, droit, socio, gestion.',emoji:'📚',color:'#6366F1',detail:'Cursus pluridisciplinaire qui couvre macroéconomie, microéconomie, droit civil et commercial, sociologie, sciences politiques, gestion d\'entreprise et statistiques. M\'a donné des bases solides pour comprendre les organisations sous tous leurs angles — exactement ce qui sert au quotidien en Product Management.'},
  {year:'Juin 2025',title:'Master AES — Gouvernance des Entreprises',text:'Master Administration Économique et Sociale, option Gouvernance des Entreprises.',emoji:'🎓',color:'#7C5CE7',detail:'Programme dense et appliqué : gestion de projet, informatique (SQL, data, Power BI), comptabilité, management lean, communication (création de plans de communication), marketing (création de campagnes), droit des sociétés, macroéconomie, microéconomie. La fusion parfaite entre business, tech et stratégie.'},
  {year:'Juillet 2025',title:'Shippingbo — Product Manager',text:'Début chez Shippingbo (SaaS B2B logistique) en tant que PM. Feature team IA, 137 tickets, −30% T1.',emoji:'💼',color:'#ff6b4a',detail:'9 mois en feature team autonome. Coordination front/back, user stories, DoD, sprints 2 semaines. Agent IA logistique livré de 0 à la production. Intégration TikTok Shop API en partenariat officiel. Refonte d\'interface legacy. Page modules headless CMS.'},
  {year:'Octobre 2025',title:'CinéApp — première app personnelle',text:'Première application perso shippée : agréger toutes les plateformes pour décider quoi regarder.',emoji:'🎬',color:'#E50914',detail:'TMDB API, React, filtres temps réel par plateforme/genre/durée. 3 redesigns du système de filtres avant product-market fit. Compris que le code seul ≠ produit — la friction utilisateur, la valeur perçue et le design comptent autant que la technique.'},
  {year:'Avril 2026 →',title:'Recherche intensive + Product Builder',text:'Recherche active d\'emploi tout en me formant à l\'évolution naturelle du PM : Product Builder.',emoji:'🚀',color:'#00875a',detail:'Le métier de Product Builder est l\'évolution naturelle du Product Manager : un PM qui prototype lui-même, fait ses maquettes Figma solo, code assez pour comprendre les devs, et ship des POCs en 30 minutes. Pendant cette période de transition, je me forme intensivement aux outils (Cursor, Claude, Figma AI), aux frameworks 0→1, et je multiplie les projets persos pour incarner ce rôle.'},
];
