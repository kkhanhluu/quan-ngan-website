import { Header } from '@/components/header';
import { BannerSlider } from '@/components/home/banner-slider';
import { Countdown } from '@/components/home/countdown';
import { InvitationCard } from '@/components/home/invitation-card';
import { Timeline } from '@/components/home/timeline';
import Image from 'next/image';
import heroText from '../../public/hero-text.png';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <section className='min-h-[90vh] pt-20 z-10 w-full flex flex-col items-center relative'>
        <Header />
        <BannerSlider />
        <Image
          src={heroText}
          alt='Hero text'
          className='absolute z-10 top-[30%]'
        />
      </section>
      <section
        style={{
          WebkitClipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
        }}
        className="flex relative w-full bg-[center_top_10rem] flex-col bg-[url('/card-bg.png')]"
      >
        <InvitationCard />
        <Countdown />
      </section>
      <section>
        <Timeline />
      </section>
    </main>
  );
}
