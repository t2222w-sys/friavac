/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0077B6",  // Azul Oceano FRIAVAC
        accent: "#d1b15a",   // Dourado Elite
        plasma: "#5A42E6",  
        ghost: "#18181B",    
        graphite: "#E5E7EB", 
        dark: "#0A0A14",     
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
