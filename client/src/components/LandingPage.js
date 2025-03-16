// client/src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, BarChart2, TrendingUp, Award, Zap, UserPlus } from 'lucide-react';

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Master Communication with AI-Powered Coaching
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Practice conversations, get instant feedback, and track your progress with our intelligent communication coach.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/chat"
                  className="bg-white text-blue-600 hover:bg-blue-50 transition-colors px-8 py-3 rounded-lg font-semibold text-center"
                >
                  Start Practicing
                </Link>
                <Link
                  to="/dashboard"
                  className="bg-transparent hover:bg-blue-700 transition-colors border-2 border-white px-8 py-3 rounded-lg font-semibold text-center"
                >
                  View Dashboard
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/api/placeholder/500/400" 
                alt="AI Communication Coach" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Intelligent Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform offers everything you need to enhance your communication skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="p-3 bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MessageCircle size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Practice</h3>
              <p className="text-gray-600">
                Engage in realistic conversations with our AI and get real-time feedback on your communication style.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="p-3 bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BarChart2 size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Detailed Analysis</h3>
              <p className="text-gray-600">
                Get comprehensive feedback on tone, clarity, and effectiveness of your messages and communications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="p-3 bg-purple-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor your improvement over time with detailed metrics and personalized improvement suggestions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

      {/* How It Works Section */}