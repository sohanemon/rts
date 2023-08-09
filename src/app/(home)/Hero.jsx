import Image from 'next/image';

export function Hero() {
  return (
    <div className='relative w-full h-screen text-white bg-fixed bg-center bg-no-repeat bg-cover bg-rts-banner'>
      <div className='relative flex flex-col items-center w-full text-center gap-y-6'>
        <Image
          width={409}
          height={161}
          src='/img/rts_logo_dark.svg'
          className='absolute inset-0 m-auto'
          alt='RTS Logo Dark'
        />
        <Image
          width={1409}
          height={888}
          className='object-cover w-full h-full'
          src='/img/rts_banner.jpg'
          alt='RTS Logo Dark'
        />
        <div className='text-[2.75rem] font-bold leading-[46px] drop-shadow-md'>
          A Comprehensive Closed-loop Approach to Sustainability & Circular
          Economy
        </div>
      </div>
    </div>
  );
}
