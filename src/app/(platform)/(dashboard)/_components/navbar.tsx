import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { FileSpreadsheet, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SwanMonLogo } from '@/components/swanmon-logo'
import { MobileSidebar } from './mobile-sidebar'

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 w-full h-14 px-4 border-b shadow-lg bg-white flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <SwanMonLogo />
        </div>
        <Button
          variant="primary"
          className="rounded hidden md:flex h-auto ml-2 py-1.5 px-3"
        >
          <span className="flex mr-2 ">Add</span>
          <FileSpreadsheet className="flex h-4 w-4" />
        </Button>
        <Button
          variant="primary"
          size="sm"
          className="rounded block md:hidden m-5"
        >
          <Plus className="h-4 w-4" />
        </Button>
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
                textcolor: 'white'
              }
            }
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30
              }
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Navbar
