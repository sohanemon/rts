import Image from 'next/image';
import { cn } from '~/lib/utils';

export default function Heading({ className, ...props }) {
  return (
    <section className={cn('relative', className, {})} {...props}>
      <Image src={`/img/heading-bg.png`} alt='' width={1024} height={120} />
    </section>
  );
}
