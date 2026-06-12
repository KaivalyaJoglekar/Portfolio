'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MainRoutePreloader } from '@/components/MainRoutePreloader';

export const SitePreloader = () => {
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const [initialPathname] = useState(pathname);

  if (!visible || pathname !== '/' || initialPathname !== '/') return null;

  return <MainRoutePreloader onComplete={() => setVisible(false)} />;
};
