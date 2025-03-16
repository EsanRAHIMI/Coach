// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import ChatInterface from './components/ChatInterface';
import AnalyzeInterface from './components/AnalyzeInterface';
import ProgressMetrics from './components/ProgressMetrics';
import MessageInput from './components/MessageInput';
import ChatMessage from './components/ChatMessage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<ChatInterface />} />
            <Route path="/analyze" element={<AnalyzeInterface />} />
            <Route path="/progress" element={<ProgressMetrics />} />
            <Route path="/message-input" element={<MessageInput />} />
            <Route path="/chat-message" element={<ChatMessage />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/header" element={<Header />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/progress-metrics" element={<ProgressMetrics />} />
            <Route path="/analyze-interface" element={<AnalyzeInterface />} />
            <Route path="/chat-interface" element={<ChatInterface />} />
            <Route path="/message-input" element={<MessageInput />} />
            <Route path="/chat-message" element={<ChatMessage />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;