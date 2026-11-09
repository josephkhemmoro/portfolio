import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import { caseStudies } from "./data/projects";
import NotFound from "./pages/NotFound";
import MyndraArticle from "./pages/articles/Myndra";
import DTEArticle from "./pages/articles/DTE";
import RayDxArticle from "./pages/articles/RayDx";
import DTEHackathonArticle from "./pages/articles/DTEHackathon";
import ActivePotholeDetectionArticle from "./pages/articles/ActivePotholeDetection";
import AstraERPArticle from "./pages/articles/AstraERP";
import CarDamageDetectionArticle from "./pages/articles/CarDamageDetection";
import Articles from "./pages/Articles";


const AppRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = { "/about": "About", "/articles": "Articles", "/projects": "Projects" };
    const project = caseStudies.find(({ slug }) => pathname === `/projects/${slug}`);
    const title = project?.name ?? titles[pathname];
    document.title = title ? `${title} | Joseph Khemmoro` : "Joseph Khemmoro | Software Engineer";
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
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
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
