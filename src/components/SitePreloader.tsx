'use client';

import { useState } from 'react';
import { MainRoutePreloader } from '@/components/MainRoutePreloader';

export const SitePreloader = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return <MainRoutePreloader onComplete={() => setVisible(false)} />;
};
