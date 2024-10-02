'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReactPlayer from 'react-player';

import Header from '@/src/ui/Header';

export default function AboutMe() {
  const [circlePositionTop, setCirclePositionTop] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);
  const imageInsideCircle = useRef<HTMLImageElement>(null);
  const imageTextInsideCircle = useRef<HTMLImageElement>(null);
  const imageTextInsideCircle2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    calcCirclePosition();
    window.addEventListener('resize', calcCirclePosition);
    window.addEventListener('scroll', calcRotateInsideCircleImage);

    return () => {
      window.removeEventListener('resize', calcCirclePosition);
      window.removeEventListener('scroll', calcRotateInsideCircleImage);
    };
  }, []);

  function calcCirclePosition() {
    const circleWidth = circleRef.current?.clientWidth as number;
    setCirclePositionTop(window.innerHeight - circleWidth / 2);
  }

  function calcRotateInsideCircleImage() {
    if (!imageInsideCircle.current || !imageTextInsideCircle.current || !imageTextInsideCircle2.current) return;
    const scrollHeightRemaining = document.documentElement.scrollHeight - window.innerHeight;

    imageInsideCircle.current.style.transform = `rotate(${-3.6 * (window.scrollY / scrollHeightRemaining) * 100}deg)`;
    imageTextInsideCircle.current.style.transform = `rotate(${3.6 * (window.scrollY / scrollHeightRemaining) * 100}deg)`;
    imageTextInsideCircle2.current.style.transform = `rotate(${-3.6 * (window.scrollY / scrollHeightRemaining) * 100}deg)`;
  }

  return (
    <main className="overflow-hidden animate-fadeIn text-center">
      <Header categoryOrder="category2" title="ABOUT ME" />
      <section className="w-full h-sectionWithoutHeaderMobile sm:h-sectionWithoutHeaderDesktop flex flex-col items-center bg-category3">
        <div className="mt-8 sm:mt-6 flex">
          <Link href={'https://www.linkedin.com/in/iamhoonjeong/'} rel="noopener noreferrer" target="_blank">
            <Image className="w-10 mr-3" src="/images/icon-linkedin.svg" width={0} height={0} alt="linkedin icon" />
          </Link>
          <Link href={'mailto:iamhoonjeong@gmail.com'}>
            <Image className="w-10" src="/images/icon-mail.svg" width={0} height={0} alt="email icon" />
          </Link>
        </div>
        <div className="text-2xl sm:text-4xl text-category2 font-black mt-4 sm:mt-6">Hi, This is</div>
        <Image
          className="w-52 sm:w-72 mt-4 sm:mt-6 animate-sectionTitleShaking"
          src="/images/title-my-name.svg"
          width={100}
          height={100}
          alt="title image"
        />
        <div className="text-2xl sm:text-4xl text-white font-black mt-4 sm:mt-6">
          <div>{`I'm working`}</div>
          <div>{`as`}</div>
        </div>
        <div className="text-2xl sm:text-4xl font-black text-category2 mt-2 sm:mt-4">
          <div>{`Software Engineer`}</div>
          <div>{`Front-End Developer`}</div>
          <div>{`and also, Designer`}</div>
        </div>
        <div
          ref={circleRef}
          style={{ top: circlePositionTop, width: '75dvw', height: '75dvw', maxWidth: '400px', maxHeight: '400px' }}
          className="absolute flex bg-category4 rounded-full overflow-hidden z-10"
        >
          <Image
            ref={imageInsideCircle}
            className="w-full h-full absolute"
            src="/images/icon-inside-circle.svg"
            width={50}
            height={50}
            alt="image inside circle"
          />
          <Image
            ref={imageTextInsideCircle}
            className="w-full h-full absolute"
            src="/images/text-inside-circle.svg"
            width={0}
            height={0}
            alt="text image inside circle"
          />
          <Image
            ref={imageTextInsideCircle2}
            className="w-full h-full absolute"
            src="/images/text-inside-circle-2.svg"
            width={0}
            height={0}
            alt="text image 2 inside circle"
          />
        </div>
      </section>
      <section className="h-dvh flex flex-col justify-end items-center bg-category4 pb-14">
        <div className="text-2xl sm:text-4xl font-black text-category1 mt-2 mb-6 sm:mt-4">
          <div>{`I always consider`}</div>
          <div>{`UserFlow, Creative,`}</div>
          <div>{`Cutting-Edge Technology`}</div>
        </div>
        <div className="w-4/5 h-1/2 max-w-2xl relative">
          <Image
            style={{ width: '100px', height: '100px', left: '-50px', top: '-50px' }}
            className="w-full h-full absolute animate-bounce"
            src="/images/icon-inside-circle.svg"
            width={0}
            height={0}
            alt="bouncing icon image"
          />
          <div className="w-full h-full overflow-hidden rounded-2xl">
            <ReactPlayer width={'100%'} height={'100%'} controls={true} url="https://www.youtube.com/watch?v=SPjvGKNdMpo" />
          </div>
        </div>
      </section>
    </main>
  );
}
