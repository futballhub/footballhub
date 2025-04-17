
import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
  id: string;
  username: string;
  email: string;
  provider?: string;
  profilePicture?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  loginWithGoogle: (credential: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Google OAuth Client ID
const GOOGLE_CLIENT_ID = '801856078058-9jkp14gahkunnb6o6vfncdb2up4emu9g.apps.googleusercontent.com';

// Load the Google API script
const loadGoogleScript = () => {
  return new Promise<void>((resolve) => {
    if (document.querySelector('script#google-login')) {
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.id = 'google-login';
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('footballhub_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = Boolean(user);

  useEffect(() => {
    // Load the Google API script when the component mounts
    loadGoogleScript();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Mock login - in a real app, this would connect to a backend
      if (email && password) {
        const mockUser = {
          id: '1',
          username: email.split('@')[0],
          email: email,
          provider: 'email'
        };
        
        setUser(mockUser);
        localStorage.setItem('footballhub_user', JSON.stringify(mockUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      // Mock registration - in a real app, this would connect to a backend
      if (username && email && password) {
        const mockUser = {
          id: '1',
          username: username,
          email: email,
          provider: 'email'
        };
        
        setUser(mockUser);
        localStorage.setItem('footballhub_user', JSON.stringify(mockUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  const loginWithGoogle = async (credential: string): Promise<boolean> => {
    try {
      if (credential) {
        // Decode the JWT token to get user information
        const decodedToken = decodeJwtResponse(credential);
        console.log("Decoded JWT ID token:", decodedToken);
        
        const googleUser: User = {
          id: decodedToken.sub,
          username: decodedToken.name,
          email: decodedToken.email,
          provider: 'google',
          profilePicture: decodedToken.picture
        };
        
        setUser(googleUser);
        localStorage.setItem('footballhub_user', JSON.stringify(googleUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Google login failed:', error);
      return false;
    }
  };

  // Function to decode the JWT token received from Google
  const decodeJwtResponse = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  };

  const logout = () => {
    if (window.google && user?.provider === 'google') {
      window.google.accounts.id.disableAutoSelect();
    }
    setUser(null);
    localStorage.removeItem('footballhub_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Add the Google object to the window type
declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          prompt: (callback: (notification: any) => void) => void;
          renderButton: (element: HTMLElement, options: any) => void;
          disableAutoSelect: () => void;
          cancel: () => void;
        };
      };
    };
  }
}
