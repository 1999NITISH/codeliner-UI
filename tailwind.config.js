/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'n7-dark': '#050a10',
        'n7-blue': '#0066ff',
        'n7-blue-hover': '#0052cc',
        'n7-text-secondary': '#94a3b8',
        'n7-card': 'rgba(255, 255, 255, 0.03)',
        'n7-card-hover': 'rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #00d2ff 0%, #0056ff 100%)',
        'btn-gradient': 'linear-gradient(90deg, #0072ff 0%, #0056ff 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'hero-glow': 'radial-gradient(circle, rgba(0,102,255,0.12) 0%, rgba(0,102,255,0.05) 40%, rgba(0,0,0,0) 70%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        'chivo-mono': ['"Chivo Mono"', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'btn': '0 4px 14px rgba(0, 102, 255, 0.3)',
        'btn-hover': '0 8px 24px rgba(0, 102, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
