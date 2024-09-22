
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs'; 
import { generateGeminiContent } from '../gemeniService';

const Message = ({ message }) => {
  const isUser = message.sender === 'user';
  const [aiResponse, setAiResponse] = useState('');

  useEffect(() => {
    if (!isUser) {
      generateGeminiContent(message.text)
        .then(response => {
          const generatedText = response.candidates[0].content.parts[0].text;
          setAiResponse(generatedText);
        })
        .catch(error => {
          console.error('Error generating AI response:', error);
          setAiResponse('Sorry, I encountered an error while processing your request.');
        });
    }
  }, [isUser, message.text]);

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-sm lg:max-w-lg`}>
        <div 
          className={`p-4 rounded-2xl shadow-lg ${
            isUser 
              ? 'bg-teal-500 text-white' 
              : 'bg-white text-gray-800'
          } transform hover:scale-105 transition-all duration-300 ease-in-out`}
        >
          {isUser ? message.text : (
            <div>
              <span className="font-bold text-teal-500">Pelcro AI:</span> {aiResponse || 'Thinking...'}
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
