import Image from 'next/image';
import Button from '~/components/ui/Button';
import Text from '~/components/ui/Text';
import { cn } from '~/lib/utils';

export default function RiThaiSection({ className, ...props }) {
  return (
    <section className={cn('', className, {})} {...props}>
      <div className='relative h-96 bg-zinc-300'>
        <Image
          src={`/img/rectangle.png`}
          className='object-cover w-full h-full'
          alt=''
          width={1024}
          height={500}
        />
        <h4 className='text-center text-white text-2xl absolute inset-0 grid place-content-center tracking-widest md:text-5xl font-bold leading-[60px]'>
          RTS - A project started by Ri-Thai
        </h4>
      </div>

      <div className='container max-w-4xl py-12 md:py-32'>
        <Image
          src={`/img/rectangle.png`}
          className='object-cover w-full h-[486px]'
          alt=''
          width={1024}
          height={500}
        />
        <Text className={'mt-8 max-md:text-2xl'}>
          The initiator of the RTS project, monofilament fiber expert - Ri-Thai
          International Inc., welcomes you to visit our website to learn more
          about us.
        </Text>
        <Button secondary className={'my-20 mx-auto block'}>
          Visit Ri-Thai Website
        </Button>
      </div>
    </section>
  );
}
