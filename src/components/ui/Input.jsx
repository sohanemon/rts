import { cn } from '~/lib/utils';

export default function Input({ className, label, type, ...props }) {
  return (
    <div className={cn('space-y-0.5', className, {})} {...props}>
      <label htmlFor={label} className='font-medium'>
        {label} *
      </label>
      {type === 'textarea' ? (
        <textarea
          className='block w-full px-3 text-lg bg-zinc-100'
          rows={5}
          id={label}
        />
      ) : (
        <input
          className='block w-full h-10 px-3 text-lg bg-zinc-100'
          type={type}
          id={label}
        />
      )}
    </div>
  );
}
