import { Inconsolata } from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';
import { FC } from 'react';
import imageBgFlower from '../../../../public/card-bg-flower.png';
import rightImage from '../../../../public/invitation-right-image.png';

const bettrisisa = localFont({
  src: '../../../../public/fonts/BettrisiaScript-Bold.woff2',
});
const incosolata = Inconsolata({
  subsets: ['vietnamese'],
  weight: ['300', '400', '500'],
});

export const InvitationCard: FC = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-delay='300'
      className='h-[45rem] lg:overflow-hidden z-0 w-full max-w-full md:w-[90%] md:mx-auto'
    >
      <Image
        src={imageBgFlower}
        alt='flower'
        className='w-[220px] top-[70px] left-[400px] z-20 absolute md:w-[150px] md:h-[280px] md:top-60px] md:-left-[60px]'
      />
      <Image
        src={rightImage}
        alt='flower'
        className='w-[400px] h-[508px] absolute top-[400px] right-[400px] z-20 md:w-[300px] md:top-[500px] md:h-[380px] md:-right-[75px]'
      />
      <div
        className={`bg-white ${incosolata.className} relative tracking-[2px] font-[500] w-[45%] md:w-full mx-auto p-2 z-10 mt-[15rem] md:mt-[10rem]`}
      >
        <div className='border-2 items-center py-10 px-12 md:px-4 md:text-center flex flex-col background border-gray-border'>
          <h4
            className={`${bettrisisa.className} font-bold md:text-4xl text-6xl`}
          >
            Quân & Ngân
          </h4>
          <p className='uppercase border-b-2 mt-14 md:mt-8 w-[80%] text-center md:text-lg text-xl pb-6 border-dashed'>
            Trân trọng kính mời
          </p>
          <p className='uppercase mt-6 md:tracking-[1px]'>
            Đến dự tiệc chung vui cùng gia đình chúng tôi tại
          </p>
          <h4 className='uppercase mt-6 tracking-[4px] text-2xl font-bold'>
            capella parkview
          </h4>
          <div className='uppercase mt-2 tracking-[3px] md:tracking-[1px]'>
            Sảnh platium - tầng 5
          </div>
          <div className='uppercase tracking-[3px] md:tracking-[1px]'>
            82 Hùng Vương, Bà Đình, Hà Nội
          </div>
          <div className='flex items-center mt-6 mb-2 text-xl md:text-base'>
            <div className='uppercase border-r-2 border-[#434343] px-4 md:px-2'>
              19h00
            </div>
            <div className='uppercase border-r-2 border-[#434343] px-4 md:px-2'>
              Chủ nhật
            </div>
            <div className='uppercase px-4 md:px-2'>14.02.2023</div>
          </div>
          <div className='uppercase md:tracking-[1px]'>
            (Ngày 29 tháng 01 năm nhâm dần)
          </div>
          <div className='uppercase mt-4 md:tracking-[1px]'>
            rất hân hạnh được đón tiếp
          </div>
        </div>
      </div>
    </div>
  );
};
