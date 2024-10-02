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
    <main className="overflow-hidden animate-headerIntroFadeIn">
      <Header order={2} title="ABOUT ME" />
      <section className="w-full flex flex-col items-center bg-[var(--main-background-3)] h-sectionFirstSectionMobile sm:h-sectionFirstSectionDesktop">
        <div className="mt-8 sm:mt-6 flex z-10">
          <Link href={'https://www.linkedin.com/in/iamhoonjeong/'} rel="noopener noreferrer" target="_blank">
            <Image className="w-10 mr-3" src="/images/icon-linkedin.svg" width={0} height={0} alt="linkedin icon" />
          </Link>
          <Link href={'mailto:iamhoonjeong@gmail.com'}>
            <Image className="w-10" src="/images/icon-mail.svg" width={0} height={0} alt="email icon" />
          </Link>
        </div>
        <div className=" mt-4 sm:mt-6 z-10 font-black text-2xl sm:text-4xl text-[var(--main-font-color-2)]">Hi, This is</div>
        <Image
          className="z-10 mt-4 sm:mt-6 w-52 sm:w-72 animate-sectionsShaking"
          src="/images/title-my-name.svg"
          width={100}
          height={100}
          alt="title image"
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
          className="overflow-hidden absolute flex top-0 rounded-full bg-[var(--main-background-4)]"
        >
          <Image
            ref={imageRef}
            className="absolute w-full h-full"
            src="/images/text-inside-circle.svg"
            width={0}
            height={0}
            alt="LOGO HOON JEONG"
          />
          <Image
            ref={imageRef2}
            className="absolute w-full h-full"
            src="/images/text-inside-circle-2.svg"
            width={0}
            height={0}
            alt="LOGO HOON JEONG"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-[var(--main-background-4)] h-dvh pb-10">
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
          <div className="overflow-hidden w-full h-full rounded-2xl">
            <ReactPlayer width={'100%'} height={'100%'} controls={true} url="https://www.youtube.com/watch?v=SPjvGKNdMpo" />
          </div>
        </div>
      </section>
    </main>
  );
}
