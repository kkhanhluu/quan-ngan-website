'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { FC, useState } from 'react';
import slide1 from '../../../../public/slider-1.jpeg';
import slide2 from '../../../../public/slider-3.jpg';
import slide3 from '../../../../public/slider-4-1.jpg';

export const BannerSlider: FC = () => {
  const [opacities, setOpacities] = useState<number[]>([]);

  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      slides: 3,
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        );
        setOpacities(new_opacities);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <div className='absolute top-0 left-0 w-[100vw] h-[100vh]'>
      <div ref={ref} className='keen-slider overflow-hidden h-full relative'>
        <div
          style={{ opacity: opacities[0] }}
          className='fader__slide w-full h-full absolute top-0'
        >
          <Image src={slide1} alt='slider 1' className='w-full' />
        </div>
        <div
          style={{ opacity: opacities[1] }}
          className='fader__slide w-full h-full absolute top-0'
        >
          <Image src={slide2} alt='slider 2' className='w-full' />
        </div>
        <div
          style={{ opacity: opacities[2] }}
          className='fader__slide w-full h-full absolute top-0'
        >
          <Image src={slide3} alt='slider 3' className='w-full' />
        </div>
      </div>
    </div>
  );
};
