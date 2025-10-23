import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, HeartIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const MatchScreen = ({ onBack, onMatch }) => {
  const [currentStage, setCurrentStage] = useState('loading'); // 'loading', 'swiping'
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [exitX, setExitX] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

const profiles = [
  {
    id: 1,
    name: "Ananya Reddy",
    age: 22,
    distance: "1 km away",
    bio: "Medical student 👩‍⚕️ | Classical dancer 🎭 | Love poetry and stargazing 🌟",
    images: [
      "https://images.unsplash.com/photo-1602442787305-decbd65be507?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    ],
    interests: ["Medicine", "Bharatanatyam", "Poetry", "Astronomy"]
  },
  {
    id: 2,
    name: "Ishaani Kapoor",
    age: 21,
    distance: "3 km away",
    bio: "Fashion design student 👗 | Makeup artist 💄 | Creating beauty in everything I do",
    images: [
      "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    ],
    interests: ["Fashion", "Art", "Beauty", "Photography"]
  },
  {
    id: 3,
    name: "Saanvi Joshi",
    age: 23,
    distance: "2 km away",
    bio: "Yoga instructor 🧘‍♀️ | Vegan foodie 🥑 | Spreading positive vibes and wellness",
    images: [
      "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    ],
    interests: ["Yoga", "Wellness", "Vegan Cooking", "Meditation"]
  },
  {
    id: 4,
    name: "Diya Mehra",
    age: 24,
    distance: "4 km away",
    bio: "Software engineer 💻 | Travel blogger ✈️ | Coding my way around the world",
    images: [
      "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    ],
    interests: ["Coding", "Travel", "Photography", "Technology"]
  },
  {
    id: 5,
    name: "Riya Malhotra",
    age: 22,
    distance: "5 km away",
    bio: "Music producer 🎵 | Guitar player 🎸 | Creating melodies that touch hearts",
    images: [
      "https://plus.unsplash.com/premium_photo-1669951581968-73b5b71face3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    ],
    interests: ["Music", "Guitar", "Singing", "Concerts"]
  },
  {
    id: 6,
    name: "Kavya Iyer",
    age: 21,
    distance: "2 km away",
    bio: "Literature student 📚 | Bookstagrammer 📖 | Lost in fictional worlds",
    images: [
      "https://images.unsplash.com/photo-1578298245398-7130884db6f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    ],
    interests: ["Reading", "Writing", "Poetry", "Classic Literature"]
  },
  {
    id: 7,
    name: "Neha Singh",
    age: 23,
    distance: "6 km away",
    bio: "Professional dancer 💃 | Choreographer 🌟 | Expressing emotions through movement",
    images: [
      "https://images.unsplash.com/photo-1678520400650-470eeed7e085?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    ],
    interests: ["Dance", "Choreography", "Fitness", "Performance Arts"]
  },
  {
    id: 8,
    name: "Pooja Gupta",
    age: 22,
    distance: "3 km away",
    bio: "Environmental activist 🌱 | Wildlife photographer 📸 | Protecting our planet",
    images: [
      "https://images.unsplash.com/photo-1637784553668-cb0d007a8c9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    ],
    interests: ["Environment", "Photography", "Wildlife", "Sustainability"]
  },
  {
    id: 9,
    name: "Meera Nair",
    age: 24,
    distance: "4 km away",
    bio: "Chef in training 👩‍🍳 | Food blogger 🍴 | Creating magic in the kitchen",
    images: [
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop"
    ],
    interests: ["Cooking", "Food Photography", "Travel", "Culture"]
  },
  {
    id: 10,
    name: "Tanya Sharma",
    age: 21,
    distance: "2 km away",
    bio: "Psychology student 🧠 | Mental health advocate 💚 | Understanding human minds",
    images: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop"
    ],
    interests: ["Psychology", "Mental Health", "Reading", "Counseling"]
  }
];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStage('swiping');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSwipe = (direction) => {
    setIsExiting(true);
    setExitX(direction === 'right' ? 500 : -500);
    
    setTimeout(() => {
      if (direction === 'right' && currentCardIndex === 0) {
        onMatch();
      }
      
      if (currentCardIndex < profiles.length - 1) {
        setCurrentCardIndex(prev => prev + 1);
        setExitX(0);
        setIsExiting(false);
      } else {
        // All cards swiped, go back to feed
        onBack();
      }
    }, 300);
  };

  if (currentStage === 'loading') {
    return (
      <div className="h-full w-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
            >
              <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                SWOF
              </span>
            </motion.div>
          </motion.div>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold mb-2"
          >
            Finding Amazing People
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white/80"
          >
            Searching for profiles near you...
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="h-1 bg-white/30 rounded-full mt-6 mx-auto overflow-hidden"
          >
            <motion.div
              animate={{
                x: [-200, 200]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-full bg-white w-20"
            />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  const currentProfile = profiles[currentCardIndex];

  return (
    <div className="h-full w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="p-2 bg-black/30 backdrop-blur-sm rounded-full text-white"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </motion.button>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-2"
          >
            <h1 className="text-white font-bold text-lg">SWOF</h1>
          </motion.div>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Cards Stack */}
      <div className="h-full flex items-center justify-center p-4 pt-20 pb-32">
        <AnimatePresence>
          {!isExiting && (
            <motion.div
              key={currentProfile.id}
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ 
                x: exitX, 
                opacity: 0, 
                scale: 0.8,
                rotate: exitX > 0 ? 20 : -20 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden"
              style={{
                cursor: 'grab'
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(event, info) => {
                if (Math.abs(info.offset.x) > 100) {
                  handleSwipe(info.offset.x > 0 ? 'right' : 'left');
                }
              }}
            >
              {/* Image Carousel */}
              <div className="relative h-96 bg-gray-200">
                <img
                  src={currentProfile.images[0]}
                  alt={currentProfile.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                  <p className="text-white text-sm">{currentProfile.distance}</p>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {currentProfile.name}, <span className="text-gray-600">{currentProfile.age}</span>
                  </h2>
                </div>
                
                <p className="text-gray-600 mb-4">{currentProfile.bio}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentProfile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next Card Preview */}
        {currentCardIndex < profiles.length - 1 && !isExiting && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 0.9, opacity: 0.7 }}
            className="absolute w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden"
            style={{
              transform: 'scale(0.9) translateY(20px)'
            }}
          >
          </motion.div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
        <div className="flex justify-center items-center space-x-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSwipe('left')}
            className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
          >
            <XMarkIcon className="w-8 h-8 text-red-500" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleSwipe('right')}
            className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center"
          >
            <HeartIcon className="w-10 h-10 text-white" />
          </motion.button>
        </div>
      </div>

    </div>
  );
};

export default MatchScreen;