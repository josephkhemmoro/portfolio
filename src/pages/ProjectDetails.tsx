import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { caseStudies } from "@/data/projects";
import NotFound from "./NotFound";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = caseStudies.find((entry) => entry.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  if (!project) return <NotFound />;

  const bodyText = "text-sm sm:text-base text-portfolio-text-muted leading-relaxed";

  return (
    <div className="min-h-screen bg-portfolio-bg flex flex-col">
      <Navigation />
      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-6 pt-28 pb-16">
          <nav className="mb-8 text-xs sm:text-sm" aria-label="Breadcrumb">
            <Link to="/" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors">Home</Link>
            <span className="mx-2 text-portfolio-text-muted">/</span>
            <Link to="/projects" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors">Projects</Link>
            <span className="mx-2 text-portfolio-text-muted">/</span>
            <span className="text-portfolio-text">{project.name}</span>
          </nav>
          <header className="mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-4">{project.name}</h1>
            <p className={bodyText}>{project.summary}</p>
          </header>
          <div className="space-y-8 sm:space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Project Overview</h2>
              <p className={bodyText}>{project.context}</p>
            </section>
            {project.contributions.map(({ title, detail }) => (
              <section key={title}>
                <h2 className="text-xl font-semibold text-portfolio-text mb-3">{title}</h2>
                <p className={bodyText}>{detail}</p>
              </section>
            ))}
            <section>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Technology Stack</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted text-sm sm:text-base">
                {project.stack.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </section>
            {project.source && (
              <a href={project.source} className="text-portfolio-accent hover:text-portfolio-accent/80">
                View source on GitHub
              </a>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
