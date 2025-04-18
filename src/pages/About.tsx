
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AuthModal from '@/components/AuthModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  const openLoginModal = () => {
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar openLoginModal={openLoginModal} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} defaultTab="login" />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Founded in 2023, FootballHub was created by a team of passionate football enthusiasts who wanted to bring all aspects of football coverage into one comprehensive platform.
            </p>
            <p>
              Our mission is to provide fans around the world with the most accurate, up-to-date, and engaging football content, from live match coverage to in-depth statistics and analysis.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>Our Team</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our team consists of experienced sports journalists, data analysts, and technology experts who work tirelessly to bring you the best football coverage possible.
            </p>
            <p>
              With backgrounds ranging from professional football analytics to sports broadcasting, our diverse team brings unique perspectives to every aspect of our coverage.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none">
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Accuracy:</span> We strive to provide the most accurate information and statistics.</li>
              <li><span className="font-semibold">Inclusivity:</span> We cover football from leagues around the world, not just the most popular ones.</li>
              <li><span className="font-semibold">Innovation:</span> We constantly look for new ways to enhance your football experience.</li>
              <li><span className="font-semibold">Passion:</span> We are fans first, and our love for the beautiful game drives everything we do.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
