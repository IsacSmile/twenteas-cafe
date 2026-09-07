/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          950: '#150D07',
          900: '#23150D',
          850: '#2E1C12',
          800: '#3A2519',
          700: '#4D3425',
          600: '#684836',
          500: '#876049',
        },
        cream: {
          50: '#FAF6EF',
          100: '#F4ECE0',
          200: '#E8DAC8',
          300: '#D7C3AA',
          400: '#C4AA8B',
        },
        logoCream: '#FAF4E8',
        logoPeach: '#FCDDA7',
        logoBrown: '#281811',
        olive: {
          50: '#F4F6F3',
          100: '#E4E9E2',
          500: '#849679',
          600: '#6B7A63',
          700: '#53624B',
          800: '#3D4936',
        },
        vintage: {
          terracotta: '#B85C38',
          amber: '#D4A359',
          border: '#3D2A1F',
          paper: '#FBF8F3',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Oswald', 'Bebas Neue', 'sans-serif'],
      },
      boxShadow: {
        'vintage': '0 10px 30px -10px rgba(0, 0, 0, 0.4)',
        'vintage-glow': '0 0 25px rgba(212, 163, 89, 0.15)',
        'soft-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
