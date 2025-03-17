// client/src/components/Header.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, BarChart2, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur-md shadow-lg border-b border-glass-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <MessageCircle size={24} className="text-primary" />
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Communication Coach
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-1 px-1 py-2 transition-colors hover:text-primary relative ${
                    isActive("/dashboard") ? "font-medium text-light" : "text-light/80"
                  }`}
                >
                  <BarChart2 size={16} />
                  <span>Dashboard</span>
                  {isActive("/dashboard") && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className={`flex items-center space-x-1 px-1 py-2 transition-colors hover:text-primary relative ${
                    isActive("/chat") ? "font-medium text-light" : "text-light/80"
                  }`}
                >
                  <MessageCircle size={16} />
                  <span>Practice Chat</span>
                  {isActive("/chat") && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/analyze"
                  className={`flex items-center space-x-1 px-1 py-2 transition-colors hover:text-primary relative ${
                    isActive("/analyze") ? "font-medium text-light" : "text-light/80"
                  }`}
                >
                  <BarChart2 size={16} />
                  <span>Analyze Message</span>
                  {isActive("/analyze") && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary"></span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Profile Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-gradient-primary hover:opacity-90 text-dark flex items-center space-x-1 px-4 py-1.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <User size={16} />
              <span>My Profile</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 bg-glass backdrop-blur-md rounded-lg shadow-lg border border-glass-border">
            <ul className="flex flex-col space-y-1">
              <li>
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-2 py-2 px-3 rounded hover:bg-white/10 transition-colors ${
                    isActive("/dashboard") ? "bg-white/5 font-medium text-primary" : "text-light"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BarChart2 size={16} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className={`flex items-center space-x-2 py-2 px-3 rounded hover:bg-white/10 transition-colors ${
                    isActive("/chat") ? "bg-white/5 font-medium text-primary" : "text-light"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle size={16} />
                  <span>Practice Chat</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/analyze"
                  className={`flex items-center space-x-2 py-2 px-3 rounded hover:bg-white/10 transition-colors ${
                    isActive("/analyze") ? "bg-white/5 font-medium text-primary" : "text-light"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BarChart2 size={16} />
                  <span>Analyze Message</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-white/20">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-white/10 transition-colors text-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={16} />
                  <span>My Profile</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;