import { Header } from '@/components/header';
import { BannerSlider } from '@/components/home/banner-slider';
import { Countdown } from '@/components/home/countdown';
import { Form } from '@/components/home/form';
import { InvitationCard } from '@/components/home/invitation-card';
import { MainAlbum } from '@/components/home/main-album';
import { Notebook } from '@/components/home/notebook';
import { SecondAlbum } from '@/components/home/second-album';
import { Timeline } from '@/components/home/timeline';
import { EB_Garamond } from 'next/font/google';
import localFont from 'next/font/local';

const bettrisisa = localFont({
  src: '../../public/fonts/BettrisiaScript-Bold.woff2',
});
const garamond = EB_Garamond({
  subsets: ['vietnamese'],
  style: ['normal'],
  weight: ['400'],
});

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <section className='min-h-[90vh] pt-20 z-10 w-full flex flex-col items-center relative'>
        <Header />
        <BannerSlider />
        <div className='flex flex-col items-end'>
          <h4
            className={`${bettrisisa.className} md:text-4xl md:mt-[40%] !font-extralight mt-[6rem] text-8xl z-20`}
          >
            Me and you. Just us two.
          </h4>
          <h4
            className={`${garamond.className} md:text-xl md:mt-2 md:mr-2 !font-extralight mr-[6rem] text-2xl z-20`}
          >
            20.09.2020
          </h4>
        </div>
      </section>
      <section
        style={{
          WebkitClipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
        }}
        className="flex overflow-hidden countdown-section relative w-full bg-[center_top_10rem] flex-col bg-[url('/card-bg.png')]"
      >
        <InvitationCard />
        <Countdown />
      </section>
      <section className='md:-mt-[8rem]'>
        <Timeline />
      </section>
      <section className='w-[70%] md:w-full md:mt-[5rem]'>
        <MainAlbum />
      </section>
      <section className='w-full mt-[15rem] md:mt-[7rem]'>
        <SecondAlbum />
      </section>
      <section className='flex mt-[4rem] flex-col items-center space-y-[6rem] mb-[5rem] w-full justify-center md:justify-start md:items-start'>
        <Form />
        <Notebook />
      </section>
    </main>
  );
}
