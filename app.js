// ============================================
// PROJECT BOX — app (rendering + routing)
// ============================================

const routes = {
  "home":             renderHome,
  "blog":             renderBlog,
  "forum":            renderForum,
  "contributi":       renderContributi,
  "wiki/xbox":        () => renderWiki("xbox"),
  "wiki/xbox-360":    () => renderWiki("xbox-360"),
  "wiki/xbox-one":    () => renderWiki("xbox-one"),
  "wiki/xbox-series": () => renderWiki("xbox-series")
};

const titles = {
  "home":             "project box · indice",
  "blog":             "project box · diario",
  "forum":            "project box · forum",
  "contributi":       "project box · contributi",
  "wiki/xbox":        "project box · gen i",
  "wiki/xbox-360":    "project box · gen ii",
  "wiki/xbox-one":    "project box · gen iii",
  "wiki/xbox-series": "project box · gen iv"
};

const labels = {
  "home":             "01 / indice",
  "wiki/xbox":        "02 / archivio · gen i",
  "wiki/xbox-360":    "02 / archivio · gen ii",
  "wiki/xbox-one":    "02 / archivio · gen iii",
  "wiki/xbox-series": "02 / archivio · gen iv",
  "blog":             "03 / diario",
  "forum":            "04 / forum",
  "contributi":       "05 / contributi"
};

const appContainer = document.getElementById("app-content");
const wikiGroup = document.querySelector(".wiki-group");

// ---------- helpers ----------
function getRouteFromHash() {
  return window.location.hash.replace(/^#\/?/, "").trim() || "home";
}
function normalizeRoute(r) {
  if (routes[r]) return r;
  if (r === "wiki") return "wiki/xbox";
  return "home";
}
function pad(n, w = 2) { return String(n).padStart(w, "0"); }

function ruleRow(left, right) {
  return `
    <div class="rule-row">
      <div class="rule-inner">
        <span>${left}</span>
        <span>${right}</span>
      </div>
    </div>`;
}

function tags(arr) {
  if (!arr || !arr.length) return "";
  return `<div class="tags">${arr.map(t => `<span class="tag">${t}</span>`).join("")}</div>`;
}

// ---------- home ----------
function renderHome() {
  const today = new Date();
  const stamp = today.toISOString().slice(0,10).replace(/-/g, ".");

  const generationsHtml = generations.map(g => `
    <a class="gen-card" href="#/wiki/${g.slug}" data-route="wiki/${g.slug}">
      <div class="num">gen.${pad(generations.indexOf(g)+1)} · ${g.year}</div>
      <div class="ph"><span>${g.placeholder}</span></div>
      <h3 class="gen-title">${g.title}</h3>
      <div class="gen-year">${g.label.toLowerCase()}</div>
      <div class="gen-arrow">apri scheda →</div>
    </a>
  `).join("");

  return `
    <section class="hero-home">
      <div class="hero-meta">
        <span>archivio · v.026</span>
        <span>${stamp}</span>
        <span>generazioni · 04</span>
        <span>schede · 16</span>
      </div>

      <div class="hero-stage">
        <h1 class="hero-display">
          un archivio<br>aperto delle<br>console <em>domestiche</em>
          <span class="small">project box è un archivio editoriale indipendente: una raccolta strutturata di schede, timeline e revisioni hardware, mantenuta in pubblico tramite workflow git aperti.</span>
          <span class="btn-row">
            <a class="btn primary" href="#/wiki/xbox" data-route="wiki/xbox">apri archivio <span class="arrow">→</span></a>
            <a class="btn" href="#/contributi" data-route="contributi">contribuisci</a>
          </span>
        </h1>
        <aside class="hero-side">
          <div class="placeholder"><span class="placeholder-label">cover.archive.render</span></div>
          <h4>fig.01 / index card</h4>
          <p>quattro generazioni, sedici schede modello, cento eventi documentati. una mappa testuale e visiva del medium console domestico.</p>
        </aside>
      </div>
    </section>

    ${ruleRow("§ 01 — generazioni documentate", "scorri ↓  · 04 schede principali")}

    <section>
      <div class="gen-grid">
        ${generationsHtml}
      </div>
    </section>

    ${ruleRow("§ 02 — architettura del progetto", "wiki · diario · forum · contributi")}

    <section class="section">
      <div class="container split">
        <div>
          <span class="col-label"><span class="marker"></span>architettura</span>
        </div>
        <div>
          <h2>quattro aree, un solo <em>flusso</em> editoriale.</h2>
          <p class="lede">il progetto è separato in quattro aree funzionali per restare semplice, scalabile e allineato a un workflow open-source. ogni voce ha un suo perimetro chiaro.</p>
          <div class="tile-grid">
            <article class="tile">
              <div class="tile-num">a.01</div>
              <h3>Archivio</h3>
              <p>raccolta strutturata con pagine per generazione, timeline, schede modello e riferimenti tecnici.</p>
              ${tags(["markdown", "versionamento", "ricerca"])}
            </article>
            <article class="tile">
              <div class="tile-num">a.02</div>
              <h3>Diario</h3>
              <p>aggiornamenti del progetto, note editoriali e changelog narrativo, in ordine cronologico inverso.</p>
              ${tags(["post", "tag", "rss-ready"])}
            </article>
            <article class="tile">
              <div class="tile-num">a.03</div>
              <h3>Forum</h3>
              <p>discussioni della community su canali esterni dedicati, senza appesantire il core del sito.</p>
              ${tags(["discussions", "moderazione", "q&a"])}
            </article>
            <article class="tile">
              <div class="tile-num">a.04</div>
              <h3>Contributi</h3>
              <p>processo collaborativo in stile open-source con pull request, revisione e deploy continuo.</p>
              ${tags(["pull request", "ci/cd", "trasparenza"])}
            </article>
          </div>
        </div>
      </div>
    </section>

    ${ruleRow("§ 03 — roadmap mvp", "5 step operativi")}

    <section class="section">
      <div class="container split">
        <div>
          <span class="col-label"><span class="marker"></span>roadmap</span>
        </div>
        <div>
          <h2>da repository pubblico a <em>rilascio</em> continuo.</h2>
          <p class="lede">i passaggi che trasformano l'archivio in piattaforma dinamica mantenendo costi, dipendenze e complessità contenuti al minimo.</p>
          <div class="tl">
            ${[
              { n: "01", date: "step.01", t: "Repository unico", d: "wiki, diario e codice ui nello stesso repository per workflow lineare e diff leggibili." },
              { n: "02", date: "step.02", t: "Routing spa", d: "un solo entrypoint html con route hash-based e rendering dinamico dei contenuti, zero framework." },
              { n: "03", date: "step.03", t: "Discussioni esterne", d: "forum delegato a strumenti dedicati per evitare backend custom e garantire moderazione matura." },
              { n: "04", date: "step.04", t: "Contributi guidati", d: "edit, pr, review e merge regolati da linee guida editoriali condivise e trasparenti." },
              { n: "05", date: "step.05", t: "Deploy automatico", d: "pubblicazione immediata ad ogni merge sul branch principale tramite static cdn." }
            ].map(it => `
              <div class="tl-row">
                <div class="tl-num">${it.n}</div>
                <div class="tl-date">${it.date}</div>
                <div class="tl-title">${it.t}</div>
                <div class="tl-desc">${it.d}</div>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

// ---------- wiki ----------
function renderWiki(slug) {
  const p = wikiPages[slug];
  if (!p) return renderNotFound();

  const idx = wikiOrder.indexOf(slug);
  const next = wikiOrder[(idx + 1) % wikiOrder.length];
  const nextNav = wikiPages[next].nav;
  const prev = wikiOrder[(idx - 1 + wikiOrder.length) % wikiOrder.length];
  const prevNav = wikiPages[prev].nav;

  const compareSection = p.compare ? `
    ${ruleRow("§ 03 — confronto modelli", "due target, base condivisa")}
    <section class="section">
      <div class="container split">
        <div><span class="col-label"><span class="marker"></span>confronto</span></div>
        <div>
          <h2>due modelli, <em>un'</em>architettura.</h2>
          <p class="lede">la generazione corrente si articola su due hardware complementari: target visivo e di prezzo differenti, base architetturale comune.</p>
          <div class="compare">
            ${p.compare.map(c => `
              <div class="compare-cell">
                <div class="cell-label">${c.label}</div>
                <h3>${c.title} <em>${c.em}</em></h3>
                <p class="cell-desc">${c.desc}</p>
                <div class="cell-specs">
                  <ul>
                    ${c.specs.map(s => `<li><span>${s.k}</span><span>${s.v}</span></li>`).join("")}
                  </ul>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  ` : "";

  return `
    <section class="wiki-hero">
      <div class="container">
        <div>
          <div class="meta-line">
            <span>archivio · ${p.num}</span>
            <span>${p.year}</span>
            <span>${p.label}</span>
          </div>
          <h1>${p.title}<br><em>${p.em}</em></h1>
          <p class="intro">${p.intro}</p>
          <div class="btn-row">
            <a class="btn primary" href="#/contributi" data-route="contributi">contribuisci alla scheda <span class="arrow">→</span></a>
            <a class="btn" href="#/wiki/${next}" data-route="wiki/${next}">${nextNav}</a>
          </div>
        </div>
        <aside class="spec-card">
          <div class="spec-num">fig.01 · scheda tecnica</div>
          <div class="placeholder"><span class="placeholder-label">${p.nav.toLowerCase().replace(/\s/g, "-")}.render</span></div>
          <div class="spec-rows">
            ${p.specs.map(s => `
              <div class="spec-row">
                <span>${s.k}</span><span>${s.v}</span>
              </div>
            `).join("")}
          </div>
        </aside>
      </div>
    </section>

    ${ruleRow(`§ 01 — timeline · ${p.nav.toLowerCase()}`, "tappe principali")}

    <section class="section">
      <div class="container split">
        <div><span class="col-label"><span class="marker"></span>cronologia</span></div>
        <div>
          <h2>tappe della <em>generazione</em>.</h2>
          <p class="lede">eventi principali del ciclo vitale, dall'annuncio alle revisioni finali.</p>
          <div class="tl">
            ${p.timeline.map((it, i) => `
              <div class="tl-row">
                <div class="tl-num">${pad(i+1)}</div>
                <div class="tl-date">${it.date}</div>
                <div class="tl-title">${it.title}</div>
                <div class="tl-desc">${it.desc}</div>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </section>

    ${ruleRow("§ 02 — modelli e revisioni", "varianti hardware")}

    <section class="section">
      <div class="container split">
        <div><span class="col-label"><span class="marker"></span>modelli</span></div>
        <div>
          <h2>varianti <em>hardware</em>.</h2>
          <p class="lede">le edizioni che hanno scandito il ciclo vitale della generazione.</p>
          <div class="models-grid">
            ${p.models.map((m, i) => `
              <article class="model">
                <div class="model-num">m.${pad(i+1)}</div>
                <div class="model-ph"></div>
                <h3>${m.name}</h3>
                <p>${m.desc}</p>
                ${tags(m.tags)}
              </article>
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    ${compareSection}

    ${ruleRow(`← ${prevNav}`, `${nextNav} →`)}

    <section class="section">
      <div class="container split">
        <div><span class="col-label"><span class="marker"></span>navigazione</span></div>
        <div>
          <div class="btn-row" style="margin-top:0;">
            <a class="btn" href="#/wiki/${prev}" data-route="wiki/${prev}"><span class="arrow">←</span> ${prevNav}</a>
            <a class="btn primary" href="#/wiki/${next}" data-route="wiki/${next}">${nextNav} <span class="arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ---------- blog ----------
function renderBlog() {
  return `
    <section class="wiki-hero">
      <div class="container">
        <div>
          <div class="meta-line">
            <span>diario · 03</span>
            <span>note editoriali</span>
            <span>${blogPosts.length} post</span>
          </div>
          <h1>note di<br><em>cantiere</em>.</h1>
          <p class="intro">diario tecnico-editoriale del progetto: decisioni di architettura, evoluzione del design, milestone della piattaforma. ogni nota può essere discussa nel forum o migliorata via pull request.</p>
          <div class="btn-row">
            <a class="btn primary" href="#/wiki/xbox" data-route="wiki/xbox">apri archivio <span class="arrow">→</span></a>
            <a class="btn" href="#/contributi" data-route="contributi">invia un contributo</a>
          </div>
        </div>
        <aside class="spec-card">
          <div class="spec-num">fig.01 · indice diario</div>
          <div class="placeholder"><span class="placeholder-label">diario.cover.render</span></div>
          <div class="spec-rows">
            <div class="spec-row"><span>post totali</span><span>${blogPosts.length}</span></div>
            <div class="spec-row"><span>aggiornato</span><span>24.02.2026</span></div>
            <div class="spec-row"><span>cadenza</span><span>quindicinale</span></div>
            <div class="spec-row"><span>formato</span><span>markdown</span></div>
          </div>
        </aside>
      </div>
    </section>

    ${ruleRow("§ 01 — pubblicazioni recenti", `${blogPosts.length} note · ordinate dalla più recente`)}

    <section class="section" style="padding-top: 32px;">
      <div class="container">
        <div class="posts">
          ${blogPosts.map(p => `
            <article class="post">
              <div class="post-num">${p.num}</div>
              <div class="post-date">${p.date}</div>
              <div class="post-body">
                <h3>${p.title}</h3>
                <p>${p.excerpt}</p>
              </div>
              <div class="post-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

// ---------- forum ----------
function renderForum() {
  return `
    <section class="wiki-hero">
      <div class="container">
        <div>
          <div class="meta-line">
            <span>forum · 04</span>
            <span>community</span>
            <span>2 canali</span>
          </div>
          <h1>discussioni<br><em>separate</em>.</h1>
          <p class="intro">le conversazioni vivono su strumenti dedicati: il sito resta leggero, mentre la community ottiene funzionalità mature di moderazione e notifiche.</p>
          <div class="btn-row">
            <a class="btn primary" href="https://github.com/features/discussions" target="_blank" rel="noreferrer">apri canale principale <span class="arrow">→</span></a>
            <a class="btn" href="#/contributi" data-route="contributi">processo contributi</a>
          </div>
        </div>
        <aside class="spec-card">
          <div class="spec-num">fig.01 · scelta mvp</div>
          <div class="placeholder"><span class="placeholder-label">forum.cover.render</span></div>
          <div class="spec-rows">
            <div class="spec-row"><span>backend</span><span>nessuno</span></div>
            <div class="spec-row"><span>moderazione</span><span>delegata</span></div>
            <div class="spec-row"><span>auth</span><span>esterna</span></div>
            <div class="spec-row"><span>scalabilità</span><span>alta</span></div>
          </div>
        </aside>
      </div>
    </section>

    ${ruleRow("§ 01 — canali disponibili", "due opzioni · scegli in base al volume")}

    <section class="section">
      <div class="container split">
        <div><span class="col-label"><span class="marker"></span>canali</span></div>
        <div>
          <h2>due strade per <em>discutere</em>.</h2>
          <p class="lede">entrambe sono compatibili con l'architettura proposta. cambia solo il livello di controllo, la profondità degli strumenti, l'effort iniziale.</p>
          <div class="forum-channels">
            ${forumChannels.map(c => `
              <article class="channel">
                <div class="channel-num">${c.num} / canale</div>
                <h3>${c.title}</h3>
                <p>${c.desc}</p>
                <div class="channel-foot">
                  ${tags(c.tags)}
                  <a class="btn" href="${c.href}" target="_blank" rel="noreferrer">${c.cta} <span class="arrow">→</span></a>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    ${ruleRow("§ 02 — linee guida operative", "regole minime di moderazione")}

    <section class="section">
      <div class="container split">
        <div><span class="col-label"><span class="marker"></span>linee guida</span></div>
        <div>
          <h2>quattro regole, <em>nessun</em> dramma.</h2>
          <p class="lede">un framework minimo di moderazione mantiene le discussioni utili, riusabili e vicine al lavoro editoriale.</p>
          <div class="tl">
            ${forumGuidelines.map(g => `
              <div class="tl-row">
                <div class="tl-num">${g.num}</div>
                <div class="tl-date">regola</div>
                <div class="tl-title">${g.title}</div>
                <div class="tl-desc">${g.desc}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

// ---------- contributi ----------
function renderContributi() {
  return `
    <section class="wiki-hero">
      <div class="container">
        <div>
          <div class="meta-line">
            <span>contributi · 05</span>
            <span>workflow git</span>
            <span>6 step</span>
          </div>
          <h1>aggiornamenti<br><em>aperti</em>.</h1>
          <p class="intro">l'editing è aperto: modifiche tracciate, revisione collaborativa, deploy automatico dopo merge. nessun pannello custom, tutto passa da workflow git pubblici.</p>
          <div class="btn-row">
            <a class="btn primary" href="#/wiki/xbox" data-route="wiki/xbox">modifica una scheda <span class="arrow">→</span></a>
            <a class="btn" href="#/blog" data-route="blog">aggiorna il diario</a>
          </div>
        </div>
        <aside class="spec-card">
          <div class="spec-num">fig.01 · pipeline</div>
          <div class="placeholder"><span class="placeholder-label">workflow.cover.render</span></div>
          <div class="spec-rows">
            <div class="spec-row"><span>step</span><span>06</span></div>
            <div class="spec-row"><span>review</span><span>maintainer + ci</span></div>
            <div class="spec-row"><span>tempo medio</span><span>~ 48 h</span></div>
            <div class="spec-row"><span>deploy</span><span>automatico</span></div>
          </div>
        </aside>
      </div>
    </section>

    ${ruleRow("§ 01 — pipeline contributiva", "sei passaggi lineari")}

    <section class="section">
      <div class="container split">
        <div><span class="col-label"><span class="marker"></span>workflow</span></div>
        <div>
          <h2>dal fork al <em>deploy</em>, in chiaro.</h2>
          <p class="lede">sei passaggi lineari, allineati al modello open-source professionale. nessun passaggio nascosto, ogni stato è verificabile.</p>
          <div class="steps">
            ${contributionSteps.map(s => `
              <article class="step">
                <div class="step-num">${s.num}</div>
                <h4>${s.title}</h4>
                <p>${s.desc}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    ${ruleRow("§ 02 — stack funzionale", "matrice operativa del progetto")}

    <section class="section">
      <div class="container split">
        <div><span class="col-label"><span class="marker"></span>stack</span></div>
        <div>
          <h2>tecnologie <em>essenziali</em>.</h2>
          <p class="lede">riepilogo operativo delle scelte tecniche per la versione mvp del progetto. priorità a strumenti standard, statici, sostenibili.</p>
          <table class="stack-table">
            <thead>
              <tr><th>funzione</th><th>obiettivo</th><th>tecnologia</th></tr>
            </thead>
            <tbody>
              ${stackRows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

function renderNotFound() {
  return `
    <section class="wiki-hero">
      <div class="container">
        <div>
          <div class="meta-line"><span>errore · 404</span><span>route mancante</span></div>
          <h1>pagina<br><em>introvabile</em>.</h1>
          <p class="intro">la route richiesta non esiste. usa la navigazione principale per continuare.</p>
          <div class="btn-row">
            <a class="btn primary" href="#/home" data-route="home">torna all'indice <span class="arrow">→</span></a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ---------- routing ----------
function closeWikiMenu() {
  if (wikiGroup) wikiGroup.removeAttribute("open");
}

function updateActiveState(route) {
  document.querySelectorAll("[data-route]").forEach(el => {
    const target = el.dataset.route;
    const isWikiRoot = target === "wiki" && route.startsWith("wiki/");
    const isActive = target === route || isWikiRoot;
    el.classList.toggle("active", isActive);
    if (el.tagName === "A") {
      if (isActive) el.setAttribute("aria-current", "page");
      else el.removeAttribute("aria-current");
    }
  });
}

function renderRoute() {
  const raw = getRouteFromHash();
  const route = normalizeRoute(raw);
  if (raw !== route) {
    window.location.hash = `#/${route}`;
    return;
  }
  const tpl = routes[route] || renderNotFound;
  appContainer.innerHTML = tpl();
  document.title = titles[route] || "project box";
  appContainer.setAttribute("data-screen-label", labels[route] || route);
  updateActiveState(route);
  closeWikiMenu();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function initNavigationBehavior() {
  if (!wikiGroup) return;
  wikiGroup.addEventListener("click", (e) => {
    if (e.target.closest(".wiki-menu a")) closeWikiMenu();
  });
  document.addEventListener("click", (e) => {
    if (!wikiGroup.contains(e.target)) closeWikiMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeWikiMenu();
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
