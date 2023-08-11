import Hero from './Hero';
import Mission from './Mission';
import Quote from './Quote';
import RetainSustain from './RetainSustain';
import SendMessage from './SendMessage';
import Vision from './Vision';

export default function AboutPage() {
  return (
    <section>
      <Hero />
      <RetainSustain />
      <Vision />
      <Mission />
      <Quote className={'mt-28'} />
      <SendMessage />
    </section>
  );
}
