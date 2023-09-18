'use client';

import { Moon_Dance } from 'next/font/google';
import { FC, useState } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { toast } from 'react-toastify';
import styles from './styles.module.css';

const moonDance = Moon_Dance({ subsets: ['vietnamese'], weight: '400' });

export const Form: FC<{
  submitWish: (formData: FormData) => Promise<void>;
}> = ({ submitWish }) => {
  const { pending } = useFormStatus();
  const [message, setMessage] = useState<string>();
  const [sender, setSender] = useState<string>();

  async function onSubmit(formData: FormData) {
    toast.promise(() => submitWish(formData), {
      pending: 'Đang gửi lời chúc ⏳',
      success:
        'Lời chúc đã được gửi. Lời chúc của bạn sẽ xuất hiện trong sổ lưu bút sau một vài phút 👌',
      error: 'Đã có lỗi xảy ra. Vui lòng thử lại 😅',
    });
  }
  return (
    <form
      data-aos='fade-up'
      data-aos-duration='1000'
      className={`${styles.postcard} overflow-x-hidden bg-pastel-pink md:w-full flex space-x-4 px-10 py-10 justify-center md:flex-col md:px-6`}
      action={onSubmit}
    >
      <div className='flex flex-col space-y-4'>
        <label className='text-lg md:text-base' htmlFor='t-message'>
          Lời chúc:{' '}
        </label>
        <textarea
          className={`${styles.textarea} ${moonDance.className} md:p-4 mt-6 text-3xl md:text-2xl`}
          name='message'
          required
          rows={12}
          cols={50}
          placeholder='Gửi lời chúc của bạn tới cô dâu chú rể'
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className='flex flex-col justify-end w-1/2 md:w-full md:items-end'>
        <div className='text-lg flex items-center space-x-4 w-full'>
          <div className='md:!ml-[3rem]'>Tới: </div>{' '}
          <div className={`${moonDance.className} text-3xl md:text-2xl`}>
            Quân & Ngân
          </div>
        </div>
        <div className='flex items-center space-x-4 mt-4 justify-start md:w-full'>
          <label
            htmlFor='sender'
            className='text-lg md:!ml-[3rem] md:text-base block'
          >
            Người gửi:
          </label>
          <input
            className={`text-3xl md:w-[60%] md:text-2xl block ${moonDance.className} border-b-2`}
            type='text'
            required
            id='sender'
            name='sender'
            onChange={(e) => setSender(e.target.value)}
          />
        </div>
        <button
          type='submit'
          disabled={pending || message == null || sender == null}
          className={`${styles.button} flex items-center disabled:opacity-50 disabled:bg-gray-400 text-lg md:text-base w-[90%] md:mr-4 md:w-[65%] mt-[5rem] md:mt-[2rem] bg-pastel-pink hover:bg-pink-300`}
        >
          {pending ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='mr-2 h-4 w-4 animate-spin'
            >
              <path d='M21 12a9 9 0 1 1-6.219-8.56'></path>
            </svg>
          ) : null}
          Nhấn để gửi lời chúc &gt;&gt;&gt;
        </button>
      </div>
    </form>
  );
};
