'use client';

import AOS from 'aos';
import { FC, useEffect } from 'react';

export const AOSInit: FC = () => {
  useEffect(() => {
    AOS.init({ once: false, offset: 120, startEvent: 'load' });
  });
  return null;
};
