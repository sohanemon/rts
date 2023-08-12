import Hero from './Hero';
import Card from '~/components/card';
import Brand from '~/components/ui/brand';
import Article from '~/components/article';
import Text from '~/components/ui/Text';

import Section from '~/components/Section';
export default function LowCarbonFootprintMonofilamentPage() {
  return (
    <section>
      <Hero />
      <Section
        image={`https://s3-alpha-sig.figma.com/img/cddc/42f4/5aa4c7162252800bf08963836e4de80e?Expires=1692576000&Signature=ImWjRpTIBFfL62VX7K3WHXCzYkH8MVZ8ax7dAgEHBSQ8oyd7dU2yEVgOdrp5q2b7QBS2Gkho9AZC1epK5ZHi~gcGx3Zw-8Gv7nJHBKYIj2mfcWFX5oLdDRTCMjinpdVquQXc2oaID9I-SuftKvEgA65osAnIdOTw8cyinV1N~2Ygx1JEhiHzMmJPWyrZekTg3B4yBXRg0mWpOqgMg3BVHd3i1amqhwZa~M3Nhyvf2iBt3-db7B17HmW3lyO07WmaL4pctpxxjP3z6aGD4qx-ZZbTBP80Oo~-mG~1pb5r3ApWh7G-j4~Q7NAgJNgyYzPp0tIc01IebokIfeHz8rONnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
        extra={
          <>
            Those vulnerable groups and regions face disproportionate and
            adverse consequences despite contributing minimally to climate
            change. Therefore, we aim to make greater breakthroughs in our
            products regarding the issue of net-zero emissions.
            <br />
            <br />
            We turn to learn from natures designs, observing how birds utilize
            hollow bones and feathers to achieve easier flight.
          </>
        }
      />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pb-8 container mb-32 overflow-x-auto '>
        <Card />
        <Card />
        <Card />
      </div>
      <Article
        image='https://www.figma.com/file/pdMmQA7oofF140rRjcwhKW/image/d8de8d2666c29e666f1ef291a93a1820a075de2e'
        text=' RTS is committed to creating various possibilities for hollow
          monofilament, expanding its practical applications, and achieving
          energy-saving and carbon reduction in every aspect.'
      />
      <Section
        image={`https://www.figma.com/file/pdMmQA7oofF140rRjcwhKW/image/0c87f255555d47a66575aede2a11a8bbf85b1555`}
        extra={
          <>
            <Text bold>Our efforts and goals</Text>
            <br />
            We aim to reduce the diameter of hollow monofilament, pursue higher
            hollow rate, while maintaining the desired performance targets.
          </>
        }
      />
      <div className='flex flex-col gap-14 mb-24 items-center text-center max-w-4xl mx-auto'>
        <Brand />
        <h2 className=' text-center  text-2xl md:text-[40px] font-roc font-medium  md:leading-[60px]'>
          Welcome to join the RTS energy-saving and carbon reduction initiative
          together.
        </h2>
      </div>
      <div className='flex flex-wrap justify-center gap-10 pb-8 container mb-32  '>
        <Card dark />
        <Card dark />
      </div>
    </section>
  );
}
