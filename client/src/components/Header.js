// client/src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "16px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI Communication Coach</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/chat" className="hover:text-gray-200">
                Chat
              </a>
            </li>
            <li>
              <a href="/analyze" className="hover:text-gray-200">
                Analyze
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
