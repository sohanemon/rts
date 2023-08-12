import Image from 'next/image';
import Link from 'next/link';
import { cn } from '~/lib/utils';

export default function Brand({ className, light, primary, ...props }) {
  return (
    <Link href={'/'} {...props} className={cn('', {}, className)}>
      <Image
        width={185}
        height={52}
        src={`/img/rts_logo_${
          light ? 'light' : primary ? 'dark' : 'dark_notext'
        }.svg`}
        alt='RTS Logo'
      />
    </Link>
  );
}
