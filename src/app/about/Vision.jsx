import Heading from '~/components/ui/Heading';
import Text from '~/components/ui/Text';
import { cn } from '~/lib/utils';

export default function Vision({ className, ...props }) {
  return (
    <section className={cn('', className, {})} {...props}>
      <Heading>Vision</Heading>
      <div className='max-w-4xl px-8 mx-auto'>
        <Text heading className={'my-10'}>
          Together, we strive to create environmentally sustainable and
          high-quality synthetic fiber monofilaments.
        </Text>
        <Text>
          The vision of RTS is to advocate the use of sustainable-minded
          synthetic fiber monofilaments, ultimately enabling consumers to easily
          choose environmentally friendly products. <br />
          <br /> We aspire to be a part of the sustainable industry, reducing
          the textile carbon footprint and minimizing environmental impact
          through monofilaments, ensuring that all products follow principles of
          environmental friendliness and social responsibility throughout their
          entire lifecycle, from manufacturing to use and recycling. <br />
          <br /> Within the realm of sustainability, we are dedicated to
          technological innovation, meeting consumers&apos; demands for comfort,
          style, durability, and eco-friendliness. Simultaneously, we forge
          long-term partnerships with brands, suppliers, and other stakeholders,
          working together to drive a future of environmental sustainability and
          harmonious coexistence between humans and nature.
        </Text>
      </div>
    </section>
  );
}
