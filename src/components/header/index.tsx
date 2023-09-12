import { Lato } from 'next/font/google';
import Image from 'next/image';
import { FC } from 'react';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

export const Header: FC = () => {
  return (
    <div
      className={`flex flex-col items-center space-y-10 ${lato.className} z-20`}
    >
      <Image src='/logo.png' alt='Logo' width={240} height={70} />
      <div className='flex'>
        <div className='border-r-2 border-gray-border text-gray-text px-8 font-light tracking-[3px]'>
          Home
        </div>
        <div className='border-r-2 border-gray-border text-gray-text px-8 font-light tracking-[3px]'>
          Invitation
        </div>
        <div className='border-r-2 border-gray-border text-gray-text px-8 font-light tracking-[3px]'>
          Location
        </div>
        <div className='border-gray-border text-gray-text px-8 font-light tracking-[3px]'>
          RSVP
        </div>
      </div>
    </div>
  );
};
