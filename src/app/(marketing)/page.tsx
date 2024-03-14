import Link from "next/link"
import localFont from "next/font/local"

import { cn } from "@/services/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import swanmonLogo from "../../../public/images/swanmon-logo-color.png"

const headingFont = localFont({
  src: "../../../public/fonts/font.woff2"
})

export default function Hero() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div>
          <Image
            className="flex items-center m-4"
            src={swanmonLogo}
            alt="CloudKey Platform Logo"
            height={0}
            width={300}
          />
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800">
          SwanMon helps your team!!!
        </h1>
        <Button className="text-3xl md:text-6xl bg-gradient-to-r from-sky-400 to-blue-800 my-6 py-6 md:py-10 hover:bg-gradient-to-r hover:from-sky-300 hover:to-blue-500">
          <Link href="/create-account">prepare for launch.</Link>
        </Button>
      </div>
      <div
        className={
          "text-sm md:text-xl my-2 text-neutral-400 max-w-xs md:max-w-2xl text-center mx-auto"
        }
      >
        SwanMon turns stressful demands into streamlined success. Designed to
        satisfy even the most stringent deadlines and expectations, we ensure
        your projects flow smoothly towards completion, keeping the angry
        <span className="text-teal-600 font-semibold"> swan</span> at bay.
        Embrace efficiency and tranquility in one intuitive package, making
        collaboration and meeting goals effortlessly graceful.
      </div>
      <Button
        className="text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl p-2 sm:p-4 md:p-6 lg:p-8 mt-4 bg-zinc-800 hover:bg-zinc-800/90"
        asChild
      >
        <Link href="/create-account">Sign-up Now</Link>
      </Button>
    </div>
  )
}
