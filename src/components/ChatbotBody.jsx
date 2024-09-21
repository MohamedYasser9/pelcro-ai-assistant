import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContextProvider.jsx';
import Message from './Message.jsx';

const ChatbotBody = () => {
  const { currentChat } = useContext(ChatContext);

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
      {currentChat?.messages?.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
    </div>
  );
};

export default ChatbotBody;
