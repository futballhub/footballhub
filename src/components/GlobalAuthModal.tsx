
import React, { useEffect, useRef } from 'react';
import { useAuthModal } from '@/hooks/useAuthModal';
import AuthModal from './AuthModal';

const GlobalAuthModal = () => {
  const { isOpen, defaultTab, closeModal } = useAuthModal();
  
  return (
    <AuthModal
      isOpen={isOpen}
      onClose={closeModal}
      defaultTab={defaultTab}
    />
  );
};

export default GlobalAuthModal;
