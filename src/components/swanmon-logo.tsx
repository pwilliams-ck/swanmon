import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/services/utils'
import localFont from 'next/font/local'

import swanMonLogo from '../../public/swanmon-logo-color.png'

const headingFont = localFont({
  src: '../../public/fonts/font.woff2'
})

export function SwanMonLogo() {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src={swanMonLogo}
          alt="SwanMon Logo"
          height={70}
          width={70}
          priority
        />
        <p className={cn('text-xl text-primary', headingFont.className)}>
          SwanMon
        </p>
      </div>
    </Link>
  )
}
