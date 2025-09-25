import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const DTEArticle = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-bg flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
          <nav className="mb-8 text-sm">
            <a href="/" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors">Home</a>
            <span className="mx-2 text-portfolio-text-muted">/</span>
            <a href="/articles" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors">Articles</a>
            <span className="mx-2 text-portfolio-text-muted">/</span>
            <span className="text-portfolio-text">DTE Energy Chatbot & Azure Functions</span>
          </nav>

          <header className="mb-10">
            <time className="block text-sm text-portfolio-text-muted mb-2">August 8, 2025</time>
            <h1 className="text-3xl md:text-4xl font-bold text-portfolio-text mb-4">Building a Microsoft Teams Chatbot on Azure Functions for Enterprise Workflows (DTE Energy)</h1>
            <p className="text-portfolio-text-muted leading-relaxed">
              As a Software Engineer Intern at DTE Energy, I engineered a modular TypeScript Azure Functions app powering NLP-driven chatbot workflows in Microsoft Teams, integrated with ServiceNow, and deployed with Terraform. The result: faster responses, fewer manual queries, and production-ready automation.
            </p>
          </header>

          <section className="space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Project Overview</h2>
              <p className="text-portfolio-text-muted leading-relaxed">
                The goal was to enable employees to retrieve real-time enterprise data directly in Teams. I built serverless workflows using Azure Functions that validated inputs, called ServiceNow APIs, and returned context-aware responses. Terraform automated infrastructure to ensure consistent, repeatable deployments.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Impact</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li><span className="text-portfolio-text font-medium">30% lower response latency</span> across key chatbot flows by modularizing compute and optimizing network calls.</li>
                <li><span className="text-portfolio-text font-medium">500+ employees served</span> with self-service access to enterprise data directly in Teams.</li>
                <li><span className="text-portfolio-text font-medium">40% reduction in manual queries</span> to internal teams through workflow automation and accurate routing.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Architecture</h2>
              <div className="space-y-4 text-portfolio-text-muted">
                <p>The solution used serverless functions to separate concerns and scale on demand:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="text-portfolio-text font-medium">Teams Bot Frontend:</span> Receives user messages and forwards intents to APIs.</li>
                  <li><span className="text-portfolio-text font-medium">Azure Functions (TypeScript):</span> Modular HTTP triggers for validation, routing, and integration.</li>
                  <li><span className="text-portfolio-text font-medium">ServiceNow Integration:</span> Secure API calls for incidents, tickets, and knowledge retrieval.</li>
                  <li><span className="text-portfolio-text font-medium">State & Config:</span> Environment-secure app settings and secrets; idempotent handlers.</li>
                  <li><span className="text-portfolio-text font-medium">IaC with Terraform:</span> Provisioned function apps, app insights, and supporting resources.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Key Contributions</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li>Designed function boundaries for <span className="text-portfolio-text font-medium">validation, workflow routing, and response formatting</span>.</li>
                <li>Integrated <span className="text-portfolio-text font-medium">ServiceNow APIs</span> with robust error handling and retries.</li>
                <li>Built <span className="text-portfolio-text font-medium">Teams chatbot</span> flows that processed user messages in real time.</li>
                <li>Collaborated in <span className="text-portfolio-text font-medium">Agile sprints</span> to deliver features rapidly with code reviews and CI/CD.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Technology Stack</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li>TypeScript Azure Functions (HTTP triggers)</li>
                <li>Microsoft Teams bot integration</li>
                <li>ServiceNow REST APIs</li>
                <li>Terraform for IaC</li>
                <li>Azure App Service, App Insights</li>
                <li>DevOps workflows (pipelines, infrastructure automation)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Lessons Learned</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li>Serverless patterns simplify scaling but require careful cold-start and dependency management.</li>
                <li>Clear separation between validation, orchestration, and integration layers improves reliability and testability.</li>
                <li>IaC with Terraform is essential for repeatable enterprise deployments and environment parity.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DTEArticle;
