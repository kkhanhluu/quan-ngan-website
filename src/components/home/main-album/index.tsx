'use client';
import { FC, useState } from 'react';
import PhotoAlbum from 'react-photo-album';

import photos from '@/components/home/main-album/photos';
import { Moon_Dance } from 'next/font/google';
import localFont from 'next/font/local';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

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
        renderPhoto={({ photo, renderDefaultPhoto }) => {
          if (photo.src === '/empty.avif') {
            return (
              <div className='flex space-y-10 flex-col items-center justify-center self-stretch'>
                <h4
                  className={`${bettrisisa.className} font-bold text-6xl text-pastel-pink`}
                >
                  Quân & Ngân
                </h4>
                <div className='flex flex-col items-center text-pastel-pink'>
                  <h5 className={`${moonDance.className} capitalize text-4xl`}>
                    Hà nội,
                  </h5>
                  <h5 className={`${moonDance.className} !font-bold text-2xl`}>
                    22/10/2023
                  </h5>
                </div>
              </div>
            );
          }
          return renderDefaultPhoto();
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
