
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Search, Users } from 'lucide-react';

const features = [
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Smart Matching",
    description: "Our algorithm learns your preferences and suggests matches that align with your interests and values."
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Location-Based",
    description: "Find people near you to make meeting up easier. Adjust the distance to expand your dating pool."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Verified Profiles",
    description: "All profiles are verified to ensure you're meeting real people who share your intentions."
  },
  {
    icon: <Search className="h-6 w-6 text-primary" />,
    title: "Advanced Filters",
    description: "Set preferences for age, interests, and more to find exactly who you're looking for."
  }
];

const AppFeatures = () => {
  return (
    <section id="features" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-secondary text-xs font-medium rounded-full mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Everything You Need to Find Love
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our app is designed with one goal: to help you find meaningful connections with people who match your vibe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
