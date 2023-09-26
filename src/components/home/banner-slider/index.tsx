'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { FC, useState } from 'react';

export const BannerSlider: FC = () => {
  const [opacities, setOpacities] = useState<number[]>([]);

  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      slides: 2,
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
    <div className='absolute top-0 left-0 w-[100vw] h-[110vh] md:relative'>
      <div ref={ref} className='keen-slider overflow-hidden h-full relative'>
        <div
          style={{ opacity: opacities[0] }}
          className={`fader__slide md:bg-center w-full h-full absolute top-0 bg-no-repeat bg-cover bg-[url(/slider-6.jpeg)]`}
        ></div>
        <div
          style={{ opacity: opacities[1] }}
          className={`fader__slide md:bg-center w-full h-full absolute top-0 bg-no-repeat bg-cover bg-[url(/slider-1.jpeg)]`}
        ></div>
      </div>
    </div>
  );
};
