import Image from 'next/image';

export function Hero() {
  return (
    <div className='relative flex flex-col items-center w-full text-center text-white gap-y-6 co'>
      <Image
        width={1409}
        height={888}
        className='object-cover w-full max-h-[888px]'
        src='/img/rts_banner.jpg'
        alt='RTS Logo Dark'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center '>
        <Image
          width={409}
          height={161}
          src='/img/rts_logo_dark.svg'
          className=''
          alt='RTS Logo Dark'
        />
        <h2 className='text-2xl lg:text-[2.75rem] max-w-4xl mt-12 font-bold leading-[46px] drop-shadow-md'>
          A Comprehensive Closed-loop Approach to Sustainability & Circular
          Economy
        </h2>
      </div>
    </div>
  );
}
