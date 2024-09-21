import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState({ id: Date.now(), messages: [] });

  const createNewChat = () => {
    const newChat = { id: Date.now(), messages: [] };
    setCurrentChat(newChat);
    setChats([...chats, newChat]);
  };

  const sendMessage = (text) => {
    const newMessages = [...currentChat.messages, { text, sender: 'user' }];
    const updatedChat = { ...currentChat, messages: newMessages };

    setCurrentChat(updatedChat);
    setChats(chats.map(chat => (chat.id === currentChat.id ? updatedChat : chat)));

    // Simulate AI response (this will be replaced by the real OpenAI API or Google AI)
    const botReply = { text: `Pelcro: ${text}`, sender: 'bot' };
    const finalChat = { ...updatedChat, messages: [...newMessages, botReply] };

    setCurrentChat(finalChat);
    setChats(chats.map(chat => (chat.id === currentChat.id ? finalChat : chat)));
  };

  const switchChat = (chatId) => {
    const chatToSwitch = chats.find(chat => chat.id === chatId);
    setCurrentChat(chatToSwitch);
  };

  return (
    <ChatContext.Provider value={{ chats, currentChat, sendMessage, createNewChat, switchChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
