'use client';
import * as Accordion from '@radix-ui/react-accordion';
import Hero from './hero';

export default function FaqPage() {
  return (
    <section className='pb-32'>
      <Hero />

      <Accordion.Root
        collapsible
        type='multiple'
        className='max-w-5xl mx-auto space-y-6 p-5'
      >
        {' '}
        <div className='text-black mt-32 text-[40px] font-bold leading-[50px]'>
          Lorem?
        </div>
        {Array.from(
          Array(7)
            .fill(data)
            .map((data, idx) => (
              <Accordion.Item value={data.ques + idx} key={data.ques}>
                <Accordion.Trigger
                  asChild
                  className='bg-primary group px-6 lg:px-10 py-8 text-black flex justify-between cursor-pointer text-xl font-bold leading-9'
                >
                  <div>
                    <p>
                      {idx + 1}. {data.ques}
                    </p>
                    <div className='group-data-[state=open]:hidden'>+</div>
                    <div className='group-data-[state=open]:block text-3xl hidden'>
                      -
                    </div>
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className='bg-zinc-100 px-10 lg:px-20 py-8 transition-all overflow-hidden data-[state=open]:animate-slideDown data-[state=close]:animate-slideUp'>
                  {data.ans}
                </Accordion.Content>
              </Accordion.Item>
            ))
        )}
      </Accordion.Root>
    </section>
  );
}

const data = {
  ques: 'lorem, ipsum dolor sit amet consectetur;',
  ans: 'lorem, ipsum dolor sit amet consectetur adipisicing elit. ullam odio hic nisi voluptatem reprehenderit, cum quidem aliquam beatae asperiores dignissimos libero dolor ea fugit possimus eos, quisquam iste nostrum fuga.',
};
