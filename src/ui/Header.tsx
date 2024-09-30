interface Props {
  title: string;
}
export default function Header({ title }: Props) {
  return (
    <header className="pl-6 h-16 sm:h-20 flex items-center bg-[var(--main-background-2)] ">
      <div className="animate-roll font-black text-2xl text-[var(--main-font-color-2)]">{title}</div>
    </header>
  );
}
