import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';

const notoSans = Montserrat({
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['300', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: `IAMHOONJEONG`,
  description: `WELCOME TO THE HOON JEONG'S PERSONAL SITE`,
  authors: [{ name: `Hoon Jeong`, url: `https://www.linkedin.com/in/iamhoonjeong/` }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${notoSans.className} antialiased`}>{children}</body>
    </html>
  );
}
