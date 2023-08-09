import Image from 'next/image';
import Card from './Card';
import { Hero } from './Hero';
import Quote from './Quote';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Hero />
      <Quote />
      <div className='flex items-center -space-x-10'>
        <Card className='-translate-y-10' />
        <Image
          src={
            'https://s3-alpha-sig.figma.com/img/921c/b197/e70dfd968ac6046397d5b399671567d8?Expires=1692576000&Signature=nCUy8sTF8U0ZWjTuZDP7dnZmgY-c~gdAK5Sb4IreRk~mtmfmgPIHtxeGl3RFICXEx41g-f7ytgxhv8DKCYItLY5D5qU59CDohW5evXwikjtNnZi-CAfCOM98~UgA3C2Lg~cuyZemv15APsqJqIcXbGtjDujB69onKjYvldC19ZR0Az~8OxY2WL4JIcV6n~UcY66y991chT2VTjQuSONLY3beIevVw11AZw79mPLPpQItJXjWHuB-hxxtu3TeVqQ9W~1NGm6cqz-fj0VKUT4fjgBaKl6udkEIr43lMuD-KKOq4ylzcmHSfXfuehltRudRIJnYAyrUuiSjH4kb6K6yYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          }
          alt=''
          className='h-96'
          width={800}
          height={600}
        />
      </div>
    </main>
  );
}

const data = [
  {
    label: 'Low Carbon Footprint Monofilament',
    caption: 'RTS Solutions to #LIGHTWEIGHTING',
    text: 'Lightweighting hollow monofilament, enhancing energy efficiency, and reducing greenhouse gas emissions and carbon footprint.',
  },
  {
    label: 'Monofilament with Greater Inclusivity ',
    caption:
      'RTS Solutions to #Addressing the current challenges in textile recycling.',
    text: 'Mono-material design enhances product recyclability.',
  },
  {
    label: 'Monofilament with Improved Recyclability ',
    caption: 'RTS Solutions to #Embracing a mono-material approach',
    text: 'Mono-material design enhances product recyclability.',
  },
  {
    label: 'Monofilament with More Durable, Low Shedding',
    caption: 'RTS Solutions to #Microfiber Shedding',
    text: 'Combating Microfiber Shedding, introducing a new high-quality single strand, strong and delicate.',
  },
];
