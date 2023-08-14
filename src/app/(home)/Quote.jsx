'use client';
import Image from 'next/image';
import Motion from '~/components/motion';
import GreenLine from '~/components/ui/GreenLine';
import useScrollTransform from '~/hook/scroll-transform';
import { cn } from '~/lib/utils';

export default function Quote({ className, ...props }) {
  const { target, motionValue: x } = useScrollTransform({
    outputRange: [400, 0],
  });
  return (
    <section ref={target} className='relative w-full bg-secondary'>
      <div
        className={cn(
          'w-full h-[25rem] relative bg-theme-dark container lg:px-32 flex items-center text-white ',
          className,
          {}
        )}
        {...props}
      >
        <GreenLine className={'bottom-0'} />
        <Motion asChild style={{ x }}>
          <div className='relative '>
            <Image
              className='max-sm:scale-[80%]'
              width={68}
              height={230}
              src='/img/quote_mark.svg'
              alt='quote mark'
            />
            <div className='max-w-xl text-xl lg:text-3xl'>
              The RTS approach features low resource consumption and minimized
              environmental impact among efforts pursuing sustainability in the
              textile industry.
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
