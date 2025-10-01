import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import myndraArchitecture from "@/assets/myndra-architecture.png";

const MyndraArticle = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return (
    <div className="min-h-screen bg-portfolio-bg flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
          <nav className="mb-8 text-xs sm:text-sm">
            <Link to="/" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors">Home</Link>
            <span className="mx-2 text-portfolio-text-muted">/</span>
            <Link to="/articles" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors">Articles</Link>
            <span className="mx-2 text-portfolio-text-muted">/</span>
            <span className="text-portfolio-text">Myndra</span>
          </nav>

          <header className="mb-10">
            <time className="block text-sm text-portfolio-text-muted mb-2">September 24, 2025</time>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-4">Myndra: A Multi-Agent Orchestration Platform for Collaborative, Human‑Like AI</h1>
            <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed">
              Myndra is a multi-agent orchestration platform designed to simulate and deploy human-like AI agents that collaborate via shared memory, knowledge graphs, and natural language. It serves both as a research testbed and as a foundation for building adaptive, auditable AI systems.
            </p>
          </header>

          <section className="space-y-8 sm:space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Project Overview</h2>
              <p className="text-portfolio-text-muted leading-relaxed">
                The first prototype applies the Myndra framework in radiology, where autonomous-yet-coordinated agents assist with medical imaging workflows, reason across diagnostic information, and provide decision support. The focus is on safe collaboration, interpretability, and auditability.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Core Concepts</h2>
              <ul className="list-disc pl-6 space-y-3 text-portfolio-text-muted">
                <li>
                  <span className="text-portfolio-text font-medium">Agents:</span> Moldable, human-like entities with reasoning, communication, and decision-making capabilities. They collaborate through shared state and structured exchanges.
                </li>
                <li>
                  <span className="text-portfolio-text font-medium">Shared Memory Module:</span> A centralized memory enabling agent collaboration. The roadmap includes private short‑term memory per agent.
                </li>
                <li>
                  <span className="text-portfolio-text font-medium">Knowledge Graph Integration:</span> Structures radiology-relevant facts and relationships, enabling reasoning across diagnostic inputs.
                </li>
                <li>
                  <span className="text-portfolio-text font-medium">Episodic Memory (Planned):</span> A sequential record of agent experiences for training and auditability in clinical scenarios.
                </li>
                <li>
                  <span className="text-portfolio-text font-medium">Language as Medium:</span> Agents communicate via natural language to facilitate interpretability in sensitive domains like radiology.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">High‑Level Architecture</h2>
              <div className="space-y-4 text-portfolio-text-muted">
                <p>
                  Myndra’s architecture balances modularity with strong guarantees around memory and communication.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="text-portfolio-text font-medium">Frontend:</span> Interface for experiments and agent interaction.</li>
                  <li><span className="text-portfolio-text font-medium">Orchestration Core:</span> Schedules agent lifecycles and inter-agent communication.</li>
                  <li><span className="text-portfolio-text font-medium">Memory Subsystem:</span> Shared memory + knowledge graph + episodic logs.</li>
                  <li><span className="text-portfolio-text font-medium">Learning/Reasoning Layer:</span> LLMs, reinforcement learning, and symbolic reasoning.</li>
                  <li><span className="text-portfolio-text font-medium">Persistence:</span> Databases for memory and logs.</li>
                  <li><span className="text-portfolio-text font-medium">Domain Layer (Prototype):</span> Radiology workflows (image findings, report coordination, diagnostic support).</li>
                </ul>
              </div>
              <figure className="mt-6">
                <img
                  src={myndraArchitecture}
                  alt="Myndra high-level architecture diagram showing frontend, orchestration core, memory subsystem, reasoning layer, persistence, and domain layer."
                  className="w-full rounded-lg border border-portfolio-border/30 shadow-sm bg-portfolio-surface object-cover"
                />
                <figcaption className="mt-2 text-xs text-portfolio-text-muted text-center">
                  Figure: High‑level architecture of the Myndra multi‑agent platform
                </figcaption>
              </figure>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Requirements Prep</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg border border-portfolio-border/30 bg-portfolio-surface/30">
                  <h3 className="font-semibold text-portfolio-text mb-2">Functional</h3>
                  <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                    <li>Radiology-specific agent roles (assistant, knowledge retriever, QA checker)</li>
                    <li>Communication protocols between agents for case handling</li>
                    <li>Shared vs. private memory for clinical data handling</li>
                    <li>Experiment logging for medical auditability</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-portfolio-border/30 bg-portfolio-surface/30">
                  <h3 className="font-semibold text-portfolio-text mb-2">Non‑functional</h3>
                  <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                    <li>Scalability across many cases and agents</li>
                    <li>Extensibility for additional medical domains</li>
                    <li>Security/Privacy compliance (HIPAA‑aligned)</li>
                    <li>Interpretability and robust audit trails</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Technology Stack</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li>Python orchestration core</li>
                <li>FastAPI/Django backend</li>
                <li>PostgreSQL + Redis for memory</li>
                <li>PyTorch/LLMs for reasoning</li>
                <li>Docker + AWS for scalable deployment</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Testing Ground: Radiology</h2>
              <p className="text-portfolio-text-muted leading-relaxed">
                The prototype centers on radiology tasks such as orchestrating imaging workflows, reasoning across patient data, and providing decision support. By grounding in a high‑stakes domain, Myndra emphasizes traceability and human‑level interpretability from day one.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Why It Matters</h2>
              <p className="text-portfolio-text-muted leading-relaxed">
                As AI systems move from single‑model prompts to coordinated teams of agents, we need platforms that manage memory, conversation, and long‑horizon reasoning. Myndra’s design aims to make such systems safe, extensible, and auditable—particularly crucial in clinical settings.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyndraArticle;
