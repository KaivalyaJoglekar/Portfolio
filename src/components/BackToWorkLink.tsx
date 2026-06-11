'use client';

import Link from 'next/link';

export const BackToWorkLink = () => {
  const handleClick = () => {
    window.sessionStorage.setItem('returnSection', 'work');
  };

  return (
    <Link
      href="/#work"
      onClick={handleClick}
      className="inline-flex items-center gap-3 mt-8 px-5 py-3 border border-neutral-800 text-sm tracking-[0.14em] uppercase text-neutral-300 hover:border-[#d4a574] hover:text-[#d4a574] transition-colors"
    >
      Back To Selected Work
      <span>↩</span>
    </Link>
  );
};
