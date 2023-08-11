import Image from 'next/image';
import { cn } from '~/lib/utils';

export default function Quote({ className, ...props }) {
  return (
    <section className='relative w-full bg-secondary'>
      <div
        className={cn(
          'w-full relative bg-theme-dark gap-16 lg:container lg:px-32  flex max-lg:flex-col lg:grid-cols-2 items-center text-white ',
          className,
          {}
        )}
        {...props}
      >
        <div className='relative max-lg:container max-lg:py-8 max-lg:order-last'>
          <Image
            className='max-sm:scale-[80%] -translate-x-8 mb-8 lg:mb-16'
            width={68}
            height={230}
            src='/img/quote_mark.svg'
            alt='quote mark'
          />
          <div className='max-w-xl text-xl lg:text-3xl'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </div>
          <div className='text-white mt-10 text-right text-[28px] font-bold leading-[48px]'>
            - Shawn
          </div>
        </div>
        <Image src={`/img/shawn.png`} alt='' width={600} height={600} />
      </div>
    </section>
  );
}
