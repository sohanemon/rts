'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Brand from './ui/brand';
import { cn } from '~/lib/utils';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className='container absolute inset-x-0 top-0 z-10 py-10'>
      <nav className='flex items-center justify-between '>
        <Brand className={'max-sm:hidden'} />
        <NavContent />
        {!isMenuOpen ? (
          <span
            onClick={() => setIsMenuOpen(true)}
            size={36}
            className='cursor-pointer lg:hidden text-foreground'
          />
        ) : (
          <span
            onClick={() => setIsMenuOpen(false)}
            size={36}
            className='cursor-pointer lg:hidden text-foreground'
          />
        )}
      </nav>
      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
}

const NavContent = () => {
  const path = usePathname();
  return (
    <>
      <ul className='flex flex-row text-lg font-medium text-white gap-x-8 max-lg:hidden '>
        {nav.map((_) => (
          <li
            key={_.name}
            className={cn('', {
              '': _.href === '/' ? path === '/' : path.includes(_.href),
            })}
          >
            <h3 className='capitalize'>
              <Link href={_.href}>{_.name}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavContentMob = ({ setIsMenuOpen }) => {
  return (
    <>
      <ul className='absolute inset-x-0 flex flex-col items-start lg:hidden'>
        {nav.map((_) => (
          <li onClick={() => setIsMenuOpen(false)} key={_.name}>
            <h3 className='capitalize'>
              <Link href={_.href}>{_.name}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

const nav = [
  { name: 'About Retain to Sustain', href: '/about' },
  { name: 'News', href: '/news' },
  { name: 'RTS Solutions', href: '/rts-solutions' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];
