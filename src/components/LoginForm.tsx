
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // In a real app, this would connect to backend authentication
  };

  return (
    <div className="w-full max-w-lg p-8 rounded-lg bg-football-pink">
      <div className="flex justify-center mb-6">
        <Logo />
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
          />
        </div>
        <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-black font-bold py-2">
          Login
        </Button>
      </form>
      <div className="mt-4 text-center">
        <a href="/register">
          <Button variant="outline" className="bg-transparent hover:bg-blue-800 text-blue-800 hover:text-white border border-blue-800">
            Register new account
          </Button>
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
