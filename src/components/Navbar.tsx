
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';
import { useAuthModal } from '@/hooks/useAuthModal';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { openModal } = useAuthModal();
  
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        <div className="hidden md:flex space-x-6">
          {isAuthenticated && (
            <>
              <Link to="/" className="hover:text-football-gold">Home</Link>
              <Link to="/news" className="hover:text-football-gold">News</Link>
              <Link to="/videos" className="hover:text-football-gold">Videos</Link>
              <Link to="/stats" className="hover:text-football-gold">Stats</Link>
              <Link to="/live" className="hover:text-football-gold">Live Matches</Link>
            </>
          )}
        </div>

        <div className="flex space-x-4 items-center">
          {isAuthenticated ? (
            <>
              <span className="text-football-gold mr-2">Welcome, {user?.username}</span>
              <Button 
                className="bg-football-gold text-black hover:bg-amber-400"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              className="bg-football-gold text-black hover:bg-amber-400"
              onClick={() => openModal('login')}
            >
              Sign In / Register
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
