import { Toaster } from '@/components/ui/sonner';
import { ClerkProvider } from '@clerk/nextjs';

import { ModalProvider } from '@/components/providers/modal-provider';
import { QueryProvider } from '@/components/providers/query-provider';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>
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
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
