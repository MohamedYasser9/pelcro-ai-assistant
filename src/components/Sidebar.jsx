
import React from 'react';
import dayjs from 'dayjs'; 

const Sidebar = ({ chats, onSelectChat, onNewChat, onDeleteChat }) => {
  const handleNewChat = () => {
    onNewChat();
  };

  return (
    <div className="w-64 bg-gradient-to-b from-teal-400 via-emerald-500 to-cyan-600 p-4 flex flex-col h-screen">
      <button
        onClick={handleNewChat}
        className="w-full bg-white text-teal-500 py-2 rounded-full mb-4 hover:bg-gray-100 transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 font-bold"
      >
        New Chat
      </button>
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {chats.map((chat, index) => (
          <div
            key={index}
            className="flex items-center justify-between cursor-pointer p-2 rounded-lg hover:bg-white hover:bg-opacity-20 mb-2 transition duration-300 ease-in-out"
          >
            <div onClick={() => onSelectChat(index)} className="flex-grow truncate">
              <div className="font-semibold text-white truncate">
                {chat.messages[0]?.text || 'Untitled Conversation'}
              </div>
              <div className="text-xs text-white text-opacity-80">
                {chat.messages[0]?.date ? dayjs(chat.messages[0].date).format('MMM D, YYYY') : 'No Date'}
              </div>
            </div>
            <button
              onClick={() => onDeleteChat(index)}
              className="text-white hover:text-red-300 ml-2 transition duration-300 ease-in-out transform hover:scale-110 flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <button className="w-full bg-white text-teal-500 py-2 rounded-full mt-4 hover:bg-gray-100 transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 font-bold">
        Exit
      </button>
    </div>
  );
};

export default Sidebar;
