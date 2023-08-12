import Image from 'next/image';
import { cn } from '~/lib/utils';
export default function Section({ className, image, extra, ...props }) {
  return (
    <section
      className={cn(
        'container py-20 md:py-32 items-center grid-cols-1 gap-10 font-roc grid lg:grid-cols-2',
        className,
        {}
      )}
      {...props}
    >
      <Image
        src={image}
        alt=''
        className='w-full h-[420px] object-cover'
        width={600}
        height={500}
      />
      <div className='md:text-[28px] text-[22px]'>{extra}</div>
    </section>
  );
}
