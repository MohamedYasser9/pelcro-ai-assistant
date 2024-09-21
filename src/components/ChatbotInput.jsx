import React from 'react';

const ChatbotInput = () => {
  return (
    <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
      <input
        type="text"
        placeholder="Ask AI a question or make a request..."
        className="flex-grow outline-none text-sm bg-transparent"
      />
      <button className="ml-4 text-gray-500 hover:text-black">
        <i className="fas fa-paperclip"></i>
      </button>
      <button className="ml-2 bg-black text-white p-2 rounded-full">
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default ChatbotInput;
