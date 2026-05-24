import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";

const queryClient = new QueryClient();

function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-lg font-bold text-gray-900">StudyPoint</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/" className={`text-sm font-medium transition-colors ${location === "/" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>
            Home
          </Link>
          <Link href="/courses" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Courses
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Pricing
          </Link>
          <Link href="/resources" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Resources
          </Link>
          <Link href="/gallery" className={`text-sm font-medium transition-colors ${location === "/gallery" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}>
            About Us
          </Link>
          <Link href="/login" className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Login/Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-white font-bold text-lg">StudyPoint</span>
        </div>
        <p className="text-sm">Enhance your study experience. Anytime, anywhere.</p>
        <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-gray-600">
          © 2026 StudyPoint. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
