
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-football-gold">Home</Link>
          {isAuthenticated && (
            <>
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
                variant="outline" 
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="border-football-gold text-football-gold hover:bg-football-gold hover:text-black">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-football-gold text-black hover:bg-amber-400">Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
