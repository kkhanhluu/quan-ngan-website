import { Moon_Dance } from 'next/font/google';
import { FC } from 'react';
import styles from './styles.module.css';

const moonDance = Moon_Dance({ subsets: ['vietnamese'], weight: '400' });

export const Form: FC = () => {
  return (
    <form
      className={`${styles.postcard} bg-pastel-blue flex space-x-4 px-10 py-10 justify-center`}
      action=''
    >
      <div className='flex flex-col space-y-4'>
        <label className='text-lg' htmlFor='t-message'>
          Lời chúc:{' '}
        </label>
        <textarea
          className={`${styles.textarea} ${moonDance.className} mt-6 text-3xl`}
          name='message'
          rows={12}
          cols={50}
          placeholder='Gửi lời chúc của bạn tới cô dâu chú rể'
        ></textarea>
      </div>
      <div className='flex flex-col justify-end w-1/2'>
        <div className='text-lg flex items-center space-x-4'>
          <div>Tới: </div>{' '}
          <div className={`${moonDance.className} text-3xl`}>Quân & Ngân</div>
        </div>
        <div className='flex items-center space-x-4 mt-4 justify-start'>
          <label htmlFor='sender' className='text-lg block'>
            Người gửi:
          </label>
          <input
            className={`text-3xl block ${moonDance.className} border-b-2`}
            type='text'
            id='sender'
            name='sender-name'
          />
        </div>
        <button
          type='submit'
          className={`${styles.button} text-lg w-[80%] mt-[5rem] bg-pastel-blue hover:bg-blue-300`}
          name='button'
        >
          Nhấn để gửi lời chúc &gt;&gt;&gt;
        </button>
      </div>
    </form>
  );
};
