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
    top: r.top + window.scrollY + r.width / 5,
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
      nganIcon == null
    ) {
      console.log({ quanIcon, quanthumb, nganIcon, nganthumb });
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
  }, []);

  return (
    <div ref={storyRef}>
      <VerticalTimeline className={`${styles.timeline}`}>
        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${styles.element1} ${styles.element} timeline-element-quan relative`}
          contentStyle={{ boxShadow: 'none' }}
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{
            backgroundColor: '#be9585',
            boxShadow: 'none',
            width: '15px',
            height: '15px',
            marginLeft: '-9px',
          }}
        >
          <h4
            className={`vertical-timeline-element-title ${garamond.className} text-2xl text-[#be9585]`}
          >
            1997
          </h4>
          <p className={`${barlow.className} !text-lg !font-[400]`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${styles.element2} ${styles.element} timeline-element-ngan relative`}
          contentStyle={{ boxShadow: 'none' }}
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{
            backgroundColor: '#be9585',
            boxShadow: 'none',
            width: '15px',
            height: '15px',
            marginLeft: '-9px',
          }}
        >
          <h4
            className={`vertical-timeline-element-title ${garamond.className} text-2xl text-[#be9585]`}
          >
            1997
          </h4>
          <p className={`${barlow.className} !text-lg !font-[400]`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${styles.element3} ${styles.element} timeline-element-quan relative`}
          contentStyle={{ boxShadow: 'none' }}
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{
            backgroundColor: '#be9585',
            boxShadow: 'none',
            width: '15px',
            height: '15px',
            marginLeft: '-9px',
          }}
        >
          <h4
            className={`vertical-timeline-element-title ${garamond.className} text-2xl text-[#be9585]`}
          >
            2011
          </h4>
          <p className={`${barlow.className} !text-lg !font-[400]`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${styles.element2} ${styles.element} timeline-element-ngan relative`}
          contentStyle={{ boxShadow: 'none' }}
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{
            backgroundColor: '#be9585',
            boxShadow: 'none',
            width: '15px',
            height: '15px',
            marginLeft: '-9px',
          }}
        >
          <h4
            className={`vertical-timeline-element-title ${garamond.className} text-2xl text-[#be9585]`}
          >
            2016
          </h4>
          <p className={`${barlow.className} !text-lg !font-[400]`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${styles.element3} ${styles.element} timeline-element-quan relative`}
          contentStyle={{ boxShadow: 'none' }}
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{
            backgroundColor: '#be9585',
            boxShadow: 'none',
            width: '15px',
            height: '15px',
            marginLeft: '-9px',
          }}
        >
          <h4
            className={`vertical-timeline-element-title ${garamond.className} text-2xl text-[#be9585]`}
          >
            2020
          </h4>
          <p className={`${barlow.className} !text-lg !font-[400]`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={`vertical-timeline-element--work ${styles.element4} ${styles.element} timeline-element-ngan relative`}
          contentStyle={{ boxShadow: 'none' }}
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{
            backgroundColor: '#be9585',
            boxShadow: 'none',
            width: '15px',
            height: '15px',
            marginLeft: '-9px',
          }}
        >
          <h4
            className={`vertical-timeline-element-title ${garamond.className} text-2xl text-[#be9585]`}
          >
            2020
          </h4>
          <p className={`${barlow.className} !text-lg !font-[400]`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={`vertical-timeline-element--work timeline-element-last ${styles.element5} ${styles.element} relative`}
          contentStyle={{ boxShadow: 'none' }}
          contentArrowStyle={{ display: 'none' }}
          iconStyle={{
            backgroundColor: '#be9585',
            boxShadow: 'none',
            width: '15px',
            height: '15px',
            marginLeft: '-9px',
          }}
        >
          <h4
            className={`vertical-timeline-element-title ${garamond.className} text-2xl text-[#be9585]`}
          >
            2023
          </h4>
          <p className={`${barlow.className} !text-lg !font-[400]`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <section id='playground-holder' className='h-[170px]'>
        <div
          id='playground'
          className={`w-full h-[160px] z-[2] left-0 bottom-3 fixed pt-[3rem] ${styles.playground}`}
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
