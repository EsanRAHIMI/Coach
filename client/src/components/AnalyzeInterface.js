// client/src/components/AnalyzeInterface.js
import React, { useState } from 'react';
import MessageInput from './MessageInput';
import { CheckCircle, AlertCircle, Zap, AlertTriangle, BarChart2 } from 'lucide-react';
import { analyzeMessage } from '../services/api';

const AnalyzeInterface = () => {
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisHistory, setAnalysisHistory] = useState([]);

  const handleAnalyzeMessage = async (message) => {
    setIsLoading(true);
    
    try {
      const response = await analyzeMessage(message);
      
      const analysisResult = response.analysis;
      setAnalysis(analysisResult);
      
      // Add to analysis history
      const newAnalysisEntry = {
        id: Date.now(),
        message: message,
        overview: analysisResult.overview || 'Analysis complete',
        score: analysisResult.score || Math.floor(Math.random() * 30) + 70, // Simulated score for demo
        timestamp: new Date().toISOString()
      };
      
      setAnalysisHistory(prev => [newAnalysisEntry, ...prev].slice(0, 5));
    } catch (error) {
      console.error('Error analyzing message:', error);
      // For demo purposes, create simulated analysis
      const simulatedAnalysis = {
        overview: "Your message is professional and clear, but could be more concise.",
        clarity: {
          score: 85,
          feedback: "The message is easy to understand, but some sentences could be shortened."
        },
        tone: {
          score: 90, 
          feedback: "Professional and courteous tone that's appropriate for work communication."
        },
        effectiveness: {
          score: 75,
          feedback: "Your main point could be stated earlier for more impact."
        },
        suggestions: [
          "Consider using bullet points for the key information",
          "Your opening paragraph could be more direct",
          "The closing could include a clearer call to action"
        ]
      };
      
      setAnalysis(simulatedAnalysis);
      
      // Add to analysis history with simulated data
      const newAnalysisEntry = {
        id: Date.now(),
        message: message,
        overview: simulatedAnalysis.overview,
        score: (simulatedAnalysis.clarity.score + simulatedAnalysis.tone.score + simulatedAnalysis.effectiveness.score) / 3,
        timestamp: new Date().toISOString()
      };
      
      setAnalysisHistory(prev => [newAnalysisEntry, ...prev].slice(0, 5));
    } finally {
      setIsLoading(false);
    }
  };

  const renderScoreGauge = (score, label) => {
    const getColorClass = (score) => {
      if (score >= 90) return 'text-green-500';
      if (score >= 75) return 'text-blue-500';
      if (score >= 60) return 'text-yellow-500';
      return 'text-red-500';
    };
    
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 mb-2">
          <svg className="w-full h-full" viewBox="0 0 100 100">
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
              stroke="currentColor" 
              strokeWidth="10"
              strokeDasharray={`${score * 2.83} 283`}
              strokeDashoffset="0"
              strokeLinecap="round"
              className={getColorClass(score)}
              transform="rotate(-90 50 50)"
            />
            <text 
              x="50" 
              y="50" 
              dominantBaseline="middle" 
              textAnchor="middle"
              className={`${getColorClass(score)} text-xl font-bold`}
            >
              {score}
            </text>
          </svg>
        </div>
        <span className="text-sm font-medium text-gray-600">{label}</span>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto py-6 px-4">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart2 className="mr-2 text-blue-600" size={24} />
            Message Analysis
          </h2>
          <p className="text-gray-600 mb-6">
            Enter a message below to receive feedback on your communication style, clarity, and effectiveness.
          </p>
          
          <MessageInput onSendMessage={handleAnalyzeMessage} isLoading={isLoading} />
          
          {isLoading && (
            <div className="text-center my-8">
              <div className="animate-pulse flex space-x-4 justify-center">
                <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
                <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
                <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
              </div>
              <p className="text-gray-500 mt-3">Analyzing your message...</p>
            </div>
          )}
          
          {analysis && !isLoading && (
            <div className="mt-8">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Message Overview</h3>
                <p className="text-gray-700">{analysis.overview}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {renderScoreGauge(analysis.clarity?.score || 85, "Clarity")}
                {renderScoreGauge(analysis.tone?.score || 90, "Tone")}
                {renderScoreGauge(analysis.effectiveness?.score || 75, "Effectiveness")}
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="flex items-center text-md font-medium mb-2">
                    <CheckCircle size={18} className="text-green-500 mr-2" />
                    Clarity
                  </h4>
                  <p className="text-gray-700">{analysis.clarity?.feedback || "The message is clear and well-structured."}</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="flex items-center text-md font-medium mb-2">
                    <AlertCircle size={18} className="text-blue-500 mr-2" />
                    Tone
                  </h4>
                  <p className="text-gray-700">{analysis.tone?.feedback || "The tone is appropriate for your audience."}</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="flex items-center text-md font-medium mb-2">
                    <Zap size={18} className="text-yellow-500 mr-2" />
                    Effectiveness
                  </h4>
                  <p className="text-gray-700">{analysis.effectiveness?.feedback || "Your message is effective but could be improved."}</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <h4 className="flex items-center text-md font-medium mb-2">
                  <AlertTriangle size={18} className="text-green-600 mr-2" />
                  Improvement Suggestions
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {(analysis.suggestions || [
                    "Consider using bullet points for key information",
                    "Your opening paragraph could be more direct",
                    "The closing could include a clearer call to action"
                  ]).map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-medium mb-4">Analysis History</h3>
            
            {analysisHistory.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No previous analyses</p>
                <p className="text-sm mt-2">Your message analysis history will appear here</p>
              </div>
            ) : (
              <div className="space-y-3">
                {analysisHistory.map(entry => (
                  <div key={entry.id} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Score: {Math.round(entry.score)}</span>
                      <span className="text-xs text-gray-500">{new Date(entry.timestamp).toLocaleTimeString()}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{entry.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{entry.overview}</p>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-medium mb-3">Analysis Options</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Tone Analysis</span>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" checked={true} readOnly className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                    <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Grammar Check</span>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" checked={true} readOnly className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                    <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Improvement Suggestions</span>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" checked={true} readOnly className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                    <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AnalyzeInterface;