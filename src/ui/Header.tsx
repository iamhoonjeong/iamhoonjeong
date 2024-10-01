interface Props {
  order: number;
  title: string;
}
export default function Header({ order, title }: Props) {
  return (
    <header
      className={`animate-opacity overflow-x-hidden pl-6 h-16 sm:h-20 flex items-center bg-[var(--main-background-${order})]`}
    >
      <div className={`animate-roll font-black text-2xl sm:text-4xl text-[var(--main-font-color-${order})]`}>{title}</div>
    </header>
  );
}
