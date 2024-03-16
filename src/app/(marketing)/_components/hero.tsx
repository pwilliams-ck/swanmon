import Link from 'next/link'
import localFont from 'next/font/local'

import { cn } from '@/services/utils'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

import swanMonLogo from '../../../../public/swanmon-logo-color.png'

const headingFont = localFont({
  src: '../../../../public/fonts/font.woff2'
})

export function Hero() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          'flex items-center justify-center flex-col',
          headingFont.className
        )}
      >
        <div>
          <Image
            className="flex items-center m-4"
            src={swanMonLogo}
            alt="CloudKey Platform Logo"
            height={0}
            width={300}
          />
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-secondary">
          SwanMon helps your team
        </h1>
        <Button
          className="text-3xl md:text-6xl text-secondary bg-gradient-to-r from-lime-500 to-teal-800 my-6 py-6 md:py-10 hover:bg-gradient-to-r hover:from-lime-600 hover:to-teal-900"
          asChild
        >
          <Link href="/create-account">prepare for launch.</Link>
        </Button>
      </div>
      <div
        className={
          'text-sm md:text-xl my-2 text-neutral-400 max-w-xs md:max-w-2xl text-center mx-auto'
        }
      >
        SwanMon turns stress into success, streamlining projects to meet even
        the strictest deadlines with ease. Embrace efficient, tranquil
        collaboration and achieve your goals with grace and keep the chaos at
        bay with SwanMon.
      </div>
      <Button
        className="text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl text-primary p-2 sm:p-4 md:p-6 lg:p-8 mt-4 bg-zinc-200 hover:bg-zinc-200/80"
        asChild
      >
        <Link href="/create-account">Sign-up Now</Link>
      </Button>
    </div>
  )
}
