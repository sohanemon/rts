'use client';
import Hero from './Hero';
import { useHorizontalScroll } from '~/hook/scroll';
import Card from '~/components/card';

import Section from '../../../components/Section';
export default function LowCarbonFootprintMonofilamentPage() {
  const scrollRef = useHorizontalScroll();
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
      <div
        ref={scrollRef}
        className='flex gap-10 pb-8 container mb-32 overflow-x-auto flex-nowrap '
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
