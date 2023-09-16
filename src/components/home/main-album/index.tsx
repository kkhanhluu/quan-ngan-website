'use client';
import { FC, useState } from 'react';
import PhotoAlbum from 'react-photo-album';

import photos from '@/components/home/main-album/photos';
import { Moon_Dance } from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import albumTitle from '../../../../public/album-title.jpeg';

const bettrisisa = localFont({
  src: '../../../../public/fonts/BettrisiaScript-Bold.woff2',
});
const moonDance = Moon_Dance({ subsets: ['vietnamese'], weight: '400' });

export const MainAlbum: FC = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout='rows'
        onClick={({ index }) => setIndex(index)}
        rowConstraints={{
          maxPhotos: 3,
          minPhotos: 1,
        }}
        renderPhoto={({
          photo,
          wrapperStyle,
          imageProps: { alt, title, sizes, className, onClick },
        }) => {
          if (photo.src === '/empty.avif') {
            return (
              <div className='flex overflow-hidden bg-[#FAFAFA] px-10 space-y-2 md:px-0 flex-col justify-center items-center self-stretch'>
                <Image
                  src={albumTitle}
                  alt='Album title'
                  className='w-[20rem] max-w-full -mt-[4rem] md:-mt-[2rem] md:w-[8rem]'
                />
                <div className='flex flex-col space-y-10 md:space-y-2 w-full md:!-mt-[1.5rem]'>
                  <h4
                    className={`${bettrisisa.className} md:text-xl !font-extrabold text-6xl text-pastel-blue text-center`}
                  >
                    Quân & Ngân
                  </h4>
                  <div className='flex flex-col items-center text-pastel-blue'>
                    <h5
                      className={`${moonDance.className} !font-semibold capitalize text-4xl md:text-[14px]`}
                    >
                      Hà nội,
                    </h5>
                    <h5
                      className={`${moonDance.className} !font-semibold text-2xl md:text-[13px] md:-mt-[1rem]`}
                    >
                      22/10/2023
                    </h5>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div style={{ ...wrapperStyle, position: 'relative' }}>
              <Image
                fill
                src={photo}
                placeholder={'blurDataURL' in photo ? 'blur' : undefined}
                {...{ alt, title, sizes, className, onClick }}
              />
            </div>
          );
        }}
      />

      <Lightbox
        slides={photos.filter((p) => p.src !== '/empty.avif')}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
};
