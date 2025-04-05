
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-4">
      <div className="mb-8">
        <Logo />
      </div>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8">Oops! This page went out of bounds</p>
      <Link to="/">
        <Button className="bg-football-gold text-black hover:bg-amber-400">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
