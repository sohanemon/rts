import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <div className='flex flex-row items-center justify-between px-16 py-10'>
      <Link href='/'>
        <Image
          width={185}
          height={52}
          src='/img/rts_logo_dark_notext.svg'
          alt='RTS Logo'
        />
      </Link>
      <div className='flex flex-row text-lg font-medium text-white gap-x-8'>
        <Link href='#'>About Retain to Sustain</Link>
        <Link href='#'>News</Link>
        <Link href='#'>RTS Solutions</Link>
        <Link href='#'>FAQ</Link>
        <Link href='#'>Contact</Link>
      </div>
    </div>
  );
}
