import Header from '@/src/ui/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  return (
    <main className="overflow-hidden animate-fadeIn text-center">
      <Header categoryOrder="category4" title="BLOG" />
      <div className="flex justify-center bg-category1 pt-6">
        <Link href={'https://www.linkedin.com/in/iamhoonjeong/'} rel="noopener noreferrer" target="_blank">
          <Image className="w-10 mr-3" src="/images/icon-linkedin.svg" width={0} height={0} alt="linkedin icon" />
        </Link>
        <Link href={'mailto:iamhoonjeong@gmail.com'}>
          <Image className="w-10" src="/images/icon-mail.svg" width={0} height={0} alt="email icon" />
        </Link>
      </div>
      <div className="flex justify-center bg-category1 pt-6"></div>
    </main>
  );
}
