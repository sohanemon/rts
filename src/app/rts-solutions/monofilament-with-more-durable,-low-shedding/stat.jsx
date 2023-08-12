import { cn } from '~/lib/utils';
export default function Stat({ className, ...props }) {
  return (
    <section className='bg-zinc-100'>
      <div className={cn('container', className, {})} {...props}>
        <div className='w-[334px] text-center leading-[42px]'>
          <span className='text-[32px] font-bold '>
            Microfiber shedding rate detection
            <br />
          </span>
          <span className='text-2xl font-normal '>TMC method 1.1-2021</span>
        </div>
      </div>
    </section>
  );
}
