import { cn } from '~/lib/utils';

export default function Card({ className }) {
  return (
    <section
      className={cn(
        'bg-primary relative z-10 mx-4 p-5 md:p-12 max-w-xl',
        {},
        className
      )}
    >
      <p className='text-white text-7xl font-extrabold font-roc text-right leading-[56px]'>
        1.
      </p>
      <p className='text-lg font-semibold tracking-widest text-black'>
        RTS Solutions to
        <br />
        #LIGHTWEIGHTING
      </p>
      <h3 className='text-white mt-10 mb-5 text-3xl md:text-[50px] font-semibold tracking-wider leading-tight'>
        Low Carbon Footprint Monofilament
      </h3>
      <p className='text-sm leading-relaxed md:text-lg'>
        Lightweighting hollow monofilament, enhancing energy efficiency, and
        reducing greenhouse gas emissions and carbon footprint.
      </p>
    </section>
  );
}
