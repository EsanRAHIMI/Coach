// client/src/components/Landing/Pricing.js
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <section id="pricing" className="max-w-6xl mx-auto my-24 px-4 scroll-mt-20">
      <div className="bg-glass backdrop-blur-md rounded-xl border border-glass-border p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Pricing Plans</h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/5 rounded-lg border border-glass-border transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold text-light mb-2">Free</h3>
            <p className="text-light/70 mb-6">Get started with basic features</p>
            <div className="text-3xl font-bold text-primary mb-6">$0<span className="text-light/50 text-lg font-normal">/month</span></div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start gap-2 text-light/80">
                <span className="text-primary mt-0.5">✓</span>
                <span>5 practice conversations per month</span>
              </li>
              <li className="flex items-start gap-2 text-light/80">
                <span className="text-primary mt-0.5">✓</span>
                <span>Basic feedback analysis</span>
              </li>
              <li className="flex items-start gap-2 text-light/80">
                <span className="text-primary mt-0.5">✓</span>
                <span>Limited scenario options</span>
              </li>
            </ul>
            <Link to="/signup" className="w-full py-2 px-4 bg-white/10 text-light text-center border border-glass-border rounded-full transition-all duration-300 hover:bg-white/20">
              Sign Up Free
            </Link>
          </div>
          
          <div className="p-6 bg-gradient-to-b from-primary/20 to-transparent rounded-lg border border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,255,157,0.15)] flex flex-col relative">
            <div className="absolute -top-3 right-6 bg-gradient-primary text-dark text-sm font-medium py-1 px-3 rounded-full shadow-lg">Most Popular</div>
            <h3 className="text-xl font-semibold text-light mb-2">Pro</h3>
            <p className="text-light/70 mb-6">Perfect for professionals</p>
            <div className="text-3xl font-bold text-primary mb-6">$0<span className="text-light/50 text-lg font-normal">/month</span></div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start gap-2 text-light/80">
                <span className="text-primary mt-0.5">✓</span>
                <span>Unlimited practice conversations</span>
              </li>
              <li className="flex items-start gap-2 text-light/80">
                <span className="text-primary mt-0.5">✓</span>
                <span>Advanced feedback & analytics</span>
              </li>
              <li className="flex items-start gap-2 text-light/80">
                <span className="text-primary mt-0.5">✓</span>
                <span>All scenario templates</span>
              </li>
              <li className="flex items-start gap-2 text-light/80">
                <span className="text-primary mt-0.5">✓</span>
                <span>Custom scenario creation</span>
              </li>
            </ul>
            <Link to="/signup/pro" className="w-full py-2 px-4 bg-gradient-primary text-dark text-center font-medium rounded-full transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,255,157,0.3)] hover:-translate-y-0.5">
              Get Started
            </Link>
          </div>
          
          <div className="p-6 bg-white/5 rounded-lg border border-glass-border transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg flex flex-col">
            <h3 className="text-xl font-semibold text-light mb-2">Enterprise</h3>
            <p className="text-light/70 mb-6">For teams and organizations</p>
            <div className="text-3xl font-bold text-primary mb-6">Custom</div>
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start gap-2 text-light/80">
                <span className="text-primary mt-0.5">✓</span>
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-start gap-2 text-light/80">
                <span className="text-primary mt-0.5">✓</span>
                <span>Team management & analytics</span>
              </li>
              <li className="flex items-start gap-2 text-light/80">
                <span className="text-primary mt-0.5">✓</span>
                <span>Custom AI training</span>
              </li>
              <li className="flex items-start gap-2 text-light/80">
                <span className="text-primary mt-0.5">✓</span>
                <span>Dedicated support</span>
              </li>
            </ul>
            <Link to="/contact-sales" className="w-full py-2 px-4 bg-white/10 text-light text-center border border-glass-border rounded-full transition-all duration-300 hover:bg-white/20">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;