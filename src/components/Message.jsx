// src/components/Message.jsx
import React from 'react';
import dayjs from 'dayjs'; // For formatting dates

const Message = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-xs lg:max-w-md`}>
        <div 
          className={`p-4 rounded-2xl shadow-lg ${
            isUser 
              ? 'bg-teal-500 text-white' 
              : 'bg-white text-gray-800'
          } transform hover:scale-105 transition-all duration-300 ease-in-out`}
        >
          {isUser ? message.text : (
            <div>
              <span className="font-bold text-teal-500">Pelcro AI:</span> {message.text}
            </div>
          )}
        </div>
        <div className="text-xs text-gray-600 mt-2 italic">
          {dayjs(message.date).format('MMM D, YYYY • h:mm A')}
        </div>
      </div>
    </div>
  );
};

export default Message;
