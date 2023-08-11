import GreenLine from '~/components/ui/GreenLine';
import Text from '~/components/ui/Text';
import { cn } from '~/lib/utils';

export default function RetainSustain({ className, ...props }) {
  return (
    <div className={cn('relative', className, {})} {...props}>
      <GreenLine className={'top-0 -translate-y-[70%]'} />
      <Text className={'pt-32 container'} heading>
        Plastic pollution is an issue that cannot be ignored in the environment.
        With 45 years of deep roots in the synthetic fiber industry, Ri-Thai is
        a responsible company committed to preserving a sustainable natural
        environment. Therefore, we have launched the RTS initiative, Retain to
        Sustain.
      </Text>
      <div className='container grid grid-cols-1 gap-10 mt-10 md:gap-24 md:grid-cols-2 '>
        {data.map((label) => (
          <div key={label} className='space-y-7'>
            <Text bold>{label.label}</Text>
            <Text>{label.text}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    label: 'Retain',
    text: 'To “Reduce, Reuse and Recycle” is, in essence, to “Retain”. Through retaining, the reduction of resource consumption and environmental impact in the life cycle of textile products can be achieved.',
  },
  {
    label: 'Sustain',
    text: 'The value of products renewed by the RTS approach also gets to be retained, rendering the RTS solution sustainable.',
  },
];
