'use client';
import { useEffect, useRef, useState } from 'react';
import Header from '@/src/ui/Header';
import Link from 'next/link';
import Image from 'next/image';
import ReactPlayer from 'react-player';

export default function About() {
  const [circleMargin, setCircleMargin] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageRef2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window) {
      const circleWidth = circleRef.current?.clientWidth as number;
      setCircleMargin(window.innerHeight - circleWidth / 2);
    }
    window.addEventListener('resize', () => {
      const circleWidth = circleRef.current?.clientWidth as number;
      setCircleMargin(window.innerHeight - circleWidth / 2);
    });
    window.addEventListener('scroll', () => {
      if (!imageRef.current || !imageRef2.current) return;
      const leftScroll = document.documentElement.scrollHeight - window.innerHeight;
      imageRef.current.style.transform = `rotate(${3.6 * (window.scrollY / leftScroll) * 100}deg)`;
      imageRef2.current.style.transform = `rotate(${-3.6 * (window.scrollY / leftScroll) * 100}deg)`;
    });
  }, []);
  return (
    <main className="animate-headerIntroFadeIn overflow-x-hidden">
      <Header order={2} title="ABOUT ME" />
      <section className="overflow-hidden flex flex-col items-center bg-[var(--main-background-3)] h-sectionFirstSectionMobile sm:h-sectionFirstSectionDesktop">
        <div className="mt-8 sm:mt-6 flex z-10">
          <Link href={'https://www.linkedin.com/in/iamhoonjeong/'} rel="noopener noreferrer" target="_blank">
            <Image className="w-10 mr-3" src="/logo-linkedin.svg" width={0} height={0} alt="LOGO HOON JEONG" />
          </Link>
          <Link href={'mailto:iamhoonjeong@gmail.com'}>
            <Image className="w-10" src="/logo-mail.svg" width={0} height={0} alt="LOGO HOON JEONG" />
          </Link>
        </div>
        <div className=" mt-4 sm:mt-6 z-10 font-black text-2xl sm:text-4xl text-[var(--main-font-color-2)]">Hi, This is</div>
        <Image
          className="z-10 mt-4 sm:mt-6 w-52 sm:w-72 animate-sectionsShaking"
          src="/logo-hoon-jeong.svg"
          width={100}
          height={100}
          alt="LOGO HOON JEONG"
        />
        <div className="z-10 mt-4 sm:mt-6 text-white font-black text-2xl sm:text-4xl text-center ">
          {`I'm working`}
          <br />
          {`as`}
        </div>
        <div className="z-10 mt-2 sm:mt-4 font-black text-2xl sm:text-4xl text-[var(--main-font-color-2)] text-center">
          {`Software Engineer`}
          <br />
          {`Front-End Developer`}
          <br />
          {`and also, Designer`}
        </div>
        <div
          ref={circleRef}
          style={{ top: circleMargin, width: '75dvw', height: '75dvw', maxWidth: '400px', maxHeight: '400px' }}
          className="absolute flex top-0 rounded-full bg-[var(--main-background-4)]"
        >
          <Image
            ref={imageRef}
            className="absolute w-full h-full"
            src="/round-text.svg"
            width={0}
            height={0}
            alt="LOGO HOON JEONG"
          />
          <Image
            ref={imageRef2}
            className="absolute w-full h-full"
            src="/round-text2.svg"
            width={0}
            height={0}
            alt="LOGO HOON JEONG"
          />
        </div>
      </section>
      <section className="overflow-hidden flex flex-col items-center justify-center bg-[var(--main-background-4)] h-dvh">
        <div className="z-10">
          <div className="z-10 mt-2 mb-6 sm:mt-4 font-black text-2xl sm:text-4xl text-[var(--main-font-color-1)] text-center">
            {`I always consider`}
            <br />
            {`UserFlow, Creative,`}
            <br />
            {`and`}
            <br />
            {`Cutting-Edge Technology`}
          </div>
          <div className="w-full h-full rounded-2xl overflow-hidden mb-10">
            <ReactPlayer width={'100%'} height={'100%'} controls={true} url="https://www.youtube.com/watch?v=SPjvGKNdMpo" />
          </div>
        </div>
      </section>
    </main>
  );
}
