
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ContactForm } from './ContactUsSection';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface TrialFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrialFormModal = ({ isOpen, onClose }: TrialFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleContactSubmit = async (data: any) => {
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
      // Insert the trial request into Supabase
      const { error } = await supabase
        .from('trial_requests')
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
      
      toast.success('Your trial request has been submitted successfully!');
      onClose();
      setIsSubmitting(false);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error(error.message || 'An error occurred. Please try again later.');
      setIsSubmitting(false);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Start Your Free Trial</DialogTitle>
          <DialogDescription className="text-center">
            Fill out this form to get started with InboxPilot's 14-day free trial.
          </DialogDescription>
        </DialogHeader>
        
        <ContactForm 
          onSubmit={handleContactSubmit}
          isSubmitting={isSubmitting}
          buttonText="Start Free Trial"
          isModal={true}
        />
      </DialogContent>
    </Dialog>
  );
};

export default TrialFormModal;
