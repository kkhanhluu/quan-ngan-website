'use client';

import AOS from 'aos';
import { FC, useEffect } from 'react';

export const AOSInit: FC = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 120 });
  });
  return null;
};
