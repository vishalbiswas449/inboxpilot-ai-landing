
import React, { useState } from 'react';
import { Send, Linkedin, Twitter, Instagram } from 'lucide-react';
import { toast } from "../components/ui/sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would be connected to Supabase in a real implementation
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      // Simulation of successful submission
      toast.success("Thank you for reaching out! We'll get back to you soon.");
      setFormData({ email: '', message: '' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#f8fafc]">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full filter blur-[120px] opacity-30 -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-300 rounded-full filter blur-[100px] opacity-25 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-600">
            Have questions or ready to revolutionize your email experience? Our team is here to help.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="glass-card bg-white/80 rounded-xl p-6 md:p-8 shadow-lg border border-blue-100/50 animate-scale-up transition-all duration-300 hover:shadow-blue-200/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <div className="group relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                    placeholder="your@email.com"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left"></div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message*
                </label>
                <div className="group relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition-shadow"
                    placeholder="How can we help you?"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left"></div>
                </div>
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
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
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
