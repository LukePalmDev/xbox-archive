/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakSelect, TweakToggle */
const { useEffect } = React;

const PRESETS = {
  peach:   { name: "peach",   accent: "oklch(0.82 0.07 55)",  ink: "oklch(0.45 0.09 45)",  bg: "oklch(0.985 0.005 80)", deep: "oklch(0.94 0.008 80)" },
  sage:    { name: "sage",    accent: "oklch(0.83 0.05 145)", ink: "oklch(0.42 0.07 145)", bg: "oklch(0.985 0.004 130)", deep: "oklch(0.94 0.008 130)" },
  butter:  { name: "butter",  accent: "oklch(0.88 0.07 95)",  ink: "oklch(0.48 0.09 80)",  bg: "oklch(0.99 0.005 95)", deep: "oklch(0.95 0.01 95)" },
  sky:     { name: "sky",     accent: "oklch(0.85 0.05 240)", ink: "oklch(0.45 0.07 245)", bg: "oklch(0.985 0.004 250)", deep: "oklch(0.94 0.008 250)" },
  mono:    { name: "mono",    accent: "oklch(0.55 0.005 80)", ink: "oklch(0.30 0.005 80)", bg: "oklch(0.985 0.003 80)", deep: "oklch(0.92 0.005 80)" }
};

const FONT_PAIRS = {
  "fraunces+inter": { display: "'Fraunces', serif", sans: "'Inter', sans-serif", mono: "'JetBrains Mono', monospace" },
  "inter+jbm":      { display: "'Inter', sans-serif", sans: "'Inter', sans-serif", mono: "'JetBrains Mono', monospace" },
  "fraunces+jbm":   { display: "'Fraunces', serif", sans: "'JetBrains Mono', monospace", mono: "'JetBrains Mono', monospace" }
};

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "peach",
  "typography": "fraunces+inter",
  "density": "regular",
  "hairlines": "subtle",
  "showRules": true
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const root = document.documentElement.style;
  const p = PRESETS[t.palette] || PRESETS.peach;
  root.setProperty("--accent", p.accent);
  root.setProperty("--accent-ink", p.ink);
  root.setProperty("--bg", p.bg);
  root.setProperty("--bg-elev", `color-mix(in oklab, ${p.bg} 92%, ${p.deep})`);
  root.setProperty("--bg-deep", p.deep);

  const f = FONT_PAIRS[t.typography] || FONT_PAIRS["fraunces+inter"];
  root.setProperty("--font-display", f.display);
  root.setProperty("--font-sans", f.sans);
  root.setProperty("--font-mono", f.mono);

  const padScale = t.density === "compact" ? "12px, 3vw, 32px"
                  : t.density === "airy"   ? "20px, 5vw, 80px"
                  : "16px, 4vw, 56px";
  root.setProperty("--pad", `clamp(${padScale})`);

  const hair = t.hairlines === "strong" ? "oklch(0.7 0.01 80)"
            : t.hairlines === "none"   ? "transparent"
            :                            "oklch(0.88 0.008 80)";
  root.setProperty("--hair", hair);

  document.body.classList.toggle("hide-rules", !t.showRules);
}

function App() {
  const [t, setT] = useTweaks(DEFAULTS);
  useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Palette">
        <TweakRadio
          value={t.palette}
          onChange={(v) => setT("palette", v)}
          options={[
            { value: "peach",  label: "peach" },
            { value: "sage",   label: "sage"  },
            { value: "butter", label: "butter"},
            { value: "sky",    label: "sky"   },
            { value: "mono",   label: "mono"  }
          ]}
        />
      </TweakSection>

      <TweakSection label="Tipografia">
        <TweakRadio
          value={t.typography}
          onChange={(v) => setT("typography", v)}
          options={[
            { value: "fraunces+inter", label: "serif + sans" },
            { value: "inter+jbm",      label: "sans + mono" },
            { value: "fraunces+jbm",   label: "serif + mono" }
          ]}
        />
      </TweakSection>

      <TweakSection label="Densità">
        <TweakRadio
          value={t.density}
          onChange={(v) => setT("density", v)}
          options={[
            { value: "compact", label: "compact" },
            { value: "regular", label: "regular" },
            { value: "airy",    label: "airy"    }
          ]}
        />
      </TweakSection>

      <TweakSection label="Hairlines">
        <TweakRadio
          value={t.hairlines}
          onChange={(v) => setT("hairlines", v)}
          options={[
            { value: "none",    label: "none"   },
            { value: "subtle",  label: "subtle" },
            { value: "strong",  label: "strong" }
          ]}
        />
      </TweakSection>

      <TweakSection label="Rule rows">
        <TweakToggle
          value={t.showRules}
          onChange={(v) => setT("showRules", v)}
          label="mostra § rule rows"
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const root = ReactDOM.createRoot(document.getElementById("tweaks-root"));
root.render(<App />);
