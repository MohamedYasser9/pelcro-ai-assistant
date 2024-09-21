import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContextProvider';  // Correct path to ChatContextProvider


const Sidebar = () => {
  const { chats, switchChat, createNewChat, currentChat } = useContext(ChatContext);

  return (
    <div className="w-64 bg-gray-800 text-white h-full flex flex-col">
      <div className="p-4 text-lg font-bold border-b border-gray-700">Previous Chats</div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`p-4 cursor-pointer hover:bg-gray-700 ${currentChat.id === chat.id ? 'bg-gray-700' : ''}`}
            onClick={() => switchChat(chat.id)}
          >
            {chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : 'New Chat'}
          </div>
        ))}
      </div>
      <button
        className="p-4 bg-green-500 hover:bg-green-600 text-center"
        onClick={createNewChat}
      >
        New Chat
      </button>
    </div>
  );
};

export default Sidebar;
