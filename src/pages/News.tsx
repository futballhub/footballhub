
import React from 'react';
import Navbar from '@/components/Navbar';

const News = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Football News</h1>
        <p className="text-xl mb-4">Latest football news coming soon...</p>
      </div>
    </div>
  );
};

export default News;
