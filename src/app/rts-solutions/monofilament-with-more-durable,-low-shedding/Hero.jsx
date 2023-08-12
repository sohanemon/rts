import Image from 'next/image';
import Banner from '~/components/ui/Banner';
import { cn } from '~/lib/utils';

export default function Hero({ className, ...props }) {
  return (
    <section className={cn('relative ', className, {})} {...props}>
      <Image
        src={`https://s3-alpha-sig.figma.com/img/52e6/8f4c/e57ee5a45cd024cbe0ad734a452a2358?Expires=1692576000&Signature=TixtdTNMUUI89HQUPt97DOnlxFHf~0h1s8Ky6R3yZBNhqKVz9~qytcyFBmquBds5Ju1JLjOJm5gPmkO2eHtVLAtwxTrN~EpyRoD6jEA6c8YqAGy1UVJZ5TVidOUO7Qfbx4Gou0qaQ2JzM--KKyHVVitjgqVw4vDT34DwUisU~qwoi66EL3WKRnuFD1eMmafyh4Ha-AntPJV83XpmlkXUrmAb0UYz2XLcBNR-9jjCDrS-~au5444D~H4yCXljVBJQujWNY3GpycbWaDXZ7UcQg~8XIdPf1-XTvVkYTy22w3zVHlW~V-HuFlC1EkcdVfgkFA5Oqnq6v-v5ic-aBdNeCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
        alt=''
        className='hero'
        width={1400}
        height={900}
      />
      <Banner
        caption={
          <>
            RTS Solutions to <br /># Microfiber Shedding
          </>
        }
        label={['Monofilament', 'with More Durable,', 'Low Shedding']}
        text={
          'Combating Microfiber Shedding, introducing a new high-quality single strand, strong and delicate.'
        }
      />
    </section>
  );
}
