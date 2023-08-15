import Image from 'next/image';
import ParallaxHero from '~/components/parallax-hero';
import GreenLine from '~/components/ui/GreenLine';

export function Hero() {
  return (
    <div className='relative flex flex-col overflow-hidden items-center w-full text-center text-white gap-y-6 co'>
      <ParallaxHero className={'w-full'}>
        <video
          className='hero w-full min-h-[500px]'
          autoPlay
          muted
          poster='https://s3-figma-videos-production-sig.figma.com/video/1194573512930976251/TEAM/3b1e/f521/-ff1b-4977-ac7e-f1dd3821b618?Expires=1693180800&Signature=ViTVsm4jcujjsRdkoGQq5ixXPw9AawjvRbjG4KUISsQTJ0qiIVgIsAPEf01hDoPcVAdpGvy3E56YU8LHcyVVuIA-4Nw4ZyNzrE-we-WHPavBlqu3ankwrXwaTHIZCTaD3L0D5JEPfB~nwVVWxat2O7Dude2aFILaASM-5XtfoEttrVpq5Ob844Exh3rVszuPEg5lcnqlZ4VVtjN9PDNFLaoW0ogkU0BDCMB-FGdNvcgCh2jo9KScotslUNl6Oy75HW0jNKNVoVbzRwsbGFSDWNks0APr9hOQzuafThwg0lRjQFn1bI~Fi40xdl-lmmBWBYQevBQ1hYbS9M-I8eFHVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          loop
          src='/bg.mp4'
        ></video>
        {/* <Image
          width={1409}
          height={888}
          className='hero'
          src='/bg.gif'
          alt='RTS Logo Dark'
        /> */}
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
