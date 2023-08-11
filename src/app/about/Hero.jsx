import Image from 'next/image';
import Banner from '~/components/ui/Banner';
import { cn } from '~/lib/utils';

export default function Hero({ className, ...props }) {
  return (
    <section className={cn('relative ', className, {})} {...props}>
      <Image
        src={`https://www.figma.com/file/pdMmQA7oofF140rRjcwhKW/image/32689e627c78f4f991bde6081e09ba3e153c4c51`}
        alt=''
        className='hero'
        width={1400}
        height={900}
      />
      <Banner
        light
        label={['About', 'Retain to Sustain']}
        text={
          'Enabling a more sustainable synthetic fiber industry with monofilament - low carbon footprint, minimal environmental impact.'
        }
      />
    </section>
  );
}
