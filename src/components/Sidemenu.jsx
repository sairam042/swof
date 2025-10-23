import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, 
  UserIcon, 
  PlusIcon, 
  VideoCameraIcon, 
  PhotoIcon,
  ChevronDownIcon,
  UsersIcon,
  BookmarkIcon,
  CogIcon,
  BellIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Sidemenu = ({ activePage, setActivePage }) => {
  const [activeItem, setActiveItem] = useState('home');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { id: 'home', icon: HomeIcon, label: 'Home', page: 'feed' },
    { id: 'profile', icon: UserIcon, label: 'Profile', page: 'profile' },
    { id: 'notifications', icon: BellIcon, label: 'Notifications', badge: 3 },
    { id: 'friends', icon: UsersIcon, label: 'Friends' },
    { id: 'saved', icon: BookmarkIcon, label: 'Saved' },
    { id: 'settings', icon: CogIcon, label: 'Settings' },
  ];

  const createItems = [
    { id: 'post', icon: PhotoIcon, label: 'Create Post', color: 'text-blue-500' },
    { id: 'reel', icon: VideoCameraIcon, label: 'Create Reel', color: 'text-purple-500' },
    { id: 'story', icon: PlusIcon, label: 'Add Story', color: 'text-pink-500' },
  ];

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const menuVariants = {
    open: {
      width: "280px",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    closed: {
      width: "80px",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    mobileOpen: {
      x: 0,
      transition: { type: "spring", damping: 30, stiffness: 300 }
    },
    mobileClosed: {
      x: "-100%",
      transition: { type: "spring", damping: 30, stiffness: 300 }
    }
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 }
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 }
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileOpen && !event.target.closest('.side-menu')) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileOpen]);

  const handleMenuItemClick = (item) => {
    setActiveItem(item.id);
    if (item.page) {
      setActivePage(item.page);
    }
    if (window.innerWidth < 1024) {
      setIsMobileOpen(false);
    }
  };

  const handleProfileClick = () => {
    setActiveItem('profile');
    setActivePage('profile');
    if (window.innerWidth < 1024) {
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
        onClick={() => setIsMobileOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Bars3Icon className="w-6 h-6 text-gray-700" />
      </motion.button>

      <AnimatePresence>
        {/* Mobile Backdrop */}
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}

        {/* Side Menu */}
        <motion.div
          className="side-menu h-screen bg-white shadow-xl border-r border-gray-200 flex flex-col fixed lg:static z-40 lg:z-auto"
          variants={menuVariants}
          initial="closed"
          animate={isMobileOpen ? "mobileOpen" : window.innerWidth >= 1024 ? "open" : "mobileClosed"}
        >
          {/* Logo and Close Button */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              variants={itemVariants}
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">S</span>
              </motion.div>
              <motion.span 
                className="text-xl font-bold text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                SWOF
              </motion.span>
            </motion.div>
            
            {/* Close button for mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XMarkIcon className="w-5 h-5 text-gray-600" />
            </motion.button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeItem === item.id
                    ? 'bg-blue-50 text-blue-600 border border-blue-100'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => handleMenuItemClick(item)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="w-6 h-6 flex-shrink-0" />
                <motion.span 
                  className="ml-4 font-medium"
                  variants={itemVariants}
                >
                  {item.label}
                </motion.span>
                {item.badge && (
                  <motion.span 
                    className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.badge}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </nav>

          {/* Create Section */}
          <div className="p-4 border-t border-gray-200">
            <motion.button
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
              onClick={() => toggleDropdown('create')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center">
                <PlusIcon className="w-6 h-6" />
                <motion.span className="ml-4" variants={itemVariants}>
                  Create
                </motion.span>
              </div>
              <motion.div
                animate={{ rotate: openDropdown === 'create' ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="w-4 h-4" />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {openDropdown === 'create' && (
                <motion.div
                  className="mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
                  variants={dropdownVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {createItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      className="w-full flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                      whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="ml-3 text-gray-700 font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <motion.button
              className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
              onClick={handleProfileClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3 text-left">
                  <motion.p className="font-semibold text-gray-900 text-sm" variants={itemVariants}>
                    Rushi
                  </motion.p>
                  <motion.p className="text-gray-500 text-xs" variants={itemVariants}>
                    @rushimeenavalli
                  </motion.p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openDropdown === 'profile' ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="w-4 h-4 text-gray-400" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Sidemenu;





// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   HomeIcon, 
//   UserIcon, 
//   PlusIcon, 
//   VideoCameraIcon, 
//   PhotoIcon,
//   ChevronDownIcon,
//   UsersIcon,
//   BookmarkIcon,
//   CogIcon,
//   BellIcon,
//   Bars3Icon,
//   XMarkIcon
// } from '@heroicons/react/24/outline';

// const Sidemenu = () => {
//   const [activeItem, setActiveItem] = useState('home');
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   const menuItems = [
//     { id: 'home', icon: HomeIcon, label: 'Home' },
//     { id: 'profile', icon: UserIcon, label: 'Profile' },
//     { id: 'notifications', icon: BellIcon, label: 'Notifications', badge: 3 },
//     { id: 'friends', icon: UsersIcon, label: 'Friends' },
//     { id: 'saved', icon: BookmarkIcon, label: 'Saved' },
//     { id: 'settings', icon: CogIcon, label: 'Settings' },
//   ];

//   const createItems = [
//     { id: 'post', icon: PhotoIcon, label: 'Create Post', color: 'text-blue-500' },
//     { id: 'reel', icon: VideoCameraIcon, label: 'Create Reel', color: 'text-purple-500' },
//     { id: 'story', icon: PlusIcon, label: 'Add Story', color: 'text-pink-500' },
//   ];

//   const toggleDropdown = (dropdown) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };

//   const menuVariants = {
//     open: {
//       width: "280px",
//       transition: { duration: 0.3, ease: "easeOut" }
//     },
//     closed: {
//       width: "80px",
//       transition: { duration: 0.3, ease: "easeOut" }
//     },
//     mobileOpen: {
//       x: 0,
//       transition: { type: "spring", damping: 30, stiffness: 300 }
//     },
//     mobileClosed: {
//       x: "-100%",
//       transition: { type: "spring", damping: 30, stiffness: 300 }
//     }
//   };

//   const itemVariants = {
//     open: { opacity: 1, x: 0 },
//     closed: { opacity: 0, x: -20 }
//   };

//   const dropdownVariants = {
//     open: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.2 }
//     },
//     closed: {
//       opacity: 0,
//       scale: 0.95,
//       transition: { duration: 0.1 }
//     }
//   };

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMobileOpen && !event.target.closest('.side-menu')) {
//         setIsMobileOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMobileOpen]);

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <motion.button
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
//         onClick={() => setIsMobileOpen(true)}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <Bars3Icon className="w-6 h-6 text-gray-700" />
//       </motion.button>

//       <AnimatePresence>
//         {/* Mobile Backdrop */}
//         {isMobileOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//             onClick={() => setIsMobileOpen(false)}
//           />
//         )}

//         {/* Side Menu */}
//         <motion.div
//           className="side-menu h-screen bg-white shadow-xl border-r border-gray-200 flex flex-col fixed lg:static z-40 lg:z-auto"
//           variants={menuVariants}
//           initial="closed"
//           animate={isMobileOpen ? "mobileOpen" : window.innerWidth >= 1024 ? "open" : "mobileClosed"}
//         >
//           {/* Logo and Close Button */}
//           <div className="p-4 border-b border-gray-200 flex items-center justify-between">
//             <motion.div 
//               className="flex items-center space-x-3"
//               variants={itemVariants}
//             >
//               <motion.div 
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
//               >
//                 <span className="text-white font-bold text-lg">S</span>
//               </motion.div>
//               <motion.span 
//                 className="text-xl font-bold text-gray-800"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 SWOF
//               </motion.span>
//             </motion.div>
            
//             {/* Close button for mobile */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setIsMobileOpen(false)}
//               className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
//             >
//               <XMarkIcon className="w-5 h-5 text-gray-600" />
//             </motion.button>
//           </div>

//           {/* Navigation Menu */}
//           <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
//             {menuItems.map((item) => (
//               <motion.button
//                 key={item.id}
//                 className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
//                   activeItem === item.id
//                     ? 'bg-blue-50 text-blue-600 border border-blue-100'
//                     : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//                 }`}
//                 onClick={() => {
//                   setActiveItem(item.id);
//                   if (window.innerWidth < 1024) {
//                     setIsMobileOpen(false);
//                   }
//                 }}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <item.icon className="w-6 h-6 flex-shrink-0" />
//                 <motion.span 
//                   className="ml-4 font-medium"
//                   variants={itemVariants}
//                 >
//                   {item.label}
//                 </motion.span>
//                 {item.badge && (
//                   <motion.span 
//                     className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1"
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ delay: 0.2 }}
//                   >
//                     {item.badge}
//                   </motion.span>
//                 )}
//               </motion.button>
//             ))}
//           </nav>

//           {/* Create Section */}
//           <div className="p-4 border-t border-gray-200">
//             <motion.button
//               className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
//               onClick={() => toggleDropdown('create')}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <div className="flex items-center">
//                 <PlusIcon className="w-6 h-6" />
//                 <motion.span className="ml-4" variants={itemVariants}>
//                   Create
//                 </motion.span>
//               </div>
//               <motion.div
//                 animate={{ rotate: openDropdown === 'create' ? 180 : 0 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <ChevronDownIcon className="w-4 h-4" />
//               </motion.div>
//             </motion.button>

//             <AnimatePresence>
//               {openDropdown === 'create' && (
//                 <motion.div
//                   className="mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
//                   variants={dropdownVariants}
//                   initial="closed"
//                   animate="open"
//                   exit="closed"
//                 >
//                   {createItems.map((item, index) => (
//                     <motion.button
//                       key={item.id}
//                       className="w-full flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
//                       whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
//                       whileTap={{ scale: 0.98 }}
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                     >
//                       <item.icon className={`w-5 h-5 ${item.color}`} />
//                       <span className="ml-3 text-gray-700 font-medium">{item.label}</span>
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* User Profile */}
//           <div className="p-4 border-t border-gray-200">
//             <motion.button
//               className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
//               onClick={() => toggleDropdown('profile')}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <div className="flex items-center">
//                 <motion.img
//                   whileHover={{ scale: 1.1 }}
//                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
//                   alt="Profile"
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div className="ml-3 text-left">
//                   <motion.p className="font-semibold text-gray-900 text-sm" variants={itemVariants}>
//                     Rushi
//                   </motion.p>
//                   <motion.p className="text-gray-500 text-xs" variants={itemVariants}>
//                     @rushimeenavalli
//                   </motion.p>
//                 </div>
//               </div>
//               <motion.div
//                 animate={{ rotate: openDropdown === 'profile' ? 180 : 0 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <ChevronDownIcon className="w-4 h-4 text-gray-400" />
//               </motion.div>
//             </motion.button>

//             <AnimatePresence>
//               {openDropdown === 'profile' && (
//                 <motion.div
//                   className="mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
//                   variants={dropdownVariants}
//                   initial="closed"
//                   animate="open"
//                   exit="closed"
//                 >
//                   <motion.button
//                     className="w-full flex items-center px-4 py-3 hover:bg-gray-50 transition-colors text-red-600 border-t border-gray-100"
//                     whileHover={{ backgroundColor: "rgba(254, 242, 242, 1)" }}
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     <span className="ml-8 font-medium">Logout</span>
//                   </motion.button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </>
//   );
// };

// export default Sidemenu;