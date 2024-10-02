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
        sectionFirstSectionDesktop: 'calc(100vh - 5rem)',
        sectionFirstSectionMobile: 'calc(100vh - 4rem)',
      },
      animation: {
        mainIntroduceInfiniteSlide: 'mainInfiniteSlide 15s linear infinite',
        mainSectionsShaking: 'mainShaking 15s ease-in-out infinite',
        mainSectionSlide: 'mainSectionSlide 1.5s ease-in-out forwards',
        mainFadeOut: 'mainFadeOut 1.5s ease-in-out forwards',
        headerIntroMoving: 'headerMoving 3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        headerIntroFadeIn: 'headerFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',

        sectionsShaking: 'sectionShaking 5s ease-in-out infinite',
      },
      keyframes: {
        mainInfiniteSlide: {
          '0%': { transform: `translateX(110vh)` },
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
        sectionShaking: {
          '0%': { transform: 'rotate(0deg)' },
          '2%': { transform: 'rotate(5deg)' },
          '4%': { transform: 'rotate(-5deg)' },
          '6%': { transform: 'rotate(0deg)' },
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
