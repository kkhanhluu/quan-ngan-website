import { AOSInit } from '@/app/AOS';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quân & Ngân',
  description: 'Đám cưới của Quân & Ngân',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
