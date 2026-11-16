/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#a3e635',
          'lime-hover': '#bef264',
          'lime-dark': '#84cc16',
          'lime-light': '#ecfccb',
          'lime-glow': 'rgba(163, 230, 53, 0.15)',
          green: '#22c55e',
          charcoal: {
            950: '#090b0e',
            900: '#0f1217',
            850: '#14181f',
            800: '#1a2029',
            700: '#262f3c',
            600: '#384454',
          },
          discord: {
            darker: '#111214',
            dark: '#1e1f22',
            bg: '#2b2d31',
            light: '#313338',
            hover: '#35373c',
            text: '#dbdee1',
            muted: '#949ba4',
            green: '#23a55a',
            red: '#f23f43',
            yellow: '#f0b232',
            blurple: '#5865f2',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'card-subtle': '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        'card-hover': '0 10px 25px -5px rgba(0,0,0,0.06), 0 8px 10px -6px rgba(0,0,0,0.04)',
        'hero-mockup': '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(163, 230, 53, 0.12)',
        'glow-lime': '0 0 25px rgba(163, 230, 53, 0.35)',
      }
    },
  },
  plugins: [],
}
