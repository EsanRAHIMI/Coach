// client/src/components/Landing/HowItWorks.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="max-w-6xl mx-auto my-24 px-4 scroll-mt-20">
      <div className="bg-glass backdrop-blur-md rounded-xl border border-glass-border p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">How It Works</h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
          
          <div className="flex flex-col items-center text-center relative">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-primary rounded-full mb-4 relative z-10 shadow-lg shadow-primary/20">
              <span className="text-dark font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-light">Practice</h3>
            <p className="text-light/80">Choose from various scenarios and engage in realistic conversations with our AI coach.</p>
          </div>
          
          <div className="flex flex-col items-center text-center relative">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-primary rounded-full mb-4 relative z-10 shadow-lg shadow-primary/20">
              <span className="text-dark font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-light">Analyze</h3>
            <p className="text-light/80">Receive detailed feedback on your communication style, tone, and effectiveness.</p>
          </div>
          
          <div className="flex flex-col items-center text-center relative">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-primary rounded-full mb-4 relative z-10 shadow-lg shadow-primary/20">
              <span className="text-dark font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-light">Improve</h3>
            <p className="text-light/80">Apply insights to improve your skills and track your progress over time.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/how-it-works" className="inline-flex items-center py-3 px-8 bg-white/10 text-light border border-glass-border rounded-full transition-all duration-300 hover:bg-white/20">
            See detailed walkthrough <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;