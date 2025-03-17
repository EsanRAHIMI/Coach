// client/src/components/Landing/Testimonials.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const testimonialData = [
  {
    initials: "JS",
    name: "Jessica S.",
    role: "Marketing Manager",
    quote: "This AI coach helped me refine my client presentation skills. The feedback was insightful and I saw improvement within weeks."
  },
  {
    initials: "MT",
    name: "Michael T.",
    role: "Sales Representative",
    quote: "I've tried several communication tools, but this one actually provides actionable advice. My sales calls have improved dramatically."
  },
  {
    initials: "AR",
    name: "Aisha R.",
    role: "Product Manager",
    quote: "The practice scenarios for stakeholder meetings were incredibly realistic. I feel much more confident handling difficult conversations now."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="max-w-6xl mx-auto my-24 px-4 scroll-mt-20">
      <div className="bg-glass backdrop-blur-md rounded-xl border border-glass-border p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">What Our Users Say</h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white/5 rounded-lg border border-glass-border transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="text-light font-medium">{testimonial.name}</h4>
                  <p className="text-light/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-light/80 italic">"{testimonial.quote}"</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/testimonials" className="inline-flex items-center text-primary hover:underline">
            Read more success stories <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;