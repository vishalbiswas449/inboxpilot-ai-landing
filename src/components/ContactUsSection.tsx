
import React, { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  acceptTerms: boolean;
}

export const ContactForm = ({
  onSubmit,
  isSubmitting,
  className = "",
  buttonText = "Enhance My Inbox",
  isModal = false,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      acceptTerms: e.target.checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="your@email.com"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={isModal ? 3 : 5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="How can we help you?"
          required
        ></textarea>
      </div>
      
      <div className="flex items-start">
        <input
          type="checkbox"
          id="terms"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleCheckboxChange}
          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          required
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
          I accept the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
        </label>
      </div>
      
      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : buttonText}
      </Button>
    </form>
  );
};

const ContactUsSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (data: ContactFormData) => {
    if (!data.name || !data.email || !data.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (!data.acceptTerms) {
      toast.error('Please accept the Terms of Service');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Insert the contact submission into Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: data.name,
            email: data.email,
            message: data.message
          }
        ]);
        
      if (error) {
        throw error;
      }
      
      toast.success('Your message has been sent successfully!');
      setIsSubmitting(false);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error(error.message || 'An error occurred. Please try again later.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in touch</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Whether you have questions about our products, need support,
              or want to request a personalized demo, our team is here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Office Address</h4>
                  <address className="not-italic text-gray-600 mt-1">
                    4th Floor, ABIL Imperial Commercial Spaces, <br />
                    Rohan Seher Ln, near Murkute Garden, <br />
                    Baner, Pune, Maharashtra 411045
                  </address>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Phone Number</h4>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+919172753107" className="hover:text-blue-600 transition-colors">
                      091727 53107
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Get started with a free quotation</h2>
            
            <ContactForm 
              onSubmit={handleContactSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
