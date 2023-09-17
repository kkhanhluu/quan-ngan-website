/* eslint-disable react/display-name */
// @ts-nocheck

'use client';

import { Moon_Dance } from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';
import { FC, ForwardedRef, PropsWithChildren, forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import albumTitle from '../../../../public/album-title.jpeg';
import styles from './style.module.css';

const bettrisisa = localFont({
  src: '../../../../public/fonts/BettrisiaScript-Bold.woff2',
});
const moonDance = Moon_Dance({ subsets: ['vietnamese'], weight: '400' });

export const Notebook: FC<{
  wishes?: { wish: string; author: string; isPublished: string }[];
}> = ({ wishes }) => {
  return (
    <div className='w-[60%] md:w-full md:!mt-[10rem]'>
      <HTMLFlipBook
        width={550}
        height={733}
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        size='stretch'
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className={`${styles.flipBook} md:!w-full`}
      >
        <PageCover />
        {wishes
          ?.filter(({ isPublished }) => isPublished === 'TRUE')
          .map(({ author, isPublished, wish }, index) => (
            <Page text={wish} author={author} number={index + 1} key={index} />
          ))}
      </HTMLFlipBook>
    </div>
  );
};

const PageCover = forwardRef(
  (props: PropsWithChildren, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        style={{
          transform: 'translateZ(-1px)',
          transformOrigin: '0% 50%',
          padding: '5% 4% 4% 5%',
        }}
        className={`${styles.page} !bg-[#FAFAFA] text-center flex flex-col items-center w-full`}
        ref={ref}
        data-density='hard'
      >
        <div className={`${styles.page} h-full flex flex-col items-center`}>
          <Image
            src={albumTitle}
            alt='Album title'
            className='w-[20rem] max-w-full -mt-[4rem]'
          />
          <div className='flex flex-col space-y-16'>
            <h4 className={`${moonDance.className} font-bold text-5xl`}>
              Sổ lưu bút
            </h4>
            <h4 className={`${bettrisisa.className} font-bold text-5xl`}>
              Quân & Ngân
            </h4>
            <p
              className={`${moonDance.className} font-semibold md:text-base text-2xl`}
            >
              Hà Nội, 23.10.2023{' '}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

const Page = forwardRef(
  (
    props: PropsWithChildren<{ text: string; author: string; number: number }>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div className={`${styles.page} px-8 py-4`} ref={ref}>
        <div className={`${styles.pageContent}`}>
          <div
            className={`${styles.pageText} ${moonDance.className} text-3xl flex flex-col space-y-8`}
          >
            <p>{props.text}</p>
            <p>{props.author}</p>
          </div>
          <div className={`${styles.pageFooter}`}>{props.number + 1}</div>
        </div>
      </div>
    );
  }
);
