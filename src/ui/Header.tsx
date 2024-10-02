interface Props {
  categoryOrder: string;
  title: string;
}
export default function Header({ categoryOrder, title }: Props) {
  return (
    <header className={`h-16 sm:h-20 flex justify-center items-center bg-${categoryOrder} overflow-hidden`}>
      <div className={`text-2xl sm:text-4xl font-black text-${categoryOrder} animate-headerTitleSliding`}>{title}</div>
    </header>
  );
}
