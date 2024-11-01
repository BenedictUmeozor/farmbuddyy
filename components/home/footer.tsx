import Container from '../shared/container';
import HeaderLogo from '../shared/logo';
import facebook from '@/assets/facebook.svg';
import instagram from '@/assets/instagram.svg';
import x from '@/assets/x.svg';
import { COMPANY_LINKS, SUPPORT_LINKS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className='bg-primary'>
      <Container className='space-y-12 pb-4 pt-12 text-white'>
        <div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-8'>
            <HeaderLogo isFooter />
            <ul className='flex items-center gap-4'>
              <li>
                <Link href='#'>
                  <Image
                    src={facebook}
                    alt='facebook'
                    width={100}
                    height={100}
                    className='w-6 transition-transform hover:scale-105'
                  />
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <Image
                    src={instagram}
                    alt='instagram'
                    width={100}
                    height={100}
                    className='w-6 transition-transform hover:scale-105'
                  />
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <Image
                    src={x}
                    alt='x'
                    width={100}
                    height={100}
                    className='w-6 transition-transform hover:scale-105'
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-8'>
            <h3 className='text-xl font-semibold lg:text-2xl'>Company</h3>
            <ul className='space-y-2'>
              {COMPANY_LINKS.map(link => (
                <li key={link}>
                  <Link
                    href={'#'}
                    className='transition-colors hover:text-white/75'
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-8'>
            <h3 className='text-xl font-semibold lg:text-2xl'>Support</h3>
            <ul className='space-y-2'>
              {SUPPORT_LINKS.map(link => (
                <li key={link}>
                  <Link
                    href={'#'}
                    className='transition-colors hover:text-white/75'
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-4'>
            <Button
              className={cn('w-full bg-transparent')}
              variant={'outline'}
              asChild
            >
              <Link href='/login'>Login</Link>
            </Button>
            <Button
              className={cn(
                'w-full bg-white text-primary hover:bg-gray-100 hover:text-primary',
              )}
              asChild
            >
              <Link href='/register'>Create an account</Link>
            </Button>
          </div>
        </div>
        <p className='text-center text-sm'>
          &copy; Copyright 2024. Farmbuddy. All Right Reserved
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
