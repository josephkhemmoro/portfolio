import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Articles = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const articles = [
    {
      date: "September 24, 2025",
      title: "Myndra: A Multi-Agent Orchestration Platform for Collaborative, Human‑Like AI",
      summary:
        "Myndra is a research and deployment platform for coordinating human‑like AI agents with shared memory, knowledge graphs, and natural‑language communication. The first prototype focuses on radiology, orchestrating imaging workflows and decision support with strong guarantees around interpretability and auditability. The architecture spans an orchestration core, shared memory subsystem, learning/reasoning layer (LLMs + RL + symbolic), and domain workflows.",
      to: "/articles/myndra",
    },
    {
      date: "August 8, 2025",
      title: "DTE Energy: Microsoft Teams Chatbot on Azure Functions",
      summary:
        "I engineered a modular TypeScript Azure Functions app integrated with ServiceNow and deployed with Terraform. The system powers NLP‑driven chatbot workflows in Microsoft Teams, improving response latency by ~30%, enabling 500+ employees with self‑service access to enterprise data, and reducing manual queries by ~40%. The solution emphasizes clear function boundaries, robust error handling, and production‑grade DevOps.",
      to: "/articles/dte",
    },
    {
      date: "June 15, 2025",
      title: "RayDx Backend: Pneumonia Detection API",
      summary:
        "A Flask backend for chest X‑ray pneumonia detection using a fine‑tuned MobileNetV2, returning predictions with confidence scores and generating radiology‑style reports via xAI Grok‑3. It ships with image validation, detailed logging, health checks, debug routes, and production deployment via Gunicorn, plus usage examples in cURL, Python, and JavaScript.",
      to: "/articles/raydx",
    },
  ];

  return (
    <div className="min-h-screen bg-portfolio-bg flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-16">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-portfolio-text mb-3">Articles</h1>
            <p className="text-portfolio-text-muted">Writings on the details and process behind all of my projects as well as the tech stacks behind them, collected in chronological order.</p>
          </header>

          <div className="space-y-10">
            {articles.map((a, i) => (
              <article key={i} className="group rounded-xl border border-portfolio-border/30 bg-portfolio-surface/30 p-6">
                <time className="text-sm text-portfolio-text-muted mb-2 block">{a.date}</time>
                <h2 className="text-2xl font-semibold text-portfolio-text mb-3 group-hover:text-portfolio-accent transition-colors">
                  <Link to={a.to}>{a.title}</Link>
                </h2>
                <p className="text-portfolio-text-muted leading-relaxed mb-4">{a.summary}</p>
                <div>
                  <Link to={a.to} className="text-portfolio-accent hover:text-portfolio-accent/80">
                    Read full article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
