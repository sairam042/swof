import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  HeartIcon, 
  ChatBubbleOvalLeftIcon, 
  PaperAirplaneIcon, 
  BookmarkIcon,
  EllipsisHorizontalIcon,
  PlayIcon,
  FaceSmileIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

// Individual Post Component with Scroll Animation
const Post = ({ post, onLike, onSave, onToggleVideo, playingVideo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [showHeart, setShowHeart] = useState(false);
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleDoubleTap = () => {
    onLike(post.id);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1000);
  };

  const comments = [
    { id: 1, user: "johndoe", text: "Amazing shot! 📸", time: "2h ago" },
    { id: 2, user: "sarahj", text: "Love this! 😍", time: "1h ago" },
    { id: 3, user: "mikec", text: "Great content! 👏", time: "45m ago" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4 lg:mb-6 overflow-hidden"
    >
      {/* Post Header */}
      <div className="flex items-center justify-between p-3 lg:p-4">
        <div className="flex items-center space-x-3">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={post.user.avatar}
            alt={post.user.name}
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover cursor-pointer"
          />
          <div>
            <p className="font-semibold text-gray-900 text-sm lg:text-base">{post.user.name}</p>
            <p className="text-gray-500 text-xs">{post.time}</p>
          </div>
        </div>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <EllipsisHorizontalIcon className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
        </motion.button>
      </div>

      {/* Post Content with Double-tap to Like */}
      <motion.div
        className="relative bg-black"
        onDoubleClick={handleDoubleTap}
        whileTap={{ scale: 0.98 }}
      >
        {post.type === "image" ? (
          <>
            <motion.img
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              src={post.content}
              alt="Post"
              className="w-full h-auto max-h-[400px] lg:max-h-[600px] object-cover cursor-pointer"
            />
            
            {/* Double-tap Heart Animation */}
            <AnimatePresence>
              {showHeart && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <HeartSolid className="w-16 h-16 lg:w-24 lg:h-24 text-white opacity-80" />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <div className="relative">
            <video
              src={post.content}
              className="w-full h-auto max-h-[400px] lg:max-h-[600px] object-cover"
              loop
              muted
              autoPlay={playingVideo === post.id}
            />
            
            {/* Double-tap Heart Animation for Reels */}
            <AnimatePresence>
              {showHeart && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <HeartSolid className="w-16 h-16 lg:w-24 lg:h-24 text-white opacity-80" />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Video Controls */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
              onClick={() => onToggleVideo(post.id)}
            >
              <AnimatePresence>
                {!playingVideo && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="bg-white bg-opacity-20 rounded-full p-2 lg:p-4 backdrop-blur-sm"
                  >
                    <PlayIcon className="w-8 h-8 lg:w-12 lg:h-12 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            
            {/* Reel Badge */}
            <div className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs lg:text-sm font-semibold">
              REEL
            </div>
            
            {/* Views for Reels */}
            {post.type === "reel" && (
              <div className="absolute bottom-3 left-3 lg:bottom-4 lg:left-4 text-white font-semibold text-sm">
                {post.views} views
              </div>
            )}
          </div>
        )}
      </motion.div>

      {/* Post Actions */}
      <div className="p-3 lg:p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3 lg:space-x-4">
            <motion.button
              variants={{
                initial: { scale: 1 },
                animate: { 
                  scale: [1, 1.3, 1],
                  transition: { duration: 0.4 }
                }
              }}
              initial="initial"
              animate={post.liked ? "animate" : "initial"}
              onClick={() => onLike(post.id)}
              className="p-1"
            >
              {post.liked ? (
                <HeartSolid className="w-6 h-6 lg:w-7 lg:h-7 text-red-500" />
              ) : (
                <HeartIcon className="w-6 h-6 lg:w-7 lg:h-7 text-gray-600" />
              )}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1"
              onClick={() => setShowComments(!showComments)}
            >
              <ChatBubbleOvalLeftIcon className="w-6 h-6 lg:w-7 lg:h-7 text-gray-600" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1"
            >
              <PaperAirplaneIcon className="w-6 h-6 lg:w-7 lg:h-7 text-gray-600" />
            </motion.button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onSave(post.id)}
            className="p-1"
          >
            <BookmarkIcon 
              className={`w-6 h-6 lg:w-7 lg:h-7 ${post.saved ? 'text-black fill-current' : 'text-gray-600'}`} 
            />
          </motion.button>
        </div>

        {/* Likes Count */}
        <p className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">
          {post.likes.toLocaleString()} likes
        </p>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-gray-900 text-sm lg:text-base">{post.user.username}</span>
          <span className="text-gray-900 ml-2 text-sm lg:text-base">{post.caption}</span>
        </div>

        {/* View Comments */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="text-gray-500 text-sm mb-2"
          onClick={() => setShowComments(!showComments)}
        >
          View all {post.comments} comments
        </motion.button>

        {/* Comments Section */}
        <AnimatePresence>
          {showComments && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2 mb-3"
            >
              {comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-start space-x-2"
                >
                  <span className="font-semibold text-gray-900 text-sm">{comment.user}</span>
                  <span className="text-gray-900 text-sm flex-1">{comment.text}</span>
                  <span className="text-gray-500 text-xs">{comment.time}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add Comment */}
        <div className="flex items-center space-x-2 mt-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FaceSmileIcon className="w-5 h-5" />
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-500 font-semibold text-sm hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!comment.trim()}
          >
            Post
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Main Feed Component
const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "Manish Ravella",
        username: "manish_r",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      type: "image",
      content: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=500&fit=crop",
      caption: "Hyderabad Biryani at its best! 🍛 #Hyderabad #Biryani #Foodie",
      likes: 2420,
      comments: 156,
      time: "2 hours ago",
      liked: false,
      saved: false
    },
    {
      id: 2,
      user: {
        name: "Mike Bhai",
        username: "mike_bhai",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      type: "reel",
      content: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
      caption: "Street food tour in Delhi! 🍢 #StreetFood #Delhi #Chaat",
      likes: 4241,
      comments: 289,
      time: "4 hours ago",
      liked: true,
      saved: true,
      views: "45.2K"
    },
    {
      id: 3,
      user: {
        name: "Punto",
        username: "punto_official",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      type: "image",
      content: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&h=500&fit=crop",
      caption: "Sunrise at Taj Mahal 🌅 #TajMahal #Agra #TravelIndia",
      likes: 1892,
      comments: 145,
      time: "6 hours ago",
      liked: false,
      saved: false
    },
    {
      id: 4,
      user: {
        name: "Priya Sharma",
        username: "priya_sharma",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      type: "reel",
      content: "https://assets.mixkit.co/videos/preview/mixkit-woman-preparing-a-traditional-indian-sweet-39759-large.mp4",
      caption: "Making traditional Diwali sweets at home! 🪔 #Diwali #Sweets #Traditional",
      likes: 3567,
      comments: 423,
      time: "8 hours ago",
      liked: true,
      saved: true,
      views: "78.9K"
    },
    {
      id: 5,
      user: {
        name: "Arjun Reddy",
        username: "arjun_reddy",
        avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
      },
      type: "image",
      content: "https://images.unsplash.com/photo-1558640476-437a2e9b7a7f?w=500&h=500&fit=crop",
      caption: "Chennai Marina Beach vibes! 🌊 #Chennai #MarinaBeach #Sunset",
      likes: 1245,
      comments: 89,
      time: "10 hours ago",
      liked: false,
      saved: false
    },
    {
      id: 6,
      user: {
        name: "Sneha Patel",
        username: "sneha_patel",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
      },
      type: "reel",
      content: "https://assets.mixkit.co/videos/preview/mixkit-indian-woman-in-traditional-dress-dancing-at-a-wedding-39758-large.mp4",
      caption: "Sangeet night at my cousin's wedding! 💃 #Wedding #Sangeet #Bollywood",
      likes: 5123,
      comments: 567,
      time: "12 hours ago",
      liked: false,
      saved: true,
      views: "92.1K"
    },
    {
      id: 7,
      user: {
        name: "Rajesh Kumar",
        username: "rajesh_k",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
      },
      type: "image",
      content: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&h=500&fit=crop",
      caption: "Authentic South Indian breakfast! 🍛 #Dosa #Idli #Breakfast",
      likes: 1876,
      comments: 234,
      time: "1 day ago",
      liked: true,
      saved: false
    },
    {
      id: 8,
      user: {
        name: "Lakshmi Nair",
        username: "lakshmi_nair",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
      },
      type: "reel",
      content: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-indian-clothing-praying-with-flower-offerings-39757-large.mp4",
      caption: "Morning prayers at Guruvayur Temple 🙏 #Temple #Kerala #Prayer",
      likes: 2890,
      comments: 178,
      time: "1 day ago",
      liked: false,
      saved: false,
      views: "56.3K"
    },
    {
      id: 9,
      user: {
        name: "Vikram Singh",
        username: "vikram_singh",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
      },
      type: "image",
      content: "https://images.unsplash.com/photo-1542662565-7e4b66bae529?w=500&h=500&fit=crop",
      caption: "Royal Enfield ride through Himalayas! 🏍️ #RoyalEnfield #Himalayas #RoadTrip",
      likes: 3456,
      comments: 267,
      time: "2 days ago",
      liked: true,
      saved: true
    },
    {
      id: 10,
      user: {
        name: "Anjali Iyer",
        username: "anjali_iyer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      type: "reel",
      content: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-doing-yoga-on-a-rooftop-at-sunset-39760-large.mp4",
      caption: "Yoga session at sunrise! 🧘‍♀️ #Yoga #Wellness #MorningRoutine",
      likes: 4123,
      comments: 345,
      time: "2 days ago",
      liked: false,
      saved: true,
      views: "67.8K"
    },
    {
      id: 11,
      user: {
        name: "Karthik Menon",
        username: "karthik_m",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      type: "image",
      content: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
      caption: "Bangalore tech park view! 🏢 #Bangalore #Tech #IT",
      likes: 1567,
      comments: 123,
      time: "3 days ago",
      liked: false,
      saved: false
    },
    {
      id: 12,
      user: {
        name: "Divya Reddy",
        username: "divya_reddy",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
      },
      type: "reel",
      content: "https://assets.mixkit.co/videos/preview/mixkit-woman-preparing-masala-chai-39761-large.mp4",
      caption: "Making authentic Masala Chai! ☕ #Chai #MasalaChai #TeaTime",
      likes: 2987,
      comments: 412,
      time: "3 days ago",
      liked: true,
      saved: false,
      views: "73.4K"
    },
    {
      id: 13,
      user: {
        name: "Rohit Sharma",
        username: "rohit_sharma",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      type: "image",
      content: "https://images.unsplash.com/photo-1594736797933-d0e6e4f6f8e6?w=500&h=500&fit=crop",
      caption: "Mumbai local train journey! 🚆 #Mumbai #LocalTrain #CityLife",
      likes: 2234,
      comments: 189,
      time: "4 days ago",
      liked: false,
      saved: true
    },
    {
      id: 14,
      user: {
        name: "Meera Krishnan",
        username: "meera_k",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      type: "reel",
      content: "https://assets.mixkit.co/videos/preview/mixkit-woman-doing-classical-indian-dance-39762-large.mp4",
      caption: "Bharatanatyam practice session! 💃 #Bharatanatyam #ClassicalDance #IndianCulture",
      likes: 3876,
      comments: 278,
      time: "4 days ago",
      liked: true,
      saved: true,
      views: "81.2K"
    },
    {
      id: 15,
      user: {
        name: "Suresh Goud",
        username: "suresh_goud",
        avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face"
      },
      type: "image",
      content: "https://images.unsplash.com/photo-1587132137056-4c6e38be536e?w=500&h=500&fit=crop",
      caption: "Golconda Fort exploration! 🏰 #Golconda #Hyderabad #History",
      likes: 1456,
      comments: 98,
      time: "5 days ago",
      liked: false,
      saved: false
    }
  ]);

  const [playingVideo, setPlayingVideo] = useState(null);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  const handleSave = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, saved: !post.saved }
        : post
    ));
  };

  const toggleVideo = (postId) => {
    setPlayingVideo(playingVideo === postId ? null : postId);
  };

  // Auto-pause videos when not in view
  useEffect(() => {
    const handleScroll = () => {
      // Simple implementation - in production, use Intersection Observer
      setPlayingVideo(null);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-2xl mx-auto pb-16 lg:pb-8 px-2 lg:px-0">
      {/* Stories Section for Mobile */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:hidden mb-4 pt-2"
      >
        <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
          {[1, 2, 3, 4, 5].map((story) => (
            <motion.div
              key={story}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center space-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full p-0.5">
                <div className="w-full h-full bg-white rounded-full p-0.5">
                  <img
                    src={`https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face`}
                    alt="Story"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <span className="text-xs text-gray-600 truncate max-w-[60px]">
                User{story}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Posts */}
      {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          onLike={handleLike}
          onSave={handleSave}
          onToggleVideo={toggleVideo}
          playingVideo={playingVideo}
        />
      ))}

      {/* Loading Animation */}
      <div className="flex justify-center items-center py-8">
        <motion.div
          className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Pull to refresh indicator */}
      <motion.div 
        className="text-center text-gray-500 text-sm mb-4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Pull to refresh
      </motion.div>
    </div>
  );
};

export default Feed;