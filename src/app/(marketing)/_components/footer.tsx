import { SwanMonLogo } from "@/components/swanmon-logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <div className="fixed top-0 w-full h-14 px-4 flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <SwanMonLogo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button>
            <Link href="/sign-up">Sign-up Free</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
