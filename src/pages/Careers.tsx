
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import AuthModal from '@/components/AuthModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  const openLoginModal = () => {
    setIsAuthModalOpen(true);
  };

  const openings = [
    {
      id: 1,
      title: "Football Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 2,
      title: "Sports Content Writer",
      department: "Content",
      location: "New York, USA",
      type: "Full-time"
    },
    {
      id: 3,
      title: "Frontend Developer",
      department: "Engineering",
      location: "London, UK",
      type: "Full-time"
    },
    {
      id: 4,
      title: "Video Production Specialist",
      department: "Media",
      location: "Barcelona, Spain",
      type: "Contract"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar openLoginModal={openLoginModal} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} defaultTab="login" />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6">Careers</h1>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>Join Our Team</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              At FootballHub, we're passionate about football and technology. We're looking for talented individuals who share our enthusiasm and want to help us build the ultimate platform for football fans worldwide.
            </p>
            <p>
              We offer competitive salaries, flexible working arrangements, and an inclusive workplace where your ideas and contributions are valued.
            </p>
          </CardContent>
        </Card>
        
        <h2 className="text-2xl font-bold mb-4">Current Openings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {openings.map(job => (
            <Card key={job.id} className="bg-gray-800 border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 text-sm px-2 py-1 rounded">{job.department}</span>
                  <span className="bg-gray-700 text-sm px-2 py-1 rounded">{job.location}</span>
                  <span className="bg-gray-700 text-sm px-2 py-1 rounded">{job.type}</span>
                </div>
                <Button 
                  className="bg-football-gold text-black hover:bg-amber-400 w-full"
                  onClick={() => window.open(`/careers/${job.id}`, '_blank')}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gray-800 border-none">
          <CardHeader>
            <CardTitle>Don't see a match?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We're always looking for talented individuals to join our team. If you don't see a position that matches your skills, send us your resume anyway!
            </p>
            <Button 
              className="bg-football-gold text-black hover:bg-amber-400"
              onClick={() => window.location.href = '/contact'}
            >
              Submit Your Resume
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Careers;
