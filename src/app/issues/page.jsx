import Card from '~/components/card';
import Hero from './hero';

export default async function IssuesPage() {
  const res = await fetch(
    'https://mgmt.retain2sustain.com/api/issues?populate=*'
  );
  const issues = await res.json();
  console.log('🛑 ~ IssuesPage ~ issues:', issues);

  return (
    <section className='bg-zinc-100'>
      <Hero />{' '}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 pb-40 container'>
        {issues.data.map((issue) => (
          <Card white noStripe data={issue.attributes} key={issue.id} />
        ))}
      </div>
    </section>
  );
}
