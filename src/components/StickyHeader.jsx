import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';

const StickyHeader = ({ onChatClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  let lastScrollY = 0;

  useMotionValueEvent(scrollY, "change", (y) => {
    const scrollingDown = y > lastScrollY;
    
    if (scrollingDown && y > 100) {
      setIsVisible(false);
    } else if (!scrollingDown || y < 100) {
      setIsVisible(true);
    }
    
    setIsScrolled(y > 50);
    lastScrollY = y;
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'blur(5px)',
        borderBottomWidth: isScrolled ? '1px' : '0px'
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        backgroundColor: { duration: 0.2 },
        backdropFilter: { duration: 0.2 }
      }}
      className="sticky top-0 z-30 border-gray-200 transition-all duration-200"
    >
      <div className="px-4 py-3">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {/* SWOF Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="flex items-center space-x-2"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-sm">S</span>
            </motion.div>
            <motion.span 
              className="text-lg font-bold text-gray-900"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              SWOF
            </motion.span>
          </motion.div>

          {/* Chat Icon */}
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            onClick={onChatClick}
            className="relative p-2 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChatBubbleOvalLeftIcon className="w-5 h-5 text-gray-700" />
            
            {/* Notification Badge */}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
            />
            
            {/* Pulse Animation */}
            <motion.span
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.button>
        </div>
      </div>

      {/* Subtle shadow when scrolled */}
      <motion.div
        animate={{ opacity: isScrolled ? 0.1 : 0 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent"
      />
    </motion.header>
  );
};

export default StickyHeader;