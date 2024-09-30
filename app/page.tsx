'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();
  const [link, setLink] = useState('');

  function draw() {
    if (!canvasRef.current) return;
    const context = canvasRef.current.getContext('2d');
    if (!context) throw Error('There is no canvas context');

    context.beginPath();
    context.arc(300, 100, 50, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();
    context.moveTo(100, 500);
    /* context.fillStyle = `rgb(255, 255, 0)`;
    context.font = '100px __Montserrat_608f29';
    context.fillText('BLOG', 100, 500); */
  }

  function resizeCanvas() {
    if (!canvasRef.current) return;
    const context = canvasRef.current.getContext('2d');
    if (!context) throw Error('There is no canvas context');
    const rect = canvasRef.current.getBoundingClientRect();

    canvasRef.current.width = rect.width * window.devicePixelRatio;
    canvasRef.current.height = rect.height * window.devicePixelRatio;
    context?.scale(window.devicePixelRatio, window.devicePixelRatio);

    draw();
  }

  function handleLinkClick(path: string) {
    if (link !== '') return;

    setLink(path);
    setTimeout(() => {
      router.push(path);
    }, 1500);
  }

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <main className="flex h-full">
      <canvas ref={canvasRef} id="canvas" className="w-full h-full absolute top-0 left-0 z-10"></canvas>
      <div className="flex justify-center items-center w-1/4 h-full bg-[var(--main-background-1)]">
        <div className="pointer-events-none whitespace-nowrap rotate-90 font-black text-main-section text-[var(--main-font-color-1)]">{`HOON JEONG'S`}</div>
      </div>
      <div
        onClick={() => handleLinkClick('/about-me')}
        className="w-1/4 h-full flex justify-center items-center *:cursor-pointer bg-[var(--main-background-2)] cursor-pointer"
      >
        <div
          className={`${
            link === '/about-me' ? `animate-[mainGoUp_1.5s_ease-in-out_forwards]` : null
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
            link === '/career' ? `animate-[mainGoUp_1.5s_ease-in-out_forwards]` : null
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
            link === '/blog' ? `animate-[mainGoUp_1.5s_ease-in-out_forwards]` : null
          } pointer-events-none whitespace-nowrap rotate-90 font-black text-main-section text-[var(--main-font-color-4)]`}
        >
          BLOG
        </div>
      </div>
    </main>
  );
}
