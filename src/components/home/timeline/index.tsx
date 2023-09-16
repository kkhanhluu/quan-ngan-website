'use client';

import throttle from 'lodash.throttle';
import { Barlow, EB_Garamond } from 'next/font/google';
import { FC, useEffect, useRef } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './style.module.css';

const barlow = Barlow({
  subsets: ['vietnamese'],
  weight: ['200', '400', '500'],
});
const garamond = EB_Garamond({
  subsets: ['vietnamese'],
  style: ['italic'],
  weight: '400',
});

function getAbsolutePosition(elem: HTMLElement | Element | null) {
  if (elem == null) {
    return { top: 0, bottom: 0 };
  }
  const r = elem.getBoundingClientRect();
  return {
    top: r.top + window.scrollY + 100,
    bottom: r.bottom + window.scrollY,
  };
}

export const Timeline: FC = () => {
  const pgHolder = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  function updatePlayground() {
    const pgHolderPosition = getAbsolutePosition(pgHolder.current);

    const storyEachToken = 'on-story-each';
    const storyAfterToken = 'after-story-each';
    const storyEachDecider = window.innerHeight + window.scrollY;
    const storyEachPosition = getAbsolutePosition(storyRef.current);
    if (
      storyEachDecider > storyEachPosition.top + 1 &&
      storyEachDecider <= pgHolderPosition.bottom
    ) {
      document.body.classList.add(storyEachToken);
      document.body.classList.remove(storyAfterToken);
    } else if (storyEachDecider > pgHolderPosition.bottom) {
      document.body.classList.remove(storyEachToken);
      document.body.classList.add(storyAfterToken);
    } else {
      document.body.classList.remove(storyEachToken);
      document.body.classList.remove(storyAfterToken);
    }

    const playground = document.getElementById('playground');

    const togetherContent = Array.from(
      document.getElementsByClassName('timeline-element-last')
    )[0];
    const togetherContentTop = getAbsolutePosition(togetherContent).top;

    const quanTops = Array.from(
      document.getElementsByClassName('timeline-element-quan')
    )
      .map(getAbsolutePosition)
      .map((r) => r.top);
    const quanLevel = quanTops.findLastIndex(function (value) {
      return value < storyEachDecider;
    });

    const quanIconHolders = ['baby-boy', 'man', 'man', 'couple'];
    const nganIconHolders = ['baby-girl', 'woman', 'woman', 'couple'];

    const quanthumb = document.getElementById('quan-thumb');
    const quanIcon = quanthumb?.children[0];
    const nganthumb = document.getElementById('ngan-thumb');
    const nganIcon = nganthumb?.children[0];

    if (
      quanthumb == null ||
      nganthumb == null ||
      quanIcon == null ||
      nganIcon == null ||
      playground == null
    ) {
      return;
    }
    quanIcon.classList.remove(...quanIconHolders);
    if (quanLevel < 0) {
      quanthumb.style.display = 'none';
      quanthumb.style.left = '0';
      quanthumb.style.transform = 'none';
      quanIcon.classList.add(quanIconHolders[0]);
    } else if (storyEachDecider >= togetherContentTop) {
      nganthumb.style.display = 'block';
      quanthumb.style.left = '50%';
      quanthumb.style.transform = 'translateX(-50%)';
      quanIcon.classList.add(quanIconHolders[quanIconHolders.length - 1]);
    } else {
      quanthumb.style.display = 'block';
      quanthumb.style.left = (quanLevel / (quanTops.length * 2)) * 100 + '%';
      quanthumb.style.transform = 'none';
      quanIcon.classList.add(quanIconHolders[quanLevel]);
    }

    const nganTops = Array.from(
      document.getElementsByClassName('timeline-element-ngan')
    )
      .map(getAbsolutePosition)
      .map((r) => r.top);
    const nganLevel = nganTops.findLastIndex(function (value) {
      return value < storyEachDecider;
    });
    nganIcon.classList.remove(...nganIconHolders);
    if (nganLevel < 0) {
      nganthumb.style.display = 'none';
      nganthumb.style.right = '0';
      nganthumb.style.transform = 'none';
      nganIcon.classList.add(nganIconHolders[0]);
    } else if (storyEachDecider >= togetherContentTop) {
      nganthumb.style.display = 'block';
      nganthumb.style.right = '50%';
      nganthumb.style.transform = 'translateX(50%)';
      nganIcon.classList.add(nganIconHolders[nganIconHolders.length - 1]);
    } else {
      nganthumb.style.display = 'block';
      nganthumb.style.right = (nganLevel / (nganTops.length * 2)) * 100 + '%';
      nganthumb.style.transform = 'none';
      nganIcon.classList.add(nganIconHolders[nganLevel]);
    }
  }

  const throttledOnScroll = throttle(updatePlayground, 66);

  useEffect(() => {
    window.removeEventListener('scroll', throttledOnScroll);
    window.addEventListener('scroll', throttledOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledOnScroll);
  }, [throttledOnScroll]);

  const events = new Array(7).fill(null).map((_, index) => ({
    year: 1997 + index * 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  }));

  return (
    <div ref={storyRef} className='w-full max-w-full'>
      <VerticalTimeline className={`${styles.timeline}`}>
        {events.map((event, index) => {
          const style = getClassName(index + 1);
          const quanNganClass =
            index % 2 === 0 ? 'timeline-element-quan' : 'timeline-element-ngan';
          const lastElementClass =
            index === events.length - 1 ? 'timeline-element-last' : '';
          return (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--work ${style} ${lastElementClass} ${quanNganClass} ${styles.element} relative`}
              contentStyle={{ boxShadow: 'none' }}
              contentArrowStyle={{ display: 'none' }}
              iconClassName={styles.icon}
            >
              <h4
                className={`vertical-timeline-element-title ${garamond.className} text-2xl text-[#e9c4da]`}
              >
                {event.year}
              </h4>
              <p
                className={`${barlow.className} !text-lg md:!text-base !font-[400]`}
              >
                {event.text}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

      <section
        id='playground-holder'
        ref={pgHolder}
        className='h-[170px] md:h-[8rem] md:mt-[8rem] z-40 w-[100vw]'
      >
        <div
          id='playground'
          className={`w-full h-[200px] z-[2] left-0 pt-[4.5rem] md:pt-[3.5rem] md:h-[8rem] ${styles.playground}`}
        >
          <div
            id='quan-thumb'
            className={`thumb quan w-[80px] h-[80px] absolute m-0 left-0 ${styles.thumb}`}
          >
            <div className={styles.thumbIcon}></div>
          </div>

          <div
            id='ngan-thumb'
            className={`thumb ngan w-[80px] h-[80px] absolute m-0 right-0 ${styles.thumb}`}
          >
            <div className={styles.thumbIcon}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

function getClassName(index: number) {
  switch (index) {
    case 1:
      return styles.element1;
    case 2:
      return styles.element2;
    case 3:
      return styles.element3;
    case 4:
      return styles.element4;
    case 5:
      return styles.element5;
    case 6:
      return styles.element6;
    case 7:
      return styles.element7;
  }
}
