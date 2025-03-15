
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300",
        isScrolled ? "glass" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="font-display font-bold text-xl">DateSwipe</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#hero" className="text-sm opacity-80 hover:opacity-100 transition-all-300">Home</a>
          <a href="#features" className="text-sm opacity-80 hover:opacity-100 transition-all-300">Features</a>
          <a href="#how-it-works" className="text-sm opacity-80 hover:opacity-100 transition-all-300">How it works</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium opacity-80 hover:opacity-100 transition-all-300">
            Log in
          </button>
          <button className="text-sm bg-primary text-white rounded-full py-2 px-5 font-medium hover:bg-primary/90 transition-all-300 shadow-sm hover:shadow">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
