
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
    if (window.google && googleButtonRef.current) {
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
  }, [googleButtonRef, window.google]);

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

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    try {
      const success = await loginWithGoogle();
      
      if (success) {
        toast({
          title: "Success!",
          description: "You have successfully logged in with Google.",
        });
        navigate(from, { replace: true });
      } else {
        // This will not be shown as the Google popup will handle authentication
        console.log("Waiting for Google authentication...");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during Google login.",
        variant: "destructive",
      });
    } finally {
      setIsGoogleLoading(false);
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
        {/* Hidden button for manual trigger */}
        <Button
          type="button"
          className="hidden"
          onClick={handleGoogleLogin}
          disabled={isGoogleLoading}
        >
          Login with Google
        </Button>
        
        {/* Container for Google Sign-In button */}
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
