import frame1 from '@/assets/frame1.svg';
import frame2 from '@/assets/frame2.svg';
import frame3 from '@/assets/frame3.svg';
import Container from '../shared/container';
import Image from 'next/image';

const PostHero = () => {
  return (
    <section className='relative min-h-[600px] place-items-center lg:grid lg:h-[500px]'>
      <div className='absolute inset-x-0 top-0 z-[-1] h-2/5 bg-white' />
      <div className='absolute inset-x-0 bottom-0 z-[-1] h-3/5 bg-primary' />
      <Container className='w-full space-y-12 py-12'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div className='rounded-full'>
            <Image
              src={frame1}
              alt='frame1'
              width={100}
              height={100}
              className='mx-auto aspect-square w-52 rounded-full object-cover lg:w-80'
              priority
            />
          </div>
          <div className='rounded-full'>
            <Image
              src={frame2}
              alt='frame2'
              width={100}
              height={100}
              className='mx-auto aspect-square w-52 rounded-full object-cover lg:w-80'
              priority
            />
          </div>
          <div className='rounded-full'>
            <Image
              src={frame3}
              alt='frame3'
              width={100}
              height={100}
              className='mx-auto aspect-square w-52 rounded-full object-cover lg:w-80'
              priority
            />
          </div>
        </div>
        <p className='text-center text-white'>
          Get ready to have a better farming experience with precision farming
        </p>
      </Container>
    </section>
  );
};

export default PostHero;
