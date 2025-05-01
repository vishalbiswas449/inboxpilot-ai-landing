
import React, { useState } from 'react';
import { Send, Linkedin, Twitter, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success?: boolean; message?: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);
    
    // This would be connected to Supabase in a real implementation
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      // Simulation of successful submission
      setSubmitResult({ 
        success: true, 
        message: 'Thank you for reaching out! We\'ll get back to you soon.' 
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitResult({ 
        success: false, 
        message: 'There was an error submitting your message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-light-green rounded-full filter blur-[100px] opacity-20 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-army-green rounded-full filter blur-[100px] opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to revolutionize your email experience? Reach out to our team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-6 md:p-8 animate-scale-up">
            {submitResult && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {submitResult.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-army-green focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-army-green focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-army-green focus:border-transparent"
                  placeholder="Your company"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-army-green focus:border-transparent resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                  <p className="text-gray-700 mb-2">Email: support@inboxpilot.com</p>
                  <p className="text-gray-700">Phone: +1-800-PILOTAI</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-army-green transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-army-green transition-colors">
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-army-green transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
