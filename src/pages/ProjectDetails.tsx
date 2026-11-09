import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import mtgOverlay from "@/assets/mtg-overlay.png";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ProjectFlow } from "@/components/ProjectCard";
import { caseStudies } from "@/data/projects";
import NotFound from "./NotFound";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = caseStudies.find((entry) => entry.slug === slug);

  if (!project) return <NotFound />;

  return (
    <>
      <Navigation />
      <main className="site-container portfolio-page">
        <Link className="portfolio-link" to="/projects"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
        <header className="portfolio-page-heading case-heading">
          <p className="portfolio-label">{project.category}</p>
          <h1>{project.name}</h1>
          <p>{project.headline}</p>
        </header>
        <div className="case-layout">
          <article className="case-body">
            <h2>Overview</h2>
            <p>{project.context}</p>
            <h2>{project.slug === "kova-aco" || project.slug === "shiftly" ? "What I worked on" : "How it works"}</h2>
            {project.contributions.map(({ title, detail }) => (
              <section key={title}>
                <h3>{title}</h3>
                <p>{detail}</p>
              </section>
            ))}
          </article>
          <aside className="case-sidebar" aria-label="Project details">
            <ProjectFlow project={project} />
            <div className="case-tools">
              <h2>Built with</h2>
              <ul>{project.stack.map((tool) => <li key={tool}>{tool}</li>)}</ul>
              {project.source && (
                <a className="portfolio-link" href={project.source}>
                  View source on GitHub <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </aside>
        </div>
        {project.slug === "mtg-chase-workbench" && (
          <figure className="case-example">
            <img src={mtgOverlay} width="1280" height="720" loading="lazy" alt="Portrait OBS preview with two selected Magic cards below the camera area" />
            <figcaption>Example stream layout with cards from two sets. Prices reflect the October 2026 preview.</figcaption>
          </figure>
        )}
      </main>
      <Footer />
    </>
  );
}
