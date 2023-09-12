'use client';

import { intervalToDuration } from 'date-fns';
import { Barlow, EB_Garamond } from 'next/font/google';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import flowerLeft from '../../../../public/flower-left.png';
import flowerRight from '../../../../public/flower-right.png';

const barlow = Barlow({ subsets: ['vietnamese'], weight: ['400', '500'] });
const garamond = EB_Garamond({
  subsets: ['vietnamese'],
  style: ['italic'],
  weight: '400',
});

const WEDDING_DATE = new Date(2023, 9, 22, 20, 0, 0);

export const Countdown: FC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const duration = intervalToDuration({
        start: new Date(),
        end: WEDDING_DATE,
      });
      setMonth(duration.months);
      setDay(duration.days);
      setHour(duration.hours);
      setMinute(duration.minutes);
      setSecond(duration.seconds);
    }, 1000);
    return () => clearInterval(interval);
  });

  const [month, setMonth] = useState<number>();
  const [day, setDay] = useState<number>();
  const [hour, setHour] = useState<number>();
  const [minute, setMinute] = useState<number>();
  const [second, setSecond] = useState<number>();

  return (
    <div className='flex w-full mb-[20rem] px-[5%] items-center'>
      <Image src={flowerLeft} alt='flower left' />
      <div className='flex space-x-2 w-full justify-evenly'>
        <CountDownItem title='Tháng' value={month ?? 0} />
        <CountDownItem title='Ngày' value={day ?? 0} />
        <CountDownItem title='Giờ' value={hour ?? 0} />
        <CountDownItem title='phút' value={minute ?? 0} />
        <CountDownItem title='giây' value={second ?? 0} />
      </div>
      <Image src={flowerRight} alt='flower right' />
    </div>
  );
};

const CountDownItem: FC<{ title: string; value: number }> = ({
  title,
  value,
}) => {
  return (
    <div className='flex flex-col items-center'>
      <p
        className={`capitalize ${garamond.className} font-bold text-2xl text-[#905478]`}
      >
        {title}
      </p>
      <div className={`${barlow.className} text-3xl`}>
        {value.toString().padStart(2, '0')}
      </div>
    </div>
  );
};
