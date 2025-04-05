
import React from 'react';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  // Mock data for featured content
  const featuredMatches = [
    { id: 1, team1: 'Manchester United', team2: 'Liverpool', time: 'Today 17:30' },
    { id: 2, team1: 'Barcelona', team2: 'Real Madrid', time: 'Tomorrow 20:00' },
    { id: 3, team1: 'Bayern Munich', team2: 'PSG', time: 'Sunday 18:45' },
  ];

  const latestNews = [
    { id: 1, title: 'Ronaldo scores hat-trick in latest match', image: 'https://placehold.co/300x200/png' },
    { id: 2, title: 'Messi signs new contract extension', image: 'https://placehold.co/300x200/png' },
    { id: 3, title: 'Premier League announces new broadcasting deal', image: 'https://placehold.co/300x200/png' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-football-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to <span className="text-white">Football</span><span className="bg-football-gold px-2 py-1 text-black rounded-sm">hub</span></h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">Your ultimate destination for football news, videos, stats, and live streaming</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button className="bg-football-gold hover:bg-amber-400 text-black text-lg py-6 px-8">
                  Register Now
                </Button>
              </Link>
              <Link to="/live">
                <Button variant="outline" className="border-white hover:border-football-gold text-lg py-6 px-8">
                  Watch Live Matches
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Matches */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Matches</h2>
          <Link to="/live" className="text-football-gold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredMatches.map(match => (
            <Card key={match.id} className="bg-gray-800 border-none">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-semibold">{match.team1}</div>
                  <div className="text-sm text-gray-400">vs</div>
                  <div className="text-lg font-semibold">{match.team2}</div>
                </div>
                <div className="text-center text-football-gold font-medium">{match.time}</div>
                <Button className="w-full mt-4 bg-football-pink hover:bg-pink-400 text-black">
                  Watch Live
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Latest News */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest News</h2>
          <Link to="/news" className="text-football-gold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map(news => (
            <Card key={news.id} className="bg-gray-800 border-none overflow-hidden">
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                <Link to={`/news/${news.id}`}>
                  <Button variant="link" className="text-football-gold p-0">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="bg-football-pink rounded-lg p-8 text-black">
          <h2 className="text-3xl font-bold mb-4 text-center">Stay Updated</h2>
          <p className="text-center mb-6">Subscribe to our newsletter for the latest football updates</p>
          <div className="flex flex-col md:flex-row max-w-lg mx-auto gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-md"
            />
            <Button className="bg-black text-white hover:bg-gray-800">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FootballHub</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-football-gold">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-football-gold">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-football-gold">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Content</h3>
              <ul className="space-y-2">
                <li><Link to="/news" className="hover:text-football-gold">News</Link></li>
                <li><Link to="/videos" className="hover:text-football-gold">Videos</Link></li>
                <li><Link to="/stats" className="hover:text-football-gold">Stats</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Live</h3>
              <ul className="space-y-2">
                <li><Link to="/live" className="hover:text-football-gold">Live Matches</Link></li>
                <li><Link to="/schedule" className="hover:text-football-gold">Schedule</Link></li>
                <li><Link to="/replays" className="hover:text-football-gold">Replays</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="hover:text-football-gold">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-football-gold">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="hover:text-football-gold">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 pt-8 border-t border-gray-800">
            <p>&copy; {new Date().getFullYear()} FootballHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
