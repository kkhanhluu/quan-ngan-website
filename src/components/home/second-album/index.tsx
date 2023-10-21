'use client';
import { FC, useState } from 'react';
import PhotoAlbum from 'react-photo-album';

import NextJsImage from '@/components/home/main-album';
import photos from '@/components/home/second-album/photos';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

export const SecondAlbum: FC = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout='rows'
        onClick={({ index }) => setIndex(index)}
        spacing={0}
        targetRowHeight={200}
        rowConstraints={{
          minPhotos: 4,
          maxPhotos: 5,
        }}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        render={{ slide: NextJsImage }}
      />
    </>
  );
};
