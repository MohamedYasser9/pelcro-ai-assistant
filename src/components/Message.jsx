import React from 'react';

const Message = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`my-2 ${isUser ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block p-3 rounded-lg ${isUser ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
        {message.text}
      </div>
    </div>
  );
};

export default Message;
