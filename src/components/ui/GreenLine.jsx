import Image from 'next/image';
import { cn } from '~/lib/utils';

export default function GreenLine({ className }) {
  return (
    <Image
      src={`/img/green-line.svg`}
      className={cn(
        'h-auto w-full z-10 object-cover absolute inset-x-0',
        className,
        {}
      )}
      alt=''
      width={1444}
      height={370}
    />
  );
}
