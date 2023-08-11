import Image from 'next/image';
import MessageForm from '~/components/MessageForm';
import { cn } from '~/lib/utils';

export default function SendMessage({ className, ...props }) {
  return (
    <section
      className={cn('flex relative max-w-screen-2xl mx-auto', className, {})}
      {...props}
    >
      <Image
        src={`https://s3-alpha-sig.figma.com/img/9325/ed4b/e22b16309e71f572bc31b8469e41d59e?Expires=1692576000&Signature=Z5PwkDQA8rmqCRVQaH6r5WbgDpibpjVWF3~ew0~lhDuXDCJ~Mc5JUf1Aj0Req0RlO70aPTi9fJldlFhyCEa1bCHEg5rlSfAXGoq2-bxDnZ9EmurA-d7i~YHeWw-ot99fpiHYSDRgRDf0O8rbf2vhKnENkeBUn9FPwKJl9WirDimCUvWmNwRUpf0V7uB2b9Sv5Kh2tKXfiIE8MhaUQTZ~y~49U~bSUg75LLYbzIBLffW~MhjbclFAByzj2w35Rqlh688ujbuxMBIuhrfz1LkcJJP20jfK~ZRzvBc1X9XzTuMXxMkSrToXISiVFqX~B1SG3azRXCcopEVoWuTb~dqqWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
        alt=''
        className='lg:w-[40%] w-full min-h-full object-cover inset-0 max-lg:absolute -z-10'
        width={500}
        height={1300}
      />
      <MessageForm
        className={'max-lg:mx-5 max-lg:my-20 rounded-lg  grow bg-background'}
      />
    </section>
  );
}
