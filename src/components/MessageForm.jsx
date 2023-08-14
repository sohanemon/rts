import { cn } from '~/lib/utils';
import Input from './ui/Input';
import Button from './ui/Button';

export default function MessageForm({ className, ...props }) {
  return (
    <section
      className={cn('px-5 py-8  lg:px-32 lg:py-24', className, {
        'max-w-2xl mx-auto lg:px-8 lg:py-8 lg:my-16': props.contactPage,
      })}
      {...props}
    >
      <div className='md:text-[40px] mb-6 font-roc text-3xl font-bold leading-9'>
        Send us a message
      </div>
      <div className='space-y-3.5'>
        {data.map((field) => (
          <Input key={field.label} {...field} />
        ))}
        <div>
          <input type='checkbox' id='checkbox' className='peer' />
          <label
            htmlFor='checkbox'
            className='font-medium mt-0.5 select-none pl-4 accent-black'
          >
            Tick to agree to the “Privacy Policy”
          </label>
        </div>
        <Button className={'block px-16'}>Send</Button>
      </div>
    </section>
  );
}

const data = [
  {
    label: 'Company',
    type: 'text',
  },
  {
    label: 'Name',
    type: 'text',
  },
  {
    label: 'Country',
    type: 'text',
  },
  {
    label: 'Email address',
    type: 'email',
  },
  {
    label: 'Message',
    type: 'textarea',
  },
];
