import { SwanMonLogo } from '@/components/swanmon-logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="fixed bottom-0 w-full p-4 flex">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <SwanMonLogo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button>Privacy Policy</Button>
          <Button>Terms of Service</Button>
        </div>
      </div>
    </div>
  )
}
