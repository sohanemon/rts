import Card from '~/components/card';
import Hero from './hero';
import { siteConfig } from '~/config/site-config';

export default async function IssuesPage() {
  const res = await fetch(`${siteConfig.baseUrl}/issues?populate=*`);
  const issues = await res.json();
  const tagsRes = await fetch(`${siteConfig.baseUrl}/tags`);
  const tags = await tagsRes.json();

  return (
    <section className='bg-zinc-100'>
      <Hero />{' '}
      <div className='flex container gap-5 pb-10 pt-32'>
        {tags.data.map((tag) => (
          <button
            key={tag.id}
            className='py-2 px-10 rounded-full border border-current text-slate-900 text-[17px] font-medium'
          >
            # {tag.attributes.name}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 pb-40 container'>
        {issues.data.map((issue) => (
          <Card
            white
            noStripe
            data={issue.attributes}
            id={issue.id}
            key={issue.id}
          />
        ))}
      </div>
    </section>
  );
}
