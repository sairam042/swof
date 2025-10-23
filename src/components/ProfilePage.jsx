import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeftIcon,
  CameraIcon,
  PhotoIcon,
  VideoCameraIcon,
  CogIcon,
  BookmarkIcon,
  HeartIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/outline';

const ProfilePage = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('posts');

  const userStats = {
    posts: 127,
    followers: '12.4K',
    following: 893,
  };

  const userPosts = [
    {
      id: 1,
      type: 'image',
      content: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&h=500&fit=crop',
      likes: 1242,
      comments: 89
    },
    {
      id: 2,
      type: 'reel',
      content: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
      likes: 3241,
      comments: 156
    },
    {
      id: 3,
      type: 'image',
      content: 'https://images.unsplash.com/photo-1682687220499-d9c06b872eee?w=500&h=500&fit=crop',
      likes: 892,
      comments: 45
    },
    {
      id: 4,
      type: 'image',
      content: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=500&h=500&fit=crop',
      likes: 567,
      comments: 23
    },
    {
      id: 5,
      type: 'reel',
      content: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
      likes: 1890,
      comments: 78
    },
    {
      id: 6,
      type: 'image',
      content: 'https://images.unsplash.com/photo-1682687220499-d9c06b872eee?w=500&h=500&fit=crop',
      likes: 432,
      comments: 12
    }
  ];

  const profileOptions = [
    {
      id: 'edit-profile',
      icon: UserGroupIcon,
      label: 'Edit Profile',
      description: 'Update your profile information',
      color: 'text-green-500'
    },
    {
      id: 'saved',
      icon: BookmarkIcon,
      label: 'Saved',
      description: 'View your saved content',
      color: 'text-yellow-500'
    },
    {
      id: 'settings',
      icon: CogIcon,
      label: 'Settings',
      description: 'Account and app settings',
      color: 'text-gray-500'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Fixed like Instagram */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-b border-gray-300 sticky top-0 z-10"
      >
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onBack}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5 text-gray-600" />
              </motion.button>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-bold text-gray-900">rushi_meenavalli</h1>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <EllipsisHorizontalIcon className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Profile Header - Instagram Style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white border-b border-gray-300"
      >
        <div className="max-w-4xl mx-auto px-4 py-4">
          {/* Mobile Layout */}
          <div className="flex items-start space-x-4">
            {/* Profile Picture */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex-shrink-0"
            >
              <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover border-2 border-white"
                />
              </div>
            </motion.div>

            {/* Profile Info */}
            <div className="flex-1 min-w-0">
              {/* Stats Row */}
              <div className="flex justify-around space-x-2 mb-4">
                {Object.entries(userStats).map(([key, value]) => (
                  <div key={key} className="text-center flex-1">
                    <p className="font-bold text-gray-900 text-base">{value}</p>
                    <p className="text-gray-600 text-xs capitalize">{key}</p>
                  </div>
                ))}
              </div>

              {/* Bio */}
              
            </div>
            
          </div>
          <div className="mb-4">
                <h2 className="font-semibold text-gray-900 text-sm">Rushi Meenavalli</h2>
                <p className="text-gray-600 text-xs mt-1">
                  Digital creator 📸 | Photography enthusiast | Exploring the world one pixel at a time ✨
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors"
                >
                  Edit Profile
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors"
                >
                  Share Profile
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-100 text-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <UserGroupIcon className="w-5 h-5" />
                </motion.button>
              </div>

          {/* Story Highlights - Instagram Style */}
          <div className="mt-6">
            <div className="flex space-x-4 overflow-x-auto pb-2 -mx-2 px-2">
              {['Travel', 'Food', 'Art', 'Tech', 'Nature'].map((highlight, index) => (
                <div key={index} className="flex flex-col items-center space-y-1 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-xs font-semibold">✨</span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-600">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tabs - Instagram Style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white border-b border-gray-300"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex">
            {[
              { key: 'posts', icon: '📱' },
              { key: 'reels', icon: '🎬' },
              { key: 'tagged', icon: '🏷️' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 py-3 px-2 font-medium border-t-2 transition-colors flex items-center justify-center space-x-1 ${
                  activeTab === tab.key
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="text-sm capitalize hidden sm:inline">{tab.key}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto">
        {/* Posts Grid - Instagram Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-0.5 sm:gap-1 bg-gray-100"
        >
          {userPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * index }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square bg-white cursor-pointer group"
            >
              {post.type === 'image' ? (
                <img
                  src={post.content}
                  alt={`Post ${post.id}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative">
                  <VideoCameraIcon className="w-8 h-8 text-white" />
                  <div className="absolute bottom-2 right-2 flex items-center space-x-1 text-white">
                    <HeartIcon className="w-4 h-4" />
                    <span className="text-xs font-semibold">{post.likes}</span>
                  </div>
                </div>
              )}
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                  <div className="flex items-center space-x-1">
                    <HeartIcon className="w-5 h-5" />
                    <span className="text-sm font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ChatBubbleOvalLeftIcon className="w-5 h-5" />
                    <span className="text-sm font-semibold">{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Reel badge */}
              {post.type === 'reel' && (
                <div className="absolute top-2 left-2 flex items-center space-x-1 text-white">
                  <VideoCameraIcon className="w-3 h-3" />
                  <span className="text-xs font-semibold">REEL</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions - Bottom Navigation */}
        <div className="bg-white border-t border-gray-300 fixed bottom-0 left-0 right-0">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-around py-2">
              {profileOptions.slice(0, 3).map((option) => (
                <motion.button
                  key={option.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center space-y-1 p-2"
                >
                  <div className={`p-2 rounded-lg ${option.color} bg-gray-100`}>
                    <option.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-gray-600">{option.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add padding to account for bottom navigation */}
      <div className="h-16"></div>
    </div>
  );
};

// Add missing icon
const ChatBubbleOvalLeftIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export default ProfilePage;