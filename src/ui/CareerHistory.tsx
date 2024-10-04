import Image from 'next/image';

interface Props {
  title: string;
  role: string;
  period: string;
  whatIDid: string[];
}

export default function CareerHistody({ title, role, period, whatIDid }: Props) {
  return (
    <div
      style={{ width: '80dvw', maxWidth: '600px' }}
      className="text-xl sm:text-2xl text-black font-black mt-10 sm:mt-10 relative"
    >
      <Image
        style={{ width: '80px', height: '80px', left: '-40px', top: '-40px' }}
        className="w-full h-full absolute animate-bounce"
        src="/images/icon-inside-circle.svg"
        width={0}
        height={0}
        alt="bouncing icon image"
      />
      <div className="animate-sectionTitleShaking origin-center inline-block">{title}</div>
      <div className="text-base sm:text-lg font-medium">{`as ${role}`}</div>
      <div className="text-sm sm:text-base font-medium">{period}</div>
      <div className="flex">
        <div style={{ minWidth: '20px' }} className="mt-4 border-l border-l-black"></div>
        <div>
          {whatIDid.map((value, index) => (
            <div key={`${title}-what-i-did-${index}`} className="text-sm sm:text-base font-medium mt-4">
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
