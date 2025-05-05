
import React, { useState, useEffect } from 'react';
import { ArrowDown, Copy, Loader } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const EmailPreviewSection = () => {
  const [emailContent, setEmailContent] = useState('');
  const [enhancedEmail, setEnhancedEmail] = useState('');
  const [enhancementType, setEnhancementType] = useState('professional');
  const [isLoading, setIsLoading] = useState(false);
  const [subject, setSubject] = useState('');
  const [templateSelected, setTemplateSelected] = useState(false);

  const emailTemplates = [
    {
      name: 'Follow-up',
      subject: 'Following up on our previous conversation',
      content: `Hi [Name],\n\nI hope you're doing well. I wanted to follow up on our conversation from last week about the project timeline. Have you had a chance to review the documents I sent over? I'd love to get your thoughts and see how we should proceed.\n\nLooking forward to your response.\n\nBest,\n[Your Name]`
    },
    {
      name: 'Meeting Request',
      subject: 'Request for a meeting next week',
      content: `Hello [Name],\n\nI'm writing to request a meeting with you next week to discuss the upcoming product launch. Would you be available for a 30-minute call on Tuesday or Wednesday afternoon?\n\nI'd like to go over the marketing strategy and get your input before finalizing the plan.\n\nThanks in advance,\n[Your Name]`
    },
    {
      name: 'Proposal',
      subject: 'Proposal for your consideration',
      content: `Dear [Name],\n\nAttached is the proposal we discussed for the new project. I've included the budget breakdown, timeline, and deliverables as we discussed. Please let me know if you'd like any changes or have questions about any part of it.\n\nI believe this approach will help us achieve the goals we discussed while staying within the allocated resources.\n\nBest regards,\n[Your Name]`
    }
  ];

  const enhancementOptions = [
    { id: 'professional', label: 'Professional' },
    { id: 'concise', label: 'Concise' },
    { id: 'friendly', label: 'Friendly' },
    { id: 'persuasive', label: 'Persuasive' }
  ];

  const selectTemplate = (template) => {
    setSubject(template.subject);
    setEmailContent(template.content);
    setEnhancedEmail('');
    setTemplateSelected(true);
  };

  const enhanceEmail = async () => {
    if (!emailContent.trim()) {
      toast.error('Please enter some email content');
      return;
    }

    setIsLoading(true);
    setEnhancedEmail('');

    try {
      const { data, error } = await supabase.functions.invoke('enhance-email', {
        body: { emailContent, enhancementType }
      });

      if (error) {
        console.error('Error enhancing email:', error);
        toast.error('Failed to enhance your email. Please try again.');
        return;
      }

      setEnhancedEmail(data.enhancedEmail);
      toast.success('Email enhanced successfully!');
    } catch (err) {
      console.error('Error calling enhance-email function:', err);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => toast.success('Copied to clipboard!'),
      (err) => toast.error('Failed to copy text')
    );
  };

  return (
    <section id="email-preview" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try InboxPilot's Email Enhancement</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our AI can transform your emails in seconds. Type your draft below or use a template, 
            and watch it become more professional, concise, or persuasive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Templates Section - Mobile: Full Width, Desktop: 3 columns */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <Card className="h-full">
              <CardContent className="p-4">
                <h3 className="font-medium text-lg mb-3">Email Templates</h3>
                <p className="text-sm text-gray-500 mb-4">Start with one of our templates</p>
                <div className="flex flex-col gap-3">
                  {emailTemplates.map((template, index) => (
                    <Button
                      key={index}
                      variant="outline" 
                      className="justify-start text-left h-auto py-3"
                      onClick={() => selectTemplate(template)}
                    >
                      <div>
                        <div className="font-medium">{template.name}</div>
                        <div className="text-xs text-gray-500 truncate">{template.subject}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Email Editor - Mobile: Full Width, Desktop: 9 columns */}
          <div className="lg:col-span-9 order-1 lg:order-2">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="mb-4">
                  <label className="text-sm font-medium mb-1 block">Subject</label>
                  <Input
                    type="text"
                    placeholder="Enter email subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Original Email */}
                  <div>
                    <label className="text-sm font-medium mb-1 block">Your Email</label>
                    <div className="relative">
                      <Textarea
                        placeholder="Type your email here..."
                        value={emailContent}
                        onChange={(e) => setEmailContent(e.target.value)}
                        rows={12}
                        className="w-full resize-none mb-2 font-normal"
                      />
                      <div className="absolute bottom-3 right-3">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-7 w-7 p-0"
                          onClick={() => copyToClipboard(emailContent)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Enhancement Options */}
                    <div className="mt-4">
                      <label className="text-sm font-medium mb-2 block">Enhancement Style</label>
                      <div className="flex flex-wrap gap-2">
                        {enhancementOptions.map((option) => (
                          <Button
                            key={option.id}
                            variant={enhancementType === option.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => setEnhancementType(option.id)}
                          >
                            {option.label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      className="mt-4 w-full"
                      onClick={enhanceEmail}
                      disabled={isLoading || !emailContent.trim()}
                    >
                      {isLoading ? (
                        <>
                          <Loader className="mr-2 h-4 w-4 animate-spin" />
                          Enhancing...
                        </>
                      ) : (
                        <>
                          Enhance Email
                          <ArrowDown className="ml-2 h-4 w-4 md:hidden" />
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Enhanced Email */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-sm font-medium">Enhanced Version</label>
                      {enhancedEmail && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-7 p-1"
                          onClick={() => copyToClipboard(enhancedEmail)}
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          <span className="text-xs">Copy</span>
                        </Button>
                      )}
                    </div>
                    <div className="relative">
                      <div className={`border rounded-md p-3 h-[288px] bg-blue-50/50 overflow-y-auto ${!enhancedEmail && !isLoading ? 'flex items-center justify-center' : ''}`}>
                        {isLoading ? (
                          <div className="flex h-full items-center justify-center text-center">
                            <div>
                              <Loader className="h-8 w-8 animate-spin mx-auto mb-3 text-blue-600" />
                              <p className="text-sm text-gray-500">Enhancing your email...</p>
                            </div>
                          </div>
                        ) : enhancedEmail ? (
                          <pre className="whitespace-pre-wrap font-normal text-base">
                            {enhancedEmail}
                          </pre>
                        ) : (
                          <p className="text-gray-400 text-center">
                            {templateSelected ? 
                              "Click 'Enhance Email' to see the AI improved version" : 
                              "Your enhanced email will appear here"}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic mb-6">
            "This is just a preview. Sign up to unlock more powerful email features!"
          </p>
          <Button onClick={() => console.log("Start free trial clicked")} className="bg-blue-600 hover:bg-blue-700">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmailPreviewSection;
