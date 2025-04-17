
import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
  id: string;
  username: string;
  email: string;
  provider?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock Google auth response
interface GoogleAuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('footballhub_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = Boolean(user);

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

  const loginWithGoogle = async (): Promise<boolean> => {
    try {
      // Mock Google login - in a real app, this would use the Google OAuth API
      // Simulating a successful Google login
      const mockGoogleResponse: GoogleAuthResponse = {
        user: {
          id: 'google-123456',
          name: 'Google User',
          email: 'googleuser@example.com'
        }
      };
      
      const googleUser: User = {
        id: mockGoogleResponse.user.id,
        username: mockGoogleResponse.user.name,
        email: mockGoogleResponse.user.email,
        provider: 'google'
      };
      
      setUser(googleUser);
      localStorage.setItem('footballhub_user', JSON.stringify(googleUser));
      return true;
    } catch (error) {
      console.error('Google login failed:', error);
      return false;
    }
  };

  const logout = () => {
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
