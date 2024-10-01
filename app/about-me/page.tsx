'use client';
import { useEffect, useRef, useState } from 'react';
import Header from '@/src/ui/Header';
import Image from 'next/image';

export default function About() {
  const [circleMargin, setCircleMargin] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window) {
      const circleWidth = circleRef.current?.clientWidth as number;
      setCircleMargin(window.innerHeight - circleWidth / 2);
    }
    window.addEventListener('resize', () => {
      const circleWidth = circleRef.current?.clientWidth as number;
      setCircleMargin(window.innerHeight - circleWidth / 2);
    });
  }, []);
  return (
    <main className="animate-headerIntroFadeIn">
      <Header order={2} title="ABOUT ME" />
      <section className="flex flex-col items-center bg-[var(--main-background-3)] h-sectionFirstSectionMobile sm:h-sectionFirstSectionDesktop">
        <div className="font-black text-2xl sm:text-4xl text-[var(--main-font-color-2)] mt-4">Hi, This is</div>
        <Image className="mt-4 w-52 sm:w-72" src="/logo-hoon-jeong.svg" width={100} height={100} alt="LOGO HOON JEONG" />
        <div className="mt-4 text-white font-black text-2xl sm:text-4xl text-center ">
          {`I'm working`}
          <br />
          {`as`}
        </div>
        <div className="mt-2 font-black text-2xl sm:text-4xl text-[var(--main-font-color-2)] text-center">
          {`Software Engineer`}
          <br />
          {`Front-End Developer`}
          <br />
          {`and also, Designer`}
        </div>
        <div
          ref={circleRef}
          style={{ top: circleMargin, width: '75dvw', height: '75dvw', maxWidth: '460px', maxHeight: '460px' }}
          className="absolute top-0 rounded-full bg-[var(--main-background-4)]"
        ></div>
      </section>
      <section className="flex flex-col items-center bg-[var(--main-background-4)] h-dvh"></section>
    </main>
  );
}
