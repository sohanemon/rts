import Image from 'next/image';
import Banner from '~/components/ui/Banner';
import { cn } from '~/lib/utils';

export default function Hero({ className, ...props }) {
  return (
    <section className={cn('relative bg-white', className, {})} {...props}>
      <Image
        src={`https://s3-alpha-sig.figma.com/img/b1b6/3eed/8f701497828a766874f209c12a103fdd?Expires=1692576000&Signature=YnknYHy~FHICcjv8~3ECblMbSIp7BL680cJaD15E5saIz5HKlWOxLMAFN2DoZV8SvU1kJMo5-jLDPjbPlVlvs1~Jjffbmi6jAJY0s9fFpgh4byOndAlFVJwtlE3rfaF1js84BDFlFHBXCwQ3CGxVwtI4kUNbWlbhrn2TV17C55WQ9xKVUzLmdlMkuTu5DvpyLGp3ZNpbeKeKpytAs4VrBAL0TVoxf9i3VbPgSYl0XQwww5heH2Ll60g6U5u9NPA3QB0KYpFLnn6yfXEOyFYcKT1YQmC6DwhCTafLz9rFX5eYgixeP-EmnpoC~8PYVOgY~3ODfy~nmwNnaiApfe-w5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
        alt=''
        className='hero md:translate-x-1/4 2xl:translate-x-32 translate-x-20 md:object-contain object-center'
        width={1400}
        height={900}
      />
      <div className='bg-gradient-to-t absolute inset-0  from-black/10  via-transparent via-80% to-black/30' />
      <Banner
        caption={
          <>
            RTS Solutions to <br /> # Embracing a mono-material approach
          </>
        }
        label={['Monofilament', 'with Improved', 'Recyclability']}
        text={
          'Mono-material design enhances the efficiency of products entering the circular recycling system.'
        }
      />
    </section>
  );
}
