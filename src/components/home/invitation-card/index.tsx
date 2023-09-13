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
    <div className='h-[45rem] z-0 w-full relative'>
      <Image
        src={imageBgFlower}
        alt='flower'
        className='w-[220px] top-[20%] left-[22%] z-20 absolute'
      />
      <Image
        src={rightImage}
        alt='flower'
        className='w-[220px] absolute -bottom-[15%] right-[25%] z-20'
      />
      <div
        className={`bg-white ${incosolata.className} tracking-[2px] font-[500] w-[45%] mx-auto p-2 absolute z-10 top-[30%] left-[28%]`}
      >
        <div className='border-2 items-center py-10 px-12 flex flex-col background border-gray-border'>
          <h4 className={`${bettrisisa.className} font-bold text-6xl`}>
            Quân & Ngân
          </h4>
          <p className='uppercase border-b-2 mt-14 w-[80%] text-center text-xl pb-6 border-dashed'>
            Trân trọng kính mời
          </p>
          <p className='uppercase mt-6'>
            Đến dự tiệc chung vui cùng gia đình chúng tôi tại
          </p>
          <h4 className='uppercase mt-6 tracking-[4px] text-2xl font-bold'>
            capella parkview
          </h4>
          <div className='uppercase mt-2 tracking-[3px]'>
            Sảnh platium - tầng 5
          </div>
          <div className='uppercase tracking-[3px]'>
            82 Hùng Vương, Bà Đình, Hà Nội
          </div>
          <div className='flex items-center mt-6 mb-2'>
            <div className='uppercase border-r-2 border-[#434343] px-4 text-xl'>
              19h00
            </div>
            <div className='uppercase border-r-2 border-[#434343] px-4 text-xl'>
              Chủ nhật
            </div>
            <div className='uppercase px-4 text-xl'>14.02.2023</div>
          </div>
          <div className='uppercase'>(Ngày 29 tháng 01 năm nhâm dần)</div>
          <div className='uppercase mt-4'>rất hân hạnh được đón tiếp</div>
        </div>
      </div>
    </div>
  );
};
