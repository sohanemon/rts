import Image from 'next/image';
import Button from '~/components/Button';
import { Hero } from './Hero';
import Quote from './Quote';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Hero />
      <Quote />
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
    </main>
  );
}
