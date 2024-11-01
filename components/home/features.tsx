import Container from '../shared/container';
import image1 from '@/assets/product-list.svg';
import image2 from '@/assets/weather.svg';
import image3 from '@/assets/ai-powered.svg';
import image4 from '@/assets/agric.svg';
import image5 from '@/assets/alert.svg';
import image6 from '@/assets/storage.svg';
import Image from 'next/image';

const Features = () => {
  return (
    <section>
      <Container className='space-y-12 py-12'>
        <h2 className='text-center text-2xl font-semibold lg:text-3xl'>
          Features
        </h2>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
          <div className='flex flex-col items-start gap-2 max-lg:text-center lg:flex-row'>
            <Image
              src={image1}
              alt='image1'
              width={100}
              height={100}
              className='w-8 max-lg:mx-auto max-lg:w-10'
            />
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold lg:text-2xl'>
                Product Listings
              </h3>
              <p className='md:max-w-sm lg:text-sm'>
                Manage your fam produce by being able to navigate to the produce
                listing section. users can also add, manage, update or manage
                the listings of produce.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-2 max-lg:text-center lg:flex-row'>
            <Image
              src={image2}
              alt='image2'
              width={100}
              height={100}
              className='w-8 max-lg:mx-auto max-lg:w-10'
            />
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold lg:text-2xl'>
                Weather Updates
              </h3>
              <p className='md:max-w-sm lg:text-sm'>
                Offers real time, accurate weather forcast based on specific
                location which include precipitation, humiduty and wind speed
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-2 max-lg:text-center lg:flex-row'>
            <Image
              src={image3}
              alt='image3'
              width={100}
              height={100}
              className='w-8 max-lg:mx-auto max-lg:w-10'
            />
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold lg:text-2xl'>AI Powered</h3>
              <p className='md:max-w-sm lg:text-sm'>
                Explore our AI-driven insights and recommendation for crop
                management practices. Receive guidance on modern faming
                practices.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-2 max-lg:text-center lg:flex-row'>
            <Image
              src={image4}
              alt='image4'
              width={100}
              height={100}
              className='w-8 max-lg:mx-auto max-lg:w-10'
            />
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold lg:text-2xl'>
                Agricultural Knowledge
              </h3>
              <p className='md:max-w-sm lg:text-sm'>
                Curate and provide regular updates on agricultural best
                practices, techniques, and innovations through articles, blog
                posts, or newsletters.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-2 max-lg:text-center lg:flex-row'>
            <Image
              src={image5}
              alt='image5'
              width={100}
              height={100}
              className='w-8 max-lg:mx-auto max-lg:w-10'
            />
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold lg:text-2xl'>Pest Alerts</h3>
              <p className='md:max-w-sm lg:text-sm'>
                Our AI algorithms monitor and analyze pest data, providing
                real-time alerts and recommendations to farmers regarding
                potential pest outbreaks or infestations.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start gap-2 max-lg:text-center lg:flex-row'>
            <Image
              src={image6}
              alt='image6'
              width={100}
              height={100}
              className='w-8 max-lg:mx-auto max-lg:w-10'
            />
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold lg:text-2xl'>
                Offline Article Storage
              </h3>
              <p className='md:max-w-sm lg:text-sm'>
                Get first hand articles, resources, and chat conversations for
                offline access, users can get access to critical information
                even in low-connectivity areas.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Features;
