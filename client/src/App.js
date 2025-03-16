// client/src/App.js
import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Dashboard />
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>AI Communication Coach &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;