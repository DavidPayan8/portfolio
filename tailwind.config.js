/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary": "#003642",
        "surface": "#131313",
        "on-primary-fixed-variant": "#474646",
        "on-error-container": "#ffdad6",
        "surface-container": "#202020",
        "background": "#131313",
        "tertiary-fixed": "#e2e2e2",
        "on-secondary-fixed": "#001f27",
        "primary-container": "#121212",
        "secondary-container": "#00d2fd",
        "error": "#ffb4ab",
        "on-error": "#690005",
        "on-secondary-container": "#005669",
        "on-secondary-fixed-variant": "#004e5f",
        "on-tertiary-fixed-variant": "#454747",
        "primary": "#c8c6c5",
        "inverse-on-surface": "#303030",
        "tertiary": "#c6c6c7",
        "secondary-fixed": "#b4ebff",
        "surface-variant": "#353535",
        "inverse-surface": "#e5e2e1",
        "on-tertiary": "#2f3131",
        "on-primary-container": "#7e7d7d",
        "outline-variant": "#444748",
        "primary-fixed-dim": "#c8c6c5",
        "secondary": "#a2e7ff",
        "on-primary": "#313030",
        "surface-dim": "#131313",
        "surface-tint": "#c8c6c5",
        "secondary-fixed-dim": "#3cd7ff",
        "surface-container-low": "#1b1b1c",
        "surface-container-high": "#2a2a2a",
        "on-tertiary-fixed": "#1a1c1c",
        "on-tertiary-container": "#7c7d7e",
        "inverse-primary": "#5f5e5e",
        "surface-container-highest": "#353535",
        "tertiary-fixed-dim": "#c6c6c7",
        "primary-fixed": "#e5e2e1",
        "tertiary-container": "#101213",
        "error-container": "#93000a",
        "on-surface": "#e5e2e1",
        "outline": "#8e9192",
        "surface-bright": "#393939",
        "surface-container-lowest": "#0e0e0e",
        "on-primary-fixed": "#1c1b1b",
        "on-background": "#e5e2e1",
        "on-surface-variant": "#c4c7c7"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "margin-mobile": "20px",
        "container-max": "1360px",
        "gutter": "24px",
        "base": "8px",
        "stack-lg": "80px"
      },
      fontFamily: {
        "code-sm": ["JetBrains Mono"],
        "label-caps": ["JetBrains Mono"],
        "headline-lg": ["Geist"],
        "headline-xl": ["Geist"],
        "body-md": ["Geist"]
      },
      fontSize: {
        "code-sm": ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "500" }],
        "headline-lg": ["32px", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "500" }],
        "headline-xl": ["56px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }]
      }
    }
  },
  plugins: [],
};
