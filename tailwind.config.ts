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
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontSize: {
        'main-section': 'calc(1rem + 6dvw)',
      },
      height: {
        sectionFirstSectionDesktop: 'calc(100dvh - 5rem)',
        sectionFirstSectionMobile: 'calc(100dvh - 4rem)',
      },
      animation: {
        mainIntroduceInfiniteSlide: 'mainInfiniteSlide 15s linear infinite',
        mainSectionsShaking: 'mainShaking 15s ease-in-out infinite',
        mainSectionSlide: 'mainSectionSlide 1.5s ease-in-out forwards',
        mainFadeOut: 'mainFadeOut 1.5s ease-in-out forwards',
        headerIntroMoving: 'headerMoving 3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        headerIntroFadeIn: 'headerFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        mainInfiniteSlide: {
          '0%': { transform: `translateX(110dvh)` },
          '100%': { transform: `translateX(-100%)` },
        },
        mainSectionSlide: {
          '0%': { transform: 'rotate(90deg)' },
          '20%': { transform: 'rotate(90deg) translateX(100px)' },
          '100%': { transform: 'rotate(90deg) translateX(-3000px)' },
        },
        mainShaking: {
          '0%': { transform: 'rotate(90deg)' },
          '2%': { transform: 'rotate(95deg)' },
          '4%': { transform: 'rotate(85deg)' },
          '6%': { transform: 'rotate(90deg)' },
        },
        mainFadeOut: {
          '65%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        headerMoving: {
          '0%': { transform: 'translateX(110dvw)' },
          '100%': { transform: 'translateX(0%)' },
        },
        headerFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
