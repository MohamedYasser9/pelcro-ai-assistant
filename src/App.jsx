import React from 'react';
import Sidebar from './components/Sidebar';
import PelcroLogo from './components/PelcroLogo';
import ChatbotInput from './components/ChatbotInput';
import './index.css';  // Your global CSS styles

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white">
        {/* Pelcro logo in center */}
        <div className="flex flex-col items-center justify-center h-2/3">
          <PelcroLogo />

          <h1 className="text-gray-700 text-xl font-semibold mt-4">Talk Data to Me</h1>
          <p className="text-gray-500 mt-2">Choose a prompt below or write your own to start chatting with Pelcro AI</p>

          {/* Action buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="bg-gray-100 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
              Know more about Pelcro
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
             Pelcro's AI
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
             Why Pelcro?
            </button>
          </div>
        </div>

        {/* Chatbot Input Area */}
        <div className="w-full px-8 py-4 bg-gray-50 border-t border-gray-200">
          <ChatbotInput />
        </div>
      </div>
    </div>
  );
};

export default App;
