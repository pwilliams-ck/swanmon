import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster
       classNames: {
          error: 'bg-rose-500',
                success: 'text-green-400',
      warning: 'text-yellow-400',
      info: 'bg-blue-400',
        },
      />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
