// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
// import Sidemenu from './components/Sidemenu';
// import ChatBox from './components/ChatBox';
// import Feed from './components/Feed';
// import ProfilePage from './components/ProfilePage';
// import StickyHeader from './components/StickyHeader';
// import MatchScreen from './components/MatchScreen';

// function App() {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [activePage, setActivePage] = useState('feed'); // 'feed', 'profile', 'match'
//   const [showMatchScreen, setShowMatchScreen] = useState(false);

//   // Landing animation on first load
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   // Close chat on mobile when clicking outside
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setIsChatOpen(true);
//       } else {
//         setIsChatOpen(false);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleHeartClick = () => {
//     setActivePage('match');
//   };

//   const handleBackFromMatch = () => {
//     setActivePage('feed');
//   };

//   if (isLoading) {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="h-screen w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center"
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ type: "spring", stiffness: 200, damping: 15 }}
//           className="text-center"
//         >
//           <motion.div
//             animate={{
//               rotate: 360,
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               rotate: { duration: 2, repeat: Infinity, ease: "linear" },
//               scale: { duration: 1, repeat: Infinity }
//             }}
//             className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl"
//           >
//             <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
//               S
//             </span>
//           </motion.div>
//           <motion.h1
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-3xl font-bold text-white mb-2"
//           >
//             SWOF
//           </motion.h1>
//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.7 }}
//             className="text-white/80 text-lg"
//           >
//             Connecting the world...
//           </motion.p>
//         </motion.div>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="flex h-screen bg-gray-100"
//     >
//       {/* Side Menu - Hide when in match screen */}
//       <AnimatePresence>
//         {activePage !== 'match' && (
//           <>
//             <div className="hidden lg:block">
//               <Sidemenu activePage={activePage} setActivePage={setActivePage} />
//             </div>
//             <div className="hidden md:block lg:hidden">
//               <Sidemenu activePage={activePage} setActivePage={setActivePage} />
//             </div>
//           </>
//         )}
//       </AnimatePresence>
      
//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Sticky Header - Only show on feed page */}
//         <AnimatePresence>
//           {activePage === 'feed' && (
//             <StickyHeader onChatClick={() => setIsChatOpen(true)} />
//           )}
//         </AnimatePresence>
        
//         <motion.div 
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="flex-1 overflow-y-auto"
//         >
//           <AnimatePresence mode="wait">
//             {activePage === 'feed' ? (
//               <motion.div
//                 key="feed"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="h-full"
//               >
//                 <Feed />
//               </motion.div>
//             ) : activePage === 'profile' ? (
//               <motion.div
//                 key="profile"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="h-full"
//               >
//                 <ProfilePage onBack={() => setActivePage('feed')} />
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="match"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="h-full"
//               >
//                 <MatchScreen onBack={handleBackFromMatch} onMatch={() => setShowMatchScreen(true)} />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </div>
      
//       {/* Chat Box - Right Sidebar - Hide when in match screen */}
//       <AnimatePresence>
//         {isChatOpen && activePage !== 'match' && (
//           <motion.div
//             initial={{ x: 300, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: 300, opacity: 0 }}
//             transition={{ type: "spring", damping: 30, stiffness: 300 }}
//             className="fixed lg:static right-0 top-0 h-full w-full max-w-md lg:max-w-none lg:w-80 z-40 lg:z-auto"
//           >
//             <div className="h-full">
//               <ChatBox onClose={() => setIsChatOpen(false)} />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Backdrop for mobile chat - Hide when in match screen */}
//       <AnimatePresence>
//         {isChatOpen && activePage !== 'match' && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsChatOpen(false)}
//             className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
//           />
//         )}
//       </AnimatePresence>

//       {/* Match Success Screen */}
//       <AnimatePresence>
//         {showMatchScreen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               className="bg-white rounded-3xl p-8 max-w-sm mx-4 text-center"
//             >
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2, type: "spring" }}
//                 className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"
//               >
//                 <HeartIcon className="w-12 h-12 text-white" />
//               </motion.div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">It's a Match!</h2>
//               <p className="text-gray-600 mb-6">You and Priya have liked each other</p>
//               <div className="flex space-x-3">
//                 <motion.button
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setShowMatchScreen(false)}
//                   className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold"
//                 >
//                   Keep Swiping
//                 </motion.button>
//                 <motion.button
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => {
//                     setShowMatchScreen(false);
//                     setIsChatOpen(true);
//                   }}
//                   className="flex-1 bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 rounded-xl font-semibold"
//                 >
//                   Say Hello
//                 </motion.button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Mobile Navigation Bar - Hide when in match screen */}
//       <AnimatePresence>
//         {activePage !== 'match' && (
//           <motion.div 
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             transition={{ delay: 0.3 }}
//             className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40"
//           >
//             <div className="flex justify-around items-center p-3">
//               <motion.button 
//                 whileTap={{ scale: 0.9 }} 
//                 className={`p-2 ${activePage === 'feed' ? 'text-blue-500' : 'text-gray-600'}`}
//                 onClick={() => setActivePage('feed')}
//               >
//                 <HomeIcon className="w-6 h-6" />
//               </motion.button>
//               <motion.button whileTap={{ scale: 0.9 }} className="p-2 text-gray-600">
//                 <SearchIcon className="w-6 h-6" />
//               </motion.button>
//               <motion.button whileTap={{ scale: 0.9 }} className="p-2 text-gray-600">
//                 <PlusCircleIcon className="w-6 h-6" />
//               </motion.button>
//               <motion.button 
//                 whileTap={{ scale: 0.9 }} 
//                 className={`p-2 ${activePage === 'match' ? 'text-red-500' : 'text-gray-600'}`}
//                 onClick={handleHeartClick}
//               >
//                 <HeartIcon className="w-6 h-6" />
//               </motion.button>
//               <motion.button 
//                 whileTap={{ scale: 0.9 }} 
//                 className={`p-2 ${activePage === 'profile' ? 'text-blue-500' : 'text-gray-600'}`}
//                 onClick={() => setActivePage('profile')}
//               >
//                 <UserIcon className="w-6 h-6" />
//               </motion.button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// // Add missing icons for mobile nav
// const HomeIcon = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
// const SearchIcon = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
// const PlusCircleIcon = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
// const HeartIcon = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
// const UserIcon = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;

// export default App;



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import Sidemenu from './components/Sidemenu';
import ChatBox from './components/ChatBox';
import Feed from './components/Feed';
import ProfilePage from './components/ProfilePage';
import StickyHeader from './components/StickyHeader';
import MatchScreen from './components/MatchScreen';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState('feed'); // 'feed', 'profile', 'match'
  const [showMatchScreen, setShowMatchScreen] = useState(false);
  const [isChatDetailOpen, setIsChatDetailOpen] = useState(false); // Add this state

  // Landing animation on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Close chat on mobile when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsChatOpen(true);
      } else {
        setIsChatOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleHeartClick = () => {
    setActivePage('match');
  };

  const handleBackFromMatch = () => {
    setActivePage('feed');
  };

  const handleChatDetailOpen = (isOpen) => {
    setIsChatDetailOpen(isOpen);
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-screen w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity }
            }}
            className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              S
            </span>
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold text-white mb-2"
          >
            SWOF
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white/80 text-lg"
          >
            Connecting the world...
          </motion.p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-screen bg-gray-100"
    >
      {/* Side Menu - Hide when in match screen */}
      <AnimatePresence>
        {activePage !== 'match' && (
          <>
            <div className="hidden lg:block">
              <Sidemenu activePage={activePage} setActivePage={setActivePage} />
            </div>
            <div className="hidden md:block lg:hidden">
              <Sidemenu activePage={activePage} setActivePage={setActivePage} />
            </div>
          </>
        )}
      </AnimatePresence>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Sticky Header - Only show on feed page */}
        <AnimatePresence>
          {activePage === 'feed' && (
            <StickyHeader onChatClick={() => setIsChatOpen(true)} />
          )}
        </AnimatePresence>
        
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 overflow-y-auto"
        >
          <AnimatePresence mode="wait">
            {activePage === 'feed' ? (
              <motion.div
                key="feed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Feed />
              </motion.div>
            ) : activePage === 'profile' ? (
              <motion.div
                key="profile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProfilePage onBack={() => setActivePage('feed')} />
              </motion.div>
            ) : (
              <motion.div
                key="match"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <MatchScreen onBack={handleBackFromMatch} onMatch={() => setShowMatchScreen(true)} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Chat Box - Right Sidebar - Hide when in match screen */}
      <AnimatePresence>
        {isChatOpen && activePage !== 'match' && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed lg:static right-0 top-0 h-full w-full max-w-md lg:max-w-none lg:w-80 z-40 lg:z-auto"
          >
            <div className="h-full">
              <ChatBox 
                onClose={() => setIsChatOpen(false)} 
                onChatDetailOpen={handleChatDetailOpen}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile chat - Hide when in match screen */}
      <AnimatePresence>
        {isChatOpen && activePage !== 'match' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsChatOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Match Success Screen */}
      <AnimatePresence>
        {showMatchScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-sm mx-4 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <HeartIcon className="w-12 h-12 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">It's a Match!</h2>
              <p className="text-gray-600 mb-6">You and Priya have liked each other</p>
              <div className="flex space-x-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMatchScreen(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold"
                >
                  Keep Swiping
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowMatchScreen(false);
                    setIsChatOpen(true);
                  }}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 rounded-xl font-semibold"
                >
                  Say Hello
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Bar - Hide when in match screen OR chat detail is open */}
      <AnimatePresence>
        {activePage !== 'match' && !isChatDetailOpen && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40"
          >
            <div className="flex justify-around items-center p-3">
              <motion.button 
                whileTap={{ scale: 0.9 }} 
                className={`p-2 ${activePage === 'feed' ? 'text-blue-500' : 'text-gray-600'}`}
                onClick={() => setActivePage('feed')}
              >
                <HomeIcon className="w-6 h-6" />
              </motion.button>
              <motion.button whileTap={{ scale: 0.9 }} className="p-2 text-gray-600">
                <SearchIcon className="w-6 h-6" />
              </motion.button>
              <motion.button whileTap={{ scale: 0.9 }} className="p-2 text-gray-600">
                <PlusCircleIcon className="w-6 h-6" />
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.9 }} 
                className={`p-2 ${activePage === 'match' ? 'text-red-500' : 'text-gray-600'}`}
                onClick={handleHeartClick}
              >
                <HeartIcon className="w-6 h-6" />
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.9 }} 
                className={`p-2 ${activePage === 'profile' ? 'text-blue-500' : 'text-gray-600'}`}
                onClick={() => setActivePage('profile')}
              >
                <UserIcon className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Add missing icons for mobile nav
const HomeIcon = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const SearchIcon = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const PlusCircleIcon = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const HeartIcon = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const UserIcon = () => <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;

export default App;