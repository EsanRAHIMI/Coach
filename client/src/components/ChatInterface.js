// client/src/components/ChatInterface.js
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ChatMessage from './ChatMessage';
import MessageInput from './MessageInput';
import { Mic, MicOff, HelpCircle, MessageSquare, AlertTriangle } from 'lucide-react';

const ChatInterface = () => {
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const chatContainerRef = useRef(null);
  
  // Initial greeting message
  useEffect(() => {
    const welcomeMessage = {
      content: "👋 Hi there! I'm your AI Communication Coach. I can help you practice conversations and improve your communication skills. What would you like to practice today?",
      role: 'assistant',
      timestamp: new Date().toISOString()
    };
    setConversation([welcomeMessage]);
  }, []);

  const handleSendMessage = async (message) => {
    // Add user message to conversation
    const userMessage = { 
      content: message, 
      role: 'user',
      timestamp: new Date().toISOString()
    };
    setConversation(prev => [...prev, userMessage]);
    
    setIsLoading(true);
    
    try {
      // Fixed API endpoint to use the correct port (5001)
      const response = await axios.post('http://localhost:5001/api/chat', {
        message,
        conversation: conversation.map(msg => ({ role: msg.role, content: msg.content }))
      });
      
      // Add assistant response to conversation
      const assistantMessage = { 
        content: response.data.reply, 
        role: response.data.role || 'assistant',
        timestamp: new Date().toISOString(),
        feedback: response.data.feedback || null
      };
      
      setConversation(prev => [...prev, assistantMessage]);
      
      // Generate practice suggestions based on the conversation
      if (conversation.length > 2) {
        setSuggestions([
          "Try using more active voice in your responses",
          "Consider adding more specific details to make your point clearer",
          "Practice expressing empathy in your communication"
        ]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message
      const errorMessage = { 
        content: 'Sorry, there was an error processing your message. Please try again.', 
        role: 'system',
        timestamp: new Date().toISOString()
      };
      setConversation(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleRecording = () => {
    // This would integrate with a real speech-to-text API
    setIsRecording(!isRecording);
    
    if (isRecording) {
      // This is where you'd process the recorded audio
      // For now, we'll simulate it with a placeholder message
      setTimeout(() => {
        handleSendMessage("This is a simulated voice message that would come from your microphone recording.");
      }, 1000);
    }
  };

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <div className="bg-white rounded-lg shadow-md p-4 h-[600px] flex flex-col">
          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <div className="flex items-start space-x-2">
              <HelpCircle size={20} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-gray-800">Practice Scenario</h3>
                <p className="text-gray-600 text-sm">Practice professional communication for job interviews, customer service, or daily workplace interactions.</p>
              </div>
            </div>
          </div>
          
          <div 
            className="flex-grow overflow-y-auto mb-4 p-3 bg-gray-50 rounded-lg"
            ref={chatContainerRef}
          >
            {conversation.map((msg, index) => (
              <ChatMessage
                key={index}
                message={msg.content}
                isUser={msg.role === 'user'}
                timestamp={msg.timestamp}
                feedback={msg.feedback}
              />
            ))}
            
            {isLoading && (
              <div className="flex items-center justify-center p-4">
                <div className="animate-pulse flex space-x-4">
                  <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                  <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                  <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <MessageInput 
              onSendMessage={handleSendMessage} 
              isLoading={isLoading} 
            />
            
            <button
              onClick={toggleRecording}
              className={`absolute right-16 bottom-4 p-2 rounded-full ${
                isRecording 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title={isRecording ? "Stop recording" : "Record voice message"}
            >
              {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-4 h-[600px] flex flex-col">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <MessageSquare size={18} className="text-blue-600 mr-2" />
            Coaching Tips
          </h3>
          
          {suggestions.length > 0 ? (
            <div className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-gray-700">{suggestion}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-grow flex items-center justify-center text-center p-4">
              <div className="text-gray-500">
                <AlertTriangle size={32} className="mx-auto mb-2 text-yellow-500" />
                <p>Continue your conversation to receive personalized communication tips</p>
              </div>
            </div>
          )}
          
          <div className="mt-auto pt-4 border-t border-gray-200">
            <h4 className="font-medium mb-2">Practice Scenarios</h4>
            <div className="space-y-2">
              <button className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded text-sm transition-colors">
                ✉️ Customer Service Response
              </button>
              <button className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded text-sm transition-colors">
                👔 Job Interview Preparation
              </button>
              <button className="w-full text-left p-2 bg-gray-50 hover:bg-gray-100 rounded text-sm transition-colors">
                🤝 Negotiation Skills
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;