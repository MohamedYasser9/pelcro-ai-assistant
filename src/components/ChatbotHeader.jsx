
import React from 'react';
import PelcroLogo from './PelcroLogo';

const ChatbotHeader = ({ onNewChat }) => {
  return (
    <header className="bg-white p-4 shadow-lg flex items-center justify-between">
      <div className="flex items-center">
        <PelcroLogo className="h-8 w-auto" />
        <div className="text-2xl font-bold text-teal-600 ml-3 tracking-wide">AI Assistant</div>
      </div>
      <div className="flex items-center space-x-3">
        <button 
          onClick={onNewChat}
          className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white p-2 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20M2 12h20" />
          </svg>
        </button>
        <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white p-2 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default ChatbotHeader;
