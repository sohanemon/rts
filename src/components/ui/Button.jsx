import { cn } from '~/lib/utils';

export default function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        'text-[17px] bg-primary text-background font-semibold py-3 rounded-full px-10',
        className,
        {
          'bg-secondary text-primary': props.secondary,
        }
      )}
      {...props}
    />
  );
}
