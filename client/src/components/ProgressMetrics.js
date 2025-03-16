// client/src/components/ProgressMetrics.js
import React from 'react';
import { BarChart2, TrendingUp, Award, ThumbsUp } from 'lucide-react';

const ProgressMetrics = () => {
  // Sample data - in a real app, this would come from your API/backend
  const progressData = {
    clarity: {
      current: 85,
      previous: 75,
      improvement: '+10%'
    },
    tone: {
      current: 78,
      previous: 72,
      improvement: '+6%'
    },
    effectiveness: {
      current: 82,
      previous: 70,
      improvement: '+12%'
    },
    overall: {
      current: 82,
      previous: 72,
      improvement: '+10%'
    }
  };

  // Weekly activity data
  const weeklyActivity = [
    { day: 'Mon', messages: 5 },
    { day: 'Tue', messages: 8 },
    { day: 'Wed', messages: 12 },
    { day: 'Thu', messages: 6 },
    { day: 'Fri', messages: 9 },
    { day: 'Sat', messages: 3 },
    { day: 'Sun', messages: 2 }
  ];

  // Render progress card
  const renderProgressCard = (title, data, icon) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
          {icon}
        </div>
        <div className="flex items-end space-x-2">
          <p className="text-3xl font-bold">{data.current}</p>
          <p className="text-sm text-green-500 font-medium mb-1">{data.improvement}</p>
        </div>
        <div className="mt-4 bg-gray-200 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-blue-600 h-full rounded-full" 
            style={{ width: `${data.current}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Previous: {data.previous}</p>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <TrendingUp className="mr-2 text-blue-600" size={24} />
            Communication Progress
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderProgressCard("Clarity Score", progressData.clarity, <BarChart2 className="text-blue-600" size={24} />)}
            {renderProgressCard("Tone Score", progressData.tone, <ThumbsUp className="text-green-600" size={24} />)}
            {renderProgressCard("Effectiveness", progressData.effectiveness, <Award className="text-purple-600" size={24} />)}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium mb-4">Weekly Activity</h3>
          <div className="h-64 flex items-end justify-between">
            {weeklyActivity.map((day) => (
              <div key={day.day} className="flex flex-col items-center flex-1">
                <div 
                  className="bg-blue-500 hover:bg-blue-600 w-full max-w-[30px] transition-all"
                  style={{ height: `${day.messages * 5}%` }}
                ></div>
                <p className="text-xs mt-2 text-gray-600">{day.day}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-medium mb-4">Overall Score</h3>
          <div className="relative w-full h-48 flex items-center justify-center">
            <svg className="w-36 h-36" viewBox="0 0 100 100">
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="#e5e7eb" 
                strokeWidth="10"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="10"
                strokeDasharray={`${progressData.overall.current * 2.83} 283`}
                strokeDashoffset="0"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
              <text 
                x="50" 
                y="50" 
                dominantBaseline="middle" 
                textAnchor="middle"
                className="text-2xl font-bold"
                fill="#3b82f6"
              >
                {progressData.overall.current}
              </text>
            </svg>
          </div>
          <p className="text-center text-sm text-gray-600">
            You've improved by {progressData.overall.improvement} since last month!
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium mb-4">Areas to Improve</h3>
          <ul className="space-y-3">
            <li className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <p className="text-sm text-gray-700">
                Try using more active voice in your messages
              </p>
            </li>
            <li className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-gray-700">
                Add more specific details to make your points clearer
              </p>
            </li>
            <li className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
              <p className="text-sm text-gray-700">
                Use more concise sentences for better readability
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgressMetrics;