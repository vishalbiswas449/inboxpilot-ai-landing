
import React, { useState, useEffect } from 'react';
import { ArrowDown, Copy, Loader, X } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner';

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
    },
    {
      name: 'Job Resignation',
      subject: 'Resignation - [Your Name]',
      content: `Dear [Manager's Name],\n\nPlease accept this letter as formal notification that I am resigning from my position as [Your Position] with [Company Name]. My last day will be [Date, typically two weeks from today].\n\nI appreciate the opportunities for professional and personal development that you have provided during my time at the company. Thank you for your support and guidance.\n\nI will do everything possible to ensure a smooth transition before my departure, including completing ongoing projects and helping train my replacement.\n\nSincerely,\n[Your Name]`
    },
    {
      name: 'College Assignment Submission',
      subject: 'Submission: [Course Code] Assignment',
      content: `Dear Professor [Name],\n\nI am writing to submit my assignment for [Course Name] as requested. The assignment covers [brief description of what the assignment covers].\n\nI have addressed all the requirements outlined in the assignment brief and have included my research findings, analysis, and conclusions. I've also attached any relevant documents as required.\n\nPlease let me know if you need any clarification or have questions about my submission.\n\nThank you for your consideration.\n\nSincerely,\n[Your Name]\n[Student ID]`
    },
    {
      name: 'Employee Time-Off Request',
      subject: 'Time Off Request: [Dates]',
      content: `Dear [Manager's Name],\n\nI would like to request time off from [Start Date] to [End Date]. I will be back in the office on [Return Date].\n\nI have already arranged for [Colleague's Name] to cover my essential duties during my absence, and I will complete all pending tasks before my departure.\n\nPlease let me know if you need any additional information or have concerns about this request.\n\nThank you for your consideration.\n\nBest regards,\n[Your Name]`
    }
  ];

  const enhancementOptions = [
    { id: 'professional', label: 'Professional' },
    { id: 'concise', label: 'Concise' },
    { id: 'friendly', label: 'Friendly' },
    { id: 'persuasive', label: 'Persuasive' },
    { id: 'formal', label: 'Formal' },
    { id: 'casual', label: 'Casual' }
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
      // Simulate API call delay since we don't have the actual integration
      setTimeout(() => {
        // Generate a more professional version of the email content
        let enhanced = '';
        
        switch (enhancementType) {
          case 'professional':
            enhanced = `Dear [Name],\n\nI hope this email finds you well. ${emailContent.replace(/^(Hi|Hello|Dear).*?\n\n/i, '')}\n\nShould you have any questions or require further information, please do not hesitate to contact me.\n\nThank you for your time and consideration.\n\nBest regards,\n[Your Name]`;
            break;
          case 'concise':
            enhanced = `[Name],\n\n${emailContent.replace(/^(Hi|Hello|Dear).*?\n\n/i, '').replace(/\n\n(Best|Kind|Regards|Sincerely).*$/i, '')}\n\nRegards,\n[Your Name]`;
            break;
          case 'friendly':
            enhanced = `Hey [Name]!\n\nHope you're doing fantastic! ${emailContent.replace(/^(Hi|Hello|Dear).*?\n\n/i, '')}\n\nLooking forward to hearing from you soon!\n\nCheers,\n[Your Name]`;
            break;
          case 'persuasive':
            enhanced = `Dear [Name],\n\nI'm reaching out because I believe this opportunity could be transformative for you. ${emailContent.replace(/^(Hi|Hello|Dear).*?\n\n/i, '')}\n\nI'm confident you'll find this beneficial, and I'm excited to discuss how we can move forward together.\n\nWarm regards,\n[Your Name]`;
            break;
          case 'formal':
            enhanced = `Dear [Name],\n\nI am writing to inform you regarding ${emailContent.replace(/^(Hi|Hello|Dear).*?\n\n/i, '').replace(/\n\n(Best|Kind|Regards|Sincerely).*$/i, '')}\n\nPlease do not hesitate to contact me should you require any further information.\n\nYours sincerely,\n[Your Name]`;
            break;
          case 'casual':
            enhanced = `Hi [Name],\n\nJust wanted to touch base about ${emailContent.replace(/^(Hi|Hello|Dear).*?\n\n/i, '').replace(/\n\n(Best|Kind|Regards|Sincerely).*$/i, '')}\n\nThanks,\n[Your Name]`;
            break;
          default:
            enhanced = emailContent;
        }
        
        setEnhancedEmail(enhanced);
        toast.success('Email enhanced successfully!');
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      console.error('Error enhancing email:', err);
      toast.error('An error occurred. Please try again later.');
      setIsLoading(false);
    }
  };

  const clearAll = () => {
    setEmailContent('');
    setEnhancedEmail('');
    setSubject('');
    setTemplateSelected(false);
    toast.success('All fields cleared!');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => toast.success('Copied to clipboard!'),
      (err) => toast.error('Failed to copy text')
    );
  };

  return (
    <section id="email-preview" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
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
                <div className="flex flex-col gap-3 max-h-[350px] overflow-y-auto scrollbar-hide">
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
              <CardContent className="p-6 relative">
                {/* Clear All Button */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute top-2 right-2 h-8 w-8 p-0 rounded-full" 
                  onClick={clearAll}
                  title="Clear all fields"
                >
                  <X size={16} />
                  <span className="sr-only">Clear all</span>
                </Button>
                
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
                      {emailContent && (
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
                      )}
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
                      className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
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

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic mb-6">
            "This is just a preview. Sign up to unlock more powerful email features!"
          </p>
          <Button 
            onClick={() => toast.success("Free trial started!")} 
            className="bg-blue-600 hover:bg-blue-700"
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmailPreviewSection;
