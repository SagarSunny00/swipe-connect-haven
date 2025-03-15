
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-white"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-pink-100 rounded-full filter blur-3xl opacity-40 animate-pulse-subtle"></div>
        <div className="absolute top-60 -right-20 w-80 h-80 bg-purple-100 rounded-full filter blur-3xl opacity-40 animate-pulse-subtle animation-delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block py-1 px-3 bg-secondary text-xs font-medium rounded-full mb-4">
            Find your perfect match
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight md:leading-tight lg:leading-tight text-balance mx-auto max-w-4xl mb-6"
        >
          Swipe <span className="text-primary">Right</span> on Your Future
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance"
        >
          DateSwipe connects you with people who share your interests and passions. Our intelligent matching algorithm ensures you meet people you'll truly click with.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full shadow-sm hover:shadow transition-all-300">
            Create Account
          </button>
          <button className="bg-white hover:bg-secondary text-foreground font-medium py-3 px-8 rounded-full shadow-sm hover:shadow transition-all-300">
            Learn More
          </button>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <button 
          onClick={scrollToFeatures}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all-300"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-4 w-4 text-primary" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
