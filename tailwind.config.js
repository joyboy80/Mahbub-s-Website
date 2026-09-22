/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#030712',
          900: '#060B1E',
          850: '#0B122B',
          800: '#0F1A3A',
          700: '#1A2955',
          neon: {
            blue: '#38BDF8',
            cyan: '#06B6D4',
            purple: '#A855F7',
            violet: '#8B5CF6',
            emerald: '#10B981',
            pink: '#F43F5E',
            amber: '#F59E0B',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.3))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(168, 85, 247, 0.6))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.15) 0%, rgba(168, 85, 247, 0.12) 35%, rgba(6, 11, 30, 0) 70%)',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
