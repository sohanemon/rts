import SendMessage from '../about/SendMessage';
import CardSection from './CardSection';
import Hero from './Hero';

export default function RtsSolutionsPage() {
  return (
    <section>
      <Hero />
      <div className='max-w-4xl  font-roc mx-auto text-center md:text-[40px] text-2xl'>
        <span className='font-normal leading-[54px]'>
          Significant changes for the future
          <br />
          begin with crucial choices in the details. <br />
        </span>
        <span className='font-bold leading-[54px]'>
          RTS proposes 4 major solutions.
        </span>
      </div>
      <CardSection /> <SendMessage />
    </section>
  );
}
