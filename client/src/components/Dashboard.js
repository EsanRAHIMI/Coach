// client/src/components/Dashboard.js
import React, { useState } from 'react';
import ChatInterface from './ChatInterface';
import AnalyzeInterface from './AnalyzeInterface';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <div className="flex border-b border-gray-200">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'chat'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('chat')}
          >
            Practice Chat
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'analyze'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('analyze')}
          >
            Analyze Message
          </button>
        </div>
      </div>

      {activeTab === 'chat' ? <ChatInterface /> : <AnalyzeInterface />}
    </div>
  );
};

export default Dashboard;