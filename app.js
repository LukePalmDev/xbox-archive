const wikiOrder = ["xbox", "xbox-360", "xbox-one", "xbox-series"];

const wikiPages = {
  xbox: {
    navLabel: "Xbox",
    heroLabel: "2001 · Prima generazione",
    title: "Xbox",
    intro:
      "La prima console Microsoft porta in salotto un hardware PC-like, l'identita visiva verde Xbox e le basi del multiplayer online moderno.",
    callout: {
      title: "Icone dell'esordio",
      description:
        "Halo: Combat Evolved, controller Duke e lancio di Xbox Live hanno definito il DNA della piattaforma.",
      href: "https://www.xbox.com/it-IT/games/halo-combat-evolved",
      label: "Scopri Halo"
    },
    timelineTitle: "Le tappe principali della prima Xbox",
    timelineDescription:
      "Una generazione breve ma decisiva che ha costruito le fondamenta del brand.",
    timeline: [
      {
        date: "Gennaio 2001",
        title: "Annuncio ufficiale",
        description:
          "Bill Gates presenta Xbox al CES con una strategia fortemente orientata alle performance."
      },
      {
        date: "Novembre 2001",
        title: "Lancio in Nord America",
        description:
          "Debutta con Halo: Combat Evolved e supporto nativo al multiplayer locale su larga scala."
      },
      {
        date: "2002",
        title: "Arriva Xbox Live",
        description:
          "Servizio online unificato con matchmaking, chat vocale e identita persistente del giocatore."
      },
      {
        date: "2004-2005",
        title: "Revisioni finali",
        description:
          "Controller S e revisioni interne migliorano ergonomia e affidabilita prima del passaggio a Xbox 360."
      }
    ],
    modelsTitle: "Sotto-modelli e revisioni",
    modelsDescription:
      "Le varianti hardware che hanno accompagnato l'evoluzione della prima generazione.",
    models: [
      {
        name: "Xbox Launch Edition",
        description: "Versione originale con controller Duke e HDD integrato.",
        tags: ["2001", "Duke", "8 GB"]
      },
      {
        name: "Controller S Bundle",
        description: "Introduzione graduale del pad piu compatto in Europa e Giappone.",
        tags: ["2002", "Ergonomia", "Retail"]
      },
      {
        name: "Revisione 1.6",
        description: "Aggiornamento motherboard con piccoli miglioramenti termici.",
        tags: ["2004", "Board", "Stabilita"]
      },
      {
        name: "Xbox Crystal",
        description: "Edizione trasparente iconica molto apprezzata dai collezionisti.",
        tags: ["Limited", "Design", "Europa"]
      }
    ],
    extraTitle: "Eredita",
    extraDescription:
      "La prima Xbox ha dimostrato che Microsoft poteva competere nelle console e costruire un ecosistema proprietario.",
    extraCards: [
      {
        title: "DNA online",
        description: "Xbox Live diventa il punto di riferimento per servizi premium su console."
      },
      {
        title: "Base tecnica",
        description: "Hard disk, Ethernet e dashboard aprono la strada alla generazione successiva."
      },
      {
        title: "Identita visiva",
        description: "Logo, verde brand e linguaggio estetico definiscono l'immaginario Xbox."
      }
    ]
  },
  "xbox-360": {
    navLabel: "Xbox 360",
    heroLabel: "2005 · Alta definizione",
    title: "Xbox 360",
    intro:
      "Xbox 360 porta HD, marketplace digitale e servizi online al centro dell'esperienza domestica.",
    callout: {
      title: "Generazione espansiva",
      description:
        "Xbox Live Arcade, update costanti e Kinect hanno trasformato la console in un ecosistema completo.",
      href: "https://www.xbox.com/it-IT/xbox-360",
      label: "Archivio ufficiale"
    },
    timelineTitle: "Timeline dell'era 360",
    timelineDescription:
      "Una piattaforma longeva con revisioni hardware e una libreria enorme.",
    timeline: [
      {
        date: "2005",
        title: "Core e Premium",
        description:
          "Lancio con due SKU principali e focus su gioco online e servizi digitali."
      },
      {
        date: "2007-2008",
        title: "Elite e Jasper",
        description:
          "Versioni aggiornate con consumi ridotti e miglior gestione termica."
      },
      {
        date: "2010",
        title: "Xbox 360 S",
        description:
          "Design rinnovato, Wi-Fi integrato e supporto completo a Kinect."
      },
      {
        date: "2013",
        title: "Xbox 360 E",
        description:
          "Ultima revisione estetica prima della transizione completa a Xbox One."
      }
    ],
    modelsTitle: "Modelli principali",
    modelsDescription:
      "Le edizioni che hanno scandito il ciclo vitale di Xbox 360.",
    models: [
      {
        name: "Xbox 360 Premium",
        description: "Hard disk da 20 GB, wireless controller e component HD.",
        tags: ["2005", "HD", "Xbox Live"]
      },
      {
        name: "Xbox 360 Elite",
        description: "Finitura nera e maggiore capacita storage per utenti hardcore.",
        tags: ["2007", "120 GB", "Black"]
      },
      {
        name: "Xbox 360 S",
        description: "Ridisegno completo della scocca e migliore silenziosita.",
        tags: ["2010", "Wi-Fi", "Kinect"]
      },
      {
        name: "Xbox 360 E",
        description: "Linea ispirata a Xbox One, ultima versione consumer.",
        tags: ["2013", "Refresh", "Finale"]
      }
    ],
    extraTitle: "Servizi distintivi",
    extraDescription:
      "Tre pilastri che hanno reso Xbox 360 la piattaforma piu influente dell'epoca.",
    extraCards: [
      {
        title: "Xbox Live Gold",
        description: "Multiplayer online, party chat e offerte dedicate agli abbonati."
      },
      {
        title: "Marketplace",
        description: "Download digitali di giochi, DLC, avatar item e contenuti multimediali."
      },
      {
        title: "Kinect",
        description: "Interazione motion control senza controller con supporto dedicato."
      }
    ]
  },
  "xbox-one": {
    navLabel: "Xbox One",
    heroLabel: "2013 · Ecosistema unificato",
    title: "Xbox One",
    intro:
      "Una generazione che parte come hub multimediale e si evolve verso prestazioni, compatibilita e servizi.",
    callout: {
      title: "Transizione strategica",
      description:
        "Retrocompatibilita e Xbox Game Pass cambiano il focus da singolo hardware a ecosistema continuo.",
      href: "https://www.xbox.com/it-IT/consoles/xbox-one-x",
      label: "Linea Xbox One"
    },
    timelineTitle: "Dall'esordio al mid-gen",
    timelineDescription:
      "Un percorso di riposizionamento guidato da feedback della community.",
    timeline: [
      {
        date: "2013",
        title: "Lancio con Kinect 2.0",
        description: "Focus su TV, app e integrazione multimediale nel salotto."
      },
      {
        date: "2014-2015",
        title: "Cambio direzione",
        description:
          "Introduzione bundle senza Kinect e update software orientati al gaming puro."
      },
      {
        date: "2016",
        title: "Xbox One S",
        description: "Design compatto con supporto video 4K e HDR su giochi selezionati."
      },
      {
        date: "2017",
        title: "Xbox One X",
        description: "Modello premium con forte incremento di potenza e resa 4K."
      }
    ],
    modelsTitle: "Revisione della gamma",
    modelsDescription:
      "Le varianti hardware che definiscono la fase Xbox One.",
    models: [
      {
        name: "Xbox One",
        description: "Modello originario con alimentatore esterno e focus entertainment.",
        tags: ["2013", "Kinect", "All-in-One"]
      },
      {
        name: "Xbox One S",
        description: "Formato ridotto, lettore UHD Blu-ray e case bianco opaco.",
        tags: ["2016", "HDR", "Slim"]
      },
      {
        name: "Xbox One X",
        description: "La console piu potente della sua generazione al lancio.",
        tags: ["2017", "4K", "Performance"]
      },
      {
        name: "Edizioni speciali",
        description: "Versioni limitate dedicate a franchise come Gears e Cyberpunk.",
        tags: ["Limited", "Collector", "Design"]
      }
    ],
    extraTitle: "Ecosistema software",
    extraDescription:
      "I servizi che hanno preparato il terreno alla filosofia Xbox moderna.",
    extraCards: [
      {
        title: "Backward Compatibility",
        description: "Supporto a titoli Xbox 360 e Xbox originale su hardware piu recente."
      },
      {
        title: "Game Pass",
        description: "Abbonamento a libreria giochi con aggiornamento continuo del catalogo."
      },
      {
        title: "Xbox Play Anywhere",
        description: "Acquisto unico e progressi condivisi tra console Xbox e PC Windows."
      }
    ]
  },
  "xbox-series": {
    navLabel: "Xbox Serie",
    heroLabel: "2020 · Power Your Dreams",
    title: "Xbox Serie X|S",
    intro:
      "La generazione Series combina SSD, architettura avanzata e servizi cloud in una piattaforma flessibile.",
    callout: {
      title: "Servizi al centro",
      description:
        "Game Pass, cloud e retrocompatibilita rendono l'accesso ai giochi indipendente dal solo hardware.",
      href: "https://www.xbox.com/it-IT/consoles",
      label: "Console attuali"
    },
    timelineTitle: "Evoluzione della generazione Series",
    timelineDescription:
      "Dalla rivelazione Project Scarlett all'espansione cloud multi-dispositivo.",
    timeline: [
      {
        date: "2019",
        title: "Project Scarlett",
        description: "Annuncio della visione next-gen con enfasi su velocita e latenza ridotta."
      },
      {
        date: "Novembre 2020",
        title: "Lancio X|S",
        description: "Due modelli complementari: alta fedelta e accesso digitale."
      },
      {
        date: "2021",
        title: "FPS Boost",
        description: "Miglioramenti retrocompatibili per aumentare frame rate di titoli legacy."
      },
      {
        date: "2022-2026",
        title: "Cloud e update continui",
        description: "Crescita di Xbox Cloud Gaming e del valore complessivo di Game Pass."
      }
    ],
    modelsTitle: "Confronto modelli",
    modelsDescription:
      "Series X e Series S coprono target diversi condividendo la stessa base generazionale.",
    models: [
      {
        name: "Xbox Series X",
        description: "Design monolitico e target 4K nativo fino a 120 fps.",
        tags: ["12 TFLOPS", "1 TB SSD", "4K"]
      },
      {
        name: "Xbox Series S",
        description: "Formato compatto, solo digitale e target 1440p fino a 120 fps.",
        tags: ["4 TFLOPS", "512 GB SSD", "Digital"]
      },
      {
        name: "Quick Resume",
        description: "Ripresa immediata di sessioni multiple senza ricaricare i titoli.",
        tags: ["UX", "Velocita", "Sistema"]
      },
      {
        name: "Velocity Architecture",
        description: "Pipeline storage ottimizzata per ridurre i colli di bottiglia in lettura asset.",
        tags: ["NVMe", "IO", "Next-Gen"]
      }
    ],
    comparison: [
      {
        label: "Xbox Series X",
        title: "Potenza assoluta",
        description: "Pensata per resa massima su schermi 4K e prestazioni stabili.",
        specs: [
          { key: "GPU", value: "12 TFLOPS RDNA 2" },
          { key: "CPU", value: "Zen 2 8 core 3.8 GHz" },
          { key: "Storage", value: "SSD NVMe 1 TB" },
          { key: "Target", value: "4K / 120 fps" }
        ]
      },
      {
        label: "Xbox Series S",
        title: "Digitale compatta",
        description: "Ingresso accessibile alla generazione corrente in formato ridotto.",
        specs: [
          { key: "GPU", value: "4 TFLOPS RDNA 2" },
          { key: "CPU", value: "Zen 2 8 core 3.6 GHz" },
          { key: "Storage", value: "SSD NVMe 512 GB" },
          { key: "Target", value: "1440p / 120 fps" }
        ]
      }
    ]
  }
};

const blogPosts = [
  {
    date: "24 febbraio 2026",
    title: "Roadmap Project Box: da archivio statico a piattaforma modulare",
    excerpt:
      "Definizione della nuova architettura: wiki + blog + forum + contributi Git con deploy automatico.",
    tags: ["Roadmap", "Architettura", "MVP"]
  },
  {
    date: "18 febbraio 2026",
    title: "Perche separare contenuti, discussioni e contributi",
    excerpt:
      "Separare wiki/blog dal forum riduce complessita applicativa e rende il progetto scalabile nel tempo.",
    tags: ["Scalabilita", "Design", "Best Practice"]
  },
  {
    date: "10 febbraio 2026",
    title: "ABXY brand colors: standard grafico applicato al sito",
    excerpt:
      "Adozione dei codici Microsoft ufficiali per A, B, X, Y e consolidamento tipografico basato su Segoe.",
    tags: ["Design", "Brand", "UI"]
  }
];

const forumChannels = [
  {
    title: "GitHub Discussions",
    description:
      "Canale consigliato per discussioni tecniche, Q&A e proposte legate alla wiki e ai contenuti del progetto.",
    ctaLabel: "Apri Discussions",
    ctaHref: "https://github.com/features/discussions",
    tags: ["Zero backend", "Workflow Git", "Moderazione semplice"]
  },
  {
    title: "Discourse",
    description:
      "Soluzione completa per community piu ampia con ruoli, categorie, notifiche e strumenti avanzati di moderazione.",
    ctaLabel: "Valuta Discourse",
    ctaHref: "https://www.discourse.org/",
    tags: ["Self-hosted", "Moderazione", "Scalabile"]
  }
];

const forumGuidelines = [
  {
    date: "1",
    title: "Apri discussione contestuale",
    description: "Ogni thread deve essere legato a una pagina wiki, un post blog o una proposta concreta."
  },
  {
    date: "2",
    title: "Tag obbligatori",
    description: "Classifica i thread con tag come modelli, timeline, hardware, software, contributi."
  },
  {
    date: "3",
    title: "Moderazione minima",
    description: "Linee guida pubbliche, escalation trasparente e chiusura thread duplicati."
  },
  {
    date: "4",
    title: "Sintesi in wiki",
    description: "Le discussioni risolte che portano valore vanno trasformate in aggiornamenti documentati."
  }
];

const contributionSteps = [
  {
    title: "Fork o branch dedicato",
    description: "L'utente parte dai file Markdown/JS del progetto e prepara la modifica localmente."
  },
  {
    title: "Modifica contenuto",
    description: "Aggiorna dati wiki/blog mantenendo tono editoriale, struttura e naming coerenti."
  },
  {
    title: "Pull Request",
    description: "Apre PR con descrizione chiara, contesto, fonti e motivazione dell'intervento."
  },
  {
    title: "Revisione",
    description: "Maintainer controlla accuratezza, coerenza visuale e impatto su navigazione/routing."
  },
  {
    title: "Merge",
    description: "Una volta approvata, la PR viene integrata nel branch principale."
  },
  {
    title: "Deploy automatico",
    description: "Pipeline CI/CD pubblica immediatamente l'aggiornamento in produzione."
  }
];

const stackRows = [
  ["Wiki", "Contenuti strutturati versionati", "Markdown + rendering JS"],
  ["Blog", "Aggiornamenti editoriali", "Markdown/JSON + template SPA"],
  ["Forum", "Discussioni community", "GitHub Discussions o Discourse"],
  ["Contributi", "Workflow collaborativo", "Pull Request + Code Review"],
  ["Hosting", "Deploy continuo", "Netlify / Vercel / GitHub Pages"]
];

const routes = {
  home: renderHome,
  blog: renderBlog,
  forum: renderForum,
  contributi: renderContributi,
  "wiki/xbox": () => renderWiki("xbox"),
  "wiki/xbox-360": () => renderWiki("xbox-360"),
  "wiki/xbox-one": () => renderWiki("xbox-one"),
  "wiki/xbox-series": () => renderWiki("xbox-series")
};

const titles = {
  home: "Project Box | Home",
  blog: "Project Box | Blog",
  forum: "Project Box | Forum",
  contributi: "Project Box | Contributi",
  "wiki/xbox": "Project Box | Wiki Xbox",
  "wiki/xbox-360": "Project Box | Wiki Xbox 360",
  "wiki/xbox-one": "Project Box | Wiki Xbox One",
  "wiki/xbox-series": "Project Box | Wiki Xbox Serie"
};

const appContainer = document.getElementById("app-content");
const wikiGroup = document.querySelector(".wiki-group");

function getRouteFromHash() {
  const rawHash = window.location.hash.replace(/^#\/?/, "").trim();
  return rawHash || "home";
}

function normalizeRoute(route) {
  if (routes[route]) {
    return route;
  }

  if (route === "wiki") {
    return "wiki/xbox";
  }

  return "home";
}

function renderTagList(tags) {
  return `
    <div class="tag-list">
      ${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;
}

function renderTimeline(items) {
  return `
    <div class="timeline">
      ${items
        .map(
          (item) => `
            <div class="timeline-item">
              <span>${item.date}</span>
              <h4>${item.title}</h4>
              <p>${item.description}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderCardGrid(cards) {
  return `
    <div class="card-grid">
      ${cards
        .map(
          (card) => `
            <article class="card">
              <h3>${card.name || card.title}</h3>
              <p>${card.description || card.excerpt}</p>
              ${card.tags ? renderTagList(card.tags) : ""}
              ${card.date ? `<p class="meta-line">${card.date}</p>` : ""}
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderHome() {
  return `
    <section class="hero">
      <div class="container">
        <div class="hero-text">
          <span class="highlight">Piattaforma dinamica</span>
          <h1>Wiki, Blog, Forum e Contributi in un unico flusso</h1>
          <p>
            Project Box e ora una single-page app: un solo entrypoint HTML, routing client-side
            e contenuti gestiti in JavaScript per ridurre duplicazioni e velocizzare evoluzione e manutenzione.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#/wiki/xbox" data-route="wiki/xbox">Apri la Wiki</a>
            <a class="button secondary" href="#/contributi" data-route="contributi">Workflow contributi</a>
          </div>
        </div>
        <div class="hero-media">
          <div class="callout">
            <h3>MVP operativo</h3>
            <p>
              Nessun backend custom per partire: contenuti versionati, discussioni separate e deploy automatico.
            </p>
            <a class="button secondary" href="#/forum" data-route="forum">Area discussioni</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="highlight">Architettura</span>
          <h2>Sezioni principali del progetto</h2>
          <p>
            Il dominio e separato in quattro aree funzionali per mantenere il sistema semplice,
            scalabile e allineato a un workflow open-source.
          </p>
        </div>
        ${renderCardGrid([
          {
            title: "Wiki",
            description: "Archivio strutturato con pagine Xbox, timeline e riferimenti tecnici.",
            tags: ["Markdown", "Versionamento", "Ricerca"]
          },
          {
            title: "Blog",
            description: "Aggiornamenti del progetto, note editoriali e changelog narrativo.",
            tags: ["Post", "Tag", "RSS-ready"]
          },
          {
            title: "Forum",
            description: "Discussioni community su canali dedicati senza complicare il core del sito.",
            tags: ["Discussions", "Moderazione", "Q&A"]
          },
          {
            title: "Contributi",
            description: "Processo collaborativo in stile GitHub con PR, review e deploy continuo.",
            tags: ["Pull Request", "CI/CD", "Trasparenza"]
          }
        ])}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="highlight">Roadmap MVP</span>
          <h2>Da repository pubblico a rilascio continuo</h2>
          <p>
            Questi passaggi trasformano l'archivio in piattaforma dinamica mantenendo costi e complessita contenuti.
          </p>
        </div>
        ${renderTimeline([
          {
            date: "Step 1",
            title: "Repository unico",
            description: "Wiki, blog e codice UI nello stesso progetto per workflow lineare."
          },
          {
            date: "Step 2",
            title: "Routing SPA",
            description: "Un solo index.html con route hash-based e rendering dinamico dei contenuti."
          },
          {
            date: "Step 3",
            title: "Discussioni esterne",
            description: "Forum separato via GitHub Discussions o Discourse per evitare backend custom."
          },
          {
            date: "Step 4",
            title: "Contributi guidati",
            description: "Edit, PR, review e merge con regole editoriali condivise."
          },
          {
            date: "Step 5",
            title: "Deploy automatico",
            description: "Pubblicazione immediata ad ogni merge sul branch principale."
          }
        ])}
      </div>
    </section>
  `;
}

function renderWiki(slug) {
  const page = wikiPages[slug];

  if (!page) {
    return renderNotFound();
  }

  const currentIndex = wikiOrder.indexOf(slug);
  const nextSlug = wikiOrder[(currentIndex + 1) % wikiOrder.length];

  const comparisonSection = page.comparison
    ? `
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="highlight">Confronto</span>
            <h2>Series X e Series S</h2>
            <p>Due target differenti con base architetturale condivisa.</p>
          </div>
          <div class="model-section">
            ${page.comparison
              .map(
                (model) => `
                  <div class="model-highlight">
                    <div>
                      <h3 class="highlight">${model.label}</h3>
                      <h2>${model.title}</h2>
                      <p>${model.description}</p>
                    </div>
                    <div class="specs">
                      <ul class="spec-list">
                        ${model.specs.map((spec) => `<li><span>${spec.key}</span>${spec.value}</li>`).join("")}
                      </ul>
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `
    : "";

  const extraSection = page.extraCards
    ? `
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="highlight">Approfondimento</span>
            <h2>${page.extraTitle}</h2>
            <p>${page.extraDescription}</p>
          </div>
          ${renderCardGrid(page.extraCards)}
        </div>
      </section>
    `
    : "";

  return `
    <section class="hero">
      <div class="container">
        <div class="hero-text">
          <span class="highlight">${page.heroLabel}</span>
          <h1>${page.title}</h1>
          <p>${page.intro}</p>
          <div class="hero-actions">
            <a class="button primary" href="#/contributi" data-route="contributi">Contribuisci alla Wiki</a>
            <a class="button secondary" href="#/wiki/${nextSlug}" data-route="wiki/${nextSlug}">Prossima: ${wikiPages[nextSlug].navLabel}</a>
          </div>
        </div>
        <div class="hero-media">
          <div class="callout">
            <h3>${page.callout.title}</h3>
            <p>${page.callout.description}</p>
            <a class="button secondary" href="${page.callout.href}" target="_blank" rel="noreferrer">${page.callout.label}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="highlight">Timeline</span>
          <h2>${page.timelineTitle}</h2>
          <p>${page.timelineDescription}</p>
        </div>
        ${renderTimeline(page.timeline)}
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="highlight">Sotto-modelli</span>
          <h2>${page.modelsTitle}</h2>
          <p>${page.modelsDescription}</p>
        </div>
        ${renderCardGrid(page.models)}
      </div>
    </section>

    ${comparisonSection}
    ${extraSection}
  `;
}

function renderBlog() {
  return `
    <section class="hero">
      <div class="container">
        <div class="hero-text">
          <span class="highlight">Blog</span>
          <h1>Aggiornamenti del progetto</h1>
          <p>
            Diario tecnico-editoriale di Project Box: decisioni architetturali, evoluzione del design
            e milestone della piattaforma.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#/wiki/xbox" data-route="wiki/xbox">Vai alla Wiki</a>
            <a class="button secondary" href="#/contributi" data-route="contributi">Invia un contributo</a>
          </div>
        </div>
        <div class="hero-media">
          <div class="callout">
            <h3>Workflow unificato</h3>
            <p>
              Wiki e blog condividono lo stesso repository per ridurre attrito operativo e mantenere coerenza.
            </p>
            <a class="button secondary" href="#/home" data-route="home">Torna alla panoramica</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="highlight">Post recenti</span>
          <h2>Ultime pubblicazioni</h2>
          <p>
            Ogni articolo nasce come aggiornamento tracciabile e puo essere discusso nel forum o migliorato via PR.
          </p>
        </div>
        ${renderCardGrid(blogPosts)}
      </div>
    </section>
  `;
}

function renderForum() {
  return `
    <section class="hero">
      <div class="container">
        <div class="hero-text">
          <span class="highlight">Forum</span>
          <h1>Discussioni separate dal core del sito</h1>
          <p>
            Le conversazioni vivono su strumenti dedicati: in questo modo il sito resta leggero,
            mentre la community ottiene funzionalita mature di moderazione e notifiche.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="https://github.com/features/discussions" target="_blank" rel="noreferrer">GitHub Discussions</a>
            <a class="button secondary" href="https://www.discourse.org/" target="_blank" rel="noreferrer">Discourse</a>
          </div>
        </div>
        <div class="hero-media">
          <div class="callout">
            <h3>Scelta suggerita MVP</h3>
            <p>
              Per partire rapidamente: GitHub Discussions, poi migrazione a Discourse solo se cresce il volume.
            </p>
            <a class="button secondary" href="#/contributi" data-route="contributi">Processo contributi</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="highlight">Canali</span>
          <h2>Opzioni di implementazione forum</h2>
          <p>
            Entrambe le soluzioni sono compatibili con l'architettura proposta: cambia solo il livello di controllo.
          </p>
        </div>
        <div class="card-grid">
          ${forumChannels
            .map(
              (channel) => `
                <article class="card">
                  <h3>${channel.title}</h3>
                  <p>${channel.description}</p>
                  ${renderTagList(channel.tags)}
                  <a class="button secondary" href="${channel.ctaHref}" target="_blank" rel="noreferrer">${channel.ctaLabel}</a>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="highlight">Linee guida</span>
          <h2>Regole operative per la community</h2>
          <p>
            Un framework minimo di moderazione mantiene le discussioni utili e riusabili in wiki/blog.
          </p>
        </div>
        ${renderTimeline(forumGuidelines)}
      </div>
    </section>
  `;
}

function renderContributi() {
  return `
    <section class="hero">
      <div class="container">
        <div class="hero-text">
          <span class="highlight">Contributi</span>
          <h1>Aggiunte e aggiornamenti in stile GitHub</h1>
          <p>
            L'editing e aperto: modifiche tracciate, revisione collaborativa e deploy automatico dopo merge.
            Nessun pannello admin custom, tutto passa da workflow Git.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#/wiki/xbox" data-route="wiki/xbox">Modifica una pagina Wiki</a>
            <a class="button secondary" href="#/blog" data-route="blog">Aggiorna il Blog</a>
          </div>
        </div>
        <div class="hero-media">
          <div class="callout">
            <h3>Obiettivo</h3>
            <p>
              Rendere il contributo semplice per i fan mantenendo qualita editoriale e consistenza tecnica.
            </p>
            <a class="button secondary" href="#/home" data-route="home">Panoramica piattaforma</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="highlight">Workflow</span>
          <h2>Pipeline contributiva</h2>
          <p>
            Sei passaggi lineari, allineati al modello open-source professionale.
          </p>
        </div>
        <div class="card-grid">
          ${contributionSteps
            .map(
              (step, index) => `
                <article class="card">
                  <h3>${index + 1}. ${step.title}</h3>
                  <p>${step.description}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="highlight">Stack tecnico</span>
          <h2>Matrice funzionale del progetto</h2>
          <p>
            Riepilogo operativo delle tecnologie suggerite dal briefing per la versione MVP.
          </p>
        </div>
        <div class="table-wrap">
          <table class="feature-table">
            <thead>
              <tr>
                <th>Funzione</th>
                <th>Obiettivo</th>
                <th>Tecnologia</th>
              </tr>
            </thead>
            <tbody>
              ${stackRows
                .map(
                  (row) => `
                    <tr>
                      <td>${row[0]}</td>
                      <td>${row[1]}</td>
                      <td>${row[2]}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

function renderNotFound() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="highlight">404</span>
          <h2>Sezione non trovata</h2>
          <p>La route richiesta non esiste. Usa la navigazione principale per continuare.</p>
        </div>
        <a class="button primary" href="#/home" data-route="home">Torna alla Home</a>
      </div>
    </section>
  `;
}

function closeWikiMenu() {
  if (wikiGroup) {
    wikiGroup.removeAttribute("open");
  }
}

function updateActiveState(route) {
  const elements = document.querySelectorAll("[data-route]");

  elements.forEach((element) => {
    const targetRoute = element.dataset.route;
    const isWikiRoot = targetRoute === "wiki" && route.startsWith("wiki/");
    const isActive = targetRoute === route || isWikiRoot;

    element.classList.toggle("active", isActive);

    if (element.tagName === "A") {
      if (isActive) {
        element.setAttribute("aria-current", "page");
      } else {
        element.removeAttribute("aria-current");
      }
    }
  });
}

function renderRoute() {
  const rawRoute = getRouteFromHash();
  const route = normalizeRoute(rawRoute);

  if (rawRoute !== route) {
    window.location.hash = `#/${route}`;
    return;
  }

  const template = routes[route] || renderNotFound;
  appContainer.innerHTML = template();
  document.title = titles[route] || "Project Box";
  updateActiveState(route);
  closeWikiMenu();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function initNavigationBehavior() {
  if (!wikiGroup) {
    return;
  }

  wikiGroup.addEventListener("click", (event) => {
    if (event.target.closest(".wiki-menu a")) {
      closeWikiMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!wikiGroup.contains(event.target)) {
      closeWikiMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeWikiMenu();
    }
  });
}

window.addEventListener("hashchange", renderRoute);

document.addEventListener("DOMContentLoaded", () => {
  initNavigationBehavior();

  if (!window.location.hash) {
    window.location.hash = "#/home";
    return;
  }

  renderRoute();
});
