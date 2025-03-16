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
    <header className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <MessageCircle size={24} className="text-white" />
            <h1 className="text-xl font-bold">AI Communication Coach</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-1 px-1 py-2 transition-colors hover:text-indigo-200 ${
                    isActive("/dashboard") ? "border-b-2 border-white font-medium" : ""
                  }`}
                >
                  <BarChart2 size={16} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className={`flex items-center space-x-1 px-1 py-2 transition-colors hover:text-indigo-200 ${
                    isActive("/chat") ? "border-b-2 border-white font-medium" : ""
                  }`}
                >
                  <MessageCircle size={16} />
                  <span>Practice Chat</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/analyze"
                  className={`flex items-center space-x-1 px-1 py-2 transition-colors hover:text-indigo-200 ${
                    isActive("/analyze") ? "border-b-2 border-white font-medium" : ""
                  }`}
                >
                  <BarChart2 size={16} />
                  <span>Analyze Message</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Profile Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-white text-indigo-700 flex items-center space-x-1 px-4 py-1.5 rounded-full font-medium hover:bg-indigo-50 transition-colors shadow-sm">
              <User size={16} />
              <span>My Profile</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-indigo-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BarChart2 size={16} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-indigo-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle size={16} />
                  <span>Practice Chat</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/analyze"
                  className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-indigo-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BarChart2 size={16} />
                  <span>Analyze Message</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-indigo-500">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-indigo-700"
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