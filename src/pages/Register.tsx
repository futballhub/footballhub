
import React from 'react';
import RegisterForm from '@/components/RegisterForm';

const Register = () => {
  return (
    <div className="min-h-screen bg-football-pattern bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="z-10">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
