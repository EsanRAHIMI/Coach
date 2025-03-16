// client/src/components/ChatMessage.js
import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';

const ChatMessage = ({ message, isUser, timestamp, feedback }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  
  const formattedTime = timestamp ? new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  }) : '';
  
  return (
    <div className={`my-3 ${isUser ? 'flex justify-end' : 'flex justify-start'}`}>
      <div className={`relative p-3 rounded-lg max-w-3/4 ${
        isUser 
          ? 'bg-blue-600 text-white' 
          : 'bg-white border border-gray-200 text-gray-800'
      }`}>
        <p className="whitespace-pre-line">{message}</p>
        
        <div className={`flex mt-1 text-xs ${isUser ? 'text-blue-200' : 'text-gray-500'}`}>
          <span>{formattedTime}</span>
          
          {!isUser && (
            <div className="ml-2 flex items-center">
              <button 
                onClick={() => setShowFeedback(!showFeedback)}
                className="hover:text-blue-500 flex items-center"
              >
                <MessageSquare size={12} className="mr-1" />
                <span>Feedback</span>
              </button>
            </div>
          )}
        </div>
        
        {showFeedback && !feedbackSubmitted && !isUser && (
          <div className="absolute -bottom-14 left-0 bg-white border border-gray-200 rounded-md p-2 shadow-md z-10 flex items-center">
            <span className="text-xs text-gray-500 mr-2">Was this helpful?</span>
            <button 
              onClick={() => setFeedbackSubmitted(true)}
              className="p-1 hover:bg-green-100 rounded-full"
              title="Helpful"
            >
              <ThumbsUp size={16} className="text-green-600" />
            </button>
            <button 
              onClick={() => setFeedbackSubmitted(true)}
              className="p-1 hover:bg-red-100 rounded-full ml-1"
              title="Not helpful"
            >
              <ThumbsDown size={16} className="text-red-600" />
            </button>
          </div>
        )}
        
        {feedbackSubmitted && !isUser && (
          <div className="mt-1">
            <span className="text-xs text-green-500">Thanks for your feedback!</span>
          </div>
        )}
        
        {feedback && !isUser && (
          <div className="mt-2 p-2 bg-blue-50 rounded border border-blue-100">
            <h4 className="text-xs font-medium text-blue-700 mb-1">Communication Tips</h4>
            <p className="text-xs text-gray-700">{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;