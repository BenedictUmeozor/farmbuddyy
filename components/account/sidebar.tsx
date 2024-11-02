'use client';

import { DASHBOARD_LINKS } from '@/lib/constants';
import HeaderLogo from '../shared/logo';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { LogOutIcon } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className='hidden h-screen flex-col items-center justify-between bg-primary px-6 pb-6 pt-8 text-white lg:flex'>
      <div className='space-y-6'>
        <HeaderLogo isFooter />
        <ul className='space-y-2'>
          {DASHBOARD_LINKS.map(link => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={cn(
                  'flex items-center gap-1 rounded p-2 hover:bg-white/20',
                  pathname === link.href && 'rounded bg-white/20',
                )}
              >
                <Image
                  src={link.iconPath}
                  alt={link.name}
                  height={100}
                  width={100}
                  className='h-5 w-5'
                />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Button
        className={cn(
          'mx-4 mr-auto flex w-full items-center justify-start gap-1 p-2 text-white hover:bg-white/20 hover:text-white',
        )}
        variant={'ghost'}
      >
        <LogOutIcon className='h-5 w-5' />
        Logout
      </Button>
    </aside>
  );
};
export default Sidebar;
