'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Brand from './ui/brand';
import { cn } from '~/lib/utils';
import Motion from './motion';
import { AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className='container absolute inset-x-0 top-0 z-10 py-6'>
      <nav className='flex items-center justify-between '>
        <Brand className={'max-sm:hidden self-start'} />
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
      <ul className='flex flex-row text-lg  font-medium text-white max-lg:hidden '>
        {nav.map((_) => (
          <li
            key={_.name}
            className={cn('hover:text-primary p-4', {
              'hover:bg-secondary hover:h-auto h-min transition-all duration-300  rounded-md group/rts':
                _.href === '/rts-solutions',
              'text-primary':
                _.href === '/' ? path === '/' : path.includes(_.href),
            })}
          >
            <h3 className={cn('font-bold capitalize')}>
              <Link href={_.href}>{_.name}</Link>
            </h3>
            {_.href === '/rts-solutions' && (
              <AnimatePresence mode='wait'>
                {rtsSolutionPageLinks.map((link, idx) => (
                  <Motion
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: { delay: 0.05 * idx },
                    }}
                    key={link.label}
                    always
                    className='group-hover/rts:block hidden  border-b last:border-b-0'
                  >
                    <Link
                      href={
                        '/rts-solutions/' +
                        link.label.toLocaleLowerCase().replaceAll(' ', '-')
                      }
                      className='w-[119px] hover:text-primary block py-5 text-center text-white text-base'
                    >
                      Low Carbon Footprint Monofilament
                    </Link>
                  </Motion>
                ))}
              </AnimatePresence>
            )}
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
  { name: 'Issues', href: '/issues' },
  { name: 'RTS Solutions', href: '/rts-solutions' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const rtsSolutionPageLinks = [
  {
    label: 'Low Carbon Footprint Monofilament',
  },
  {
    label: 'Monofilament with Greater Inclusivity',
  },
  {
    label: 'Monofilament with Improved Recyclability',
  },
  {
    label: 'Monofilament with More Durable, Low Shedding',
  },
];
