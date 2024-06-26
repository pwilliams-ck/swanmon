import Link from 'next/link';
import localFont from 'next/font/local';

import { cn } from '@/services/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import swanMonLogo from '../../../../public/swanmon-logo-color.png';
import { AlertPopup } from '@/components/alert';
import { toast } from 'sonner';

const headingFont = localFont({
  src: '../../../../public/fonts/font.woff2',
});

export const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div>
        <AlertPopup
          title="Heads up!"
          description="Please excuse our dust, SwanMon is currently in beta and is actively being worked on."
        />
      </div>
      <div
        className={cn(
          'flex items-center justify-center flex-col',
          headingFont.className,
        )}
      >
        <div>
          <Image
            className="flex items-center m-4"
            src={swanMonLogo}
            alt="CloudKey Platform Logo"
            height={0}
            width={300}
            priority
          />
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-primary">
          SwanMon helps your team
        </h1>
        <Button
          className="rounded-lg text-3xl md:text-6xl text-secondary bg-gradient-to-r from-lime-500 to-teal-800 my-6 py-6 md:py-10 hover:bg-gradient-to-r hover:from-lime-300 hover:to-teal-600"
          asChild
        >
          <Link href="/sign-up">move forward.</Link>
        </Button>
      </div>
      <div
        className={
          'text-sm md:text-xl my-2 text-neutral-500 max-w-xs md:max-w-2xl text-center mx-auto'
        }
      >
        Share tasks and to-do lists with anyone to get things done! SwanMon
        turns stress into success, streamlining projects to meet even the
        strictest deadlines with ease. Embrace efficient, tranquil collaboration
        and achieve your goals with resounding grace.
      </div>
      <Button className="rounded-lg text-3xl p-8 mt-8" asChild>
        <Link href="/sign-up">Sign-up Free!</Link>
      </Button>
    </div>
  );
};
