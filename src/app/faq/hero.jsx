import Image from 'next/image';
import Motion from '~/components/motion';
import Banner from '~/components/ui/Banner';
import { cn } from '~/lib/utils';

export default function Hero({ className, ...props }) {
  return (
    <section className={cn('relative ', className, {})} {...props}>
      <Motion>
        <Image
          src={`https://www.figma.com/file/pdMmQA7oofF140rRjcwhKW/image/5e08281d0aab96cae010e0ad7554391d80bd5daf?fuid=1054711048882236085`}
          alt=''
          className='hero'
          width={1400}
          height={900}
        />
      </Motion>
      <Banner label={['FAQ']} />
    </section>
  );
}
