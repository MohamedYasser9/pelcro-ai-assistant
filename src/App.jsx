// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatbotHeader from './components/ChatbotHeader';
import ChatbotBody from './components/ChatbotBody';
import ChatbotInput from './components/ChatbotInput';
import Sidebar from './components/Sidebar';
import dayjs from 'dayjs'; // For formatting dates

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentChatIndex, setCurrentChatIndex] = useState(0);
  const [showChatbotBody, setShowChatbotBody] = useState(false);

  const handleSend = (message) => {
    const newMessage = { sender: 'user', text: message, date: new Date() };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    // Simulate chatbot response
    setTimeout(() => {
      const response = { sender: 'chatbot', text: message, date: new Date() };
      setMessages([...updatedMessages, response]);
    }, 1000);
  };

  const handleNewChat = () => {
    const newChat = { messages: [] };
    setShowWelcome(true);
    setChats([...chats, newChat]);
    setCurrentChatIndex(chats.length);
    setMessages([]);
    setShowChatbotBody(true);
  };

  const handleSelectChat = (index) => {
    setCurrentChatIndex(index);
    setMessages(chats[index].messages);
    setShowChatbotBody(true);
  };

  const handleDeleteChat = (index) => {
    const updatedChats = chats.filter((_, i) => i !== index);
    setChats(updatedChats);
    if (currentChatIndex === index) {
      setCurrentChatIndex(0);
      setMessages(updatedChats[0]?.messages || []);
    } else if (currentChatIndex > index) {
      setCurrentChatIndex(currentChatIndex - 1);
      setMessages(updatedChats[currentChatIndex - 1]?.messages || []);
    }
    if (updatedChats.length === 0) {
      setShowChatbotBody(false);
    }
  };

  const handleButtonClick = (buttonText) => {
    const newMessage = { sender: 'user', text: buttonText, date: new Date() };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    // Simulate chatbot response
    setTimeout(() => {
      const response = { sender: 'chatbot', text: buttonText, date: new Date() };
      setMessages([...updatedMessages, response]);
    }, 1000);
  };

  // Save chat messages to the sidebar when a message is sent
  const updateChatHistory = (messages) => {
    const updatedChats = [...chats];
    updatedChats[currentChatIndex] = { messages };
    setChats(updatedChats);
  };

  useEffect(() => {
    updateChatHistory(messages);
  }, [messages]);

  useEffect(() => {
    // Initialize with an empty chat if there are no chats
    if (chats.length === 0) {
      handleNewChat();
    }
  }, []);

  const ChatInterface = () => (
    <div className="flex h-screen">
      <Sidebar
        chats={chats}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
        onDeleteChat={handleDeleteChat}
      />
      <div className="flex-1 flex flex-col bg-gradient-to-r from-teal-50 via-cyan-100 to-teal-50">
        <ChatbotHeader onNewChat={handleNewChat} />
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-2xl flex flex-col h-full bg-transparent">
            {showChatbotBody && (
              <div className="flex-1 overflow-y-auto mb-4  bg-transparent">
                <ChatbotBody messages={messages} setShowWelcome={setShowWelcome} showWelcome={showWelcome} onButtonClick={handleButtonClick} />
              </div>
            )}
            <div className=" bg-transparent rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ChatbotInput 
                onSend={handleSend} 
                className="w-full py-3 px-6 text-teal-800 placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                placeholder="Type your message here..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Router basename="/pelcro-chatbot-assistant">
      <Routes>
        <Route path="/" element={<ChatInterface />} />
      </Routes>
    </Router>
  );
};

export default App;
