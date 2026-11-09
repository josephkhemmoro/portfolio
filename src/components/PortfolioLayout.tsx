import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/projects";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ProjectCard from "./ProjectCard";
import ArticlesSection from "./ArticlesSection";
import WorkExperience from "./WorkExperience";
import Footer from "./Footer";

export default function PortfolioLayout() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <section id="selected-work" className="site-container portfolio-section">
          <div className="section-heading">
            <h2>Selected work</h2>
            <Link className="portfolio-link" to="/projects">
              All projects <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="project-grid">
            {caseStudies.slice(0, 2).map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </section>
        <div className="site-container portfolio-section home-details">
          <WorkExperience />
          <ArticlesSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
