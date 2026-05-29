import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import AssessmentPage from "@/pages/Assessment";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Internship from "@/pages/Internship";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/assessment" component={AssessmentPage} />
      <Route path="/about-us" component={About} />
      <Route path="/contact-us" component={Contact} />
      <Route path="/internships" component={Internship} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
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
