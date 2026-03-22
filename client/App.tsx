import "./global.css";

import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ChatButton } from "./components/ChatButton";
import { InstagramPopup } from "./components/InstagramPopup";


// Lazy load pages for better performance
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
// const CookiesPolicy = lazy(() => import("./pages/CookiesPolicy"));
const Blog = lazy(() => import("./pages/Blog"));
const Careers = lazy(() => import("./pages/Careers"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Branches = lazy(() => import("./pages/Branches"));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ChatButton />
        <InstagramPopup />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/privacy-policy"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PrivacyPolicy />
              </Suspense>
            }
          />
          <Route
            path="/terms-conditions"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <TermsConditions />
              </Suspense>
            }
          />
          <Route
            path="/cookies-policy"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                {/* <CookiesPolicy /> */}
              </Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Blog />
              </Suspense>
            }
          />
          <Route
            path="/careers"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Careers />
              </Suspense>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Portfolio />
              </Suspense>
            }
          />
          <Route
            path="/branches"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Branches />
              </Suspense>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
