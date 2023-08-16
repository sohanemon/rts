'use client';
import Image from 'next/image';
import Card from './Card';
import { Hero } from './Hero';
import Quote from './Quote';
import LatestArticle from './LatestArticle';
import Motion from '~/components/motion';
import { useRef } from 'react';
import useScrollTransform from '~/hook/scroll-transform';

export default function HomePage() {
  const target = useRef(null);
  const y = useScrollTransform({
    target,
    inputRange: [0.3, 1],
    outputRange: ['0%', '-200%'],
  });

  return (
    <main ref={target} className='flex flex-col items-center justify-between'>
      <Hero />
      <Quote />
      <div className='relative flex items-center md:-space-x-4 max-md:flex-col'>
        <Motion>
          <Card
            {...data[0]}
            primary
            className='-translate-y-16 md:-translate-y-10 max-md:absolute'
          />
        </Motion>
        <Motion style={{ y }}>
          <Image
            src={
              'https://s3-alpha-sig.figma.com/img/921c/b197/e70dfd968ac6046397d5b399671567d8?Expires=1692576000&Signature=nCUy8sTF8U0ZWjTuZDP7dnZmgY-c~gdAK5Sb4IreRk~mtmfmgPIHtxeGl3RFICXEx41g-f7ytgxhv8DKCYItLY5D5qU59CDohW5evXwikjtNnZi-CAfCOM98~UgA3C2Lg~cuyZemv15APsqJqIcXbGtjDujB69onKjYvldC19ZR0Az~8OxY2WL4JIcV6n~UcY66y991chT2VTjQuSONLY3beIevVw11AZw79mPLPpQItJXjWHuB-hxxtu3TeVqQ9W~1NGm6cqz-fj0VKUT4fjgBaKl6udkEIr43lMuD-KKOq4ylzcmHSfXfuehltRudRIJnYAyrUuiSjH4kb6K6yYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            }
            alt=''
            className='h-[600px] md:h-[440px]'
            width={800}
            height={600}
          />
        </Motion>
      </div>
      <br />
      <div className='relative flex items-center md:-space-x-4 max-md:flex-col'>
        <Motion>
          <Card
            {...data[1]}
            transparent
            className='-translate-y-16 md:-translate-y-0 max-md:absolute'
          />
        </Motion>
        <Motion style={{ y }}>
          <Image
            src={
              'https://www.figma.com/file/0gR1eB3Ktwe2PgOTFSdY7K/image/95156f6fc4bc4cfc4aa75813c21cf3f547f0adce'
            }
            alt=''
            className='h-[600px] '
            width={800}
            height={600}
          />
        </Motion>
      </div>
      <br />
      <div className='relative flex items-center md:-space-x-4 max-md:flex-col'>
        <Motion>
          <Image
            src={
              'https://s3-alpha-sig.figma.com/img/b1b6/3eed/8f701497828a766874f209c12a103fdd?Expires=1692576000&Signature=YnknYHy~FHICcjv8~3ECblMbSIp7BL680cJaD15E5saIz5HKlWOxLMAFN2DoZV8SvU1kJMo5-jLDPjbPlVlvs1~Jjffbmi6jAJY0s9fFpgh4byOndAlFVJwtlE3rfaF1js84BDFlFHBXCwQ3CGxVwtI4kUNbWlbhrn2TV17C55WQ9xKVUzLmdlMkuTu5DvpyLGp3ZNpbeKeKpytAs4VrBAL0TVoxf9i3VbPgSYl0XQwww5heH2Ll60g6U5u9NPA3QB0KYpFLnn6yfXEOyFYcKT1YQmC6DwhCTafLz9rFX5eYgixeP-EmnpoC~8PYVOgY~3ODfy~nmwNnaiApfe-w5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            }
            alt=''
            className='h-[600px] md:h-[440px] object-cover scale-x-[-1]'
            width={800}
            height={600}
          />
        </Motion>
        <Motion style={{ y }}>
          <Card
            {...data[2]}
            secondary
            className='-translate-y-16 md:-translate-y-0 max-md:absolute'
          />
        </Motion>
      </div>
      <br />
      <div className='relative flex items-center md:-space-x-4 max-md:flex-col'>
        <Motion>
          <Card
            {...data[3]}
            transparent
            className='-translate-y-16 md:-translate-y-0 max-md:absolute'
          />
        </Motion>
        <Motion style={{ y }}>
          <Image
            src={
              'https://s3-alpha-sig.figma.com/img/52e6/8f4c/e57ee5a45cd024cbe0ad734a452a2358?Expires=1692576000&Signature=TixtdTNMUUI89HQUPt97DOnlxFHf~0h1s8Ky6R3yZBNhqKVz9~qytcyFBmquBds5Ju1JLjOJm5gPmkO2eHtVLAtwxTrN~EpyRoD6jEA6c8YqAGy1UVJZ5TVidOUO7Qfbx4Gou0qaQ2JzM--KKyHVVitjgqVw4vDT34DwUisU~qwoi66EL3WKRnuFD1eMmafyh4Ha-AntPJV83XpmlkXUrmAb0UYz2XLcBNR-9jjCDrS-~au5444D~H4yCXljVBJQujWNY3GpycbWaDXZ7UcQg~8XIdPf1-XTvVkYTy22w3zVHlW~V-HuFlC1EkcdVfgkFA5Oqnq6v-v5ic-aBdNeCA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            }
            alt=''
            className='h-[600px] '
            width={800}
            height={600}
          />
        </Motion>
      </div>
      <br />
      <LatestArticle />
    </main>
  );
}

const data = [
  {
    idx: 1,
    label: 'Low Carbon Footprint Monofilament',
    caption: 'RTS Solutions to #LIGHTWEIGHTING',
    text: 'Lightweighting hollow monofilament, enhancing energy efficiency, and reducing greenhouse gas emissions and carbon footprint.',
  },
  {
    idx: 2,
    label: 'Monofilament with Greater Inclusivity ',
    caption:
      'RTS Solutions to #Addressing the current challenges in textile recycling.',
    text: 'Mono-material design enhances product recyclability.',
  },
  {
    idx: 3,
    label: 'Monofilament with Improved Recyclability ',
    caption: 'RTS Solutions to #Embracing a mono-material approach',
    text: 'Mono-material design enhances product recyclability.',
  },
  {
    idx: 4,
    label: 'Monofilament with More Durable, Low Shedding',
    caption: 'RTS Solutions to #Microfiber Shedding',
    text: 'Combating Microfiber Shedding, introducing a new high-quality single strand, strong and delicate.',
  },
];
