// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LandingPage from './components/Landing/LandingPage';
import Footer from './components/Footer';
import ChatInterface from './components/ChatInterface';
import AnalyzeInterface from './components/AnalyzeInterface';
import ProgressMetrics from './components/ProgressMetrics';
import MessageInput from './components/MessageInput';
import ChatMessage from './components/ChatMessage';
import './styles/index.css';


function App() {
  // Get the base URL from environment variables or default to '/'
  const baseUrl = process.env.PUBLIC_URL || '';
  
  return (
    <Router basename={baseUrl}>
      <div className="flex flex-col min-h-screen bg-dark">
        <Header />
        <main className="flex-grow flex flex-col pt-16 mt-2"> {/* Added pt-16 for padding-top and mt-2 for margin-top */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<ChatInterface />} />
            <Route path="/analyze" element={<AnalyzeInterface />} />
            <Route path="/progress" element={<ProgressMetrics />} />
            <Route path="/message-input" element={<MessageInput />} />
            <Route path="/chat-message" element={<ChatMessage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;