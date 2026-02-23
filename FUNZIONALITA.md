# Funzionalita attuali del sito (stato: 2026-02-23)

## Panoramica
- Sito statico multipagina in italiano dedicato alla storia delle console Xbox.
- Pagine disponibili: `index.html`, `xbox-original.html`, `xbox-360.html`, `xbox-one.html`, `xbox-series.html`.

## Funzionalita globali
- Navigazione principale persistente con link a tutte le pagine.
- Evidenziazione della pagina attiva in navbar (`aria-current="page"`).
- Navbar sticky in alto durante lo scroll.
- Navigazione interna a sezioni tramite anchor (`#...`) in hero/footer.
- Footer con link rapidi e contatto email (`mailto:ciao@projectbox.it`).
- Link esterno a `xbox.com` in nuova scheda (solo pagina Xbox Original).
- Layout responsive con breakpoint mobile a `640px`.
- UI coerente a card: hero, timeline, griglie di contenuti, liste specifiche tecniche.
- Smooth scroll nativo via CSS (`scroll-behavior: smooth`).

## Contenuti/funzionalita per pagina
### Home (`index.html`)
- Hero introduttiva con CTA verso generazioni e missione del progetto.
- Sezione missione con 3 card (Ricerca curata, Esperienza guidata, Community first).
- Timeline sintetica delle 4 generazioni.
- Catalogo rapido con link diretti alle pagine generazionali.

### Xbox Original (`xbox-original.html`)
- Timeline delle tappe principali (2001-2005).
- Sezione "Sotto-modelli" con 4 card tecniche (Launch, Controller S, 1.6, Crystal).

### Xbox 360 (`xbox-360.html`)
- Timeline evolutiva (Core/Premium -> Elite/Jasper -> S -> E).
- Sezione modelli con 6 card (incluse edizioni speciali).
- Sezione servizi dedicata (Live Gold, Marketplace, Kinect).

### Xbox One (`xbox-one.html`)
- Timeline del ciclo generazionale (lancio, revisione UI, One S, One X).
- Sezione modelli con 4 card (One, One S, One X, edizioni limitate).
- Sezione ecosistema (Game Pass, retrocompatibilita, Elite Controller).

### Xbox Series (`xbox-series.html`)
- Timeline (Project Scarlett, lancio, FPS Boost, Cloud & Game Pass).
- Confronto strutturato tra Series X e Series S (specifiche e target).
- Sezione feature next-gen (Velocity Architecture, Quick Resume, Cloud Gaming).

## Stato tecnico attuale
- Nessun framework/build: il sito funziona come puro HTML/CSS statico.
- File JavaScript presenti ma non collegati alle pagine:
  - `app.js` (smooth scroll su anchor)
  - `js/main.js` (caricamento dinamico contenuti da JSON)
- Nessuna funzionalita applicativa attiva lato utente (es. ricerca, filtri, form, login, backend).

## Registro aggiornamenti
- Ultima verifica funzionalita: **2026-02-23**
- Prossimo aggiornamento: _da compilare_
