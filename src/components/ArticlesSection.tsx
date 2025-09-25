import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ArticlesSection = () => {
  const articles = [
    {
      date: "September 24, 2025",
      title: "Myndra: A Multi-Agent Orchestration Platform for Collaborative, Human‑Like AI",
      description:
        "Introducing Myndra, a platform for coordinating human-like AI agents with shared memory and knowledge graphs, with a radiology-focused prototype.",
      url: "/articles/myndra",
    },
    {
      date: "August 8, 2025",
      title: "DTE Energy: Microsoft Teams Chatbot on Azure Functions",
      description:
        "How I engineered a modular TypeScript Azure Functions app with ServiceNow integrations and Terraform to power enterprise chatbot workflows.",
      url: "/articles/dte",
    },
    {
      date: "June 15, 2025",
      title: "RayDx Backend: Pneumonia Detection API",
      description:
        "Chest X-ray pneumonia detection using a fine-tuned MobileNetV2 with xAI Grok-3 report generation and production-ready Flask APIs.",
      url: "/articles/raydx",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-portfolio-text mb-8 sm:mb-12">
        What I've Been Working On...
      </h2>
      
      <div className="space-y-8 sm:space-y-12">
  {articles.map((article, i) => (
    <article key={i} className="group">
      <div className="flex items-start gap-4">
        <div className="w-1 h-12 sm:h-16 bg-portfolio-surface rounded-full flex-shrink-0 mt-1" />
        <div className="flex-1">
          <time className="text-xs sm:text-sm text-portfolio-text-muted mb-2 block">{article.date}</time>

          {/* narrower title width */}
          <h3 className="text-lg sm:text-xl font-semibold text-portfolio-text mb-3 group-hover:text-portfolio-accent transition-colors duration-200
                         max-w-[48ch] text-balance">
            {article.title}
          </h3>

          {article.description && (
            // narrower body width + pleasant wrapping
            <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed mb-4 max-w-[65ch] text-pretty hyphens-auto">
              {article.description}
            </p>
          )}

          {(article.url ? (
            <Link
              to={article.url}
              className="inline-flex items-center text-portfolio-accent hover:text-portfolio-accent/80 transition-colors duration-200 text-sm sm:text-base"
            >
              Read article <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          ) : (
            <a
              href="#"
              className="inline-flex items-center text-portfolio-accent hover:text-portfolio-accent/80 transition-colors duration-200 text-sm sm:text-base"
            >
              Read article <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          ))}
        </div>
      </div>
    </article>
  ))}
</div>
    </div>
  );
};

export default ArticlesSection;