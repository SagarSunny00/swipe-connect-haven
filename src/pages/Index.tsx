
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SwipeCard from '../components/SwipeCard';
import AppFeatures from '../components/AppFeatures';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

// Sample profile data
const profiles = [
  {
    id: 1,
    name: "Alex",
    age: 28,
    location: "San Francisco",
    bio: "Coffee enthusiast, hiking lover, and tech geek. Looking for someone to share adventures with.",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Jordan",
    age: 27,
    location: "New York",
    bio: "Art director by day, foodie by night. Let's explore the best restaurants in town!",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Taylor",
    age: 26,
    location: "Los Angeles",
    bio: "Musician, beach lover, and fitness enthusiast. Looking for someone who appreciates good vibes.",
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2487&auto=format&fit=crop"
  }
];

const Index = () => {
  const [currentProfile, setCurrentProfile] = useState(0);
  
  const handleSwipe = (direction: 'left' | 'right') => {
    // Wait for animation to complete before changing the profile
    setTimeout(() => {
      setCurrentProfile((prev) => (prev + 1) % profiles.length);
    }, 300);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Demo Section */}
      <section id="how-it-works" className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 bg-secondary text-xs font-medium rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Swipe. Match. Meet.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Finding love has never been easier. Just swipe right on profiles you like and left on those you don't.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.ul 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <li className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-semibold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Create Your Profile</h3>
                    <p className="text-muted-foreground">Add your best photos and share your interests to attract the right matches.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-semibold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Discover Matches</h3>
                    <p className="text-muted-foreground">Browse profiles and swipe right on people you're interested in meeting.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-semibold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Start Chatting</h3>
                    <p className="text-muted-foreground">When you match with someone, begin a conversation and get to know each other.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-semibold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Meet in Person</h3>
                    <p className="text-muted-foreground">When you're both ready, arrange a date and see if there's a real connection.</p>
                  </div>
                </li>
              </motion.ul>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center mt-10 lg:mt-0"
            >
              <SwipeCard 
                profile={profiles[currentProfile]} 
                onSwipe={handleSwipe} 
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <AppFeatures />
      
      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-primary/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            Ready to find your perfect match?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Join thousands of singles who have already found meaningful connections through DateSwipe.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full shadow-sm hover:shadow transition-all-300">
              Download Now
            </button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
