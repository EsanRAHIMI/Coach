// client/src/components/AnalyzeInterface.js
import React, { useState } from 'react';
import axios from 'axios';
import MessageInput from './MessageInput';

const AnalyzeInterface = () => {
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyzeMessage = async (message) => {
    setIsLoading(true);
    
    try {
      const response = await axios.post('http://localhost:5000/api/analyze', {
        message
      });
      
      setAnalysis(response.data.analysis);
    } catch (error) {
      console.error('Error analyzing message:', error);
      setAnalysis('Sorry, there was an error analyzing your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Message Analysis</h2>
      <p className="text-gray-600 mb-4">
        Enter a message below to receive feedback on your communication style, clarity, and effectiveness.
      </p>
      
      <MessageInput onSendMessage={handleAnalyzeMessage} isLoading={isLoading} />
      
      {isLoading && (
        <div className="text-center my-8">
          <p className="text-gray-500">Analyzing your message...</p>
        </div>
      )}
      
      {analysis && !isLoading && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium mb-2">Analysis Results:</h3>
          <div className="whitespace-pre-line">{analysis}</div>
        </div>
      )}
    </div>
  );
};

export default AnalyzeInterface;