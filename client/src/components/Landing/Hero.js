// client/src/components/Landing/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Shield, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-16">
      <div className="absolute inset-0 bg-dark/90 z-[-1]"></div>
      <div className="flex flex-col items-center gap-8 max-w-6xl w-full p-6 md:p-12 animate-[fadeInUp_1s_ease]">
        <div className="flex-1 text-center">
          <div className="bg-glass backdrop-blur-lg p-8 rounded-xl border border-glass-border relative">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mb-4">Powered by AI</span>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">Master Professional Communication</h1>
            <p className="text-light text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">Practice real-world scenarios with our AI coach and get personalized feedback to enhance your communication skills.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard" className="py-3 px-8 bg-gradient-primary text-dark font-medium rounded-full transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,255,157,0.3)] hover:-translate-y-0.5 flex items-center justify-center">
                Try It Free <ChevronRight size={16} className="ml-1" />
              </Link>
              <Link to="/demo" className="py-3 px-8 bg-white/10 text-light border border-glass-border rounded-full transition-all duration-300 hover:bg-white/20 flex items-center justify-center">
                Watch Demo
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-light/70 text-sm">
              <span className="flex items-center gap-1">
                <Users size={14} />
                50+ Users
              </span>
              <span className="flex items-center gap-1">
                <Shield size={14} />
                Privacy-Focused
              </span>
              <span className="flex items-center gap-1">
                <Award size={14} />
                97% Success Rate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;