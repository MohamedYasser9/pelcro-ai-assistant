// src/components/ChatbotBody.jsx
import React, { useEffect, useState } from 'react';
import Message from './Message';
import PelcroLogo from './PelcroLogo';
import { FaUserCog, FaLock, FaCreditCard, FaNewspaper, FaChartBar, FaPuzzlePiece } from 'react-icons/fa';

const ChatbotBody = ({ messages, onButtonClick,setShowWelcome,showWelcome }) => {
  

  useEffect(() => {
    // Check if there are any messages in local storage
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages && JSON.parse(storedMessages).length > 0) {
      setShowWelcome(false);
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever messages change
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    if (messages.length > 0) {
      setShowWelcome(false);
    }
  }, [messages]);

  return (
    <div className="flex-1  bg-transparent from-teal-50 via-cyan-100 to-teal-50 p-6 overflow-y-auto flex flex-col">
      {showWelcome ? (
        <div className="flex flex-col items-center justify-center h-full animate-fadeIn space-y-3">
          <PelcroLogo className="transform hover:scale-105 transition-transform duration-300 mb-3" />
          <h1 className="text-xl font-semibold text-teal-700 tracking-tight text-center">Pelcro AI Assistant</h1>
          <p className="text-xs text-cyan-600 font-medium text-center max-w-lg">Empowering your Pelcro experience</p>
          <p className="text-sm font-medium text-teal-600 mt-1">Choose a topic:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-2xl">
            {[
              { text: 'Subscription Management', question: 'How can I manage user subscriptions?', icon: FaUserCog },
              { text: 'User Authentication', question: 'What authentication methods does Pelcro support?', icon: FaLock },
              { text: 'Payment Processing', question: 'How does Pelcro handle secure payments?', icon: FaCreditCard },
              { text: 'Content Access', question: 'How can I control access to premium content?', icon: FaNewspaper },
              { text: 'Analytics & Reporting', question: 'What kind of analytics does Pelcro provide?', icon: FaChartBar },
              { text: 'Integration Process', question: 'How easy is it to integrate Pelcro?', icon: FaPuzzlePiece }
            ].map(({ text, question, icon: Icon }) => (
              <button
                key={text}
                onClick={() => onButtonClick(question)}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-4 rounded-lg font-bold text-sm hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition duration-300 ease-in-out shadow-md hover:shadow-xl w-full h-full flex items-center justify-center text-center"
              >
                <Icon className="mr-3" />
                <span>{text}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-3">
          {messages.map((msg, index) => (
            <Message key={index} message={msg} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatbotBody;
