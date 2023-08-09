import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='flex items-center justify-between w-full gap-24 py-20 md:px-14 max-md:flex-col bg-theme bg-primary'>
      <div>
        <Image
          width={241}
          height={96}
          src='/img/rts_logo_light.svg'
          alt='RTS LOGO'
        />
      </div>
      <div className='flex flex-col text-dark gap-y-1 md:gap-y-8 max-md:text-center'>
        <a className='text-xl font-bold leading-6'>info@retain2sustain.com</a>
        <p className='text-base font-medium leading-6 max-md:mt-6'>
          <p>7TH FL., 186 NANKING E. RD., SEC. 4,</p>
          <p>SONGSHAN DIST., TAIPEI 10595, TAIWAN</p>
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
  );
}
