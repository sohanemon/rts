import Image from 'next/image';
import Button from './ui/Button';

export default function Footer() {
  return (
    <>
      <div className='min-h-[340px] md:px-32 bg-secondary flex gap-10 flex-col justify-center items-center'>
        <p className='text-white md:text-5xl max-w-screen-md text-center text-2xl font-medium leading-[30px]'>
          Join RTS to strive together for textile circularity and beyond?
        </p>
        <Button>Join Us</Button>
      </div>
      <section className='bg-primary'>
        <footer className='container flex items-center justify-between w-full gap-24 py-20 md:px-14 max-md:flex-col '>
          <div>
            <Image
              width={241}
              height={96}
              src='/img/rts_logo_light.svg'
              alt='RTS LOGO'
            />
          </div>
          <div className='flex flex-col text-dark gap-y-1 md:gap-y-8 max-md:text-center'>
            <a className='text-xl font-bold leading-6'>
              info@retain2sustain.com
            </a>
            <p className='text-base font-medium leading-6 max-md:mt-6'>
              <span>7TH FL., 186 NANKING E. RD., SEC. 4,</span>
              <span>SONGSHAN DIST., TAIPEI 10595, TAIWAN</span>
            </p>
            <p className='text-base font-medium leading-6'>
              <a>TEL 886-2-25786188</a>
              <a>FAX 886-2-25796388</a>
            </p>
            <p className='text-base font-medium leading-6 max-md:mt-6'>
              Copyright © 2023 RTS. All Rights Reserved.
            </p>
          </div>
        </footer>
      </section>
    </>
  );
}
