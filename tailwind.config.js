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
          DEFAULT: "#0f172a",
          soft: "#1e293b",
          lighter: "#334155",
        },
        primary: {
          DEFAULT: "#6366f1", 
          hover: "#4f46e5",
          light: "#818cf8",
        },
        text: {
          base: "#e2e8f0",
          dim: "#cbd5e1",
          muted: "#94a3b8",
          dark: "#475569",    
           link: "#6366f1",    
          linkHover: "#818cf8",  
        },
        border: {
          DEFAULT: "#1e293b",
        },
         navbar: "#0f172a",
      },
    },
  },
  plugins: [],
};
