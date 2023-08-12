import Section from '~/components/Section';
import Article from '~/components/article';
import Card from '~/components/card';
import Text from '~/components/ui/Text';
import Hero from './Hero';
import Image from 'next/image';
export default function MonofilamentWithImprovedRecyclabilityPage() {
  return (
    <section>
      <Hero />
      <Section
        image={`https://s3-alpha-sig.figma.com/img/fcde/73d8/bdc682fbb214234e065d97d84e622f83?Expires=1692576000&Signature=LPD92~Xk3eHtTf~CuSmMGj5GIlMFfJKJquf9XvzeGkpdq-V5IyDWwWbD~LRPbck5xUvbTZBCRNFFBcq~BnCROUx6ZGJ5AiaEdReOZUXjOyOyxC4uv03pYEqd9zBMQMuxiH3RCDQxn3gnw~q~cDl0AWua6Wmckfu4dFRum4LulaJkY4bWsxKiZnpZ7uHqHTrtlw8CqbdpNCWWDWNlCdfvvSmgEG6JeJm4ThC00g~IZoTdWRxQc53iAyrbY6NJS98yxlVO8xtqXqqH5vDhhbY~Yi00tc~uQRUh0fStFIXjpRvwxuO3MWNkeeX1oCZT8kKwVFfgr8WHuaRKixnbHmwykQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
        extra={
          <>
            Difficult-to-recycle products with different materials can lead to a
            series of environmental issues. These interconnected problems create
            complex dilemmas.
          </>
        }
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 pb-8 container mb-32'>
        <Card dark />
        <Card dark />
        <Card dark />
      </div>
      <Article
        className='my-32'
        text='Through the RTS circular design mindset and approach, we can avoid using different materials and opt for single or similar materials in products, increasing the circularity of resources and achieving more efficient resource utilization.'
        image='https://s3-alpha-sig.figma.com/img/f84b/9bd3/301897945192687787076bd4e2afe68a?Expires=1692576000&Signature=CdIme67eDmNjB3h658PGsk-smT05spVD5KVSURnXO5uNAyniolbtBrqYu3jsl5SLKr1YN3JHKrw-HzLLzs27kOEQVq~s7NO5kEjprJg0yTohmYpO7b-U1pNY-hBASH~dt4aY72--72EUcSdBJ8iDsVM2OR99H9LIzxcFM4Z055TOZzx5-dIqO8a2GfhjYShKsbToxCDyn5TGzrYF4XUIBo7gDXpNY7OKEWPhP0j1V1HeamINSpiy8yJzg70BbtwV8TRNvt1BwEKx1o5wzxEPqnRmXO3KBaMMC974O8Y--dle7GlTiauG19Lp6AM4X8323T-PLlWbaghOJUKNN4K6Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
      />
      <Text bold className='container mb-10'>
        Thermoplastic Elastomer Mono
      </Text>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 pb-8 container mb-32'>
        <Card white />
        <Card white />
        <Card white />
        <Card white />
      </div>{' '}
      <div className='relative h-fit'>
        <Image
          className='w-full min-h-[500px] max-md:object-cover'
          src={`/img/tennis.png`}
          alt=''
          width={1440}
          height={800}
        />
        <p className='text-center absolute inset-0 z-10 grid place-content-center md:text-[40px] md:leading-[60px] font-roc translate-y-9 text-white text-2xl font-medium leading-[30px]'>
          Despite the advantages of single-material design, there are still many
          challenges.
        </p>
      </div>
      <Section
        className='md:flex md:[&_img]:w-[500px]  '
        image={`https://s3-alpha-sig.figma.com/img/d6d6/b081/75d547f2b4f1c020c19e69ac50e13b57?Expires=1692576000&Signature=quDRhHP3Ljh8O~RuegAHXuPAYk9KNtMi1KXQZw3xB8FIdOmaSahMr31h96ugtGcKkpiiWo56VJs0SHnjRFLratcGM-i7jlmABUxlBFAdDR-rw9pP4~JueIrI612TGO~d-pP-Il0SF5IheFT2mVH9DIQf2Nnwtbge3ctawavR0ZdWh-EqL8LNaWL13A45kUeHghejx3nHJ0bFtWJuhbv8HlP6lO9qrn9oVqSHOxjMhBJz748Lups0dkKZgGs4-kLnAzd1DVapAJvUznyDXA2DMSR7WYeWURW4lVlJ7JiVxeUQmCcO-NVZ9rzJL65UPG1MSy~6xjpx9uIMOsbxnhRwNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`}
        extra={
          <>
            <Text bold>Our efforts and goals</Text>
            <br />
            The elasticity recovery rate and elasticity level of elastic
            monofilaments still have some distance to go compared to the most
            commonly used elastic fibers in the industry (such as spandex or
            Lycra). Therefore, the elastic monofilaments we are developing will
            aim for higher elasticity and recovery, while encompassing all-round
            development in terms of elasticity, weavability, dyeability, and
            recyclability. From the design perspective, opting for a single
            material increases the chances of recycling and reusing textile
            waste.
          </>
        }
      />
    </section>
  );
}
