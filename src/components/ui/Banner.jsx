import { cn } from '~/lib/utils';

export default function Banner({
  className,
  light,
  caption,
  text,
  dark,
  label = [],
  ...props
}) {
  return (
    <section
      className={cn(
        'absolute inset-0 flex flex-col justify-center container',
        className,
        {}
      )}
      {...props}
    >
      <p
        className={cn('max-w-3xl lg:max-w-[50%] text-xl font-medium', {
          'text-white': light,
          'text-black': dark,
        })}
      >
        {caption}
      </p>
      <h1 className='max-w-5xl my-6 text-foreground [&>p]:px-2 [&>p]:bg-primary [&>p]:w-fit text-[64px] font-bold leading-[64px]'>
        {label.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </h1>

      <p
        className={cn('max-w-md  text-2xl leading-9 tracking-wide', {
          'text-white': light,
          'text-black': dark,
        })}
      >
        {text}
      </p>
    </section>
  );
}
