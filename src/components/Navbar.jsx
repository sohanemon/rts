'use client';

import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '~/lib/utils';
import Motion from './motion';
import Brand from './ui/brand';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className='container absolute inset-x-0 top-0 z-10 py-6'>
      <nav className='flex items-center justify-between '>
        <Brand className={'max-sm:hidden self-start'} />
        <NavContent />
        {!isMenuOpen && (
          <Image
            src={'/img/menu.svg'}
            alt='open menu'
            width={30}
            height={30}
            onClick={() => setIsMenuOpen(true)}
            className='cursor-pointer lg:hidden ml-auto text-foreground'
          />
        )}
      </nav>
      <AnimatePresence>
        {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>
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
              'hover:bg-secondary hover:h-auto h-min transition-all duration-300  rounded-md group/rts relative z-50':
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
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Motion
        initial='up'
        exit='up'
        className='fixed bg-primary overflow-y-auto list-none p-7 inset-0 flex flex-col lg:hidden'
      >
        <Image
          src={'/img/x.svg'}
          alt='open menu'
          width={23}
          height={23}
          onClick={() => {
            setIsMenuOpen(false);
            setIsExpanded(false);
          }}
          className='cursor-pointer lg:hidden mb-12 mt-1 ml-auto text-foreground'
        />
        {nav.map((_) => (
          <li
            onClick={() =>
              _.href !== '/rts-solutions'
                ? setIsMenuOpen(false)
                : setIsExpanded((p) => !p)
            }
            key={_.name}
          >
            <h3 className='capitalize text-2xl font-bold text-secondary hover:text-white leading-loose text-center '>
              <Link href={_.href}>{_.name}</Link>
            </h3>
            {_.href === '/rts-solutions' &&
              isExpanded &&
              rtsSolutionPageLinks.map((link, idx) => (
                <Motion
                  initial={{ y: -30, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.05 * idx },
                  }}
                  key={link.label}
                  always
                  className='  border-b last:border-b-0'
                >
                  <Link
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsExpanded(false);
                    }}
                    href={
                      '/rts-solutions/' +
                      link.label.toLocaleLowerCase().replaceAll(' ', '-')
                    }
                    className='w-[119px] hover:text-white mx-auto block py-5 text-center text-secondary text-base'
                  >
                    Low Carbon Footprint Monofilament
                  </Link>
                </Motion>
              ))}
          </li>
        ))}
      </Motion>
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
