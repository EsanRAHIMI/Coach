// client/src/components/MessageInput.js
import React, { useState } from 'react';

const MessageInput = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex">
        <textarea
          className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`bg-primary text-white px-4 py-2 rounded-r ${
            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;