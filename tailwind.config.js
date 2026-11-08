/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: { xs: '420px' },
      colors: {
        ink: {
          950: '#05050A',
          900: '#0A0A12',
          850: '#0E0E18',
          800: '#13131F',
          700: '#1C1C2B',
          600: '#2A2A3D',
        },
        brand: {
          violet: '#8B5CF6',
          indigo: '#6366F1',
          cyan: '#22D3EE',
          pink: '#F472B6',
          lime: '#A3E635',
          amber: '#FBBF24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        aurora: 'aurora 18s ease-in-out infinite alternate',
        'aurora-slow': 'aurora 26s ease-in-out infinite alternate-reverse',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1.5s infinite',
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee 45s linear infinite reverse',
        'spin-slow': 'spin 8s linear infinite',
        shine: 'shine 3.5s ease-in-out infinite',
        'gradient-x': 'gradientX 6s ease infinite',
        blink: 'blink 1s step-end infinite',
        'pop-in': 'popIn .45s cubic-bezier(.2,.9,.3,1.2) both',
        'fade-up': 'fadeUp .8s cubic-bezier(.16,1,.3,1) both',
        'fade-in': 'fadeIn .3s ease both',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translate(0,0) scale(1) rotate(0deg)' },
          '50%': { transform: 'translate(6%,-8%) scale(1.15) rotate(20deg)' },
          '100%': { transform: 'translate(-6%,6%) scale(.95) rotate(-10deg)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)' },
          '60%,100%': { transform: 'translateX(220%) skewX(-20deg)' },
        },
        gradientX: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: { '50%': { opacity: '0' } },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(.92) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
    },
  },
  plugins: [],
};
