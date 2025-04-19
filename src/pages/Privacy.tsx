
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              At FootballHub, we respect your privacy and are committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website and tells you about your privacy rights and how the law protects you.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>2. The Data We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We may collect, use, store, and transfer different kinds of personal data about you, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Identity Data: first name, last name, username</li>
              <li>Contact Data: email address, phone number</li>
              <li>Technical Data: IP address, browser type, operating system</li>
              <li>Usage Data: information about how you use our website</li>
              <li>Marketing Data: your preferences in receiving marketing from us</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>3. How We Use Your Data</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To register you as a new customer</li>
              <li>To provide and manage your account</li>
              <li>To improve our website, products, and services</li>
              <li>To make recommendations to you about content that may interest you</li>
              <li>To administrate and protect our business and website</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>4. Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none">
          <CardHeader>
            <CardTitle>5. Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@footballhub.com.
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

export default Privacy;
