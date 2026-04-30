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
    ],
    editorial: [
      {
        title: "genesi e", em: "strategia",
        items: [
          { q: "origine", a: "Il progetto nasce nel 1998–99 da quattro ingegneri del team DirectX — Kevin Bachus, Seamus Blackley, Ted Hase e Otto Berkes, noti internamente come i \"Four Musketeers\" — che propongono una console basata su architettura PC per rispondere alla minaccia di PlayStation 2 come \"PC alternativo\" nel salotto. Nome in codice: Midway." },
          { q: "obiettivi", a: "Microsoft identifica tre pilastri: hardware competitivo a base di componenti PC standard, un ambiente di sviluppo DirectX familiare agli sviluppatori PC, e un'infrastruttura online proprietaria per monetizzare i servizi oltre la sola vendita hardware e software retail." },
          { q: "annuncio", a: "Presentata da Bill Gates e The Rock al CES di gennaio 2001, Xbox punta sulla potenza hardware e sulla familiarità di DirectX. Il nome deriva da \"DirectX Box\". La stampa accoglie con curiosità l'ingresso di un nuovo player occidentale nel mercato console." }
        ]
      },
      {
        title: "sistema operativo e", em: "servizi",
        items: [
          { q: "OS", a: "Il sistema operativo è un kernel Windows NT 5.0 (NT 5.0) fortemente ridotto — 512 KB di ROM — con subsistema Xbox dedicato e tutti i moduli legacy rimossi. Microsoft integra direttamente il layer DirectX per offrire API simili a quelle PC in un ambiente chiuso e controllato." },
          { q: "dashboard", a: "La Xbox Dashboard è l'interfaccia di default: schermate con sfondo animato verde/nero, menu per giochi, musica, impostazioni e Xbox Live. Gli utenti possono copiare tracce audio da CD sull'HDD e usarle come colonne sonore personalizzate nei giochi compatibili, funzione rara per l'epoca." },
          { q: "Xbox Live", a: "Lanciato il 15 novembre 2002 negli USA con Starter Kit a 49,95 USD (headset, demo disc, un anno di abbonamento). Introduce gamertag persistente, friend list centralizzata, matchmaking e voice chat in-game. Anticipano e influenzano fortemente i servizi di tutte le generazioni successive. Chiuso il 15 aprile 2010." }
        ]
      },
      {
        title: "libreria e", em: "franchise",
        items: [
          { q: "lancio", a: "Il lancio nordamericano del 15 novembre 2001 include circa 20 titoli, con Halo: Combat Evolved come killer app (Metacritic ~97). In Giappone (22 febbraio 2002) spiccano Genma Onimusha e Jet Set Radio Future; in Europa (14 marzo 2002) Dead or Alive 3 e Project Gotham Racing completano l'offerta." },
          { q: "esclusive", a: "Halo ridefinisce gli FPS su console grazie al controllo con doppio stick analogico e al multiplayer LAN. Halo 2 (2004) diventa il driver principale di Xbox Live. Seguono Fable (Lionhead), Forza Motorsport (2005) e cult come Crimson Skies, Panzer Dragoon Orta e Jet Set Radio Future." },
          { q: "multipiattaforma", a: "Il catalogo conta circa 800–900 titoli. La maggiore RAM e la GPU NV2A più avanzata di PS2 rendono spesso le versioni Xbox dei multipiattaforma graficamente superiori, consolidando la percezione di \"versione premium\" per molti titoli cross-platform della sesta generazione." }
        ]
      },
      {
        title: "dati commerciali e", em: "posizionamento",
        items: [
          { q: "vendite", a: "Le stime indicano 24–25 milioni di unità worldwide: circa 15,77M in Nord America, 7,17M in Europa, solo 0,47M in Giappone e 1,24M nel resto del mondo. Xbox supera GameCube (~21–22M) ma resta lontana da PlayStation 2 (~150M). La produzione cessa nel 2006." },
          { q: "giappone", a: "Con appena 470.000 unità, il mercato giapponese è il grande insuccesso della prima Xbox. Le cause: design percepito come troppo occidentale, dimensioni fisiche molto criticate e line-up poco allineata ai gusti locali. Un insuccesso che fornirà importanti lezioni sulle generazioni successive." },
          { q: "prezzo", a: "Il lancio a 299 USD (allineato a PS2) posiziona Xbox come alternativa premium con hardware superiore. I tagli progressivi — 179,99 USD nel 2004 in Nord America — e i bundle aggressivi spostano la console verso fasce più mainstream nel corso del ciclo vita." }
        ]
      },
      {
        title: "impatto e", em: "legacy",
        items: [
          { q: "standard online", a: "Xbox normalizza l'infrastruttura online centralizzata (gamertag, friend list, voice chat), l'HDD interno per salvataggi e contenuti, e l'architettura PC-like per semplificare lo sviluppo. Questi elementi anticipano standard che diventano universali dalla generazione successiva." },
          { q: "FPS su console", a: "Il successo di Halo sposta il baricentro degli FPS dal PC alla console. Major League Gaming usa Halo 2 come titolo di punta nei campionati di metà anni 2000, legittimando gli esports su console. La scena LAN party di Halo costruisce un forte senso di community offline." },
          { q: "preservazione", a: "Emulatori come Cxbx-Reloaded e xemu offrono compatibilità crescente su PC. I programmi di retrocompatibilità ufficiale su Xbox 360, One e Series X|S permettono di giocare legalmente una selezione di titoli originali su hardware moderno con miglioramenti automatici." }
        ]
      }
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
    ],
    editorial: [
      {
        title: "red ring of", em: "death",
        items: [
          { q: "il problema", a: "Il \"Red Ring of Death\" (RROD) — tre quadranti rossi sul Ring of Light che indicano General Hardware Failure — è il difetto hardware più famoso della storia console. Causato da problemi termici e di saldature BGA su CPU/GPU nelle prime revisioni (Xenon, 90 nm), il tasso di guasto è stimato da alcuni report sopra il 20% nelle prime ondate." },
          { q: "risposta", a: "Nel luglio 2007, dopo crescenti segnalazioni, Microsoft estende la garanzia a tre anni per tutti i casi di RROD con un accantonamento di 1,05 miliardi di dollari. Nel 2009 la copertura viene estesa all'errore E74 (chip ANA/HANA). Le revisioni Falcon (CPU 65 nm) e Jasper (CPU+GPU 65 nm, PSU 150 W) risolvono progressivamente il problema." },
          { q: "risoluzione", a: "Il consolidamento definitivo arriva con Trinity (Xbox 360 S, 2010): SoC XCGPU a 45 nm integra CPU, GPU ed eDRAM su un unico chip, abbassando i consumi a 135 W ed eliminando di fatto il RROD. La revisione Jasper (2008) è considerata la più affidabile della famiglia fat." }
        ]
      },
      {
        title: "xbox live e", em: "achievements",
        items: [
          { q: "modello gold", a: "Con Xbox 360, Xbox Live si struttura in due tier: Silver/Free per accesso base e Gold a pagamento, necessario per il multiplayer online nella maggior parte dei titoli. Nel 2011 Microsoft dichiara oltre 30 milioni di abbonati Gold, a testimonianza della centralità del servizio nell'ecosistema." },
          { q: "achievements", a: "Il sistema di Achievements e Gamerscore — introdotto con Xbox 360 al lancio del 2005 — diventa uno standard de facto nell'industria, replicato da Sony con i Trofei e poi da Steam. Crea engagement, replay value e un linguaggio condiviso tra giocatori su scala globale." },
          { q: "dashboard", a: "L'interfaccia Blades al lancio viene sostituita dal New Xbox Experience (NXE) nel novembre 2008: Avatar 3D, installazione giochi su HDD, Marketplace rinnovato. La dashboard Metro arriva nel dicembre 2011 con tile, Bing search e cloud saves. Il marketplace chiude definitivamente il 29 luglio 2024, sollevando preoccupazioni sulla preservazione dei giochi digital-only." }
        ]
      },
      {
        title: "libreria e", em: "franchise",
        items: [
          { q: "lancio", a: "Il 22 novembre 2005 la console parte con 18 titoli in Nord America: Call of Duty 2, Condemned, Perfect Dark Zero, PGR3, Kameo, NFS: Most Wanted. Titoli diversificati per genere, con l'FPS e il racing come generi di punta della line-up iniziale." },
          { q: "pilastri", a: "Halo 3 (2007, Metacritic ~94) conclude la trilogia originale con oltre 8 milioni di copie nel solo anno di uscita. Gears of War (2006, ~94) definisce il TPS moderno con il cover system e il roadie run. Forza Motorsport consolida la risposta a Gran Turismo. Questi tre franchise sono i pilastri identitari della console." },
          { q: "multipiattaforma", a: "La maggiore facilità di sviluppo su 360 rispetto a PS3 (modello di programmazione più lineare) porta molte versioni multipiattaforma a essere migliori in termini di frame rate e stabilità. Microsoft sfrutta questa reputazione con accordi per DLC Call of Duty in anteprima e contenuti GTA IV esclusivi temporali." }
        ]
      },
      {
        title: "dati commerciali e", em: "posizionamento",
        items: [
          { q: "vendite", a: "Xbox 360 supera ampiamente il primo Xbox: circa 84–86 milioni di unità worldwide, con 42,7 milioni negli USA (dato Circana). In UK diventa la console di settima generazione più venduta. In Giappone si ferma a circa 1,6 milioni, in miglioramento rispetto al predecessore ma ancora marginale." },
          { q: "dominio USA", a: "La console è la più venduta mensilmente negli USA per 32 mesi consecutivi tra gennaio 2011 e ottobre 2013, grazie alla revisione Slim, a Kinect e a un catalogo maturo. Globalmente Wii domina per volume ma perde supporto third-party negli ultimi anni; PS3 recupera nel medio periodo." },
          { q: "kinect", a: "Lanciato nel novembre 2010, Kinect diventa il dispositivo consumer venduto più rapidamente nella storia al lancio: 8 milioni di unità nei primi 60 giorni. Estende il pubblico ben oltre il target core gamer e prolunga il ciclo commerciale di Xbox 360 fino al 2016, anno della fine della produzione." }
        ]
      },
      {
        title: "legacy e", em: "impatto culturale",
        items: [
          { q: "standard moderni", a: "Xbox 360 è spesso considerata la console che definisce il modello moderno di piattaforma online: achievements, party chat cross-game, marketplace digitale, DLC e games on demand. TechRadar la definisce la console più influente della sua generazione per l'enfasi su distribuzione digitale e multiplayer." },
          { q: "scena competitiva", a: "La combinazione di Xbox Live, Halo 2 e poi Halo 3 fonda una delle prime scene esports strutturate su console. Major League Gaming usa Halo come titolo di punta; Gears of War è presente nel circuito competitivo con tornei dedicati nella seconda metà degli anni 2000." },
          { q: "preservazione", a: "Il progetto Xenia punta all'emulazione completa su PC. La retrocompatibilità ufficiale su Xbox One e Series X|S permette di giocare centinaia di titoli 360 con miglioramenti automatici (Auto HDR, FPS Boost). La chiusura del marketplace nel 2024 ha spinto community e istituzioni a rafforzare i progetti di preservazione digitale." }
        ]
      }
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
    ],
    editorial: [
      {
        title: "controversia al", em: "lancio",
        items: [
          { q: "reveal 2013", a: "Il reveal del 21 maggio 2013 punta marcatamente su TV, Kinect vocale e hub multimediale, relegando i giochi a una porzione limitata della presentazione. Le policy DRM annunciate — check-in online ogni 24 ore, limitazioni sull'usato — scatenano un backlash immediato e massiccio dalla community internazionale." },
          { q: "E3 2013", a: "Sony capitalizza il malcontento con un video virale su come \"prestare un gioco usato\" su PS4, considerato un momento iconico della storia dell'industria. Il 19 giugno 2013, pochi giorni dopo l'E3, Microsoft revoca tutte le policy DRM prima del lancio della console." },
          { q: "prezzo", a: "Il lancio a 499 USD con Kinect obbligatorio pone Xbox One circa 100 dollari sopra PS4 al day-one. Questa differenza, combinata con il backlash DRM, favorisce PS4 nelle vendite iniziali: la console Sony accumula una base installata quasi doppia rispetto a Xbox One già nel 2015." }
        ]
      },
      {
        title: "evoluzione software e", em: "game pass",
        items: [
          { q: "tre OS", a: "Xbox One utilizza un'architettura a tre sistemi operativi: un OS dedicato ai giochi, uno basato su Windows per app e interfaccia, e un hypervisor che gestisce la ripartizione delle risorse. La funzione Snap permette di affiancare app al gameplay ma viene rimossa nel 2016 per liberare memoria ai giochi." },
          { q: "New Xbox One Experience", a: "Il novembre 2015 porta il passaggio a base Windows 10 e la retrocompatibilità Xbox 360 con emulatore Fission: 104 titoli compatibili al debutto. La UI diventa più rapida con il Guide laterale. Il programma retrocompatibilità cresce fino a oltre 460 titoli 360, poi aggiungendo titoli Xbox originale." },
          { q: "Game Pass", a: "Lanciato nel giugno 2017, Xbox Game Pass trasforma il modello economico Xbox: un catalogo rotante di titoli scaricabili in abbonamento. Nel 2019 arriva Game Pass Ultimate che unisce console, PC e Xbox Live Gold. È il lascito più duraturo della generazione Xbox One sull'industria." }
        ]
      },
      {
        title: "libreria e", em: "esclusive",
        items: [
          { q: "first-party", a: "Il ciclo vita produce Forza Motorsport 5/6/7 e Forza Horizon 2/3/4, Halo: The Master Chief Collection e Halo 5, Gears of War 4 e Gears 5, Sunset Overdrive (Insomniac), Ori and the Blind Forest / Will of the Wisps e Sea of Thieves. Molti titoli escono anche su PC tramite Xbox Play Anywhere." },
          { q: "vs PS4", a: "Con circa 58 milioni di unità vendute per tutta la famiglia Xbox One, contro le ~115 milioni di PS4, la generazione si chiude in netta posizione di secondo posto. Il numero totale di grandi esclusive risulta inferiore a PS4, fattore spesso citato nelle analisi comparative dell'era." },
          { q: "One X", a: "Xbox One X (novembre 2017, 499 USD) viene accolta come \"la console più potente al mondo\" al lancio: GPU 6 TFLOPS, 12 GB GDDR5, 4K nativo, vapor chamber. Introduce il concetto di mid-generation refresh di potenza significativa, anticipando PS4 Pro e influenzando il design dei cicli hardware successivi." }
        ]
      },
      {
        title: "dati commerciali e", em: "segmentazione",
        items: [
          { q: "vendite", a: "La famiglia Xbox One vende circa 58 milioni di unità lifetime. Il lancio è forte (1 milione nelle prime 24 ore, 3 milioni entro fine 2013), ma PS4 supera sistematicamente Xbox One nelle vendite mensili. I mercati forti restano Nord America e UK; Giappone e Asia rimangono molto deboli." },
          { q: "multi-SKU", a: "La gamma evolve da prodotto premium all-in-one (499 USD con Kinect) a una linea stratificata: One S mainstream (299 USD), One X high-end 4K (499 USD), One S All-Digital budget digitale (249 USD). Questa segmentazione anticipa direttamente la strategia Series S/X della generazione successiva." },
          { q: "fine produzione", a: "Microsoft cessa la produzione di Xbox One X e One S All-Digital prima del lancio di Series X|S nel 2020, concentrando le risorse sulla nuova generazione. Il supporto software e i servizi online rimangono attivi per Xbox One anche dopo la fine della produzione." }
        ]
      },
      {
        title: "legacy e", em: "influenza",
        items: [
          { q: "Game Pass", a: "Il lancio di Xbox Game Pass nel 2017 segna uno dei cambiamenti strutturali più significativi dell'industria moderna: un modello di distribuzione in abbonamento che concorre con l'acquisto singolo. Diventa il pilastro commerciale attorno a cui Microsoft costruisce tutta la strategia dalla generazione Series in poi." },
          { q: "mid-gen refresh", a: "Xbox One X introduce il concetto di \"mid-generation refresh\" di potenza significativa — da 1,31 a 6 TFLOPS — anticipando PS4 Pro e consolidando l'idea di cicli hardware più flessibili. Dimostra che Microsoft può costruire hardware premium di riferimento." },
          { q: "retrocompatibilità", a: "Il lavoro sull'emulatore Fission — assente al lancio e aggiunto nel 2015 dopo le pressioni dei giocatori — crea il know-how che rende possibile la vasta compatibilità su quattro generazioni di Series X|S. La retrocompatibilità diventa da allora un valore identitario fondamentale del brand Xbox." }
        ]
      }
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
    editorial: [
      {
        title: "velocity", em: "architecture",
        items: [
          { q: "SSD custom", a: "L'SSD NVMe PCIe 4.0 custom da 1 TB (Series X) raggiunge 2,4 GB/s raw e fino a 4,8 GB/s con compressione hardware (BCPack + zlib). La Xbox Velocity Architecture integra SSD, decompressione hardware, DirectStorage e Sampler Feedback Streaming per caricare solo le texture effettivamente necessarie, eliminando praticamente i loading screen tradizionali." },
          { q: "Quick Resume", a: "Quick Resume permette di riprendere sessioni multiple di gioco contemporaneamente senza ricaricare, grazie alla capacità dell'SSD di sospendere e ripristinare stati di memoria completi in pochi secondi. Dal marzo 2022 è possibile pinnare titoli prioritari che rimangono sempre residenti." },
          { q: "FPS Boost e Auto HDR", a: "FPS Boost può raddoppiare o quadruplicare il frame rate di titoli retrocompatibili selezionati senza intervento degli sviluppatori. Auto HDR ricostruisce tramite machine learning il mapping HDR su titoli che supportano solo SDR, migliorando automaticamente l'esperienza visiva di migliaia di giochi legacy su quattro generazioni." }
        ]
      },
      {
        title: "game pass e", em: "ecosistema cloud",
        items: [
          { q: "Game Pass Ultimate", a: "Xbox Game Pass Ultimate integra Game Pass console, PC Game Pass, multiplayer online e Xbox Cloud Gaming in un unico abbonamento. Consente di giocare via streaming su PC, smartphone, smart TV e browser con sincronizzazione cloud dei salvataggi, estendendo Xbox ben oltre la console fisica." },
          { q: "day-one first party", a: "Tutti i giochi sviluppati da Xbox Game Studios escono direttamente in Game Pass al lancio. Applicato a Halo Infinite, Forza Horizon 5, Hi-Fi Rush e Starfield, questo modello cambia le aspettative dei giocatori sul costo di accesso alle esclusive e rappresenta il punto differenziante principale rispetto ai concorrenti." },
          { q: "Smart Delivery", a: "Smart Delivery garantisce l'aggiornamento automatico e gratuito alla versione next-gen dei titoli acquistati su Xbox One. Questo meccanismo, insieme alla retrocompatibilità su quattro generazioni, definisce il concetto di \"generazione morbida\" che caratterizza Series X|S: stessa identità, libreria e accessori tra generazioni." }
        ]
      },
      {
        title: "libreria e", em: "franchise",
        items: [
          { q: "esclusive chiave", a: "Halo Infinite (343 Industries, 2021) introduce il multiplayer free-to-play. Forza Horizon 5 (Playground Games, 2021) è acclamato come uno dei migliori racing open world di sempre. Hi-Fi Rush (Tango Gameworks, 2023), lanciato senza preavviso direttamente in Game Pass, diventa un caso di studio per la strategia \"shadow drop\". Starfield (Bethesda, 2023) come grande esclusiva console." },
          { q: "retrocompatibilità", a: "Series X|S supportano tutti i giochi Xbox One che non richiedono Kinect, più l'intero catalogo BC di Xbox 360 e Xbox originale già supportato su One: compatibilità su quattro generazioni. Titoli BC beneficiano di miglioramenti automatici: Auto HDR, 16× anisotropic filtering, Quick Resume, FPS Boost selettivo." },
          { q: "acquisizioni", a: "Nel corso della generazione Series, Microsoft porta a termine l'acquisizione di Activision Blizzard King (2023, circa 68,7 miliardi di dollari), la più grande della storia dell'industria videoludica, aggiungendo all'ecosistema Xbox i franchise Call of Duty, World of Warcraft, Diablo e Overwatch." }
        ]
      },
      {
        title: "dati commerciali e", em: "posizionamento",
        items: [
          { q: "vendite", a: "Microsoft non pubblica cifre ufficiali, ma le stime collocano Series X|S intorno a 33–35 milioni di unità a fine 2025, contro circa 74 milioni di PS5. Il market share Xbox è stimato intorno al 16–17% worldwide. Negli USA le Series si comportano meglio; in Giappone la quota è marginale (~2,4%)." },
          { q: "due SKU", a: "La strategia a due modelli complementari — Series X premium (499 USD, 4K, drive ottico) e Series S entry (299 USD, 1440p, digital only) — permette di coprire fascia alta e mainstream. Series S ha attirato un pubblico più ampio grazie al prezzo contenuto, ma il suo storage da 512 GB è stato oggetto di critiche ricorrenti." },
          { q: "Xbox All-Access", a: "Il programma Xbox All-Access permette di acquisire console + Game Pass Ultimate a rate mensili (35 USD/mese per Series X, 25 USD per Series S su 24 mesi), abbassando la barriera d'accesso e integrando hardware e servizi in un unico canone. Disponibile nei principali mercati tramite retailer partner." }
        ]
      },
      {
        title: "legacy e", em: "direzione futura",
        items: [
          { q: "generazione morbida", a: "Series X|S codificano il modello di \"generazione morbida\": stessa UI, stesso ecosistema, quattro generazioni di giochi compatibili e aggiornamenti cross-gen automatici. Il concetto di \"Xbox\" si estende a PC e cloud più che a una singola console, ridefinendo il significato di piattaforma hardware." },
          { q: "influenza industry", a: "Quick Resume, Auto HDR, FPS Boost e Velocity Architecture influenzano l'approccio dei concorrenti alla retrocompatibilità e alle feature software. La centralità di Game Pass e del cloud gaming spinge Sony ad accelerare PS Plus e PlayStation Now, consolidando un modello di competizione basato sui servizi." },
          { q: "prossima generazione", a: "Phil Spencer ha dichiarato nel 2023 che il focus è sulla futura generazione piuttosto che su mid-gen refresh. L'ecosistema Xbox — con Game Pass, cloud, retrocompatibilità e acquisizioni Activision Blizzard — prepara una transizione che potrebbe de-enfatizzare ulteriormente il ruolo del singolo hardware." }
        ]
      }
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
