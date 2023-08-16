import { siteConfig } from '~/config/site-config';

export default async function SlugPage({ params: { slug } }) {
  const res = await fetch(`${siteConfig.baseUrl}/issues/${slug}?populate=*`);
  const { data } = await res.json();

  return (
    <section>
      <div className='h-32 bg-gradient-to-t from-transparent to-slate-900/40' />
      <div className='container mt-20 max-w-5xl mb-44'>
        <div className=' flex gap-8 flex-wrap '>
          {data.attributes.tags.data.map((tag) => (
            <div key={tag} className='text-green-500  text-lg font-medium'>
              # {tag.attributes.name}
            </div>
          ))}
          <div className='w-[150px] grow justify-end text-right text-slate-900 text-base font-medium'>
            {data.attributes.article_date}
          </div>
        </div>
        <div className='font-roc text-slate-900 text-3xl my-10 lg:text-[50px] font-medium leading-[54px]'>
          {data.attributes.title}
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.attributes.body }} />
      </div>
    </section>
  );
}
