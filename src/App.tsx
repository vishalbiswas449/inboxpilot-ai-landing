
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { initAllAnimations, simulatePageLoading } from "./utils/animationUtils";

/**
 * InboxPilot SaaS Landing Page
 * 
 * For real-world implementation, you would need to:
 * 
 * 1. Supabase Integration:
 *    - Create a Supabase project at https://supabase.com
 *    - Initialize Supabase client with your project URL and anon key
 *    - Create tables for storing form submissions:
 *      - contact_submissions: { id, name, email, company, message, created_at }
 *      - newsletter_subscriptions: { id, email, created_at }
 *    - Replace the form submission handlers with actual Supabase calls:
 *      ```
 *      const { data, error } = await supabase
 *        .from('contact_submissions')
 *        .insert([{ name, email, company, message }]);
 *      ```
 * 
 * 2. Stripe Integration:
 *    - Create a Stripe account at https://stripe.com
 *    - Set up products/prices in the Stripe dashboard
 *    - Include Stripe.js in your application
 *    - Replace the subscription handlers with actual Stripe checkout:
 *      ```
 *      const stripe = await loadStripe('your_publishable_key');
 *      await stripe.redirectToCheckout({
 *        lineItems: [{ price: 'price_id', quantity: 1 }],
 *        mode: 'subscription',
 *        successUrl: window.location.origin + '/success',
 *        cancelUrl: window.location.origin + '/cancel',
 *      });
 *      ```
 */

// Component to handle route change animations
const RouteChangeHandler = () => {
  const location = useLocation();
  
  useEffect(() => {
    simulatePageLoading();
  }, [location]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize all animations
    initAllAnimations();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteChangeHandler />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* 
              For a complete implementation, you might want to add:
              <Route path="/success" element={<SubscriptionSuccess />} />
              <Route path="/cancel" element={<SubscriptionCancel />} />
            */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
