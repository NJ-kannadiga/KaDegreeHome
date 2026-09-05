import { Switch, Route, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import AiFullStackDeveloper from "@/pages/AiFullStackDeveloper";
import PlacementPreparation from "@/pages/PlacementPreparation";
import AiCommerce from "@/pages/AiCommerce";
import Apply from "@/pages/Apply";
import AssessmentPage from "@/pages/Assessment";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Internship from "@/pages/Internship";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import DigitalMarketing from "@/pages/DigitalMarketing";
import Outsourcing from "@/pages/Outsourcing";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import RefundPolicy from "@/pages/RefundPolicy";
import TermsOfService from "@/pages/TermsOfService";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col min-h-screen"
      >
        <Switch location={location}>
          <Route path="/" component={Home} />
          {/* Main Programs Page */}
          <Route path="/courses" component={Courses} />
          <Route path="/programs" component={Courses} />
          
          {/* Dedicated Program Detail Pages */}
          <Route path="/programs/ai-full-stack-developer" component={AiFullStackDeveloper} />
          <Route path="/programs/placement-preparation" component={PlacementPreparation} />
          <Route path="/programs/ai-for-commerce" component={AiCommerce} />
          
          {/* Application Flow */}
          <Route path="/apply" component={Apply} />
          <Route path="/enroll" component={Apply} />

          {/* Existing Pages & Services */}
          <Route path="/assessment" component={AssessmentPage} />
          <Route path="/about-us" component={About} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/internship" component={Internship} />
          <Route path="/internships" component={Internship} />
          <Route path="/students" component={Courses} />
          <Route path="/services/digital-marketing" component={DigitalMarketing} />
          <Route path="/services/outsourcing" component={Outsourcing} />
          <Route path="/services/outsourced-services" component={Outsourcing} />
          <Route path="/services/ai-commerce" component={AiCommerce} />
          <Route path="/services/ai-for-commerce" component={AiCommerce} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/refund-policy" component={RefundPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router />
          <Toaster />
          <FloatingWhatsApp />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
