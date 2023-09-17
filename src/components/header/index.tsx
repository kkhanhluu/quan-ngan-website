'use client';

import { Barlow } from 'next/font/google';
import Image from 'next/image';
import { FC } from 'react';
import logo from '../../../public/logo.png';

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
        <Image src={logo} alt='Logo' />
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
        className={`bg-white border-gray-200 dark:bg-gray-900 max-h-[72px] transition-all w-full ${barlow.className}`}
        id='mobile-navbar'
      >
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a href='https://flowbite.com/' className='flex items-center'>
            <Image src={logo} className='w-[10rem]' alt='Logo' />
            {/* <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8 mr-3'
              alt='Flowbite Logo'
            /> */}
          </a>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-pastel-pink rounded-lg focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={() => {
              document
                .getElementById('navbar-default')
                ?.classList.toggle('opacity-0');
              document
                .getElementById('mobile-navbar')
                ?.classList.toggle('max-h-[72px]');
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
          <div className='opacity-0 w-full' id='navbar-default'>
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
