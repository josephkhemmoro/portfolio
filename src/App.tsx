import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import MyndraArticle from "./pages/articles/Myndra";
import DTEArticle from "./pages/articles/DTE";
import RayDxArticle from "./pages/articles/RayDx";
import DTEHackathonArticle from "./pages/articles/DTEHackathon";
import ActivePotholeDetectionArticle from "./pages/articles/ActivePotholeDetection";
import AstraERPArticle from "./pages/articles/AstraERP";
import CarDamageDetectionArticle from "./pages/articles/CarDamageDetection";
import Articles from "./pages/Articles";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/raydx" element={<RayDxArticle />} />
        <Route path="/articles/dte" element={<DTEArticle />} />
        <Route path="/articles/myndra" element={<MyndraArticle />} />
        <Route path="/articles/dte-hackathon" element={<DTEHackathonArticle />} />
        <Route path="/articles/active-pothole-detection" element={<ActivePotholeDetectionArticle />} />
        <Route path="/articles/astra-erp" element={<AstraERPArticle />} />
        <Route path="/articles/car-damage-detection" element={<CarDamageDetectionArticle />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
