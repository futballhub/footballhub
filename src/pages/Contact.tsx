
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-none">
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="bg-football-gold text-black hover:bg-amber-400 w-full"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800 border-none">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-football-gold h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-gray-300">contact@footballhub.com</p>
                  <p className="text-gray-300">support@footballhub.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-football-gold h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-gray-300">Mon-Fri: 9am - 5pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="text-football-gold h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Visit Us</h3>
                  <p className="text-gray-300">123 Stadium Way</p>
                  <p className="text-gray-300">Football City, FC 12345</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
