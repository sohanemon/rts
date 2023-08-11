import { cn } from '~/lib/utils';

export default function Text({ className, ...props }) {
  return (
    <p
      className={cn('text-lg', className, {
        'text-[26px] md:text-[32px] font-bold leading-10': props.heading,
        'text-[34px] font-bold leading-[38px] md:text-[44px] tracking-wide':
          props.bold,
      })}
      {...props}
    />
  );
}
