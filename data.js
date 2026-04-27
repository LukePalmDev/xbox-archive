// ============================================
// PROJECT BOX — data
// ============================================

const wikiOrder = ["xbox", "xbox-360", "xbox-one", "xbox-series"];

const generations = [
  { slug: "xbox", num: "i", year: "2001", label: "prima generazione", title: "Generazione I", short: "L'esordio. Hardware PC-like, Halo, e le fondamenta del multiplayer online moderno.", placeholder: "console.gen-1.render" },
  { slug: "xbox-360", num: "ii", year: "2005", label: "alta definizione", title: "Generazione II", short: "Era HD, marketplace digitale, servizi online maturi e una libreria estesa.", placeholder: "console.gen-2.render" },
  { slug: "xbox-one", num: "iii", year: "2013", label: "ecosistema", title: "Generazione III", short: "Da hub multimediale a piattaforma di prestazioni e retrocompatibilità.", placeholder: "console.gen-3.render" },
  { slug: "xbox-series", num: "iv", year: "2020", label: "current gen", title: "Generazione IV", short: "SSD, architettura velocity, cloud gaming. Due modelli complementari.", placeholder: "console.gen-4.render" }
];

const wikiPages = {
  "xbox": {
    nav: "Generazione I", num: "01", year: "2001", label: "prima generazione",
    title: "Generazione", em: "I",
    intro: "La prima console domestica del produttore introduce un hardware ispirato all'architettura PC, una identità visiva netta, e le fondamenta del gioco online persistente.",
    specs: [
      { k: "anno", v: "2001 — 2008" },
      { k: "cpu", v: "Intel Pentium III 733 MHz" },
      { k: "gpu", v: "NV2A custom" },
      { k: "ram", v: "64 MB DDR" },
      { k: "storage", v: "HDD 8 GB" },
      { k: "uscita", v: "composite / component" }
    ],
    timeline: [
      { date: "01.2001", title: "Annuncio al CES", desc: "Strategia orientata alle performance e all'apertura verso lo sviluppo PC-like." },
      { date: "11.2001", title: "Lancio nordamericano", desc: "Debutto con titolo di punta first-party e supporto multiplayer locale esteso." },
      { date: "11.2002", title: "Servizio online unificato", desc: "Matchmaking, chat vocale e identità persistente del giocatore tramite servizio dedicato." },
      { date: "2004", title: "Revisione board 1.6", desc: "Aggiornamenti termici e di stabilità prima del passaggio alla generazione successiva." }
    ],
    models: [
      { name: "Launch Edition", desc: "Versione originale con controller di prima generazione e HDD integrato.", tags: ["2001", "duke", "8 gb"] },
      { name: "Controller S Bundle", desc: "Pad più compatto introdotto gradualmente in Europa e Giappone.", tags: ["2002", "ergonomia", "retail"] },
      { name: "Revisione 1.6", desc: "Aggiornamento motherboard con miglioramenti termici e produttivi.", tags: ["2004", "board", "stabilità"] },
      { name: "Edizione Cristallo", desc: "Variante trasparente molto apprezzata dai collezionisti.", tags: ["limited", "design", "europa"] }
    ]
  },
  "xbox-360": {
    nav: "Generazione II", num: "02", year: "2005", label: "alta definizione",
    title: "Generazione", em: "II",
    intro: "La seconda generazione porta HD, marketplace digitale e servizi online al centro dell'esperienza domestica, con un ciclo vitale tra i più longevi della categoria.",
    specs: [
      { k: "anno", v: "2005 — 2016" },
      { k: "cpu", v: "IBM Xenon 3.2 GHz tri-core" },
      { k: "gpu", v: "ATI Xenos 500 MHz" },
      { k: "ram", v: "512 MB GDDR3" },
      { k: "storage", v: "20 — 250 GB HDD" },
      { k: "uscita", v: "hdmi / component" }
    ],
    timeline: [
      { date: "11.2005", title: "Core e Premium", desc: "Lancio con due SKU e focus su gioco online e servizi digitali." },
      { date: "2007", title: "Elite e Jasper", desc: "Versioni aggiornate con consumi ridotti e migliore gestione termica." },
      { date: "06.2010", title: "Revisione Slim", desc: "Design rinnovato, Wi-Fi integrato e supporto periferica motion." },
      { date: "06.2013", title: "Refresh finale", desc: "Ultima revisione estetica prima della transizione completa alla generazione successiva." }
    ],
    models: [
      { name: "Premium", desc: "HDD da 20 GB, controller wireless, uscita component HD.", tags: ["2005", "hd", "online"] },
      { name: "Elite", desc: "Finitura nera e maggiore capacità storage per utenti hardcore.", tags: ["2007", "120 gb", "black"] },
      { name: "Slim", desc: "Ridisegno completo della scocca e migliore silenziosità.", tags: ["2010", "wi-fi", "motion"] },
      { name: "Refresh", desc: "Linea ispirata al successore, ultima versione consumer.", tags: ["2013", "refresh", "finale"] }
    ]
  },
  "xbox-one": {
    nav: "Generazione III", num: "03", year: "2013", label: "ecosistema unificato",
    title: "Generazione", em: "III",
    intro: "Una generazione che parte come hub multimediale e si evolve verso prestazioni, compatibilità e servizi in abbonamento.",
    specs: [
      { k: "anno", v: "2013 — 2020" },
      { k: "cpu", v: "AMD Jaguar 8 core" },
      { k: "gpu", v: "AMD GCN 1.31 TFLOPS" },
      { k: "ram", v: "8 GB DDR3 / GDDR5" },
      { k: "storage", v: "500 GB — 2 TB HDD" },
      { k: "uscita", v: "hdmi 2.0 / 4K UHD" }
    ],
    timeline: [
      { date: "11.2013", title: "Lancio originario", desc: "Focus su tv, app e integrazione multimediale nel salotto." },
      { date: "2014", title: "Cambio di rotta", desc: "Bundle senza periferica motion e update software orientati al gaming puro." },
      { date: "08.2016", title: "Revisione Slim", desc: "Design compatto con supporto video 4K e HDR su titoli selezionati." },
      { date: "11.2017", title: "Modello premium", desc: "Hardware con forte incremento di potenza e resa 4K nativa." }
    ],
    models: [
      { name: "Originale", desc: "Modello di lancio con alimentatore esterno e focus entertainment.", tags: ["2013", "all-in-one"] },
      { name: "Slim", desc: "Formato ridotto, lettore UHD blu-ray e case bianco opaco.", tags: ["2016", "hdr", "slim"] },
      { name: "Premium", desc: "La più potente della sua generazione al lancio.", tags: ["2017", "4k", "perf"] },
      { name: "Edizioni speciali", desc: "Versioni limitate dedicate a franchise specifici.", tags: ["limited", "collector"] }
    ]
  },
  "xbox-series": {
    nav: "Generazione IV", num: "04", year: "2020", label: "current gen",
    title: "Generazione", em: "IV",
    intro: "La generazione corrente combina ssd nvme, architettura avanzata e servizi cloud in una piattaforma flessibile, articolata su due modelli complementari.",
    specs: [
      { k: "anno", v: "2020 — oggi" },
      { k: "cpu", v: "AMD Zen 2 8 core 3.8 GHz" },
      { k: "gpu", v: "RDNA 2 fino a 12 TFLOPS" },
      { k: "ram", v: "10 — 16 GB GDDR6" },
      { k: "storage", v: "SSD NVMe 512 GB / 1 TB" },
      { k: "target", v: "1440p — 4K / 120 fps" }
    ],
    timeline: [
      { date: "06.2019", title: "Annuncio next-gen", desc: "Visione orientata a velocità di caricamento e latenza ridotta." },
      { date: "11.2020", title: "Lancio doppio", desc: "Due modelli complementari: alta fedeltà e accesso digitale." },
      { date: "2021", title: "Boost framerate", desc: "Miglioramenti retrocompatibili per aumentare i frame rate dei titoli legacy." },
      { date: "2022—2026", title: "Espansione cloud", desc: "Crescita del servizio in streaming e del valore complessivo dell'abbonamento." }
    ],
    models: [
      { name: "Modello X", desc: "Design monolitico, target 4K nativo fino a 120 fps.", tags: ["12 tflops", "1 tb ssd"] },
      { name: "Modello S", desc: "Formato compatto, solo digitale, target 1440p fino a 120 fps.", tags: ["4 tflops", "digital"] },
      { name: "Quick Resume", desc: "Ripresa immediata di sessioni multiple senza ricaricare.", tags: ["ux", "sistema"] },
      { name: "Velocity Architecture", desc: "Pipeline storage ottimizzata per ridurre i colli di bottiglia.", tags: ["nvme", "io"] }
    ],
    compare: [
      {
        label: "Modello X", title: "Potenza", em: "assoluta",
        desc: "Pensata per la resa massima su schermi 4k e prestazioni stabili nei titoli più esigenti.",
        specs: [
          { k: "gpu", v: "12 TFLOPS RDNA 2" },
          { k: "cpu", v: "Zen 2 8 core 3.8 GHz" },
          { k: "storage", v: "SSD NVMe 1 TB" },
          { k: "target", v: "4K / 120 fps" }
        ]
      },
      {
        label: "Modello S", title: "Digitale", em: "compatta",
        desc: "Ingresso accessibile alla generazione corrente, in formato ridotto e solo digitale.",
        specs: [
          { k: "gpu", v: "4 TFLOPS RDNA 2" },
          { k: "cpu", v: "Zen 2 8 core 3.6 GHz" },
          { k: "storage", v: "SSD NVMe 512 GB" },
          { k: "target", v: "1440p / 120 fps" }
        ]
      }
    ]
  }
};

const blogPosts = [
  { num: "p.04", date: "24.02.2026", title: "Roadmap: da archivio statico a piattaforma modulare", excerpt: "Definizione della nuova architettura: wiki, blog, forum e contributi git con deploy automatico ad ogni merge.", tags: ["roadmap", "architettura"] },
  { num: "p.03", date: "18.02.2026", title: "Perché separare contenuti, discussioni e contributi", excerpt: "Separare wiki/blog dal forum riduce la complessità applicativa e rende il progetto scalabile nel tempo.", tags: ["scalabilità", "design"] },
  { num: "p.02", date: "10.02.2026", title: "Nuovo sistema tipografico e griglia 12 colonne", excerpt: "Adozione di una pipeline tipografica più rigorosa, con sans neutro per ui e monospace per metadati tecnici.", tags: ["design", "typography"] },
  { num: "p.01", date: "02.02.2026", title: "Nasce Project Box, archivio editoriale aperto", excerpt: "Manifesto editoriale: un archivio collaborativo, indipendente, dedicato alla storia delle console domestiche.", tags: ["manifesto", "intro"] }
];

const forumChannels = [
  { num: "01", title: "Discussioni Pubbliche", desc: "Canale consigliato per discussioni tecniche, q&a e proposte legate alla wiki e ai contenuti del progetto. zero backend, workflow git, moderazione semplice.", cta: "apri canale", href: "https://github.com/features/discussions", tags: ["zero backend", "workflow git"] },
  { num: "02", title: "Forum Esteso", desc: "Soluzione completa per community più ampia con ruoli, categorie, notifiche e strumenti avanzati di moderazione e analisi.", cta: "valuta opzione", href: "https://www.discourse.org/", tags: ["self-hosted", "moderazione"] }
];

const forumGuidelines = [
  { num: "01", title: "Apri discussione contestuale", desc: "Ogni thread deve essere legato a una pagina wiki, un post diario o una proposta concreta." },
  { num: "02", title: "Tag obbligatori", desc: "Classifica i thread con tag dedicati: modelli, timeline, hardware, software, contributi." },
  { num: "03", title: "Moderazione minima", desc: "Linee guida pubbliche, escalation trasparente e chiusura dei thread duplicati." },
  { num: "04", title: "Sintesi in archivio", desc: "Le discussioni risolte che portano valore vengono trasformate in aggiornamenti documentati." }
];

const contributionSteps = [
  { num: "01", title: "Fork o branch dedicato", desc: "L'autore parte dai file del progetto e prepara la modifica localmente." },
  { num: "02", title: "Modifica contenuto", desc: "Aggiorna dati archivio o diario mantenendo tono editoriale e naming coerenti." },
  { num: "03", title: "Pull Request", desc: "Apre una pr con descrizione chiara, contesto, fonti e motivazione dell'intervento." },
  { num: "04", title: "Revisione", desc: "Il maintainer controlla accuratezza, coerenza visuale e impatto sulla navigazione." },
  { num: "05", title: "Merge", desc: "Una volta approvata, la pr viene integrata nel branch principale." },
  { num: "06", title: "Deploy automatico", desc: "La pipeline ci/cd pubblica immediatamente l'aggiornamento in produzione." }
];

const stackRows = [
  ["Archivio", "Contenuti strutturati e versionati", "markdown + rendering js"],
  ["Diario", "Aggiornamenti editoriali", "markdown / json + template spa"],
  ["Forum", "Discussioni community", "discussions / soluzione esterna"],
  ["Contributi", "Workflow collaborativo", "pull request + code review"],
  ["Hosting", "Deploy continuo", "static cdn (netlify / vercel)"]
];
