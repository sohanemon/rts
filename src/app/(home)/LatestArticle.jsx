import Article from '~/components/article';

export default function LatestArticle() {
  return (
    <section className='w-full bg-zinc-100 py-36 lg:px-32'>
      <div className='container'>
        <div className='w-[393px] mb-10 text-slate-900 text-[44px] font-bold leading-[56px]'>
          Latest articles
        </div>
        <div className='flex gap-10 pb-8 overflow-x-auto cursor-grab active:cursor-grabbing flex-nowrap '>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </section>
  );
}
