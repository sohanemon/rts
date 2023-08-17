import Image from 'next/image';
import { useRef } from 'react';
import useScrollTransform from '~/hook/scroll-transform';
import { cn } from '~/lib/utils';
import Motion from '../motion';

export default function GreenLine({ className }) {
  const target = useRef(null);
  const y = useScrollTransform({
    target,
    outputRange: [0, 500],
    offset: ['start end', 'end end'],
  });
  return (
    <Motion style={{ y, zIndex: 5 }} className='absolute inset-x-0'>
      <Image
        src={`/img/green-line.svg`}
        className={cn('h-auto w-full  object-cover ', className, {})}
        alt=''
        width={1444}
        height={370}
      />
    </Motion>
  );
}
