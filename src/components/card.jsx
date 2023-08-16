'use client';
import Image from 'next/image';
import { cn } from '~/lib/utils';
import Motion from './motion';

export default function Card({ dark, white, data, className, noStripe }) {
  return (
    <Motion
      initial='down'
      className={cn(
        'max-w-lg px-4 overflow-hidden w-full  rounded-lg shrink-0 bg-zinc-100',
        { 'bg-secondary': dark, 'bg-white': white },
        className
      )}
    >
      <Image
        className={cn(
          'object-cover w-full scale-x-110 h-80 border-b-[10px] border-primary',
          { 'border-0': noStripe }
        )}
        src={
          data?.banner_image?.data?.attributes?.formats?.thumbnail?.url ||
          `https://s3-alpha-sig.figma.com/img/6eff/e5a0/1aba9801ef9fe412ac0b3045d0119c77?Expires=1692576000&Signature=TO8nI8I5oxySe0p~gfWtLo6-9Sigw6xv8CsRcpflA9HY97gTbZwu2pz6A9oY3edDqiOpB2tc5WYB~RhQ-3Le6rya-3RT50VOD6kQ~VTEqNJ0lYymLhRyeeAnnESRK5aizq1WLrdtdMPRqGRz-0xZKNxxSIiWV5uKdbE7c-9GHl9ePhjM6T6LfwQf6CP~5U36niym8IEjx9FAycQlOcZR1GUEos2ozoeQQaRiaKmhCHxjn8QUD-45FjS9oP-1XMyHC3B46I7IotzDhxSx0WpboYwOmmjLh2UQTGkNx3ix72l8Y211evDqqilQQw5Fk5ljz-NMl1iwamjEXUJv97b1cw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`
        }
        alt=''
        width={100}
        height={100}
      />
      <div className='p-4 md:p-8'>
        <h4 className='font-semibold font-roc text-primary'>
          #RTS Solutions #Micro Plastic
        </h4>
        <h2
          className={cn(
            'text-2xl font-bold pt-3 pb-2 font-roc leading-[30px]',
            {
              'text-white': dark,
            }
          )}
        >
          {data?.title || 'The Truth About Microplastics in Textiles'}
        </h2>
        <p
          className={cn('font-medium text-opacity-80', { 'text-white': dark })}
        >
          {data?.abstract || (
            <>
              {' '}
              35% of microplastics found in the ocean come from synthetic
              fibers. These synthetic fibers are sometimes referred to as
              filaments and categorized into monofilament yarn or multifilament
              yarns. Their application is versatile and vast, from footwear to
              outdoor products, the lining in automobiles, consumer goods, and
              more. Though handy, however, microplastics are released during the
              textile manufacturing process and during use.
            </>
          )}
        </p>
        {data?.article_date && (
          <p className='mt-6 text-neutral-400 text-sm font-bold'>
            {data?.article_date}
          </p>
        )}
      </div>
    </Motion>
  );
}
