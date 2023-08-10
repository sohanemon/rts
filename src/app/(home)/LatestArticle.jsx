'use client';
import Article from '~/components/article';
import { useHorizontalScroll } from '~/hook/scroll';

export default function LatestArticle() {
  const scrollRef = useHorizontalScroll();
  return (
    <section className='w-full bg-zinc-100 py-36 lg:px-32'>
      <div className='container'>
        <div className='w-[393px] mb-10 text-slate-900 text-[44px] font-bold leading-[56px]'>
          Latest articles
        </div>
        <div
          ref={scrollRef}
          className='flex gap-10 pb-8 overflow-x-auto flex-nowrap '
        >
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
