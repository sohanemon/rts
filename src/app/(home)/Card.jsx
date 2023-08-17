import { cn } from '~/lib/utils';
import Button from '~/components/ui/Button';

export default function Card({
  className,
  idx,
  label,
  caption,
  text,
  ...props
}) {
  return (
    <section
      className={cn(
        'bg-primary relative shrink-0 mx-4 p-5 md:p-12 max-w-xl ',
        { 'bg-white': props.transparent, 'bg-secondary': props.secondary },
        className
      )}
    >
      <p
        className={cn(
          'text-white text-7xl mb-2 font-extrabold font-roc text-right leading-[56px]',
          { 'text-primary text-left': props.transparent || props.secondary }
        )}
      >
        {idx}.
      </p>
      <p
        className={cn('text-lg font-semibold tracking-widest text-black', {
          'text-primary': props.transparent || props.secondary,
        })}
      >
        {caption}
      </p>
      <h3
        className={cn(
          'text-white mt-10 mb-5 text-3xl md:text-[50px] font-semibold tracking-wider leading-tight',
          { 'text-foreground': props.transparent }
        )}
      >
        {label}{' '}
      </h3>
      <p
        className={cn('text-sm leading-relaxed md:text-lg', {
          'text-white/80': props.secondary,
        })}
      >
        {text}
      </p>
      <Button secondary={props.primary} className='mt-16 mb-12'>
        Find out More
      </Button>
    </section>
  );
}
