import Brand from '~/components/ui/brand';
import Hero from './hero';
import SendMessage from '../about/SendMessage';

export default function ContactPage() {
  return (
    <section>
      <Hero />
      <div className='container py-24 space-y-7'>
        <Brand className={'flex justify-center pb-12'} />
        {info.map((el) => (
          <div key={el.label} className='text-center'>
            <h4 className='text-4xl font-bold leading-9'>{el.label}</h4>
            <p className='text-2xl leading-9'>{el.value}</p>
          </div>
        ))}
      </div>
      <SendMessage contactPage />
    </section>
  );
}

const info = [
  {
    label: 'Email',

    value: 'info@retain2sustain.com',
  },
  {
    label: 'TEL',

    value: '886-2-25786188',
  },
  {
    label: 'FAX',

    value: '886-2-25796388',
  },
];
