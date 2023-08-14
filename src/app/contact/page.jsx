import Brand from '~/components/ui/brand';
import Hero from './hero';
import SendMessage from '../about/SendMessage';
import Section from '~/components/Section';

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
      <Section
        image={
          'https://s3-alpha-sig.figma.com/img/347d/00e8/e17de584cfe13071eb429515c51d881d?Expires=1693180800&Signature=Bwu7wsNCHaVGx1OEHfPdfdyR6ib7iqm4UrmDXH0YQL~PiJOqEw3uzzFNoaLswJSxA56jU0uAy3Oer9sE2-RQmEdkuVy6Kk4bC-JGqmChsMX1JvIaSCxSyjgGGyxGLIM2InYqHEKuo0mkmd~YQlzfr4GGGbnvxVmW1CwKpGdC8S3-bDbfoNN6YC9B0zqn6kY-X9oPCBST7TAnuS6zpUbxns7zGp-FSz~exC091kl4q6tRf~q4m3Jh8K15MGDfPyCL4dgyCgYja9KVTR8PFqkG-MYS5lefiaydDd1J5bzOL9S7wBL0C19-Licd9InZuZ6jTUmFjNievh0tXqrXO9Zfig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        }
        extra={
          <div className='max-w-[526px] text-center text-2xl flex-1 leading-10'>
            7th Fl., 186 Nanking E. Rd., Sec. 4, Songshan Dist., Taipei 10595,
            Taiwan
          </div>
        }
      />
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
