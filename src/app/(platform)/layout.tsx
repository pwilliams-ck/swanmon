import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
