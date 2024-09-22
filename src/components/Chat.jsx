import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContextProvider';
import Message from './Message';  // To display individual messages

const Chat = () => {
  const { currentChat } = useContext(ChatContext);

  return (
    <div className="flex flex-col h-full p-4">
      {currentChat && currentChat.messages.length > 0 ? (
        currentChat.messages.map((message, index) => (
          <Message key={index} message={message} />
        ))
      ) : (
        <div className="text-gray-500 text-center">Start new chat!</div>
      )}
    </div>
  );
};

export default Chat;
