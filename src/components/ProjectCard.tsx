import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ProjectCaseStudy } from "@/data/projects";

export function ProjectFlow({ project }: { project: ProjectCaseStudy }) {
  return (
    <div className="project-flow" data-project={project.slug}>
      <p>Workflow</p>
      <ol aria-label={project.name + " workflow"}>
        {project.flow.map((step, index) => (
          <li key={step}>
            {index > 0 && <ArrowRight size={13} aria-hidden="true" />}
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function ProjectCard({ project }: { project: ProjectCaseStudy }) {
  return (
    <article className="project-card">
      <ProjectFlow project={project} />
      <div className="project-card-copy">
        <p className="portfolio-label">{project.category}</p>
        <h3>
          <Link to={`/projects/${project.slug}`}>
            {project.name}
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </h3>
        <p className="project-headline">{project.headline}</p>
        <p className="project-summary">{project.summary}</p>
      </div>
    </article>
  );
}
