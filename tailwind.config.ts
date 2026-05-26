import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#ffffff',
        void: '#101421',
        graphite: '#151A2A',
        panel: '#171E31',
        violet: '#6551C4',
        iris: '#7A5ED6',
        acid: '#F2F47B',
        signal: '#55D6FF',
        danger: '#E05272',
        success: '#47C77B',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        hero: ['var(--font-hero)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      boxShadow: {
        halo: '0 0 80px rgba(122, 94, 214, 0.32)',
        acid: '0 0 70px rgba(242, 244, 123, 0.28)',
        panel: '0 28px 90px rgba(0, 0, 0, 0.42)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        rail: {
          '0%': { transform: 'translateX(-16%)' },
          '100%': { transform: 'translateX(16%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.42' },
          '50%': { opacity: '0.86' },
        },
        floatCard: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(-1deg)' },
          '50%': { transform: 'translate3d(0, -14px, 0) rotate(1deg)' },
        },
        blinkDot: {
          '0%, 100%': { transform: 'scale(0.72)', opacity: '0.38' },
          '50%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        scan: 'scan 8s linear infinite',
        rail: 'rail 18s ease-in-out infinite alternate',
        pulseSoft: 'pulseSoft 3.8s ease-in-out infinite',
        floatCard: 'floatCard 7s ease-in-out infinite',
        blinkDot: 'blinkDot 1.3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
