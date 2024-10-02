'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { detectMobile } from '@/src/lib/detectMobile';

export default function Home() {
  const router = useRouter();
  const [pathForFunction, setPathForFunction] = useState('');

  function handleLinkClick(path: string) {
    if (pathForFunction !== '') return;
    setPathForFunction(path);

    if (detectMobile()) {
      router.push(path);
    } else {
      setTimeout(() => {
        router.push(path);
      }, 1500);
    }
  }

  return (
    <main className={`overflow-hidden flex h-full ${pathForFunction ? `animate-mainFadeOut` : null}`}>
      <div className="flex flex-col justify-center items-center w-1/4 h-full bg-[var(--main-background-1)]">
        <div
          style={{ width: '100vh' }}
          className="overflow-hidden flex relative pointer-events-none whitespace-nowrap rotate-90 font-black text-main-section text-[var(--main-font-color-1)]"
        >
          <div className="flex animate-mainIntroduceInfiniteSlide will-change-transform">
            <div className="mr-8 -rotate-90">{`🏄`}</div>
            <div className="mr-8">{`Hi, This is `}</div>
            <div className="mr-8 animate-[opacity_1s_linear_infinite]">{`Hoon.`}</div>
            <div className="mr-8 -rotate-90">{`😎`}</div>
            <div className="mr-8">{`Feel free to reach out to me.`}</div>
            <div className="mr-8 -rotate-90">{`💕`}</div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleLinkClick('/about-me')}
        className="w-1/4 h-full flex justify-center items-center *:cursor-pointer bg-[var(--main-background-2)] cursor-pointer"
      >
        <div
          className={`${
            pathForFunction === '/about-me' ? `animate-mainSectionSlide` : `animate-mainSectionsShaking`
          } pointer-events-none whitespace-nowrap rotate-90 font-black text-main-section text-[var(--main-font-color-2)]`}
        >
          ABOUT ME
        </div>
      </div>
      <div
        onClick={() => handleLinkClick('/career')}
        className="w-1/4 h-full flex justify-center items-center *:cursor-pointer bg-[var(--main-background-3)] cursor-pointer"
      >
        <div
          className={`${
            pathForFunction === '/career' ? `animate-mainSectionSlide` : `animate-mainSectionsShaking`
          } pointer-events-none whitespace-nowrap rotate-90 font-black text-main-section text-[var(--main-font-color-3)]`}
        >
          CAREER
        </div>
      </div>
      <div
        onClick={() => handleLinkClick('/blog')}
        className="w-1/4 h-full flex justify-center items-center *:cursor-pointer bg-[var(--main-background-4)] cursor-pointer"
      >
        <div
          className={`${
            pathForFunction === '/blog' ? `animate-mainSectionSlide` : `animate-mainSectionsShaking`
          } pointer-events-none whitespace-nowrap rotate-90 font-black text-main-section text-[var(--main-font-color-4)]`}
        >
          BLOG
        </div>
      </div>
    </main>
  );
}
