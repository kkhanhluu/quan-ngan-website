import { Moon_Dance } from 'next/font/google';
import { FC } from 'react';
import styles from './styles.module.css';

const moonDance = Moon_Dance({ subsets: ['vietnamese'], weight: '400' });

export const Form: FC = () => {
  return (
    <form
      className={`${styles.postcard} overflow-x-hidden bg-pastel-blue md:w-full flex space-x-4 px-10 py-10 justify-center md:flex-col md:px-6`}
      action=''
    >
      <div className='flex flex-col space-y-4'>
        <label className='text-lg md:text-base' htmlFor='t-message'>
          Lời chúc:{' '}
        </label>
        <textarea
          className={`${styles.textarea} ${moonDance.className} mt-6 text-3xl md:text-2xl`}
          name='message'
          rows={12}
          cols={50}
          placeholder='Gửi lời chúc của bạn tới cô dâu chú rể'
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
            id='sender'
            name='sender-name'
          />
        </div>
        <button
          type='submit'
          className={`${styles.button} text-lg md:text-base w-[80%] md:mr-4 md:w-[70%] mt-[5rem] md:mt-[2rem] bg-pastel-blue hover:bg-blue-300`}
          name='button'
        >
          Nhấn để gửi lời chúc &gt;&gt;&gt;
        </button>
      </div>
    </form>
  );
};
