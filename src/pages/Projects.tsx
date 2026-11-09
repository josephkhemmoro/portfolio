import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { archivedProjects, caseStudies } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <Navigation />
      <main className="site-container portfolio-page">
        <header className="portfolio-page-heading">
          <h1>Projects</h1>
          <p>Case studies from recent work, plus earlier experiments in computer vision, AI, and routing.</p>
        </header>
        <section aria-labelledby="case-studies">
          <h2 className="sr-only" id="case-studies">Case studies</h2>
          <div className="project-grid">
            {caseStudies.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </section>
        <section className="portfolio-section" aria-labelledby="project-archive">
          <h2 className="subsection-title" id="project-archive">Project archive</h2>
          <div className="archive-list">
            {archivedProjects.map((project) => (
              <article key={project.name}>
                <div>
                  <p className="portfolio-label">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="project-summary">{project.summary}</p>
                </div>
                <div className="archive-actions">
                  {project.article && (
                    <Link className="portfolio-link" to={project.article} aria-label={`Read about ${project.name}`}>
                      Article <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  )}
                  {project.source && (
                    <a className="portfolio-link" href={project.source} aria-label={`View ${project.name} on GitHub`}>
                      GitHub <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
