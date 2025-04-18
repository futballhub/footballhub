import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'register';
}

const AuthModal = ({ isOpen, onClose, defaultTab = 'login' }: AuthModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(defaultTab);
  const googleButtonRef = useRef<HTMLDivElement>(null);
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;

    const loadGoogleScript = async () => {
      try {
        if (!window.google) {
          const script = document.createElement('script');
          script.src = 'https://accounts.google.com/gsi/client';
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);

          await new Promise<void>((resolve) => {
            script.onload = () => resolve();
          });
        }

        setTimeout(() => {
          if (window.google && googleButtonRef.current) {
            window.google.accounts.id.initialize({
              client_id: '801856078058-9jkp14gahkunnb6o6vfncdb2up4emu9g.apps.googleusercontent.com',
              callback: handleGoogleResponse,
              auto_select: false,
            });

            window.google.accounts.id.renderButton(googleButtonRef.current, {
              theme: 'outline',
              size: 'large',
              type: 'standard',
              text: 'signin_with',
              shape: 'rectangular',
              logo_alignment: 'left',
              width: 320,
            });
          }
        }, 300);
      } catch (error) {
        console.error('Error loading Google Sign-In:', error);
      }
    };

    loadGoogleScript();

    return () => {
      window.google?.accounts.id.cancel();
    };
  }, [isOpen, activeTab]);

  const handleGoogleResponse = async (response: any) => {
    if (response.credential) {
      setIsLoading(true);
      try {
        const success = await loginWithGoogle(response.credential);
        if (success) {
          toast({
            title: 'Success!',
            description: 'You have successfully logged in with Google.',
          });
          onClose();
        } else {
          toast({
            title: 'Error',
            description: 'Google login failed. Please try again.',
            variant: 'destructive',
          });
        }
      } catch (error) {
        toast({
          title: 'Error',
          description: 'An error occurred during Google login.',
          variant: 'destructive',
        });
        console.error('Google login error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const message = await response.text();

      if (response.ok) {
        const success = await login(email,password);
        if (success) {
          toast({
            title: 'Success!',
            description: message,
          });
          onClose();
        } else {
          toast({
            title: 'Login failed',
            description: 'Invalid credentials.',
            variant: 'destructive',
          });
        }
      } else {
        toast({
          title: 'Login failed',
          description: message || 'Please check your credentials.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred during login.',
        variant: 'destructive',
      });
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8080/user/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Your account has been created.',
        });
        onClose();
      } else {
        const data = await response.json();
        toast({
          title: 'Registration failed',
          description: data.message || 'Please try again with different information.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred during registration.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-football-pink text-black">
        <DialogHeader className="flex justify-content-center items-center">
          <DialogTitle className="sr-only">Authentication</DialogTitle>
          <Logo />
        </DialogHeader>

        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as 'login' | 'register')}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-gray-300 bg-white"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-gray-300 bg-white"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 font-bold py-2"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-football-pink text-gray-500">OR CONTINUE WITH</span>
              </div>
            </div>

            <div className="mt-6">
              <div id="google-login-button" ref={googleButtonRef} className="flex justify-center h-10"></div>
            </div>
          </TabsContent>

          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="block text-sm font-medium">
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border-gray-300 bg-white"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="reg-email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="reg-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-gray-300 bg-white"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="reg-password" className="block text-sm font-medium">
                  Password
                </label>
                <Input
                  id="reg-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-gray-300 bg-white"
                  placeholder="Create a password"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-2"
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'Register'}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
