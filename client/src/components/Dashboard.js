// client/src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatInterface from './ChatInterface';
import AnalyzeInterface from './AnalyzeInterface';
import ProgressMetrics from './ProgressMetrics';
import { MessageCircle, BarChart2, TrendingUp } from 'lucide-react';

const Dashboard = ({ defaultTab }) => {
  const [activeTab, setActiveTab] = useState('chat');
  const navigate = useNavigate();

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Dashboard Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-800">Conversations</h3>
            <MessageCircle className="text-blue-600" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">12</p>
          <p className="text-sm text-gray-500 mt-1">Total practice sessions</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-800">Messages Analyzed</h3>
            <BarChart2 className="text-green-600" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">24</p>
          <p className="text-sm text-gray-500 mt-1">Total analyzed messages</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-800">Improvement</h3>
            <TrendingUp className="text-purple-600" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">+15%</p>
          <p className="text-sm text-gray-500 mt-1">Overall communication score</p>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="mb-6">
        <div className="flex border-b border-gray-200">
          <button
            className={`py-3 px-6 font-medium flex items-center space-x-2 ${
              activeTab === 'chat'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('chat')}
          >
            <MessageCircle size={18} />
            <span>Practice Chat</span>
          </button>
          <button
            className={`py-3 px-6 font-medium flex items-center space-x-2 ${
              activeTab === 'analyze'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('analyze')}
          >
            <BarChart2 size={18} />
            <span>Analyze Message</span>
          </button>
          <button
            className={`py-3 px-6 font-medium flex items-center space-x-2 ${
              activeTab === 'progress'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleTabChange('progress')}
          >
            <TrendingUp size={18} />
            <span>Progress</span>
          </button>
        </div>
      </div>

      {activeTab === 'chat' && <ChatInterface />}
      {activeTab === 'analyze' && <AnalyzeInterface />}
      {activeTab === 'progress' && <ProgressMetrics />}
    </div>
  );
};

export default Dashboard;