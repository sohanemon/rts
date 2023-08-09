import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Quote({ className, ...props }) {
  return (
    <section className='w-full bg-secondary'>
      <div
        className={cn(
          'w-full h-[25rem] bg-theme-dark container lg:px-32 flex items-center text-white relative ',
          className,
          {}
        )}
        {...props}
      >
        <div className='relative '>
          <Image
            className=''
            width={68}
            height={230}
            src='/img/quote_mark.svg'
            alt='quote mark'
          />
          <div className='max-w-xl text-3xl'>
            The RTS approach features low resource consumption and minimized
            environmental impact among efforts pursuing sustainability in the
            textile industry.
          </div>
        </div>
      </div>
    </section>
  );
}
