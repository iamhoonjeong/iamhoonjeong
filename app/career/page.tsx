import CareerHistody from '@/src/ui/CareerHistory';
import Header from '@/src/ui/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Career() {
  const history = [
    {
      title: 'Pitch Peanut',
      role: 'Software Engineer',
      period: 'Apr 2024 - Current',
      location: 'Vancouver, Canada',
      whatIDid: [
        `Developed a JavaScript library using TensorFlow machine learning models to enable web page interaction through camera-detected eye blinks and hand gestures. This library allows individuals with disabilities to control web pages without physical interaction.`,
      ],
    },
    {
      title: 'IBM',
      role: 'Application Developer',
      period: 'Oct 2022 - Nov 2023',
      location: 'Seoul, South Korea',
      whatIDid: [
        `Developed a bank savings product for KB Kookmin Bank using JavaScript and Java, which was promoted to over 10 million customers. Created new APIs in Java and managed API integration and mobile interactions using JavaScript. This project was recognized as an outstanding development case by the Financial Supervisory Service.`,
        `Modernized SK Rent-a-Car's website by migrating it from a Java to a React application and documented all components comprehensively to enhance development efficiency. As a result, the UI-related release process time was reduced to one-third of the previous duration.`,
      ],
    },
    {
      title: 'smallticket',
      role: 'Software Engineer',
      period: 'May 2021 - Jul 2022',
      location: 'Seoul, South Korea',
      whatIDid: [
        `Developed a per-minute insurance enrollment process for motorcycle delivery drivers using React for the UI client interface and Thymeleaf for the admin system. This transition from the previous hourly model enabled significant marketing strategy improvements.`,
        `Utilized TensorFlow.js OCR technology to automatically convert photographed insurance documents into PDFs, streamlined data entry for document handlers, and significantly reduced document processing time.`,
      ],
    },
    {
      title: 'Oneday Dental',
      role: 'Software Engineer',
      period: 'Jun 2018 - Jun 2020',
      location: 'Seoul, South Korea',
      whatIDid: [
        `Developed an order system for dental technicians using JavaScript and HTML/CSS. This system streamlined the dental manufacturing process, reduced production time by over two days and significantly enhanced customer convenience.`,
        `Developed APIs for a telemarketing CRM system using Java and Spring, and created a web interface for telemarketers using JavaScript and HTML/CSS.`,
      ],
    },
  ];

  return (
    <main className="overflow-hidden animate-fadeIn">
      <Header categoryOrder="category3" title="CAREER" />
      <div className="flex justify-center bg-category4 pt-6">
        <Link href={'https://www.linkedin.com/in/iamhoonjeong/'} rel="noopener noreferrer" target="_blank">
          <Image className="w-10 mr-3" src="/images/icon-linkedin.svg" width={0} height={0} alt="linkedin icon" />
        </Link>
        <Link href={'mailto:iamhoonjeong@gmail.com'}>
          <Image className="w-10" src="/images/icon-mail.svg" width={0} height={0} alt="email icon" />
        </Link>
      </div>
      <section className="w-full flex flex-col items-center bg-category4 pb-16 sm:pb-24 overflow-hidden">
        {history.map((value, index) => {
          return (
            <CareerHistody
              key={`career-${index}`}
              title={value.title}
              period={value.period}
              role={value.role}
              location={value.location}
              whatIDid={value.whatIDid}
            />
          );
        })}
      </section>
    </main>
  );
}
