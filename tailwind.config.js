/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
      colors: {
        wedding: {
          bg: 'var(--color-bg)',
          card: 'var(--color-card)',
          text: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
          accent: 'var(--color-accent)',
          'accent-light': 'var(--color-accent-light)',
          'accent-dark': 'var(--color-accent-dark)',
          burgundy: 'var(--color-burgundy)',
          gold: '#C5A059',
          'gold-light': '#E8D5B5',
          ivory: '#FBF9F5',
        }
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(45, 41, 38, 0.08), 0 0 0 1px rgba(176, 138, 69, 0.15)',
        'card': '0 15px 35px -10px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(197, 160, 89, 0.2)',
        'inner-gold': 'inset 0 0 0 1px rgba(197, 160, 89, 0.3)',
      },
      letterSpacing: {
        'widest-luxury': '0.25em',
        'ultra-wide': '0.35em',
      }
    },
  },
  plugins: [],
}
