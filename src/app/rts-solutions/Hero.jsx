import Image from 'next/image';
import Banner from '~/components/ui/Banner';
import { cn } from '~/lib/utils';

export default function Hero({ className, ...props }) {
  return (
    <section className={cn('relative ', className, {})} {...props}>
      <Image
        src={`https://www.figma.com/file/pdMmQA7oofF140rRjcwhKW/image/b6e60b34d8841a28cb225747a75df1624a290caa`}
        alt=''
        className='hero [clip-path:_polygon(100%_0,_100%_100%,_83%_98%,_71%_96%,_59%_93%,_45%_89%,_31%_84%,_15%_77%,_0_69%,_0_0);]'
        width={1400}
        height={900}
      />
      <Banner
        light
        label={['RTS', 'Solutions']}
        text={'Leading everyone towards a sustainable future.'}
      />
    </section>
  );
}
