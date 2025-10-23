// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   MagnifyingGlassIcon,
//   PhoneIcon,
//   VideoCameraIcon,
//   EllipsisVerticalIcon,
//   CheckIcon,
//   CheckBadgeIcon,
//   ArrowLeftIcon,
//   PaperAirplaneIcon,
//   XMarkIcon,
//   CameraIcon,
//   MicrophoneIcon,
//   FaceSmileIcon
// } from '@heroicons/react/24/outline';

// // Individual Chat Item Component
// const ChatItem = ({ chat, isActive, onClick }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       className={`p-3 lg:p-4 border-b border-gray-100 cursor-pointer transition-colors ${
//         isActive ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'
//       }`}
//       onClick={onClick}
//     >
//       <div className="flex items-center space-x-3">
//         {/* Avatar with Online Indicator */}
//         <div className="relative">
//           <motion.img
//             whileHover={{ scale: 1.1 }}
//             src={chat.avatar}
//             alt={chat.name}
//             className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
//           />
//           {chat.isOnline && (
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               className="absolute bottom-0 right-0 w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full border-2 border-white"
//             />
//           )}
//         </div>

//         {/* Chat Info */}
//         <div className="flex-1 min-w-0">
//           <div className="flex items-center justify-between mb-1">
//             <h3 className="font-semibold text-gray-900 text-sm lg:text-base truncate">{chat.name}</h3>
//             <span className="text-xs text-gray-500 whitespace-nowrap">
//               {chat.lastMessageTime}
//             </span>
//           </div>
          
//           <div className="flex items-center justify-between">
//             <p className={`text-xs lg:text-sm truncate ${
//               chat.unread ? 'text-gray-900 font-medium' : 'text-gray-600'
//             }`}>
//               {chat.lastMessage}
//             </p>
            
//             {/* Message Status Indicators */}
//             <div className="flex items-center space-x-1 ml-2">
//               {chat.unread && (
//                 <motion.span 
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="w-2 h-2 bg-blue-500 rounded-full"
//                 />
//               )}
//               {chat.lastMessageStatus === 'sent' && (
//                 <CheckIcon className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" />
//               )}
//               {chat.lastMessageStatus === 'delivered' && (
//                 <CheckBadgeIcon className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" />
//               )}
//               {chat.lastMessageStatus === 'read' && (
//                 <CheckBadgeIcon className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // Chat Detail Component
// const ChatDetail = ({ chat, onBack }) => {
//   const [message, setMessage] = useState('');
//   const [isRecording, setIsRecording] = useState(false);

//   const messages = [
//     { id: 1, text: "Hey there! How are you?", time: "10:30 AM", isMe: false, status: 'read' },
//     { id: 2, text: "I'm good! Just working on some projects. How about you?", time: "10:31 AM", isMe: true, status: 'read' },
//     { id: 3, text: "Same here! Want to catch up later?", time: "10:32 AM", isMe: false, status: 'read' },
//     { id: 4, text: "Sure, let's meet at 6 PM?", time: "10:33 AM", isMe: true, status: 'delivered' },
//     { id: 5, text: "Perfect! See you then 👋", time: "10:34 AM", isMe: false, status: 'read' },
//   ];

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       // Handle send message logic here
//       setMessage('');
//     }
//   };

//   const toggleRecording = () => {
//     setIsRecording(!isRecording);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="h-full flex flex-col bg-white"
//     >
//       {/* Chat Header */}
//       <div className="p-3 lg:p-4 border-b border-gray-200 bg-white flex-shrink-0">
//         <div className="flex items-center space-x-0 md:space-x-3">
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={onBack}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <ArrowLeftIcon className="w-5 h-5 text-gray-600" />
//           </motion.button>
          
//           <motion.img
//             whileHover={{ scale: 1.1 }}
//             src={chat.avatar}
//             alt={chat.name}
//             className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover mr-2"
//           />
          
//           <div className="flex-1">
//             <h2 className="font-semibold text-gray-900 text-sm lg:text-base">{chat.name}</h2>
//             <p className="text-xs text-green-500">Online</p>
//           </div>
          
//           <div className="flex items-center space-x-1 lg:space-x-2">
//             <motion.button 
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//             >
//               <PhoneIcon className="w-5 h-5 text-gray-600" />
//             </motion.button>
//             <motion.button 
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//             >
//               <VideoCameraIcon className="w-5 h-5 text-gray-600" />
//             </motion.button>
//             <motion.button 
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//             >
//               <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Messages Area */}
//       <div className="flex-1 overflow-y-auto p-3 lg:p-4 bg-gray-50">
//         <div className="space-y-3 lg:space-y-4">
//           {messages.map((msg) => (
//             <motion.div
//               key={msg.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: msg.id * 0.1 }}
//               className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className={`max-w-[80%] lg:max-w-md px-3 py-2 lg:px-4 lg:py-2 rounded-2xl ${
//                   msg.isMe
//                     ? 'bg-blue-500 text-white rounded-br-none'
//                     : 'bg-white text-gray-900 rounded-bl-none border border-gray-200'
//                 }`}
//               >
//                 <p className="text-sm lg:text-base">{msg.text}</p>
//                 <div className={`flex items-center justify-end space-x-1 mt-1 ${
//                   msg.isMe ? 'text-blue-200' : 'text-gray-500'
//                 }`}>
//                   <span className="text-xs">{msg.time}</span>
//                   {msg.isMe && (
//                     msg.status === 'sent' ? (
//                       <CheckIcon className="w-3 h-3" />
//                     ) : msg.status === 'delivered' ? (
//                       <CheckBadgeIcon className="w-3 h-3" />
//                     ) : (
//                       <CheckBadgeIcon className="w-3 h-3 text-white" />
//                     )
//                   )}
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Message Input */}
//       <div className="p-3 lg:p-4 border-t border-gray-200 bg-white flex-shrink-0">
//         <div className="flex items-center space-x-2">
//           {/* Attachment Button */}
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             <CameraIcon className="w-5 h-5" />
//           </motion.button>

//           {/* Message Input */}
//           <div className="flex-1 relative">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type a message..."
//               className="w-full border border-gray-300 rounded-full px-4 py-2 lg:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//             />
//             <motion.button 
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//             >
//               <FaceSmileIcon className="w-5 h-5" />
//             </motion.button>
//           </div>

//           {/* Send/Record Button */}
//           {message.trim() ? (
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={handleSendMessage}
//               className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
//             >
//               <PaperAirplaneIcon className="w-5 h-5" />
//             </motion.button>
//           ) : (
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={toggleRecording}
//               className={`p-2 rounded-full transition-colors ${
//                 isRecording ? 'bg-red-500 text-white' : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               <MicrophoneIcon className="w-5 h-5" />
//             </motion.button>
//           )}
//         </div>

//         {/* Recording Indicator */}
//         <AnimatePresence>
//           {isRecording && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="mt-2 p-2 bg-red-50 rounded-lg flex items-center justify-between"
//             >
//               <div className="flex items-center space-x-2">
//                 <motion.div
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{ duration: 1, repeat: Infinity }}
//                   className="w-3 h-3 bg-red-500 rounded-full"
//                 />
//                 <span className="text-red-600 text-sm">Recording...</span>
//               </div>
//               <button 
//                 onClick={toggleRecording}
//                 className="text-red-600 text-sm font-semibold"
//               >
//                 Stop
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// // Calls History Component
// const CallsHistory = ({ onBack }) => {
//   const calls = [
//     { id: 1, name: "Sarah Johnson", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face", type: "video", time: "2 hours ago", missed: false, outgoing: true },
//     { id: 2, name: "Mike Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", type: "voice", time: "5 hours ago", missed: true, outgoing: false },
//     { id: 3, name: "Emma Davis", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", type: "voice", time: "1 day ago", missed: false, outgoing: false },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="h-full flex flex-col bg-white"
//     >
//       <div className="p-4 border-b border-gray-200">
//         <div className="flex items-center space-x-3">
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={onBack}
//             className="p-2 hover:bg-gray-100 rounded-full"
//           >
//             <ArrowLeftIcon className="w-5 h-5 text-gray-600" />
//           </motion.button>
//           <h2 className="font-semibold text-gray-900">Calls History</h2>
//         </div>
//       </div>

//       <div className="flex-1 overflow-y-auto">
//         {calls.map((call, index) => (
//           <motion.div
//             key={call.id}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{ scale: 1.02 }}
//             className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
//           >
//             <div className="flex items-center space-x-3">
//               <motion.img
//                 whileHover={{ scale: 1.1 }}
//                 src={call.avatar}
//                 alt={call.name}
//                 className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
//               />
              
//               <div className="flex-1">
//                 <div className="flex items-center justify-between mb-1">
//                   <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{call.name}</h3>
//                   <span className="text-xs text-gray-500">{call.time}</span>
//                 </div>
                
//                 <div className="flex items-center space-x-2">
//                   {call.type === 'video' ? (
//                     <VideoCameraIcon className={`w-4 h-4 ${
//                       call.missed ? 'text-red-500' : 'text-gray-500'
//                     }`} />
//                   ) : (
//                     <PhoneIcon className={`w-4 h-4 ${
//                       call.missed ? 'text-red-500' : 'text-gray-500'
//                     }`} />
//                   )}
                  
//                   <span className={`text-sm ${
//                     call.missed ? 'text-red-500' : 'text-gray-600'
//                   }`}>
//                     {call.missed ? 'Missed' : call.outgoing ? 'Outgoing' : 'Incoming'} call
//                   </span>
//                 </div>
//               </div>
              
//               <motion.button 
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="p-2 hover:bg-gray-100 rounded-full"
//               >
//                 {call.type === 'video' ? (
//                   <VideoCameraIcon className="w-5 h-5 text-gray-600" />
//                 ) : (
//                   <PhoneIcon className="w-5 h-5 text-gray-600" />
//                 )}
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// // Main ChatBox Component
// const ChatBox = ({ onClose }) => {
//   const [activeView, setActiveView] = useState('chats');
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');

// const chats = [
//   {
//     id: 1,
//     name: "Manish Ravella",
//     avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "mama eda..?",
//     lastMessageTime: "10:30 AM",
//     unread: 3,
//     lastMessageStatus: "delivered",
//     isOnline: true
//   },
//   {
//     id: 2,
//     name: "Mike Bhai",
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "Let's meet tomorrow",
//     lastMessageTime: "Yesterday",
//     unread: 0,
//     lastMessageStatus: "read",
//     isOnline: false
//   },
//   {
//     id: 3,
//     name: "Punto",
//     avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "rushi im near circle",
//     lastMessageTime: "2 days ago",
//     unread: 1,
//     lastMessageStatus: "sent",
//     isOnline: true
//   },
//   {
//     id: 4,
//     name: "Rohith",
//     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "pick up the call",
//     lastMessageTime: "1 week ago",
//     unread: 0,
//     lastMessageStatus: "read",
//     isOnline: false
//   },
//   {
//     id: 5,
//     name: "Sneha Reddy",
//     avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "బిర్యాని ఎలా ఉంది? 😋",
//     lastMessageTime: "11:45 AM",
//     unread: 2,
//     lastMessageStatus: "delivered",
//     isOnline: true
//   },
//   {
//     id: 6,
//     name: "Arjun Kumar",
//     avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "మూవీ కి వద్దామా రా? 🎬",
//     lastMessageTime: "Yesterday",
//     unread: 0,
//     lastMessageStatus: "read",
//     isOnline: true
//   },
//   {
//     id: 7,
//     name: "Priya Sharma",
//     avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "చీర్లు ఎలా ఉన్నాయి? 👗",
//     lastMessageTime: "3 days ago",
//     unread: 1,
//     lastMessageStatus: "sent",
//     isOnline: false
//   },
//   {
//     id: 8,
//     name: "Rajesh Babu",
//     avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "బైక్ సర్వీస్ చేయించాలి 🏍️",
//     lastMessageTime: "4 days ago",
//     unread: 0,
//     lastMessageStatus: "read",
//     isOnline: false
//   },
//   {
//     id: 9,
//     name: "Lakshmi Nair",
//     avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "పూజ కి రావాలి 🙏",
//     lastMessageTime: "1 week ago",
//     unread: 0,
//     lastMessageStatus: "read",
//     isOnline: false
//   },
//   {
//     id: 10,
//     name: "Vikram Singh",
//     avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "పార్టీ కి ప్లాన్స్ ఏంటి? 🎉",
//     lastMessageTime: "2 weeks ago",
//     unread: 0,
//     lastMessageStatus: "read",
//     isOnline: false
//   },
//   {
//     id: 11,
//     name: "Anjali Patel",
//     avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "చాయ్ కి వస్తావా? ☕",
//     lastMessageTime: "Just now",
//     unread: 0,
//     lastMessageStatus: "sent",
//     isOnline: true
//   },
//   {
//     id: 12,
//     name: "Karthik Iyer",
//     avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "ప్రొజెక్ట్ పూర్తి అయ్యిందా? 💼",
//     lastMessageTime: "5 minutes ago",
//     unread: 1,
//     lastMessageStatus: "delivered",
//     isOnline: true
//   },
//   {
//     id: 13,
//     name: "Divya Menon",
//     avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "ఫోటోస్ ఎలా వచ్చినాయి? 📸",
//     lastMessageTime: "1 hour ago",
//     unread: 0,
//     lastMessageStatus: "read",
//     isOnline: false
//   },
//   {
//     id: 14,
//     name: "Suresh Goud",
//     avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "బస్ ఎక్కడ ఉంది? 🚌",
//     lastMessageTime: "3 hours ago",
//     unread: 2,
//     lastMessageStatus: "delivered",
//     isOnline: true
//   },
//   {
//     id: 15,
//     name: "Meera Krishnan",
//     avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
//     lastMessage: "గానం ప్రాక్టీస్ ఉందా? 🎵",
//     lastMessageTime: "Yesterday",
//     unread: 0,
//     lastMessageStatus: "read",
//     isOnline: false
//   }
// ];

//   const filteredChats = chats.filter(chat =>
//     chat.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleChatClick = (chat) => {
//     setSelectedChat(chat);
//   };

//   const handleBackToChats = () => {
//     setSelectedChat(null);
//   };

//   return (
//     <div className="h-full flex flex-col bg-white border-l border-gray-200">
//       {/* Header with Search and Tabs */}
//       {!selectedChat ? (
//         <div className="p-3 lg:p-4 border-b border-gray-200">
//           <div className="flex items-center justify-between mb-3">
//             <h2 className="text-xl font-bold text-gray-900">Messages</h2>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={onClose}
//               className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
//             >
//               <XMarkIcon className="w-5 h-5 text-gray-600" />
//             </motion.button>
//           </div>

//           {/* Search Bar */}
//           <div className="relative mb-3 lg:mb-4">
//             <MagnifyingGlassIcon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//             <input
//               type="text"
//               placeholder="Search messages..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-9 lg:pl-10 pr-4 py-2 text-sm lg:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>

//           {/* Tabs */}
//           <div className="flex space-x-3 lg:space-x-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setActiveView('chats')}
//               className={`px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-medium transition-colors text-sm lg:text-base ${
//                 activeView === 'chats'
//                   ? 'bg-blue-500 text-white'
//                   : 'text-gray-600 hover:bg-gray-100'
//               }`}
//             >
//               Chats
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setActiveView('calls')}
//               className={`px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-medium transition-colors text-sm lg:text-base ${
//                 activeView === 'calls'
//                   ? 'bg-blue-500 text-white'
//                   : 'text-gray-600 hover:bg-gray-100'
//               }`}
//             >
//               Calls
//             </motion.button>
//           </div>
//         </div>
//       ) : null}

//       {/* Content Area */}
//       <div className="flex-1 overflow-hidden">
//         <AnimatePresence mode="wait">
//           {selectedChat ? (
//             <motion.div
//               key="chat-detail"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//             >
//               <ChatDetail chat={selectedChat} onBack={handleBackToChats} />
//             </motion.div>
//           ) : activeView === 'chats' ? (
//             <motion.div
//               key="chats"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="h-full overflow-y-auto"
//             >
//               {filteredChats.map((chat, index) => (
//                 <motion.div
//                   key={chat.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <ChatItem
//                     chat={chat}
//                     isActive={selectedChat?.id === chat.id}
//                     onClick={() => handleChatClick(chat)}
//                   />
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             <CallsHistory key="calls" onBack={() => setActiveView('chats')} />
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default ChatBox;




import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  PhoneIcon,
  VideoCameraIcon,
  EllipsisVerticalIcon,
  CheckIcon,
  CheckBadgeIcon,
  ArrowLeftIcon,
  PaperAirplaneIcon,
  XMarkIcon,
  CameraIcon,
  MicrophoneIcon,
  FaceSmileIcon
} from '@heroicons/react/24/outline';

// Individual Chat Item Component
const ChatItem = ({ chat, isActive, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`p-3 lg:p-4 border-b border-gray-100 cursor-pointer transition-colors ${
        isActive ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        {/* Avatar with Online Indicator */}
        <div className="relative">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={chat.avatar}
            alt={chat.name}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
          />
          {chat.isOnline && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute bottom-0 right-0 w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full border-2 border-white"
            />
          )}
        </div>

        {/* Chat Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-gray-900 text-sm lg:text-base truncate">{chat.name}</h3>
            <span className="text-xs text-gray-500 whitespace-nowrap">
              {chat.lastMessageTime}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <p className={`text-xs lg:text-sm truncate ${
              chat.unread ? 'text-gray-900 font-medium' : 'text-gray-600'
            }`}>
              {chat.lastMessage}
            </p>
            
            {/* Message Status Indicators */}
            <div className="flex items-center space-x-1 ml-2">
              {chat.unread && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-blue-500 rounded-full"
                />
              )}
              {chat.lastMessageStatus === 'sent' && (
                <CheckIcon className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" />
              )}
              {chat.lastMessageStatus === 'delivered' && (
                <CheckBadgeIcon className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" />
              )}
              {chat.lastMessageStatus === 'read' && (
                <CheckBadgeIcon className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Chat Detail Component
const ChatDetail = ({ chat, onBack, onChatDetailOpen }) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  // Notify parent when chat detail opens
  useEffect(() => {
    onChatDetailOpen(true);
    
    return () => {
      onChatDetailOpen(false);
    };
  }, [onChatDetailOpen]);

  const messages = [
    { id: 1, text: "Hey there! How are you?", time: "10:30 AM", isMe: false, status: 'read' },
    { id: 2, text: "I'm good! Just working on some projects. How about you?", time: "10:31 AM", isMe: true, status: 'read' },
    { id: 3, text: "Same here! Want to catch up later?", time: "10:32 AM", isMe: false, status: 'read' },
    { id: 4, text: "Sure, let's meet at 6 PM?", time: "10:33 AM", isMe: true, status: 'delivered' },
    { id: 5, text: "Perfect! See you then 👋", time: "10:34 AM", isMe: false, status: 'read' },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle send message logic here
      setMessage('');
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const handleBack = () => {
    onChatDetailOpen(false);
    onBack();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-[100vh] flex flex-col bg-white"
    >
      {/* Chat Header */}
      <div className="p-3 lg:p-4 border-b border-gray-200 bg-white flex-shrink-0">
        <div className="flex items-center space-x-0 md:space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 text-gray-600" />
          </motion.button>
          
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={chat.avatar}
            alt={chat.name}
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover mr-2"
          />
          
          <div className="flex-1">
            <h2 className="font-semibold text-gray-900 text-sm lg:text-base">{chat.name}</h2>
            <p className="text-xs text-green-500">Online</p>
          </div>
          
          <div className="flex items-center space-x-1 lg:space-x-2">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <PhoneIcon className="w-5 h-5 text-gray-600" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <VideoCameraIcon className="w-5 h-5 text-gray-600" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <EllipsisVerticalIcon className="w-5 h-5 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 lg:p-4 bg-gray-50">
        <div className="space-y-3 lg:space-y-4">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: msg.id * 0.1 }}
              className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`max-w-[80%] lg:max-w-md px-3 py-2 lg:px-4 lg:py-2 rounded-2xl ${
                  msg.isMe
                    ? 'bg-blue-500 text-white rounded-br-none'
                    : 'bg-white text-gray-900 rounded-bl-none border border-gray-200'
                }`}
              >
                <p className="text-sm lg:text-base">{msg.text}</p>
                <div className={`flex items-center justify-end space-x-1 mt-1 ${
                  msg.isMe ? 'text-blue-200' : 'text-gray-500'
                }`}>
                  <span className="text-xs">{msg.time}</span>
                  {msg.isMe && (
                    msg.status === 'sent' ? (
                      <CheckIcon className="w-3 h-3" />
                    ) : msg.status === 'delivered' ? (
                      <CheckBadgeIcon className="w-3 h-3" />
                    ) : (
                      <CheckBadgeIcon className="w-3 h-3 text-white" />
                    )
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="p-3 lg:p-4 border-t border-gray-200 bg-white flex-shrink-0">
        <div className="flex items-center space-x-2">
          {/* Attachment Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <CameraIcon className="w-5 h-5" />
          </motion.button>

          {/* Message Input */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-full border border-gray-300 rounded-full px-4 py-2 lg:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FaceSmileIcon className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Send/Record Button */}
          {message.trim() ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleRecording}
              className={`p-2 rounded-full transition-colors ${
                isRecording ? 'bg-red-500 text-white' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <MicrophoneIcon className="w-5 h-5" />
            </motion.button>
          )}
        </div>

        {/* Recording Indicator */}
        <AnimatePresence>
          {isRecording && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 p-2 bg-red-50 rounded-lg flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-3 h-3 bg-red-500 rounded-full"
                />
                <span className="text-red-600 text-sm">Recording...</span>
              </div>
              <button 
                onClick={toggleRecording}
                className="text-red-600 text-sm font-semibold"
              >
                Stop
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Calls History Component
const CallsHistory = ({ onBack }) => {
  const calls = [
    { id: 1, name: "Sarah Johnson", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face", type: "video", time: "2 hours ago", missed: false, outgoing: true },
    { id: 2, name: "Mike Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", type: "voice", time: "5 hours ago", missed: true, outgoing: false },
    { id: 3, name: "Emma Davis", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", type: "voice", time: "1 day ago", missed: false, outgoing: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col bg-white"
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon className="w-5 h-5 text-gray-600" />
          </motion.button>
          <h2 className="font-semibold text-gray-900">Calls History</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {calls.map((call, index) => (
          <motion.div
            key={call.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={call.avatar}
                alt={call.name}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
              />
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{call.name}</h3>
                  <span className="text-xs text-gray-500">{call.time}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  {call.type === 'video' ? (
                    <VideoCameraIcon className={`w-4 h-4 ${
                      call.missed ? 'text-red-500' : 'text-gray-500'
                    }`} />
                  ) : (
                    <PhoneIcon className={`w-4 h-4 ${
                      call.missed ? 'text-red-500' : 'text-gray-500'
                    }`} />
                  )}
                  
                  <span className={`text-sm ${
                    call.missed ? 'text-red-500' : 'text-gray-600'
                  }`}>
                    {call.missed ? 'Missed' : call.outgoing ? 'Outgoing' : 'Incoming'} call
                  </span>
                </div>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                {call.type === 'video' ? (
                  <VideoCameraIcon className="w-5 h-5 text-gray-600" />
                ) : (
                  <PhoneIcon className="w-5 h-5 text-gray-600" />
                )}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Main ChatBox Component
const ChatBox = ({ onClose, onChatDetailOpen }) => {
  const [activeView, setActiveView] = useState('chats');
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

const chats = [
  {
    id: 1,
    name: "Manish Ravella",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    lastMessage: "mama eda..?",
    lastMessageTime: "10:30 AM",
    unread: 3,
    lastMessageStatus: "delivered",
    isOnline: true
  },
  {
    id: 2,
    name: "Mike Bhai",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    lastMessage: "Let's meet tomorrow",
    lastMessageTime: "Yesterday",
    unread: 0,
    lastMessageStatus: "read",
    isOnline: false
  },
  {
    id: 3,
    name: "Punto",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    lastMessage: "rushi im near circle",
    lastMessageTime: "2 days ago",
    unread: 1,
    lastMessageStatus: "sent",
    isOnline: true
  },
  {
    id: 4,
    name: "Rohith",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    lastMessage: "pick up the call",
    lastMessageTime: "1 week ago",
    unread: 0,
    lastMessageStatus: "read",
    isOnline: false
  },
  {
    id: 5,
    name: "Sneha Reddy",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    lastMessage: "బిర్యాని ఎలా ఉంది? 😋",
    lastMessageTime: "11:45 AM",
    unread: 2,
    lastMessageStatus: "delivered",
    isOnline: true
  },
  {
    id: 6,
    name: "Arjun Kumar",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    lastMessage: "మూవీ కి వద్దామా రా? 🎬",
    lastMessageTime: "Yesterday",
    unread: 0,
    lastMessageStatus: "read",
    isOnline: true
  },
  {
    id: 7,
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    lastMessage: "చీర్లు ఎలా ఉన్నాయి? 👗",
    lastMessageTime: "3 days ago",
    unread: 1,
    lastMessageStatus: "sent",
    isOnline: false
  },
  {
    id: 8,
    name: "Rajesh Babu",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    lastMessage: "బైక్ సర్వీస్ చేయించాలి 🏍️",
    lastMessageTime: "4 days ago",
    unread: 0,
    lastMessageStatus: "read",
    isOnline: false
  },
  {
    id: 9,
    name: "Lakshmi Nair",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    lastMessage: "పూజ కి రావాలి 🙏",
    lastMessageTime: "1 week ago",
    unread: 0,
    lastMessageStatus: "read",
    isOnline: false
  },
  {
    id: 10,
    name: "Vikram Singh",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    lastMessage: "పార్టీ కి ప్లాన్స్ ఏంటి? 🎉",
    lastMessageTime: "2 weeks ago",
    unread: 0,
    lastMessageStatus: "read",
    isOnline: false
  },
  {
    id: 11,
    name: "Anjali Patel",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    lastMessage: "చాయ్ కి వస్తావా? ☕",
    lastMessageTime: "Just now",
    unread: 0,
    lastMessageStatus: "sent",
    isOnline: true
  },
  {
    id: 12,
    name: "Karthik Iyer",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    lastMessage: "ప్రొజెక్ట్ పూర్తి అయ్యిందా? 💼",
    lastMessageTime: "5 minutes ago",
    unread: 1,
    lastMessageStatus: "delivered",
    isOnline: true
  },
  {
    id: 13,
    name: "Divya Menon",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    lastMessage: "ఫోటోస్ ఎలా వచ్చినాయి? 📸",
    lastMessageTime: "1 hour ago",
    unread: 0,
    lastMessageStatus: "read",
    isOnline: false
  },
  {
    id: 14,
    name: "Suresh Goud",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face",
    lastMessage: "బస్ ఎక్కడ ఉంది? 🚌",
    lastMessageTime: "3 hours ago",
    unread: 2,
    lastMessageStatus: "delivered",
    isOnline: true
  },
  {
    id: 15,
    name: "Meera Krishnan",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    lastMessage: "గానం ప్రాక్టీస్ ఉందా? 🎵",
    lastMessageTime: "Yesterday",
    unread: 0,
    lastMessageStatus: "read",
    isOnline: false
  }
];

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackToChats = () => {
    setSelectedChat(null);
  };

  return (
    <div className="h-full flex flex-col bg-white border-l border-gray-200">
      {/* Header with Search and Tabs */}
      {!selectedChat ? (
        <div className="p-3 lg:p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-gray-900">Messages</h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XMarkIcon className="w-5 h-5 text-gray-600" />
            </motion.button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-3 lg:mb-4">
            <MagnifyingGlassIcon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 lg:pl-10 pr-4 py-2 text-sm lg:text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Tabs */}
          <div className="flex space-x-3 lg:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveView('chats')}
              className={`px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-medium transition-colors text-sm lg:text-base ${
                activeView === 'chats'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Chats
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveView('calls')}
              className={`px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-medium transition-colors text-sm lg:text-base ${
                activeView === 'calls'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Calls
            </motion.button>
          </div>
        </div>
      ) : null}

      {/* Content Area */}
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {selectedChat ? (
            <motion.div
              key="chat-detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChatDetail 
                chat={selectedChat} 
                onBack={handleBackToChats} 
                onChatDetailOpen={onChatDetailOpen}
              />
            </motion.div>
          ) : activeView === 'chats' ? (
            <motion.div
              key="chats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-full overflow-y-auto"
            >
              {filteredChats.map((chat, index) => (
                <motion.div
                  key={chat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ChatItem
                    chat={chat}
                    isActive={selectedChat?.id === chat.id}
                    onClick={() => handleChatClick(chat)}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <CallsHistory key="calls" onBack={() => setActiveView('chats')} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChatBox;