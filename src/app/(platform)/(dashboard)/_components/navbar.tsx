import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { FileSpreadsheet, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SwanMonLogo } from '@/components/swanmon-logo';
import { MobileSidebar } from './mobile-sidebar';
import { FormPopover } from '@/components/forms/form-popover';

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 w-full h-14 px-4 border-b shadow-lg bg-white flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <SwanMonLogo />
        </div>
      </div>
      <div className="ml-auto m-2 flex items-center gap-x-4">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textcolor: 'white',
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
