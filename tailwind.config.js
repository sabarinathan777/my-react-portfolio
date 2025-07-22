/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0f172a",   // main dark background (slate-950)
          soft: "#1e293b",      // slightly lighter (slate-800)
          lighter: "#334155",   // (slate-700)
        },
        primary: {
          DEFAULT: "#6366f1",   // indigo-500
          hover: "#4f46e5",     // indigo-600
          light: "#818cf8",     // indigo-400
        },
        text: {
          base: "#e2e8f0",      // slate-200
          dim: "#cbd5e1",       // slate-300
          muted: "#94a3b8",     // slate-400
          dark: "#475569",    
           link: "#6366f1",    
          linkHover: "#818cf8",  
        },
        border: {
          DEFAULT: "#1e293b",   // slate-800
        },
         navbar: "#0f172a",
      },
    },
  },
  plugins: [],
};
