import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContextProvider.jsx';

const ChatList = () => {
  const { chats, switchChat } = useContext(ChatContext);

  return (
    <ul>
      {chats.map(chat => (
        <li
          key={chat.id}
          onClick={() => switchChat(chat.id)}
          className="mb-2 hover:bg-gray-700 p-2 rounded-lg cursor-pointer"
        >
          Chat {chat.id}
        </li>
      ))}
    </ul>
  );
};

export default ChatList;
