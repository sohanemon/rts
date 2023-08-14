import Image from 'next/image';
import Motion from '~/components/motion';
import Banner from '~/components/ui/Banner';
import { cn } from '~/lib/utils';

export default function Hero({ className, ...props }) {
  return (
    <section className={cn('relative ', className, {})} {...props}>
      <Motion>
        <Image
          src={`https://www.figma.com/file/pdMmQA7oofF140rRjcwhKW/image/820fdc66e2f2517bb1e55fa250e06175c0d09712?fuid=1054711048882236085`}
          alt=''
          className='hero clipped'
          width={1400}
          height={900}
        />
      </Motion>
      <Banner label={['Issues']} />
    </section>
  );
}
