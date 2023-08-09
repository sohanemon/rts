import Link from 'next/link';
import Brand from './ui/brand';

export function Navbar() {
  return (
    <div className='container absolute top-0 z-10 flex flex-row items-center justify-between py-10'>
      <Brand />{' '}
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
