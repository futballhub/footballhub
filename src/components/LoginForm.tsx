
import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const googleButtonRef = useRef<HTMLDivElement>(null);
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  // Initialize Google button when component mounts
  useEffect(() => {
    const loadGoogleScript = async () => {
      try {
        if (!window.google) {
          const script = document.createElement('script');
          script.src = 'https://accounts.google.com/gsi/client';
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);
          
          // Wait for script to load
          await new Promise<void>((resolve) => {
            script.onload = () => resolve();
          });
        }
        
        // Initialize Google Sign-In
        if (window.google && googleButtonRef.current) {
          window.google.accounts.id.initialize({
            client_id: '801856078058-9jkp14gahkunnb6o6vfncdb2up4emu9g.apps.googleusercontent.com',
            callback: handleGoogleResponse,
            auto_select: false,
          });
          
          window.google.accounts.id.renderButton(
            googleButtonRef.current,
            {
              theme: 'outline',
              size: 'large',
              type: 'standard',
              text: 'signin_with',
              shape: 'rectangular',
              logo_alignment: 'left',
              width: '100%',
            }
          );
        }
      } catch (error) {
        console.error('Error loading Google Sign-In:', error);
      }
    };
    
    loadGoogleScript();
    
    // Clean up
    return () => {
      // Cancel One Tap prompt
      window.google?.accounts.id.cancel();
    };
  }, []);

  const handleGoogleResponse = async (response: any) => {
    if (response.credential) {
      setIsGoogleLoading(true);
      try {
        const success = await loginWithGoogle(response.credential);
        
        if (success) {
          toast({
            title: "Success!",
            description: "You have successfully logged in with Google.",
          });
          navigate(from, { replace: true });
        } else {
          toast({
            title: "Error",
            description: "Google login failed. Please try again.",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "An error occurred during Google login.",
          variant: "destructive",
        });
        console.error('Google login error:', error);
      } finally {
        setIsGoogleLoading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await login(email, password);
      
      if (success) {
        toast({
          title: "Success!",
          description: "You have successfully logged in.",
        });
        navigate(from, { replace: true });
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl p-8 rounded-lg bg-football-pink">
      <div className="flex justify-center mb-6">
        <Logo />
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center"></h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email :
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
            Password :
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
          className="w-full bg-orange-400 hover:bg-orange-500 text-black font-bold py-2"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      
      <div className="mt-6 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-football-pink text-gray-800">
            Or continue with
          </span>
        </div>
      </div>
      
      <div className="mt-6">
        {/* Google Sign-In button container */}
        <div id="google-login-button" ref={googleButtonRef} className="w-full flex justify-center"></div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="mb-2">Don't have an account?</p>
        <Button 
          variant="outline" 
          className="bg-transparent hover:bg-blue-800 text-blue-800 hover:text-white border border-blue-800 w-full"
          onClick={() => navigate('/register')}
        >
          Register new account
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
