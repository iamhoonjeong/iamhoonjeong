'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { detectMobile } from '@/src/lib/detectMobile';

export default function Home() {
  const router = useRouter();
  const [pathForFunction, setPathForFunction] = useState('');

  function onClickCategory(path: string) {
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
    <main className={`overflow-hidden flex h-full ${pathForFunction ? `animate-fadeOut` : null}`}>
      <div className="w-1/4 h-full flex flex-col justify-center items-center bg-category1">
        <div
          style={{ width: '100dvh' }}
          className="flex relative rotate-90 font-black text-categoryTitle text-category1 pointer-events-none whitespace-nowrap"
        >
          <div className="flex animate-infiniteSlide will-change-transform">
            <div className="mr-4 sm:mr-8 -rotate-90">🏄</div>
            <div className="mr-4 sm:mr-8">Hi, This is </div>
            <div className="mr-4 sm:mr-8 animate-[fadeIn_1s_linear_infinite]">Hoon.</div>
            <div className="mr-4 sm:mr-8 -rotate-90">😎</div>
            <div className="mr-4 sm:mr-8">Feel free to reach out to me.</div>
            <div className="mr-4 sm:mr-8 -rotate-90">💕</div>
          </div>
        </div>
      </div>
      <div
        onClick={() => onClickCategory('/about-me')}
        className="w-1/4 h-full flex justify-center items-center bg-category2 cursor-pointer"
      >
        <div
          className={`${
            pathForFunction === '/about-me' ? `animate-categorySliding` : `animate-categoryShaking`
          } font-black text-categoryTitle text-category2 whitespace-nowrap rotate-90`}
        >
          ABOUT ME
        </div>
      </div>
      <div
        onClick={() => onClickCategory('/career')}
        className="w-1/4 h-full flex justify-center items-center bg-category3 cursor-pointer"
      >
        <div
          className={`${
            pathForFunction === '/career' ? `animate-categorySliding` : `animate-categoryShaking`
          } font-black text-categoryTitle text-category3 whitespace-nowrap rotate-90`}
        >
          CAREER
        </div>
      </div>
      <div
        onClick={() => onClickCategory('/blog')}
        className="w-1/4 h-full flex justify-center items-center bg-category4 cursor-pointer"
      >
        <div
          className={`${
            pathForFunction === '/blog' ? `animate-categorySliding` : `animate-categoryShaking`
          } font-black text-categoryTitle text-category4 whitespace-nowrap rotate-90`}
        >
          BLOG
        </div>
      </div>
    </main>
  );
}
