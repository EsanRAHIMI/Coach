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
    <div className="container mx-auto py-8 px-4 mt-16">
      {/* Dashboard Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-glass backdrop-blur-md rounded-lg border border-glass-border shadow-lg p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-light">Conversations</h3>
            <MessageCircle className="text-primary" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2 text-light">12</p>
          <p className="text-sm text-light/70 mt-1">Total practice sessions</p>
        </div>
        
        <div className="bg-glass backdrop-blur-md rounded-lg border border-glass-border shadow-lg p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-light">Messages Analyzed</h3>
            <BarChart2 className="text-secondary" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2 text-light">24</p>
          <p className="text-sm text-light/70 mt-1">Total analyzed messages</p>
        </div>
        
        <div className="bg-glass backdrop-blur-md rounded-lg border border-glass-border shadow-lg p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-light">Improvement</h3>
            <TrendingUp className="text-primary" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2 text-light">+15%</p>
          <p className="text-sm text-light/70 mt-1">Overall communication score</p>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="mb-6">
        <div className="flex border-b border-glass-border">
          <button
            className={`py-3 px-6 font-medium flex items-center space-x-2 ${
              activeTab === 'chat'
                ? 'text-primary border-b-2 border-primary'
                : 'text-light/70 hover:text-light'
            }`}
            onClick={() => handleTabChange('chat')}
          >
            <MessageCircle size={18} />
            <span>Practice Chat</span>
          </button>
          <button
            className={`py-3 px-6 font-medium flex items-center space-x-2 ${
              activeTab === 'analyze'
                ? 'text-primary border-b-2 border-primary'
                : 'text-light/70 hover:text-light'
            }`}
            onClick={() => handleTabChange('analyze')}
          >
            <BarChart2 size={18} />
            <span>Analyze Message</span>
          </button>
          <button
            className={`py-3 px-6 font-medium flex items-center space-x-2 ${
              activeTab === 'progress'
                ? 'text-primary border-b-2 border-primary'
                : 'text-light/70 hover:text-light'
            }`}
            onClick={() => handleTabChange('progress')}
          >
            <TrendingUp size={18} />
            <span>Progress</span>
          </button>
        </div>
      </div>

      <div className="bg-glass backdrop-blur-md rounded-lg border border-glass-border shadow-lg p-6">
        {activeTab === 'chat' && <ChatInterface />}
        {activeTab === 'analyze' && <AnalyzeInterface />}
        {activeTab === 'progress' && <ProgressMetrics />}
      </div>
    </div>
  );
};

export default Dashboard;