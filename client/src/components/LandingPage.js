// client/src/components/Footer.js
import React from 'react';
import { MessageCircle, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <MessageCircle className="text-blue-400 mr-2" size={24} />
              <h2 className="text-xl font-bold">AI Communication Coach</h2>
            </div>
            <p className="text-gray-400 text-sm">
              Enhance your communication skills with the power of AI. Practice conversations,
              receive feedback, and track your progress.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/chat" className="hover:text-blue-400 transition-colors">
                  Practice Chat
                </a>
              </li>
              <li>
                <a href="/analyze" className="hover:text-blue-400 transition-colors">
                  Message Analysis
                </a>
              </li>
              <li>
                <a href="/progress" className="hover:text-blue-400 transition-colors">
                  Progress Tracking
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/blog" className="hover:text-blue-400 transition-colors">
                  Communication Blog
                </a>
              </li>
              <li>
                <a href="/tutorials" className="hover:text-blue-400 transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-700 text-white px-3 py-2 rounded-l text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-r text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AI Communication Coach. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;