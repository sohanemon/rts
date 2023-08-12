import Image from 'next/image';
import Link from 'next/link';
import GreenDiv from '~/components/GreenDiv';
import { cn } from '~/lib/utils';

export default function CardSection({ className, ...props }) {
  return (
    <section className='relative py-16 lg:py-32'>
      <GreenDiv className={'absolute inset-0 m-auto -z-10'} />
      <div
        className={cn(
          'grid container gap-10 grid-cols-1 lg:grid-cols-2',
          className,
          {}
        )}
        {...props}
      >
        {data.map((item) => (
          <Link
            href={
              '/rts-solutions/' +
              item.label.toLocaleLowerCase().replaceAll(' ', '-')
            }
            key={item.label}
            className='block group active:scale-95 transition-all '
          >
            <div className='relative overflow-hidden'>
              <Image
                src={`https://www.figma.com/file/pdMmQA7oofF140rRjcwhKW/image/652e3227a8976a0d48f20e01b997fdce5ec9a237`}
                alt=''
                className='group-hover:scale-125 scale-110 transition-all w-full h-full duration-1000 ease-out'
                width={600}
                height={360}
              />{' '}
              <div className='absolute inset-0 grid px-12 m-auto bg-black/40 place-content-center'>
                <p className='text-center font-roc text-primary text-[34px] font-medium leading-[38px]'>
                  {item.label}
                </p>
              </div>
            </div>
            <div className='py-5 bg-secondary'>
              <p className='text-lg font-normal tracking-tight text-center text-white font-roc'>
                {item.caption}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
const data = [
  {
    label: 'Low Carbon Footprint Monofilament',
    caption: (
      <>
        RTS Solutions to <br /> # Lightweighting
      </>
    ),
  },
  {
    label: 'Monofilament with Greater Inclusivity',
    caption: (
      <>
        RTS Solutions to <br /> # Addressing the current challenges in textile
        recycling.
      </>
    ),
  },
  {
    label: 'Monofilament with Improved Recyclability',
    caption: (
      <>
        RTS Solutions to <br /> # Embracing a mono-material approach
      </>
    ),
  },
  {
    label: 'Monofilament with More Durable, Low Shedding',
    caption: (
      <>
        RTS Solutions to <br /> # Microfiber Shedding
      </>
    ),
  },
];
