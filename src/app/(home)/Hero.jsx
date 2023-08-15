import Image from 'next/image';
import ParallaxHero from '~/components/parallax-hero';
import GreenLine from '~/components/ui/GreenLine';

export function Hero() {
  return (
    <div className='relative flex flex-col overflow-hidden items-center w-full text-center text-white gap-y-6 co'>
      <ParallaxHero className={'w-full'}>
        <Image
          width={1409}
          height={888}
          className='hero'
          src='/bg.gif'
          alt='RTS Logo Dark'
        />
      </ParallaxHero>
      <div className='absolute inset-0 flex flex-col items-center justify-center '>
        <Image
          width={409}
          height={161}
          src='/img/rts_logo_dark.svg'
          className=' max-sm:scale-[80%]'
          alt='RTS Logo Dark'
        />
        <h2 className='text-2xl lg:text-[2.75rem] max-w-4xl mt-12 font-bold leading-[46px] drop-shadow-md'>
          A Comprehensive Closed-loop Approach to Sustainability & Circular
          Economy
        </h2>
      </div>
      <GreenLine className={'bottom-0'} />
    </div>
  );
}
