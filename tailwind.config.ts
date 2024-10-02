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

      textColor: {
        category1: 'var(--main-font-color-1)',
        category2: 'var(--main-font-color-2)',
        category3: 'var(--main-font-color-3)',
        category4: 'var(--main-font-color-4)',
      },

      backgroundColor: {
        category1: 'var(--main-background-1)',
        category2: 'var(--main-background-2)',
        category3: 'var(--main-background-3)',
        category4: 'var(--main-background-4)',
      },

      fontSize: {
        categoryTitle: 'calc(1rem + 6dvw)',
      },

      height: {
        sectionWithoutHeaderDesktop: 'calc(100dvh - 5rem)',
        sectionWithoutHeaderMobile: 'calc(100dvh - 4rem)',
      },

      animation: {
        infiniteSlide: 'infiniteSlide 15s linear infinite',
        categoryShaking: 'shaking 15s ease-in-out infinite',
        categorySliding: 'sliding 1.5s ease-in-out forwards',
        fadeOut: 'fadeOut 1.5s ease-in-out forwards',
        fadeIn: 'fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        headerTitleSliding: 'headerTitleSliding 2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        sectionTitleShaking: 'sectionTitleShaking 5s ease-in-out infinite',
      },

      keyframes: {
        infiniteSlide: {
          '0%': { transform: `translateX(110dvh)` },
          '100%': { transform: `translateX(-100%)` },
        },
        shaking: {
          '0%': { transform: 'rotate(90deg)' },
          '2%': { transform: 'rotate(95deg)' },
          '4%': { transform: 'rotate(85deg)' },
          '6%': { transform: 'rotate(90deg)' },
        },
        sliding: {
          '0%': { transform: 'rotate(90deg)' },
          '20%': { transform: 'rotate(90deg) translateX(100px)' },
          '100%': { transform: 'rotate(90deg) translateX(-3000px)' },
        },
        fadeOut: {
          '65%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        headerTitleSliding: {
          '0%': { transform: 'translateX(110dvw)' },
          '100%': { transform: 'translateX(0%)' },
        },
        sectionTitleShaking: {
          '0%': { transform: 'rotate(0deg)' },
          '2%': { transform: 'rotate(5deg)' },
          '4%': { transform: 'rotate(-5deg)' },
          '6%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },

  plugins: [],
};
export default config;
