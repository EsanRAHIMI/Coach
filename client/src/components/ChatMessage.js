// client/src/components/ChatMessage.js
import React from 'react';

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`my-2 p-3 rounded-lg max-w-3/4 ${
      isUser 
        ? 'ml-auto bg-primary text-white' 
        : 'mr-auto bg-gray-100 text-gray-800'
    }`}>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;