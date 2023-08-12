import Image from 'next/image';
import Banner from '~/components/ui/Banner';
import { cn } from '~/lib/utils';

export default function Hero({ className, ...props }) {
  return (
    <section className={cn('relative ', className, {})} {...props}>
      <Image
        src={`https://s3-alpha-sig.figma.com/img/921c/b197/e70dfd968ac6046397d5b399671567d8?Expires=1692576000&Signature=nCUy8sTF8U0ZWjTuZDP7dnZmgY-c~gdAK5Sb4IreRk~mtmfmgPIHtxeGl3RFICXEx41g-f7ytgxhv8DKCYItLY5D5qU59CDohW5evXwikjtNnZi-CAfCOM98~UgA3C2Lg~cuyZemv15APsqJqIcXbGtjDujB69onKjYvldC19ZR0Az~8OxY2WL4JIcV6n~UcY66y991chT2VTjQuSONLY3beIevVw11AZw79mPLPpQItJXjWHuB-hxxtu3TeVqQ9W~1NGm6cqz-fj0VKUT4fjgBaKl6udkEIr43lMuD-KKOq4ylzcmHSfXfuehltRudRIJnYAyrUuiSjH4kb6K6yYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
        alt=''
        className='hero'
        width={1400}
        height={900}
      />
      <Banner
        dark
        caption={
          <>
            RTS Solutions to <br /> # Llightweighting
          </>
        }
        label={[
          'Bringing monofilament',
          'with a smaller carbon',
          'footprint to the market.',
        ]}
        text={
          'Lightweighting hollow monofilament, enhancing energy efficiency, and reducing greenhouse gas emissions and carbon footprint.'
        }
      />
    </section>
  );
}
