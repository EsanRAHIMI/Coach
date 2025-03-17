// client/src/components/Landing/Contact.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto my-24 px-4 pb-24 scroll-mt-20">
      <div className="bg-glass backdrop-blur-md rounded-xl border border-glass-border p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Get Started Today</h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white/5 p-6 rounded-lg border border-glass-border hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold text-light mb-4 flex items-center gap-2">
                <Mail size={20} className="text-primary" />
                Contact Us
              </h3>
              <p className="text-light/80 mb-4">Have questions or need more information? Our team is here to help.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-light/70">
                  <Mail size={16} className="text-primary" />
                  <span>Contact@MasiKarimi.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg border border-glass-border hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold text-light mb-4">FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-light font-medium">How does the AI coach work?</h4>
                  <p className="text-light/70">Our AI uses advanced natural language processing to analyze communication patterns and provide personalized feedback.</p>
                </div>
                <div>
                  <h4 className="text-light font-medium">Can I use this for my team?</h4>
                  <p className="text-light/70">Yes! Our Enterprise plan offers team management features and custom training options.</p>
                </div>
                <Link to="/faq" className="inline-flex items-center text-primary hover:underline mt-2">
                  View all FAQs <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="bg-white/5 p-6 rounded-lg border border-glass-border hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold text-light mb-4">Request Early Access</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    className="w-full p-3 bg-white/5 border border-glass-border rounded-lg text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email" 
                    className="w-full p-3 bg-white/5 border border-glass-border rounded-lg text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="What communication skills are you looking to improve?" 
                  className="w-full p-3 bg-white/5 border border-glass-border rounded-lg text-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[120px]"
                  required
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full py-3 px-8 bg-gradient-primary text-dark font-medium rounded-full transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,255,157,0.3)] hover:-translate-y-0.5 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Request Early Access'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;