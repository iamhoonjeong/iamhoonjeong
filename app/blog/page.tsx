import Link from 'next/link';
import Image from 'next/image';
import Header from '@/src/ui/Header';

export default function Blog() {
  return (
    <main className="overflow-hidden animate-fadeIn text-center pb-24 bg-category1">
      <Header categoryOrder="category4" title="BLOG" />
      <div className="flex justify-center bg-category1 pt-6">
        <Link href={'https://www.linkedin.com/in/iamhoonjeong/'} rel="noopener noreferrer" target="_blank">
          <Image className="w-10 mr-3" src="/images/icon-linkedin.svg" width={0} height={0} alt="linkedin icon" />
        </Link>
        <Link href={'mailto:iamhoonjeong@gmail.com'}>
          <Image className="w-10" src="/images/icon-mail.svg" width={0} height={0} alt="email icon" />
        </Link>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <div className="h-full bg-category1">
          {new Array(10).fill('a').map((a, i) => {
            return (
              <div key={i} className="w-full flex flex-col items-center bg-category1 overflow-hidden">
                <Link href={'/blog/create-canvas'}>
                  <div
                    style={{ width: '80dvw', maxWidth: '800px' }}
                    className="text-white text-left mt-4 pb-4 sm:mt-6 sm:pb-6 border-b text-2xl sm:text-4xl text-category1 font-black"
                  >
                    How to Create Canvas how many particels put in the canvas?
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
      <div className="h-full flex justify-center bg-category1 pt-6 text-4xl text-category1 font-black">UNDER CONSTRUNTION</div>
    </main>
  );
}
