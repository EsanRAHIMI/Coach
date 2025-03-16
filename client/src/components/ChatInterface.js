// client/src/components/ChatInterface.js
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ChatMessage from './ChatMessage';
import MessageInput from './MessageInput';

const ChatInterface = () => {
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const handleSendMessage = async (message) => {
    // Add user message to conversation
    const userMessage = { content: message, role: 'user' };
    setConversation(prev => [...prev, userMessage]);
    
    setIsLoading(true);
    
    try {
      const response = await axios.post('http://localhost:5001/api/chat', {
        message,
        conversation: conversation.map(msg => ({ role: msg.role, content: msg.content }))
      });
      
      // Add assistant response to conversation
      const assistantMessage = { 
        content: response.data.reply, 
        role: response.data.role 
      };
      
      setConversation(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message
      const errorMessage = { 
        content: 'Sorry, there was an error processing your message. Please try again.', 
        role: 'system' 
      };
      setConversation(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-[600px] flex flex-col">
      <div className="flex-grow overflow-y-auto mb-4" ref={chatContainerRef}>
        {conversation.length === 0 ? (
          <div className="text-center text-gray-500 my-8">
            <p>Start a conversation with the AI Communication Coach</p>
            <p className="text-sm mt-2">Try asking for communication tips or start practicing your conversation skills</p>
          </div>
        ) : (
          <div className="space-y-4 p-2">
            {conversation.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.content}
                isUser={msg.role === 'user'}
              />
            ))}
            {isLoading && (
              <div className="text-center text-gray-500">
                <p>AI is thinking...</p>
              </div>
            )}
          </div>
        )}
      </div>
      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatInterface;