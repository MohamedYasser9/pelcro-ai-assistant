
import React, { useState } from 'react';

const ChatbotInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 via-emerald-500 to-cyan-600 p-3 shadow-lg rounded-full">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 p-2 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent bg-white bg-opacity-90 placeholder-teal-600 text-teal-800 shadow-inner text-sm transition-all duration-300 ease-in-out hover:shadow-md"
            placeholder="Ask Pelcro's AI anything..."
          />
          <button
            onClick={handleSend}
            className={`p-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
              message.trim()
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 shadow-md hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
            }`}
            disabled={!message.trim()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotInput;
