import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        roll: 'headerRolling 3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        opacity: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontSize: {
        'main-section': 'calc(1rem + 6vw)',
      },
      keyframes: {
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        mainClick: {
          '0%': { transform: 'rotate(90deg)' },
          '20%': { transform: 'rotate(90deg) translateX(100px)' },
          '100%': { transform: 'rotate(90deg) translateX(-3000px)' },
        },
        mainFadeOut: {
          '65%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        mainScrolling: {
          '0%': { transform: `translateX(110vh)` },
          '100%': { transform: `translateX(-100%)` },
        },
        headerRolling: {
          '0%': { transform: 'translateX(110vw)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
