import React from 'react';

const ChatbotHeader = () => {
  return (
    <div className="bg-white p-4 flex items-center justify-between border-b border-gray-300">
      <h1 className="text-black text-lg font-bold">Pelcro Chatbot</h1>
      <img src="https://static.wixstatic.com/media/6d3dc4_e0f1cc6e5fb642c5b5abbbcc63d0f32b~mv2.png/v1/fill/w_129,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Pelcro%20logo-01_edited.png" alt="Pelcro Logo" className="w-15 " />
    </div>
  );
};

export default ChatbotHeader;
