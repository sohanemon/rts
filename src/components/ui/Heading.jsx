'use client';
import Image from 'next/image';
import { cn } from '~/lib/utils';

export default function Heading({ className, reversed, ...props }) {
  return (
    <section className={cn('relative h-fit', className, {})} {...props}>
      <Image
        src={`/img/heading-bg.svg`}
        alt=''
        width={1024}
        height={720}
        className={cn('w-full h-full min-h-[18.75rem] object-cover', {
          'scale-x-[-1]': reversed,
        })}
      />
      <p className='max-sm:text-ellipsis text-[2.875rem] font-extrabold translate-y-8 md:translate-y-12 tracking-wider absolute inset-0 grid place-content-center leading-[3.5rem]'>
        {props.children}
      </p>
    </section>
  );
}
