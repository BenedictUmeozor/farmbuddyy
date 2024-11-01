import Link from 'next/link';
import Container from '../shared/container';
import HeaderLogo from '../shared/logo';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header>
      <Container className='flex items-center justify-between py-4'>
        <HeaderLogo />
        <ul className='hidden flex-[2] items-center justify-evenly lg:flex'>
          <li>
            <Link
              href='#'
              className='font-semibold text-white transition-colors hover:text-primary'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className='font-semibold text-white transition-colors hover:text-primary'
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className='font-semibold text-white transition-colors hover:text-primary'
            >
              About us
            </Link>
          </li>
        </ul>

        <Button
          className={cn(
            'w-24 rounded-full bg-white text-base text-primary hover:text-white md:w-36 lg:w-40',
          )}
          asChild
        >
          <Link href='/login'>Login</Link>
        </Button>
      </Container>
    </header>
  );
};
export default Header;
