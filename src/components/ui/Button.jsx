import { cn } from '~/lib/utils';

export default function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        'text-[17px] bg-primary hover:bg-primary/80 text-background font-semibold py-3 rounded-full px-10',
        className,
        {
          'bg-secondary text-primary hover:bg-secondary/80': props.secondary,
        }
      )}
      {...props}
    />
  );
}
