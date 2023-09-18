'use client';

import { Barlow } from 'next/font/google';
import Image from 'next/image';
import { FC } from 'react';
import logo from '../../../public/logo-black.png';
import logoPink from '../../../public/logo-pink.png';

const barlow = Barlow({ subsets: ['vietnamese'], weight: ['400', '500'] });

const menu = [
  { title: 'Cặp đôi', link: '#timeline' },
  { title: 'Album cưới', link: '#album' },
  { title: 'Lời chúc', link: '#note' },
];
export const Header: FC = () => {
  return (
    <>
      {/* Desktop */}
      <div
        className={`flex flex-col items-center space-y-10 ${barlow.className} z-20 md:hidden`}
      >
        <Image src={logo} alt='Logo' className='w-[350px]' />
        <div className='flex'>
          {menu.map((item) => (
            <div
              key={item.link}
              className='border-r-2 border-gray-border text-gray-text px-8 font-light tracking-[3px]'
            >
              <a href={item.link}>{item.title}</a>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <nav
        className={`bg-white border-gray-200  transition-all w-full md:block hidden ${barlow.className}`}
        id='mobile-navbar'
      >
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Image src={logoPink} className='w-[60%] mt-[4rem]' alt='Logo' />
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 mt-[3rem] h-10 justify-center text-sm text-pastel-pink rounded-lg focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={() => {
              document
                .getElementById('navbar-default')
                ?.classList.toggle('hidden');
              document
                .getElementById('banner-text')
                ?.classList.toggle('translate-y-[4rem]');
            }}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          <div className='hidden w-full' id='navbar-default'>
            <ul className='font-medium flex flex-col mt-4'>
              {menu.map((item, index) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    className={`block py-2 pl-3 pr-4 text-pastel-pink border-b-[${
                      index === menu.length - 1 ? 0 : 1
                    }px] border-gray-50 w-full font-light`}
                    aria-current='page'
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
