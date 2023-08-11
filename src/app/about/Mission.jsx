import Heading from '~/components/ui/Heading';
import Text from '~/components/ui/Text';
import { cn } from '~/lib/utils';

export default function Mission({ className, ...props }) {
  return (
    <section className={cn('', className, {})} {...props}>
      <Heading reversed>Mission</Heading>{' '}
      <div className='max-w-4xl px-8 mx-auto'>
        <Text heading className={'my-10'}>
          Achieving a more sustainable synthetic fiber industry with
          monofilaments requires the collective commitment from all of us.
        </Text>
        <Text>
          The mission of RTS is to raise awareness and support for the recycling
          of synthetic fiber textiles in the market. We call upon like-minded
          partners across the supply chain to jointly develop more possibilities
          for monofilaments, providing the market with easily recyclable and
          durable eco-friendly textile materials. To achieve this, we are
          committed to breaking the existing specifications of monofilaments,
          reducing their diameters, to apply them to a wider range of textiles.{' '}
          <br />
          <br />
          We offer technical support and encourage brands to adopt
          single-material designs. We are also dedicated to research and
          innovation, using monofilaments to reduce the environmental and
          climate impacts of existing synthetic fiber textiles. <br />
          <br />
          All of this requires the collective efforts and participation from
          each one of us. We invite like-minded partners to join us in
          co-creating a sustainable future together!
        </Text>
      </div>
    </section>
  );
}
