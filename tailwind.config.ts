import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontSize: {
        'main-section': 'calc(1rem + 4vw)',
      },
      keyframes: {
        mainGoUp: {
          '0%': { transform: 'rotate(90deg)' },
          '20%': { transform: 'rotate(90deg) translateX(100px)' },
          '100%': { transform: 'rotate(90deg) translateX(-3000px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
