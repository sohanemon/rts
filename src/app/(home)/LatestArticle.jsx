'use client';
import Card from '~/components/card';
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
          className='flex [&>*]:basis-2/5 gap-10 pb-8 overflow-x-auto flex-nowrap'
        >
          <Card white noStripe />
          <Card white noStripe />
          <Card white noStripe />
          <Card white noStripe />
          <Card white noStripe />
          <Card white noStripe />
          <Card white noStripe />
        </div>
      </div>
    </section>
  );
}
