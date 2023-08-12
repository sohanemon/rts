import Image from 'next/image';
import { Fragment } from 'react';
import { cn } from '~/lib/utils';
export default function Article({ className, image, text, overlay, ...props }) {
  const Comp = overlay ? 'div' : Fragment;
  return (
    <Comp className='overlay'>
      <section className={cn('h-[420px] relative', className, {})} {...props}>
        <Image
          src={image}
          alt=''
          width={1440}
          className='w-full h-full object-cover'
          height={500}
        />
        <div className='text-white absolute z-10 inset-0 container text-2xl lg:text-4xl m-auto grid place-content-center lg:leading-[48px]'>
          <p className='lg:w-1/2'>{text}</p>
        </div>
      </section>
    </Comp>
  );
}
