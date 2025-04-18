
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AuthModal from '@/components/AuthModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  const openLoginModal = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar openLoginModal={openLoginModal} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} defaultTab="login" />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Welcome to FootballHub. By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, you may not access our service.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>2. User Accounts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. We encourage you to use strong passwords (e.g., a combination of uppercase and lowercase letters, numbers, and symbols) with your account.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>3. Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the service, including its legality, reliability, and appropriateness.
            </p>
            <p>
              By posting content to the service, you grant us the right to use, modify, perform, display, reproduce, and distribute such content on and through the service.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>4. Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The service and its original content, features, and functionality are and will remain the exclusive property of FootballHub and its licensors. The service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
            </p>
            <p>
              Our logos, website name, and website content are trademarks, service marks, and/or trade dress of FootballHub. You must not use such marks without the prior written permission of FootballHub.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none">
          <CardHeader>
            <CardTitle>5. Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you have any questions about these Terms, please contact us at terms@footballhub.com.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Last updated: April 15, 2025
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
