import Image from 'next/image';
import Banner from '~/components/ui/Banner';
import { cn } from '~/lib/utils';

export default function Hero({ className, ...props }) {
  return (
    <section className={cn('relative ', className, {})} {...props}>
      <Image
        src={`https://s3-alpha-sig.figma.com/img/9515/6f6f/c4bc4cfc4aa75813c21cf3f547f0adce?Expires=1692576000&Signature=NdAfHFGYhez92BwT74FTkjnSwGrzk3f9iy41UJixClXhirZPoUSYuBLVTuj1~7hkvDHW1ABKkdmIu4g0CPcMXPs~cUm3fhn-N8bVTkJN88QMgUvuLkruYUiAsx3dc52dbJW4qs7N9bITQMBLfYjeioQNf1dEeXbNw6nkHWHD-Sm3TxgVo9-ugHV-u8GE8KBLSUfWNA8hkIfAvv1xm6zKcWh4nMQ87dn1PqNRgmoeCSybonYgLmW~MkELVnFS35JUpDVPffZLY0RJmCc51RovbCYlO~PP~RQme~peiNkilhN9uW8kVVJi4R1HlMF0guEhjVpm-gnwEEDbBjkkMyHbkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
        alt=''
        className='hero'
        width={1400}
        height={900}
      />
      <Banner
        light
        caption={
          <>
            RTS Solutions to <br /># Addressing the current challenges in
            textile recycling.
          </>
        }
        label={['Monofilament', 'with Greater', 'Inclusivity ']}
        text={
          'Breaking through the challenges of closed-loop recycling in synthetic textiles using innovative methods with low environmental impact.'
        }
      />
    </section>
  );
}
