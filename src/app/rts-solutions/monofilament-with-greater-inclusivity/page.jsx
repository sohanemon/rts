import Hero from './Hero';
import Card from '~/components/card';
import Brand from '~/components/ui/brand';
import Article from '~/components/article';
import Text from '~/components/ui/Text';
import Section from '~/components/Section';
import GreenDiv from '~/components/GreenDiv';
import Image from 'next/image';
export default function MonofilamentWithGreaterInclusivityPage() {
  return (
    <section>
      <Hero />
      <Section
        image={`https://s3-alpha-sig.figma.com/img/1a12/e35c/df7de30ca6aaed756a944aa17cf8b4cd?Expires=1692576000&Signature=LBLs9HmGcjFwWkC5Vys2b5toxQVIFGOeavBf-PLkZ6S3zQRMdEj94oKTaLa9UUOsl4wsisKS3bcISr2mnBe3z~49vdU68buHrlo1tTffyGDXrrimahuWg3iCweFlizx9-yjiySurempZPP2JwP-Tc-chqiYups3oRpyiyEx6Nh0qE8iNiE94lGcao5xBO26l56imaR883f4gOJSJ0io-iUGwyzOCXGSYnOtUMPkST29OVikFjKkOAlVX69Ru0Gv~tMEnnzbIuwpE0DwpYRItavjY52m5Z6-zJ0JUinzpGoXLClcKlSJxDGFuPwaprmXiC0eMM8N3bWR76hzxuQqeRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
        extra={
          <>
            The purpose of manufacturing products extends beyond serving
            customers; it now includes the mission of returning to the circular
            system. In the textile industry, what everyone is anticipating is a
            truly closed-loop textile supply chain.
          </>
        }
      />
      <div className='grid grid-cols-1 md:grid-cols-2 pb-8 gap-10 container mb-32 '>
        {data.map((el) => (
          <div key={el.label} className='flex flex-col items-center gap-6'>
            <Image
              src={`/img/logo-rounded.svg`}
              alt=''
              width={252}
              height={252}
            />
            <h1 className='max-w-sm text-center  text-2xl font-roc font-bold leading-[30px]'>
              Specializing in monofilament to provide solutions.
            </h1>
            <p className='max-w-sm text-center text-black/80 text-lg font-medium leading-[30px]'>
              Built on 45 years of monofilament development and manufacturing
              experience, we offer robust solutions to address the challenges.
            </p>
          </div>
        ))}
      </div>
      <Article
        text='By employing low environmental impact innovative methods, RTS solutions can increase the economic value of discarded textiles while promoting the recycling and closed-loop process of synthetic textiles.'
        image='https://www.figma.com/file/pdMmQA7oofF140rRjcwhKW/image/d8de8d2666c29e666f1ef291a93a1820a075de2e'
      />
      <Section
        image={`https://s3-alpha-sig.figma.com/img/d6d6/b081/75d547f2b4f1c020c19e69ac50e13b57?Expires=1692576000&Signature=quDRhHP3Ljh8O~RuegAHXuPAYk9KNtMi1KXQZw3xB8FIdOmaSahMr31h96ugtGcKkpiiWo56VJs0SHnjRFLratcGM-i7jlmABUxlBFAdDR-rw9pP4~JueIrI612TGO~d-pP-Il0SF5IheFT2mVH9DIQf2Nnwtbge3ctawavR0ZdWh-EqL8LNaWL13A45kUeHghejx3nHJ0bFtWJuhbv8HlP6lO9qrn9oVqSHOxjMhBJz748Lups0dkKZgGs4-kLnAzd1DVapAJvUznyDXA2DMSR7WYeWURW4lVlJ7JiVxeUQmCcO-NVZ9rzJL65UPG1MSy~6xjpx9uIMOsbxnhRwNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
        extra={
          <>
            <Text bold>Our efforts and goals</Text>
            <br />
            <ul className='text-lg list-disc ml-6 font-medium leading-loose tracking-tight'>
              <li>
                Without the need for bleaching, our monofilaments provide a wide
                range of color choices, ensuring that recycled monofilaments
                hold the same value as virgin monofilaments.
              </li>
              <li>
                The anticipated processed textile waste includes pre-consumer
                PET yarn waste, pre-consumer PET textile waste (including TPEE),
                and post-consumer textile waste that has been disassembled and
                sorted by different materials.
              </li>
            </ul>
          </>
        }
      />
      <GreenDiv className='h-[450px]'>
        <div className='flex flex-col gap-1 translate-y-8 justify-center min-h-full items-center text-center max-w-4xl mx-auto'>
          <Brand light />
          <h2 className=' text-center  text-2xl md:text-[40px] font-roc font-medium  md:leading-[60px]'>
            Welcome to join the RTS energy-saving and carbon reduction
            initiative together.
          </h2>
        </div>
      </GreenDiv>
      <div className='flex flex-wrap justify-center gap-10 pb-8 container mb-32'>
        <Card dark />
        <Card dark />
        <Card dark />
        <Card dark />
      </div>
    </section>
  );
}

const data = [
  {
    label: 'Specializing in monofilament to provide solutions.',
    text: 'Built on 45 years of monofilament development and manufacturing experience, we offer robust solutions to address the challenges.',
  },
  {
    label:
      'Striving for a sustainable model that combines both economic and environmental considerations.',
    text: 'Through innovative closed-loop methods, we pursue sustainable development and create shared economic value.',
  },
];
