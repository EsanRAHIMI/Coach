// client/src/components/Footer.js
import React from 'react';
import { MessageCircle, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <MessageCircle className="text-primary mr-2" size={24} />
              <h2 className="text-xl font-bold bg-gradient-primary text-transparent bg-clip-text">AI Communication Coach</h2>
            </div>
            <p className="text-light/70 text-sm">
              Enhance your communication skills with the power of AI. Practice conversations,
              receive feedback, and track your progress.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4 text-primary">Features</h3>
            <ul className="space-y-2 text-light/70">
              <li>
                <a href="/chat" className="hover:text-primary transition-colors relative group">
                  Practice Chat
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/analyze" className="hover:text-primary transition-colors relative group">
                  Message Analysis
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/progress" className="hover:text-primary transition-colors relative group">
                  Progress Tracking
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4 text-primary">Resources</h3>
            <ul className="space-y-2 text-light/70">
              <li>
                <a href="/blog" className="hover:text-primary transition-colors relative group">
                  Communication Blog
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/tutorials" className="hover:text-primary transition-colors relative group">
                  Tutorials
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-primary transition-colors relative group">
                  FAQ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4 text-primary">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/Masikarimi1" className="text-light/70 hover:text-primary transition-colors transform hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/masikarimi" className="text-light/70 hover:text-primary transition-colors transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@masikarimi.com" className="text-light/70 hover:text-primary transition-colors transform hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-light/70">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-dark text-light px-3 py-2 rounded-l text-sm focus:outline-none focus:ring-1 focus:ring-primary w-full border border-glass-border"
              />
              <button className="bg-gradient-primary hover:opacity-90 px-3 py-2 rounded-r text-sm text-dark transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-glass-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/50 text-sm">
            &copy; {new Date().getFullYear()} AI Communication Coach. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/terms" className="text-light/50 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="text-light/50 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;