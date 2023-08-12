import { cn } from '~/lib/utils';

export default function GreenDiv({ className, ...props }) {
  return (
    <section
      className={cn(
        '[clip-path:_polygon(20%_13%,_44%_24%,_72%_35%,_100%_41%,_100%_100%,_69%_95%,_45%_89%,_22%_81%,_0_68%,_0_0);] h-96 bg-primary',
        className,
        {}
      )}
      {...props}
    />
  );
}
