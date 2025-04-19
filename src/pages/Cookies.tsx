
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>1. What Are Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third-party to recognize you and make your next visit easier and the service more useful to you.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>2. How We Use Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Authentication:</span> We use cookies to identify you when you visit our website and as you navigate our website.</li>
              <li><span className="font-semibold">Status:</span> We use cookies to help us determine if you are logged into our website.</li>
              <li><span className="font-semibold">Personalization:</span> We use cookies to store information about your preferences and to personalize the website for you.</li>
              <li><span className="font-semibold">Security:</span> We use cookies as an element of the security measures used to protect user accounts, including preventing fraudulent use of login credentials.</li>
              <li><span className="font-semibold">Analysis:</span> We use cookies to help us to analyze the use and performance of our website and services.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>3. Types of Cookies We Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We use both session and persistent cookies on our website:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Session cookies:</span> These are temporary cookies that expire when you close your browser. They're used to help us track your interactions with our website during a single browsing session.</li>
              <li><span className="font-semibold">Persistent cookies:</span> These remain on your device until they expire or until you delete them. They're used to recognize you when you return to our website and help us remember your preferences for future visits.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none mb-8">
          <CardHeader>
            <CardTitle>4. Managing Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can obtain up-to-date information about blocking and deleting cookies via the support pages of your browser:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Chrome: <a href="https://support.google.com/chrome/answer/95647" className="text-football-gold hover:underline" target="_blank" rel="noopener noreferrer">https://support.google.com/chrome/answer/95647</a></li>
              <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-football-gold hover:underline" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences</a></li>
              <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-football-gold hover:underline" target="_blank" rel="noopener noreferrer">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></li>
              <li>Edge: <a href="https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy" className="text-football-gold hover:underline" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy</a></li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-none">
          <CardHeader>
            <CardTitle>5. Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you have any questions about our use of cookies, please contact us at cookies@footballhub.com.
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

export default Cookies;
