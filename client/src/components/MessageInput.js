// client/src/components/MessageInput.js
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

const MessageInput = ({ onSendMessage, isLoading, placeholder }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  // Auto resize textarea based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
      
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 bg-white overflow-hidden">
        <textarea
          ref={textareaRef}
          className="flex-grow p-3 focus:outline-none resize-none min-h-[50px] max-h-[200px]"
          placeholder={placeholder || "Type your message here..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`px-4 flex items-center justify-center self-end ${
            isLoading || !message.trim() 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-blue-600 hover:text-blue-700'
          }`}
          disabled={isLoading || !message.trim()}
        >
          <Send size={20} />
        </button>
      </div>
      
      <div className="text-xs text-gray-500 mt-1 ml-2">
        {isLoading ? 'Sending...' : 'Press Enter to send, Shift+Enter for new line'}
      </div>
    </form>
  );
};

export default MessageInput;