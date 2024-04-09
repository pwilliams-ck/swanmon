import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';

import { ModalProvider } from '@/components/providers/modal-provider';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster
        theme="system"
        invert
        visibleToasts={9}
        richColors
        closeButton
        offset={48}
      />
      <ModalProvider />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
