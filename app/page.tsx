export default function Home() {
  return (
    <main className="flex h-full">
      <div className="flex justify-center items-center w-1/4 h-full bg-[var(--main-background-1)]">
        <div className="whitespace-nowrap rotate-90 font-black text-9xl text-[var(--main-font-color-1)]">{`HOON JEONG'S`}</div>
      </div>
      <div className="flex justify-center items-center w-1/4 h-full bg-[var(--main-background-2)]">
        <div className="whitespace-nowrap rotate-90 font-black text-9xl text-[var(--main-font-color-2)]">ABOUT ME</div>
      </div>
      <div className="flex justify-center items-center w-1/4 h-full bg-[var(--main-background-3)]">
        <div className="whitespace-nowrap rotate-90 font-black text-9xl text-[var(--main-font-color-3)]">CAREER</div>
      </div>
      <div className="flex justify-center items-center w-1/4 h-full bg-[var(--main-background-4)]">
        <div className="whitespace-nowrap rotate-90 font-black text-9xl text-[var(--main-font-color-4)]">BLOG</div>
      </div>
    </main>
  );
}
