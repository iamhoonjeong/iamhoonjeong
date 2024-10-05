import Image from 'next/image';

interface Props {
  title: string;
  role: string;
  period: string;
  location: string;
  whatIDid: string[];
}

export default function CareerHistody({ title, role, period, location, whatIDid }: Props) {
  return (
    <div
      style={{ width: '80dvw', maxWidth: '600px' }}
      className="relative text-xl sm:text-2xl font-black text-gray-700 mt-12 sm:mt-14 first:mt-8 first:sm:mt-10"
    >
      <Image
        style={{ width: '70px', height: '70px', left: '-35px', top: '-35px' }}
        className="w-full h-full absolute animate-bounce"
        src="/images/icon-inside-circle.svg"
        width={0}
        height={0}
        alt="bouncing icon image"
      />
      <div>{title}</div>
      <div className="text-sm sm:text-base font-medium">{`as ${role}`}</div>
      <div className="text-sm sm:text-base font-medium">{period}</div>
      <div className="text-sm sm:text-base font-medium">{location}</div>
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
