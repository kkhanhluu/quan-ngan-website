import { Moon_Dance } from 'next/font/google';
import Image from 'next/image';
import { FC } from 'react';
import footer from '../../../../public/footer.jpeg';

const moonDance = Moon_Dance({ subsets: ['vietnamese'], weight: '400' });

export const Footer: FC = () => {
  return (
    <>
      <div
        w-full
        className='bg-[url(/footer-couple.png)] w-[511px] h-[470px] md:bg-[length:400px_400px] relative bg-center bg-no-repeat'
      >
        <Image
          src={footer}
          alt='footer couple'
          className='w-[383px] h-[383px] rounded-[50%] absolute top-[14px] left-[10%] md:w-[300px] md:h-[300px] md:left-[100px] md:top-[50px]'
        />
      </div>
      <h5 className={`${moonDance.className} text-6xl md:text-4xl`}>
        Thank you!
      </h5>
    </>
  );
};
