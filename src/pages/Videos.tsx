
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AuthModal from '@/components/AuthModal';

const Videos = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar openLoginModal={openLoginModal} />
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab="login"
      />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Football Videos</h1>
        <p className="text-xl mb-4">Football highlight videos coming soon...</p>
      </div>
    </div>
  );
};

export default Videos;
