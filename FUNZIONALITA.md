# Funzionalita attuali del sito (stato: 2026-02-24)

## Panoramica
- Sito migrato da multipagina statico a **single-page app (SPA)**.
- Unico entrypoint HTML: `index.html`.
- Rendering dinamico contenuti tramite `app.js`.
- Stile centralizzato al 100% in `styles.css`.

## Architettura tecnica
- **Presentazione**: shell HTML minimale (`index.html`) con header, main dinamico e footer.
- **Routing client-side**: hash routing (`#/...`) gestito in JavaScript.
- **Contenuti**: dataset interni in `app.js` (Wiki, Blog, Forum, Contributi).
- **Stile**: unico foglio globale `styles.css` con tema Xbox ABXY + tipografia Segoe.
- **Nessuna dipendenza framework**: soluzione vanilla HTML/CSS/JS.

## Navigazione principale
Menu in alto a sinistra con:
- `Home`
- `Wiki` (dropdown)
  - `Xbox`
  - `Xbox 360`
  - `Xbox One`
  - `Xbox Serie`
- `Blog`
- `Forum`
- `Contributi`

Comportamenti:
- Stato attivo automatico in base alla route.
- Dropdown Wiki con chiusura su click esterno, selezione voce ed `Escape`.
- Scroll top automatico ad ogni cambio sezione.

## Rotte disponibili
- `#/home`
- `#/wiki/xbox`
- `#/wiki/xbox-360`
- `#/wiki/xbox-one`
- `#/wiki/xbox-series`
- `#/blog`
- `#/forum`
- `#/contributi`

Fallback:
- Route invalida -> redirect automatico a `#/home`.

## Sezioni e funzionalita

### Home
- Hero introduttiva della piattaforma dinamica.
- Sezione architettura con card per Wiki/Blog/Forum/Contributi.
- Timeline MVP operativa (repo unico, routing, discussioni, PR, deploy).

### Wiki
Per ogni pagina (Xbox, 360, One, Serie):
- Hero contestuale.
- Timeline dedicata.
- Card dei sotto-modelli/revisioni.
- Blocco approfondimenti.
- CTA per contributi.

Extra su `Xbox Serie`:
- Confronto strutturato `Series X` vs `Series S` con specifiche.

### Blog
- Lista post in card con data, estratto e tag.
- Sezione pensata per aggiornamenti tecnici/editoriali del progetto.

### Forum
- Presentazione delle due opzioni target:
  - GitHub Discussions
  - Discourse
- Linee guida operative in formato timeline (tag, moderazione, sintesi in wiki).

### Contributi
- Workflow in 6 step stile GitHub:
  1. Fork/branch
  2. Modifica contenuti
  3. Pull Request
  4. Revisione
  5. Merge
  6. Deploy automatico
- Tabella stack funzionale (Wiki, Blog, Forum, Contributi, Hosting).

## Scelte UX/UI applicate
- Palette Xbox ufficiale ABXY:
  - A `#107C10`
  - B `#E81123`
  - X `#0063B1`
  - Y `#FFB900`
- Font family orientata a Segoe (`Segoe UI Variable`, `Segoe UI`, `Segoe Pro`).
- Componenti uniformi: card, timeline, bottoni, badge, tabella e dropdown.
- Layout responsive mobile-first con breakpoint a `640px`.

## File attivi
- `index.html` -> shell SPA + menu
- `app.js` -> routing + rendering contenuti
- `styles.css` -> stile globale completo
- `FUNZIONALITA.md` -> documento stato funzionale

## File rimossi nella migrazione
- `xbox-original.html`
- `xbox-360.html`
- `xbox-one.html`
- `xbox-series.html`
- `js/main.js`

## Stato tecnico
- Backend: assente (volutamente).
- Database: assente (volutamente).
- Deploy: pronto per hosting statico (GitHub Pages / Netlify / Vercel).

## Registro aggiornamenti
- Migrazione strutturale a SPA completata: **2026-02-24**
- Prossimo step suggerito: collegare dati Wiki/Blog a file Markdown o JSON versionati e aggiungere pipeline CI/CD.
