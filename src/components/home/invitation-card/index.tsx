import { Cormorant_Garamond, Nunito } from 'next/font/google';
import localFont from 'next/font/local';
import { FC } from 'react';

const bettrisisa = localFont({
  src: '../../../../public/fonts/BettrisiaScript-Bold.woff2',
});
const comorant = Cormorant_Garamond({
  subsets: ['vietnamese'],
  weight: '500',
});
const nunito = Nunito({
  subsets: ['vietnamese'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const InvitationCard: FC = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-delay='300'
      className='h-[45rem] flex lg:overflow-hidden z-0 w-full px-[5%] space-x-[5%] md:space-x-0 max-w-full md:mx-auto md:flex-col'
    >
      <FirstPage />
      <SecondPage />
    </div>
  );
};

const FirstPage: FC = () => {
  return (
    <div className='w-1/2 md:w-full'>
      <div
        className={`h-[65rem] md:h-auto shadow-[0px_0px_15px_20px_#00000024] ${nunito.className} md:pb-[6rem] bg-[url(/invitation-bg-1.png)] bg-no-repeat bg-cover bg-center tracking-[2px] font-[500] w-full mx-auto p-2 z-10 mt-[20rem] md:mt-[5rem]`}
      >
        <div className='items-center w-full justify-center md:pt-24 py-10 px-12 md:px-0 md:text-center flex flex-col h-full'>
          <h4
            className={`font-semibold md:text-lg text-2xl uppercase tracking-[0]`}
          >
            Trân trọng báo tin
          </h4>
          <h4
            className={`font-semibold md:text-lg text-2xl uppercase tracking-[0]`}
          >
            Lễ vu quy của chúng tôi
          </h4>
          <p className='tracking-[0] mt-8 mb-2 md:mt-2 md:text-xs uppercase'>
            Út nữ
          </p>
          <h4
            className={`${comorant.className} md:text-xl uppercase text-[#6FA8CC] text-5xl font-[700]`}
          >
            Phạm Hoàng Ngân
          </h4>
          <h4
            className={`${comorant.className} uppercase md:text-2xl text-[#DCE7EF] text-9xl md:-mt-[0.5rem] md:-mb-[0.5rem] -mt-[1.5rem] -mb-[1.5rem] font-[700]`}
          >
            &
          </h4>
          <h4
            className={`${comorant.className} uppercase md:text-xl text-[#6FA8CC] text-5xl font-[700]`}
          >
            Diệp anh quân
          </h4>
          <p className='tracking-[0] mb-8 mt-2 md:mb-2 uppercase md:text-xs'>
            Trưởng nam
          </p>
          <div className='mt-2 md:mt-0 -tracking-[0] md:text-sm'>
            Hôn lễ được cử hành tại tư gia vào lúc
          </div>
          <div className='-tracking-[0]'></div>
          <div className='flex w-[80%] justify-center items-center mt-6 md:mt-2 mb-2 text-xl md:text-base pl-8'>
            <h4
              className={`${comorant.className} md:text-xl px-4 uppercase text-[#6FA8CC] border-r-[1px] border-[#75A3C4] text-4xl font-[700]`}
            >
              9h00
            </h4>
            <h4
              className={`${comorant.className} md:text-xl px-4 uppercase text-[#6FA8CC] text-4xl font-[700]`}
            >
              22.10.2023
            </h4>
          </div>
          <div className='text-right uppercase md:text-sm md:-tracking-[0.5px] tracking-[0] mt-4 md:mt-0'>
            (Nhằm ngày 08 tháng 09 năm Quý Mão)
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondPage: FC = () => {
  return (
    <div className='w-1/2 md:w-full'>
      <div
        className={`h-[65rem] md:h-auto shadow-[0px_0px_15px_20px_#00000024] ${nunito.className} md:pb-[6rem] bg-[url(/invitation-bg.png)] bg-no-repeat bg-cover bg-center tracking-[2px] font-[500] w-full mx-auto p-2 z-10 mt-[20rem] md:mt-[5rem]`}
      >
        <div className='items-end md:items-center md:pt-24 md:px-0 w-[83%] md:w-full justify-center py-10 px-12 md:text-center flex flex-col h-full'>
          <h4
            className={`${bettrisisa.className} font-bold md:text-4xl text-6xl`}
          >
            Quân & Ngân
          </h4>
          <p className='uppercase border-b-2 mt-14 md:mt-4 md:pb-2 md:text-base text-right w-[80%] text-xl pb-6 border-dashed'>
            Trân trọng kính mời
          </p>
          <p className='md:text-base uppercase text-xl -tracking-[0] text-right mt-6 md:mt-4 font-semibold'>
            Đến dự bữa tiệc chung vui
          </p>
          <p className='md:text-base uppercase text-xl -tracking-[0] text-right mt-1 md:mt-0 font-semibold'>
            cùng gia đình chúng tôi
          </p>
          <h4
            className={`${comorant.className} md:text-xl md:my-4 uppercase my-6 text-[#6FA8CC] text-4xl font-[700]`}
          >
            Trống đồng cảnh hồ
          </h4>
          <div className='mt-2 -tracking-[0] md:text-sm'>
            137B Đ. Trường Chinh, Khương Mai, Thanh Xuân,
          </div>
          <div className='-tracking-[0] md:text-sm'>Hà Nội, Việt Nam</div>
          <div className='flex w-[80%] md:w-full md:justify-center items-center mt-6 mb-2 text-xl md:text-base border-t-[1px] border-b-[1px] border-[#75A3C4] md:pl-0 pl-8'>
            <div className='flex py-2 w-1/2 flex-col px-8 border-r-[1px] border-[#75A3C4]'>
              <h4 className={`uppercase -tracking-[0] md:text-sm`}>Vào lúc</h4>
              <h4
                className={`${comorant.className} md:text-xl uppercase text-[#6FA8CC] text-4xl font-[700]`}
              >
                11h00
              </h4>
            </div>
            <div className='flex items-center py-2 w-1/2 px-8 flex-col'>
              <h4 className={`uppercase -tracking-[0] md:text-sm`}>chủ nhật</h4>
              <h4
                className={`${comorant.className} uppercase md:text-xl text-[#6FA8CC] text-4xl font-[700]`}
              >
                22.10.2023
              </h4>
            </div>
          </div>
          <div className='text-right uppercase tracking-[0] mt-4 md:text-sm md:mt-4'>
            (Nhằm ngày 08 tháng 09 năm Quý Mão)
          </div>
          <div className='flex space-x-10 mt-2 mb-6 md:text-sm'>
            <p className='uppercase tracking-[0]'>Đón khách: 11h00</p>
            <p className='uppercase tracking-[0]'>Nhập tiệc: 11h30</p>
          </div>
          <div className='uppercase tracking-[0] md:text-sm'>
            rất hân hạnh được đón tiếp
          </div>
          <div className='uppercase tracking-[0] mt-6 md:mt-2 md:text-sm'>
            Kính mời!
          </div>
        </div>
      </div>
    </div>
  );
};
