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
    image: "images/xbox-original.jpg",
    nav: "Generazione I", num: "01", year: "2001", label: "prima generazione",
    title: "Generazione", em: "I",
    intro: "La prima console Microsoft nasce dalla volontà di portare l'architettura PC nel salotto, rispondere alla minaccia PlayStation 2 e fondare un'infrastruttura online persistente. Hardware potente, HDD integrato ed Ethernet nativa anticipano standard che diventeranno industria.",
    specs: [
      { k: "anno", v: "2001 — 2006 (prod.) · 2010 (Live)" },
      { k: "cpu", v: "Intel Pentium III custom 733 MHz, 32-bit" },
      { k: "gpu", v: "Nvidia NV2A (GeForce 3) 233 MHz · DX8" },
      { k: "ram", v: "64 MB DDR SDRAM unificata · 6.4 GB/s" },
      { k: "storage", v: "HDD interno 8–10 GB + Memory Unit 8 MB" },
      { k: "ottico", v: "DVD-ROM (giochi + DVD video con kit)" },
      { k: "rete", v: "Ethernet 10/100 integrata" },
      { k: "uscita video", v: "480i/p · 720p/1080i (component, titoli selezionati)" },
      { k: "dimensioni", v: "320 × 259 × 91 mm · ~4 kg" },
      { k: "prezzo lancio", v: "299 USD · 34.800 JPY · ~479 EUR" }
    ],
    timeline: [
      { date: "1998–1999", title: "Concezione interna", desc: "I \"Four Musketeers\" del team DirectX — Bachus, Blackley, Hase, Berkes — propongono una console PC-like per competere con PS2." },
      { date: "03.2000", title: "Microsoft Games Division", desc: "Microsoft formalizza la divisione gaming e porta il team a circa 1000 persone." },
      { date: "01.2001", title: "Annuncio al CES", desc: "Bill Gates e The Rock presentano Xbox al Consumer Electronics Show, enfatizzando potenza, DirectX e online." },
      { date: "15.11.2001", title: "Lancio nordamericano", desc: "Debutto con Halo: Combat Evolved, Project Gotham Racing e circa 20 titoli. Prezzo: 299 USD." },
      { date: "22.02.2002", title: "Lancio in Giappone", desc: "12 titoli disponibili tra cui Genma Onimusha, Dead or Alive 3 e Jet Set Radio Future. Ricezione tiepida." },
      { date: "14.03.2002", title: "Lancio in Europa", desc: "Line-up con Halo, Dead or Alive 3, Project Gotham Racing e titoli sportivi. Prezzo iniziale ~479 EUR." },
      { date: "15.11.2002", title: "Lancio Xbox Live", desc: "Starter Kit a 49,95 USD: headset, demo disc e un anno di abbonamento. Matchmaking, gamertag e voice chat." },
      { date: "2002", title: "Controller S", desc: "Il pad più compatto sostituisce \"The Duke\" come standard incluso nei mercati occidentali." },
      { date: "2004", title: "Revisione 1.6 (Tuscany)", desc: "Ultimo aggiornamento motherboard: nuovo video encoder, RAM Hynix, ulteriori ottimizzazioni costi." },
      { date: "2004", title: "Halo Limited Edition", desc: "Console verde traslucida in bundle con Controller S abbinato e copia di Halo: Combat Evolved." },
      { date: "2004–2005", title: "Tagli di prezzo e Halo 2", desc: "Prezzo ridotto a 179,99 USD in Nord America. Halo 2 diventa driver principale di Xbox Live." },
      { date: "2005–2006", title: "Fine produzione", desc: "Dismissione graduale in concomitanza col lancio di Xbox 360. Vendite finali da esaurimento scorte." },
      { date: "15.04.2010", title: "Chiusura Xbox Live originale", desc: "Microsoft dismette il supporto online per console e giochi Xbox v1. Le modalità offline restano attive." }
    ],
    models: [
      { name: "Launch Edition — \"The Duke\"", desc: "Modello originale con il controller voluminoso di prima generazione. HDD 8 GB, Ethernet integrata, quattro porte controller.", tags: ["2001", "duke", "rev. 1.0–1.1"] },
      { name: "Controller S Bundle", desc: "Il pad più compatto, più ergonomico, diventa standard nei mercati occidentali. Revisioni 1.2–1.5 (Xblade).", tags: ["2002", "controller s", "rev. 1.2–1.5"] },
      { name: "Revisione 1.6 — Tuscany", desc: "PCB X01063-121: nuovo video encoder, aggiornamenti RAM e ulteriore riduzione costi produttivi.", tags: ["2004", "rev. 1.6", "cost-down"] },
      { name: "Halo Limited Edition", desc: "Scocca verde traslucida, Controller S abbinato, copia di Halo: Combat Evolved inclusa. Tra le più ambite dai collezionisti.", tags: ["2004", "limited", "halo"] },
      { name: "Ice Blue Halo 2 Edition", desc: "Scocca blu traslucida distribuita in Canada e alcune regioni asiatiche con Controller S verde e copia di Halo 2.", tags: ["2005", "limited", "halo 2"] },
      { name: "Mountain Dew Edition", desc: "Scocca verde lime ottenibile solo con punti fedeltà Mountain Dew USA. Tiratura stimata ~5.000 unità.", tags: ["limited", "promo", "~5.000 unità"] }
    ]
  },
  "xbox-360": {
    image: "images/xbox-360.jpg",
    nav: "Generazione II", num: "02", year: "2005", label: "alta definizione",
    title: "Generazione", em: "II",
    intro: "Xbox 360 definisce il modello moderno di console online: achievements, party chat, marketplace digitale e un catalogo da ~84 milioni di unità vendute. Arriva sul mercato con un anno di vantaggio su PS3, portando l'HD gaming di massa nel salotto occidentale.",
    specs: [
      { k: "anno", v: "2005 — 2016 (prod.) · 2024 (marketplace)" },
      { k: "cpu", v: "IBM PowerPC Xenon tri-core 3,2 GHz · 6 thread" },
      { k: "gpu", v: "ATI Xenos 500 MHz · 10 MB eDRAM · 240 GFLOPS" },
      { k: "ram", v: "512 MB GDDR3 unificata · 22,4 GB/s" },
      { k: "storage", v: "HDD 20–500 GB (o 4 GB flash su modelli S/E)" },
      { k: "ottico", v: "DVD 12× dual layer (XGD2/XGD3) + HD DVD ext." },
      { k: "rete", v: "Ethernet 10/100 · Wi-Fi N integrato (S/E)" },
      { k: "uscita video", v: "480p · 720p · 1080i · 1080p · HDMI dal 2007" },
      { k: "audio", v: "Dolby Digital 5.1 obbligatorio per tutti i giochi" },
      { k: "prezzo lancio", v: "Core 299,99 USD · Premium 399,99 USD · JP 37.900 JPY" }
    ],
    timeline: [
      { date: "2003", title: "Progetto Xenon", desc: "Avvio dello sviluppo con nome in codice Xenon. J Allard guida la piattaforma; IBM e ATI firmano accordi per CPU e GPU." },
      { date: "08.2003", title: "Accordo ATI per Xenos", desc: "ATI sviluppa la GPU Xenos con shader unificati e eDRAM dedicata da 10 MB: una scelta che anticipa l'architettura delle GPU moderne." },
      { date: "12.05.2005", title: "Reveal MTV", desc: "Presentazione mondiale nel programma TV \"Xbox: The Next Generation Revealed\" su MTV, prima dell'E3 2005." },
      { date: "05.2005", title: "E3 2005", desc: "Presentazione hardware completa: CPU IBM tri-core 3,2 GHz, GPU ATI Xenos, 512 MB RAM. Epic Games mostra l'impatto del raddoppio RAM su Gears of War." },
      { date: "22.11.2005", title: "Lancio nordamericano", desc: "Due SKU: Core (299,99 USD, senza HDD) e Premium (399,99 USD, 20 GB). 18 titoli disponibili al day one." },
      { date: "02.12.2005", title: "Lancio in Europa", desc: "Premium a 399,99 EUR, Core a 299,99 EUR. Il numero di titoli varia rispetto al lancio nordamericano." },
      { date: "10.12.2005", title: "Lancio in Giappone", desc: "7 titoli disponibili. Le vendite rimarranno contenute: ~1,6 milioni di unità lifetime." },
      { date: "2007", title: "Red Ring of Death", desc: "Esplode il caso RROD: tassi di guasto elevati nelle prime revisioni per difetti termici su CPU/GPU. Microsoft estende la garanzia a 3 anni con un accantonamento di 1,05 miliardi di dollari." },
      { date: "2007", title: "Elite e HDMI", desc: "Lancio della revisione Zephyr con HDMI e dell'Elite (120 GB, finitura nera). Falcon introduce la CPU a 65 nm." },
      { date: "11.2008", title: "New Xbox Experience (NXE)", desc: "Nuova dashboard con Avatar 3D, installazione giochi su HDD e redesign del Marketplace." },
      { date: "11.2008", title: "Jasper", desc: "CPU e GPU a 65 nm, PSU scende a 150 W: una delle revisioni più affidabili dell'intera famiglia." },
      { date: "06.2010", title: "Xbox 360 S — Trinity", desc: "SoC XCGPU a 45 nm integra CPU, GPU ed eDRAM. Nuovo case slim, Wi-Fi N integrato, PSU 135 W. Lancio contestuale di Kinect." },
      { date: "12.2011", title: "Dashboard Metro", desc: "Interfaccia con tile, integrazione Bing, cloud saves, Kinect voice e nuova offerta video/musica (Zune → Xbox Video/Music)." },
      { date: "06.2013", title: "Xbox 360 E", desc: "Ultimo redesign estetico della 360, ispirato ad Xbox One. Revisione Stingray, PSU 120 W." },
      { date: "20.04.2016", title: "Fine produzione", desc: "Microsoft annuncia la cessazione delle nuove unità dopo oltre 10 anni. Lo stock esistente continua a essere venduto." },
      { date: "29.07.2024", title: "Chiusura marketplace", desc: "Il marketplace Xbox 360 cessa la vendita di giochi, DLC e contenuti video. Download di contenuti già acquistati e multiplayer restano attivi." }
    ],
    models: [
      { name: "Core", desc: "SKU entry-level senza HDD e con controller cablato. Limitato nelle funzionalità avanzate (retrocompatibilità, installazione giochi).", tags: ["2005", "senza hdd", "299 USD"] },
      { name: "Premium / Pro", desc: "HDD da 20 GB, controller wireless, headset e cavo component HD-AV. Lo SKU principale al lancio.", tags: ["2005", "20 gb", "399 USD"] },
      { name: "Elite", desc: "Finitura nera con HDD da 120 GB. Prima revisione con capienza storage significativa per utenti core.", tags: ["2007", "120 gb", "nero"] },
      { name: "Slim — Xbox 360 S (Trinity)", desc: "SoC XCGPU a 45 nm, Wi-Fi N integrato, design slim rinnovato. Tra i modelli più silenziosi e affidabili della generazione.", tags: ["2010", "wi-fi n", "45 nm"] },
      { name: "Xbox 360 E (Stingray)", desc: "Ultimo form factor, ispirato esteticamente ad Xbox One. Revisione Corona/Stingray a 45 nm, PSU 120 W.", tags: ["2013", "refresh", "ultimo modello"] },
      { name: "Halo 3 Special Edition", desc: "Console fat verde/oro con serigrafie Spartan, HDD 20 GB, controller wireless abbinato e tema scaricabile.", tags: ["2007", "limited", "halo 3"] },
      { name: "Modern Warfare 2 Edition", desc: "Console fat grigio scuro con grafiche MW2, HDD 250 GB: prima configurazione retail con tagllio da 250 GB.", tags: ["2009", "limited", "250 gb"] },
      { name: "Kinect Star Wars Edition", desc: "Console S bianca con livrea R2-D2, controller dorato stile C-3PO, sensore Kinect bianco. Tra le più ricercate dai collezionisti.", tags: ["2012", "limited", "kinect"] }
    ]
  },
  "xbox-one": {
    image: "images/xbox-one.jpg",
    nav: "Generazione III", num: "03", year: "2013", label: "ecosistema unificato",
    title: "Generazione", em: "III",
    intro: "Xbox One parte come \"all-in-one entertainment system\" con Kinect obbligatorio e focus TV, poi si riallinea al gaming dopo il backlash del reveal. Game Pass nasce qui. Xbox One X introduce il mid-gen refresh di potenza e il 4K nativo come valore differenziante.",
    specs: [
      { k: "anno", v: "2013 — 2020 (prod.)" },
      { k: "cpu", v: "AMD Jaguar 8 core x86-64 · 1,75 GHz" },
      { k: "gpu", v: "AMD GCN 12 CU · 1,31 TFLOPS + 32 MB ESRAM" },
      { k: "ram", v: "8 GB DDR3 · 68,3 GB/s" },
      { k: "storage", v: "HDD 500 GB – 1 TB · espandibile via USB 3.0" },
      { k: "ottico", v: "Blu-ray / DVD (UHD 4K dal modello S)" },
      { k: "rete", v: "Ethernet GbE · Wi-Fi 802.11n · Wi-Fi Direct" },
      { k: "uscita video", v: "1080p · 4K upscaling (S) · 4K nativo (X, 6 TFLOPS)" },
      { k: "hdmi-in", v: "Pass-through decoder TV via OneGuide" },
      { k: "prezzo lancio", v: "499 USD (con Kinect) · 499 EUR" }
    ],
    timeline: [
      { date: "2011–2012", title: "Progetto Durango", desc: "Sviluppo SDK e devkit con nome in codice Durango. La visione include Kinect avanzato, integrazione cloud e sperimentazioni AR (progetto Fortaleza)." },
      { date: "21.05.2013", title: "Annuncio ufficiale", desc: "Reveal a Redmond con Don Mattrick: focus su TV, controllo vocale Kinect e hub multimediale. Scarso spazio per i giochi." },
      { date: "06.2013", title: "Polemiche DRM e inversione di rotta", desc: "Dopo il backlash su always-online e limitazioni usato, Microsoft revoca tutte le policy DRM prima del lancio. Sony capitalizza il momento all'E3." },
      { date: "22.11.2013", title: "Lancio nordamericano ed europeo", desc: "499 USD con Kinect obbligatorio. 1 milione di unità nelle prime 24 ore. Line-up con Forza 5, Ryse, Dead Rising 3, Killer Instinct." },
      { date: "09.2014", title: "Espansione a 26 nuovi mercati", desc: "Lancio in Giappone, Cina (prima Xbox ufficiale nel paese) e altri mercati europei e asiatici. Bundle senza Kinect introdotti per ridurre il prezzo." },
      { date: "11.2015", title: "New Xbox One Experience", desc: "Passaggio a base Windows 10, nuova dashboard, Guide laterale, retrocompatibilità Xbox 360 con emulatore Fission: 104 titoli al debutto." },
      { date: "2016", title: "Xbox One S", desc: "Case 40% più piccolo, alimentatore interno, supporto 4K UHD Blu-ray e HDR10 per i giochi. Parte da 299 USD (500 GB)." },
      { date: "06.2017", title: "Xbox Game Pass", desc: "Lancio dell'abbonamento con catalogo rotante di titoli scaricabili. Cambio strutturale del modello di business Xbox." },
      { date: "11.2017", title: "Xbox One X", desc: "\"Console più potente al mondo\" al lancio: GPU 6 TFLOPS, 12 GB GDDR5, 4K nativo, vapor chamber. Prezzo 499 USD." },
      { date: "2018", title: "Xbox Adaptive Controller", desc: "Controller pensato per l'accessibilità con grandi tasti e porte per dispositivi esterni. Modello poi replicato da altri produttori." },
      { date: "05.2019", title: "Xbox One S All-Digital", desc: "Primo modello senza lettore ottico, solo digitale. Prezzo 249 USD in bundle con tre giochi digitali." },
      { date: "Fine 2020", title: "Fine produzione", desc: "Microsoft cessa la produzione di Xbox One X e One S All-Digital prima del lancio di Series X|S. La One S con disco continua fino a fine anno." }
    ],
    models: [
      { name: "Xbox One (2013)", desc: "Modello originale con Kinect obbligatorio, alimentatore esterno, GPU 1,31 TFLOPS. Case volumoso in finitura bicolore liquid black.", tags: ["2013", "kinect", "499 USD"] },
      { name: "Xbox One Elite (2015)", desc: "1 TB SSHD con cache flash per avvii più veloci, controller Elite di fascia alta incluso.", tags: ["2015", "1 TB SSHD", "elite controller"] },
      { name: "Xbox One S (2016)", desc: "Case 40% più piccolo, PSU interno, 4K UHD Blu-ray, HDR10. Tagli da 500 GB a 2 TB su edizioni limitate. Il modello principale del ciclo.", tags: ["2016", "4K UHD", "299 USD"] },
      { name: "Xbox One S All-Digital (2019)", desc: "Nessun lettore ottico, solo digitale. 1 TB in bundle con Forza Horizon 3, Sea of Thieves e Minecraft.", tags: ["2019", "digital only", "249 USD"] },
      { name: "Xbox One X (2017)", desc: "GPU 6 TFLOPS, 12 GB GDDR5, 4K nativo, vapor chamber. La console più potente al lancio nel 2017. Case compatto.", tags: ["2017", "4K nativo", "6 TFLOPS"] },
      { name: "Cyberpunk 2077 Limited Edition", desc: "Xbox One X con pannelli metallici, incisioni laser e LED fosforescenti. Limitata a ~45.000 unità, molto ricercata dai collezionisti.", tags: ["2020", "limited", "~45.000 unità"] }
    ]
  },
  "xbox-series": {
    image: "images/xbox-series.jpg",
    nav: "Generazione IV", num: "04", year: "2020", label: "current gen",
    title: "Generazione", em: "IV",
    intro: "Xbox Series X|S è la prima generazione Xbox a supportare quattro generazioni di retrocompatibilità. SSD NVMe custom, Xbox Velocity Architecture e Game Pass Ultimate definiscono un modello \"piattaforma come servizio\" su console, PC e cloud. Due hardware complementari per due target di prezzo e risoluzione.",
    specs: [
      { k: "anno", v: "2020 — oggi" },
      { k: "cpu (Series X)", v: "AMD Zen 2 8 core · 3,8 GHz (3,66 w/SMT) · 7 nm" },
      { k: "gpu (Series X)", v: "RDNA 2 · 52 CU · 1,825 GHz · 12,155 TFLOPS" },
      { k: "ram (Series X)", v: "16 GB GDDR6 · 10 GB @ 560 GB/s · 6 GB @ 336 GB/s" },
      { k: "cpu (Series S)", v: "AMD Zen 2 8 core · 3,6 GHz (3,4 w/SMT)" },
      { k: "gpu (Series S)", v: "RDNA 2 · 20 CU · 1,565 GHz · 4 TFLOPS" },
      { k: "ram (Series S)", v: "10 GB GDDR6 · 8 GB @ 224 GB/s · 2 GB @ 56 GB/s" },
      { k: "storage", v: "1 TB NVMe SSD (Series X) · 512 GB (Series S) · schede exp." },
      { k: "target", v: "4K / 60–120 fps (X) · 1440p / 60–120 fps (S)" },
      { k: "retrocomp.", v: "4 generazioni Xbox · Auto HDR · FPS Boost · Quick Resume" }
    ],
    timeline: [
      { date: "06.2019", title: "Annuncio Project Scarlett all'E3", desc: "Microsoft svela i target: CPU 4× e GPU 2× rispetto a Xbox One X, SSD, 120 fps, 8K e retrocompatibilità totale. Halo Infinite annunciato come titolo di lancio." },
      { date: "12.2019", title: "Reveal Xbox Series X ai TGA", desc: "Nome commerciale e design a \"tower\" svelati ai The Game Awards 2019. Il meme \"mini-frigo\" diventa virale. Slogan: power your dreams." },
      { date: "03.2020", title: "Specifiche tecniche complete", desc: "Microsoft pubblica le spec definitive: Zen 2, RDNA 2 12 TFLOPS, 16 GB GDDR6, SSD 2,4 GB/s, Xbox Velocity Architecture con DirectStorage e BCPack." },
      { date: "09.2020", title: "Annuncio Xbox Series S e prezzi", desc: "Series S svelata come \"la più piccola Xbox di sempre\": 299 USD, 4 TFLOPS, target 1440p, solo digitale. Series X a 499 USD. Lancio fissato al 10 novembre." },
      { date: "10.11.2020", title: "Lancio globale simultaneo", desc: "Lancio in numerosi mercati contemporaneamente: il più ampio della storia del brand. 30 titoli ottimizzati al day one. Shortage chip limita la disponibilità." },
      { date: "02.2021", title: "FPS Boost", desc: "Feature retrocompatibile che raddoppia o quadruplica il frame rate di titoli selezionati precedenti, senza modifiche da parte degli sviluppatori." },
      { date: "09.2021", title: "Dolby Vision Gaming", desc: "Xbox Series X|S diventano le prime console a supportare Dolby Vision nei giochi, con mappatura dinamica della luminosità su titoli HDR10 e Auto HDR." },
      { date: "11.2021", title: "Halo Infinite Limited Edition Bundle", desc: "Console Series X con livrea UNSC per il ventennale di Halo. Uno degli SKU più ricercati della generazione. Lancio contestuale di Halo Infinite." },
      { date: "06.2023", title: "21 milioni di unità", desc: "Microsoft conferma pubblicamente il traguardo dei 21 milioni di unità Series X|S vendute, dichiarandosi terza dietro Nintendo e Sony." },
      { date: "10.2024", title: "Refresh hardware 2024", desc: "Lancio di Series X 1 TB All-Digital, Series X 2 TB Galaxy Black Special Edition e Series S 1 TB. Series X 2024 adotta die più piccolo e heatpipe al posto della vapor chamber." }
    ],
    models: [
      { name: "Series X — Carbon Black (2020)", desc: "Modello di lancio. Tower 4K, UHD Blu-ray, 1 TB SSD, vapor chamber. 499 USD. Il dispositivo Xbox più potente mai prodotto al lancio.", tags: ["2020", "4K", "12 TFLOPS"] },
      { name: "Series S — Robot White (2020)", desc: "Entry point digitale. Chassis bianco con griglia circolare nera, 512 GB SSD, target 1440p/120 fps. 299 USD. Nessun drive ottico.", tags: ["2020", "1440p", "digital only"] },
      { name: "Series S 1 TB Carbon Black (2023)", desc: "Stessa architettura della Series S originale con storage raddoppiato a 1 TB e colorazione nera. Prezzo 349 USD.", tags: ["2023", "1 TB", "carbon black"] },
      { name: "Halo Infinite Limited Edition (2021)", desc: "Series X con livrea UNSC e motivi stellari per il ventennale di Halo. Controller abbinato, copia digitale del gioco. Tra le più ambite dai collezionisti.", tags: ["2021", "limited", "halo 20°"] },
      { name: "Series X 2 TB Galaxy Black (2024)", desc: "Special Edition con SSD raddoppiato a 2 TB, die ridotto, heatpipe al posto della vapor chamber. Consumi leggermente inferiori.", tags: ["2024", "2 TB", "special edition"] },
      { name: "Series X All-Digital (2024)", desc: "Series X senza lettore ottico. Disponibile in bianco e nero. Nuova motherboard con SoC più compatto rispetto al modello originale.", tags: ["2024", "digital only", "white/black"] }
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
