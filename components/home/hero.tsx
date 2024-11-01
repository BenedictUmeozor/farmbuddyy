import { CSSProperties } from 'react';
import Header from './header';
import Container from '../shared/container';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const styles: CSSProperties = {
  backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('/hero.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

const Hero = () => {
  return (
    <section className='grid h-screen grid-rows-[auto_1fr]' style={styles}>
      <Header />
      <div className='grid w-full place-items-center'>
        <Container className='space-y-8 text-center'>
          <h1 className='text-3xl font-bold tracking-wide text-white md:text-4xl lg:text-6xl'>
            Empowering Farmers With <br className='max-md:hidden' /> Smart
            Solution
          </h1>
          <p className='mx-auto text-white md:max-w-3xl'>
            Experience the future of farming with Farmbuddy. Join thousands of
            farmers worldwide who trust our innovative technology to drive
            productivity, sustainability and profitability in farming.
          </p>
          <Button
            className={cn(
              'w-36 rounded-full bg-white text-base text-primary hover:text-white md:w-52',
            )}
            asChild
          >
            <Link href='/register'>Get Started</Link>
          </Button>
        </Container>
      </div>
    </section>
  );
};
export default Hero;
