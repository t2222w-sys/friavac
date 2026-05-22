/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0284C7",   // Azul fresco (frio)
        accent: "#F59E0B",    // Âmbar quente (calor)
        dark: "#0F172A",      // Ardósia escura para contraste de texto
        light: "#F8FAFC",     // Cinza ultra suave para fundos
        ghost: "#1E293B",     // Alternativa neutra escura
        graphite: "#E2E8F0",  // Cinza claro para bordas e divisões
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
