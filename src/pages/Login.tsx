
import React from 'react';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen bg-football-pattern bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="z-10 w-full max-w-lg px-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
