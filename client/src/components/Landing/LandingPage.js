// client/src/components/Landing/LandingPage.js
import React from 'react';
import ParticleBackground from './ParticleBackground';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Contact from './Contact';

const LandingPage = () => {
  return (
    <div className="bg-dark min-h-screen">
      {/* Canvas Background */}
      <ParticleBackground />
      
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default LandingPage;