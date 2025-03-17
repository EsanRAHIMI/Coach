// client/src/components/Landing/Features.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, BarChart2, TrendingUp, ChevronRight } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="max-w-6xl mx-auto my-24 px-4 scroll-mt-20">
      <div className="bg-glass backdrop-blur-md rounded-xl border border-glass-border p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Key Features</h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/5 rounded-lg border border-glass-border transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg group">
            <div className="w-14 h-14 flex items-center justify-center bg-primary/20 rounded-lg mb-4 group-hover:bg-primary/30 transition-all duration-300">
              <MessageCircle size={28} className="text-primary" />
            </div>
            <h3 className="text-primary text-xl font-medium mb-3">Practice Conversations</h3>
            <p className="text-light/80">Engage in realistic conversations with our AI to practice scenarios like job interviews, client meetings, and more.</p>
            <Link to="/features/practice" className="mt-4 inline-flex items-center text-primary hover:underline">
              Learn more <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="p-6 bg-white/5 rounded-lg border border-glass-border transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg group">
            <div className="w-14 h-14 flex items-center justify-center bg-primary/20 rounded-lg mb-4 group-hover:bg-primary/30 transition-all duration-300">
              <BarChart2 size={28} className="text-primary" />
            </div>
            <h3 className="text-primary text-xl font-medium mb-3">Message Analysis</h3>
            <p className="text-light/80">Get detailed feedback on your communication style, tone, and effectiveness with our AI-powered analyzer.</p>
            <Link to="/features/analysis" className="mt-4 inline-flex items-center text-primary hover:underline">
              Learn more <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="p-6 bg-white/5 rounded-lg border border-glass-border transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg group">
            <div className="w-14 h-14 flex items-center justify-center bg-primary/20 rounded-lg mb-4 group-hover:bg-primary/30 transition-all duration-300">
              <TrendingUp size={28} className="text-primary" />
            </div>
            <h3 className="text-primary text-xl font-medium mb-3">Track Progress</h3>
            <p className="text-light/80">Monitor your improvement over time with comprehensive metrics and personalized recommendations.</p>
            <Link to="/features/progress" className="mt-4 inline-flex items-center text-primary hover:underline">
              Learn more <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;