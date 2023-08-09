import Image from 'next/image';
import Button from '~/components/Button';
import { Navbar } from '~/components/Navbar';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen bg-white'>
      <div className='relative w-full h-screen text-white bg-fixed bg-center bg-no-repeat bg-cover bg-rts-banner'>
        <Navbar />
        <div className='absolute flex flex-col items-center w-full px-20 text-center top-1/3 gap-y-6'>
          <Image
            width={409}
            height={161}
            src='/img/rts_logo_dark.svg'
            alt='RTS Logo Dark'
          />
          <div className='text-[2.75rem] font-bold leading-[46px] drop-shadow-md'>
            A Comprehensive Closed-loop Approach to Sustainability & Circular
            Economy
          </div>
        </div>
      </div>
      <div className='w-full h-[25rem] bg-theme-dark text-white relative p-[120px]'>
        <div className='relative w-1/2'>
          <Image
            className='absolute left-[-70px] top-[-70px]'
            width={68}
            height={230}
            src='/img/quote_mark.svg'
            alt='quote mark'
          />
          <div className='text-3xl'>
            The RTS approach features low environmental impact of textile
            production and consumption.
          </div>
        </div>
      </div>
      <section className='flex w-full max-w-[1440px]'>
        <div className='w-[47%]'>
          <div className='w-[110%] relative left-[15%] top-[-2rem] z-10 bg-theme text-theme-dark px-10 py-12'>
            <div className='text-[80px] text-right text-white'>1.</div>
            <div className='flex flex-col gap-y-8'>
              <div className='text-xl font-medium'>
                <div className=''>RTS Solutions to</div>
                <div className=''># 輕量化</div>
              </div>
              <div className='text-5xl font-bold'>更少碳足跡的單絲</div>
              <div className='text-2xl leading-10'>
                中空單絲輕量化，提高能源利用率，降低溫室氣體排放及碳足跡
              </div>
              <div className='pt-[96px]'>
                <Button variants='primary-reverse'>Find out More</Button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[53%] py-8'>
          <Image
            src='/img/index_1.jpg'
            alt='index 1'
            width={775}
            height={541}
          />
        </div>
      </section>
      <section className='w-full bg-theme-gray p-14'>
        <div className='text-[44px] font-bold leading-[56px]'>
          Latest articles
        </div>
        <div className='flex flex-row w-full mt-6 overflow-auto gap-x-8'>
          {[...Array(5)].map((_, articleIdx) => (
            <div key={articleIdx} className='bg-white min-w-[50%]'>
              <Image
                src='/img/article_banner.jpg'
                alt='article banner'
                width={590}
                height={392}
              />
              <div className='flex flex-col p-12 gap-y-4'>
                <div className='text-base font-medium text-theme'>
                  # RTS solutions
                </div>
                <div className='text-2xl text-dark leading-[30px] font-bold'>
                  The Truth About Microplastics in Textiles
                </div>
                <div className='text-base text-dark-content leading-[30px]'>
                  35% of microplastics found in the ocean come from synthetic
                  fibers. These synthetic fibers are sometimes referred to as
                  filaments and categorized into monofilament yarn or
                  multifilament yarns. Their application is versatile and vast,
                  from footwear to outdoor products, the lining in automobiles,
                  consumer goods, and more. Though handy, however, microplastics
                  are released during the textile manufacturing process and
                  during use.
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='flex flex-col w-full px-10 py-16 bg-theme-dark gap-y-8'>
        <div className='text-6xl text-center font-medium text-white leading-[80px]'>
          Join RTS to close the loop?
        </div>
        <div className='text-center'>
          <Button variants='primary' className='px-16'>
            Join Us
          </Button>
        </div>
      </section>
      <footer className='flex flex-row justify-between w-full p-10 bg-theme text-dark'>
        <div>
          <Image
            width={241}
            height={96}
            src='/img/rts_logo_light.svg'
            alt='RTS LOGO'
          />
        </div>
        <div className='flex flex-col text-dark gap-y-8'>
          <div className='text-xl font-bold leading-6'>
            info@retain2sustain.com
          </div>
          <div className='text-base font-medium leading-6'>
            <div>7TH FL., 186 NANKING E. RD., SEC. 4,</div>
            <div>SONGSHAN DIST., TAIPEI 10595, TAIWAN</div>
          </div>
          <div className='text-base font-medium leading-6'>
            <div>TEL 886-2-25786188</div>
            <div>FAX 886-2-25796388</div>
          </div>
          <div className='text-base font-medium leading-6'>
            Copyright © 2023 RTS. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
