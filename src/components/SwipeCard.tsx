
import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProfileProps {
  id: number;
  name: string;
  age: number;
  location: string;
  bio: string;
  imageUrl: string;
}

interface SwipeCardProps {
  profile: ProfileProps;
  onSwipe: (direction: 'left' | 'right') => void;
}

const SwipeCard = ({ profile, onSwipe }: SwipeCardProps) => {
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);
  
  // Motion values
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-20, 20]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  
  // Like/dislike opacity based on card position
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const dislikeOpacity = useTransform(x, [-100, 0], [1, 0]);
  
  // Handle drag end
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      setExitDirection('right');
      onSwipe('right');
    } else if (info.offset.x < -100) {
      setExitDirection('left');
      onSwipe('left');
    }
  };
  
  // Manual swipe functions
  const handleSwipeRight = () => {
    setExitDirection('right');
    onSwipe('right');
  };
  
  const handleSwipeLeft = () => {
    setExitDirection('left');
    onSwipe('left');
  };
  
  return (
    <div className="relative w-full max-w-sm mx-auto h-[480px]">
      <motion.div
        style={{ x, rotate, opacity }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        animate={exitDirection === 'left' ? { x: -300, rotate: -20, opacity: 0 } : 
                exitDirection === 'right' ? { x: 300, rotate: 20, opacity: 0 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute w-full h-full"
      >
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl card-shadow">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10" />
          
          <img 
            src={profile.imageUrl || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop'}
            alt={profile.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Like/Dislike Indicators */}
          <motion.div
            style={{ opacity: likeOpacity }}
            className="absolute top-8 right-8 z-20 bg-green-500/80 text-white px-4 py-1 rounded-full font-bold border-2 border-white transform rotate-12"
          >
            LIKE
          </motion.div>
          
          <motion.div
            style={{ opacity: dislikeOpacity }}
            className="absolute top-8 left-8 z-20 bg-red-500/80 text-white px-4 py-1 rounded-full font-bold border-2 border-white transform -rotate-12"
          >
            NOPE
          </motion.div>
          
          {/* Profile Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
            <h3 className="text-2xl font-bold">{profile.name}, {profile.age}</h3>
            <p className="text-white/90 mb-2">{profile.location}</p>
            <p className="text-white/80 text-sm line-clamp-2">{profile.bio}</p>
          </div>
        </div>
      </motion.div>
      
      {/* Action buttons */}
      <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center gap-4 z-30">
        <button 
          onClick={handleSwipeLeft}
          className={cn(
            "flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg transition-all duration-300",
            "hover:bg-red-50"
          )}
        >
          <X className="h-6 w-6 text-red-500" />
        </button>
        
        <button 
          onClick={handleSwipeRight}
          className={cn(
            "flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg transition-all duration-300",
            "hover:bg-green-50"
          )}
        >
          <Heart className="h-6 w-6 text-green-500" />
        </button>
      </div>
    </div>
  );
};

export default SwipeCard;
