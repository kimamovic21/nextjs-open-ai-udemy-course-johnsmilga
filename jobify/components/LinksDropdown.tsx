import { AlignLeft } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import Link from 'next/link';
import links from '@/utils/links';

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='lg:hidden'>
        <Button variant='outline' size='icon'>
          <span><AlignLeft /></span>
          <span className='sr-only'>Toggle links</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className='w-52 lg:hidden '
        align='start'
        sideOffset={25}
      >
        {links?.map((link) => {
          return (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href} className='flex items-center gap-x-2 '>
                <span className='mr-1'>{link.icon}</span>  
                <span className='capitalize'>{link.label}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;