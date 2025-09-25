import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Hammer, Hourglass } from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-bg flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-portfolio-surface border border-portfolio-border/30 shadow-sm mb-6">
            <Hourglass className="w-7 h-7 text-portfolio-text" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-portfolio-text mb-3">Projects</h1>
          <p className="text-portfolio-text-muted mb-8 text-sm sm:text-base max-w-[60ch] mx-auto">
            I’m polishing case studies and visuals. Check back soon to explore detailed write‑ups of my recent work!
          </p>

          <div className="inline-flex items-center gap-2 text-portfolio-text-muted">
            <Hammer className="w-4 h-4" />
            <span>Under construction</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
