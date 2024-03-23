'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'

import { useMobileSidebar } from '@/hooks/use-mobile-sidebar'
import { Sidebar } from './sidebar'

export const MobileSidebar = () => {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  const onOpen = useMobileSidebar((state) => state.onOpen)
  const onClose = useMobileSidebar((state) => state.onClose)
  const isOpen = useMobileSidebar((state) => state.isOpen)

  // This prevents hydration errors by guaranteeing this component only runs on the client. This
  // matters because, initially, every component is SSR in Nextjs. So when a user opens a closed
  // state there are hydration errors, this prevents that.
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Runs every time a pathname changes, this will close the mobile sidebar.
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  // This helps determine if the component is still running on the server.
  if (!isMounted) {
    return null
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden"
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-12">
          <Sidebar storageKey="sw-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  )
}
