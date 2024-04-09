'use client';

import { useEffect, useState } from 'react';

import { CardModal } from '@/components/modals/card-modal';

// This prevents hydration errors between client and
// server components by ensuring it is only run on the client.
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CardModal />
    </>
  );
};
