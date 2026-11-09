import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AstraERPArticle = () => {
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
            <span className="text-portfolio-text">AstraERP: Multi-Tenant SaaS for Small Businesses</span>
          </nav>

          <header className="mb-10">
            <time className="block text-sm text-portfolio-text-muted mb-2">November 22, 2025</time>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-4">
              AstraERP: Building a Winning AI-Powered ERP at MI DevFest Hackathon
            </h1>
            <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed">
              AstraERP is a production-ready, multi-tenant SaaS application built for the MI DevFest Hackathon — and won.
              It serves as an operating system for small businesses, combining inventory management, AI-driven employee
              scheduling, financial tracking, and white-label branding under a single platform powered by IBM WatsonX and Supabase.
            </p>
          </header>

          <section className="space-y-8 sm:space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">The Problem</h2>
              <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed">
                Small business owners juggle a lot — managing inventory by hand, building employee schedules in spreadsheets,
                and guessing whether payroll is eating into margins. Most ERP tools are either too expensive, too complex,
                or built for enterprises, not the local restaurant or retail shop. AstraERP was built to change that.
              </p>
              <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed mt-3">
                The goal was to build a lean, modern ERP that any small business owner could pick up and use immediately,
                with AI doing the heavy lifting for scheduling and restocking.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Core Features</h2>
              <div className="space-y-4 text-portfolio-text-muted text-sm sm:text-base leading-relaxed">
                <div>
                  <p className="text-portfolio-text font-medium mb-1">Inventory Management</p>
                  <p>
                    Track stock levels with visual indicators — In Stock, Low, or Out. When stock dips below a minimum threshold,
                    the system uses IBM WatsonX to generate a smart order list with a 20% buffer built in. Orders can be
                    sent directly through Instacart integration, eliminating the friction of manually contacting suppliers.
                  </p>
                </div>
                <div>
                  <p className="text-portfolio-text font-medium mb-1">AI Schedule Builder</p>
                  <p>
                    Employee scheduling is one of the most time-consuming tasks for a small business owner. AstraERP
                    automates it entirely. Employees are profiled with a strength level — Strong, Normal, or New — along
                    with their weekly availability. WatsonX generates a weekly schedule that pairs experienced staff with
                    newer hires, respects availability constraints, and satisfies minimum staffing requirements per day.
                  </p>
                </div>
                <div>
                  <p className="text-portfolio-text font-medium mb-1">Sales vs. Payroll Tracking</p>
                  <p>
                    A simple but powerful financial view: log weekly gross sales and payroll, and AstraERP calculates
                    your payroll-to-sales ratio in real time. Color-coded thresholds (green below 28%, yellow 28–35%, red above 35%)
                    give owners instant visibility into whether labor costs are sustainable.
                  </p>
                </div>
                <div>
                  <p className="text-portfolio-text font-medium mb-1">Reminders & Dashboard</p>
                  <p>
                    A lightweight reminders system lets owners schedule alerts for inventory restocking, payroll deadlines,
                    or scheduling tasks. The dashboard surfaces today's reminders front and center so nothing slips through.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Multi-Tenancy & Security</h2>
              <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed mb-3">
                AstraERP is fully multi-tenant from the ground up. Every business that signs up gets a completely
                isolated data environment — no cross-business access is possible. This was implemented using Supabase's
                Row-Level Security (RLS) policies, where every database table is gated by a <code className="text-portfolio-text bg-portfolio-surface/60 px-1 py-0.5 rounded text-xs">business_id</code> pulled
                from the authenticated user's JWT metadata.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted text-sm sm:text-base">
                <li>JWT tokens carry <code className="text-portfolio-text bg-portfolio-surface/60 px-1 py-0.5 rounded text-xs">business_id</code> in user metadata; the backend validates it on every request.</li>
                <li>All queries filter by <code className="text-portfolio-text bg-portfolio-surface/60 px-1 py-0.5 rounded text-xs">business_id</code> — cross-tenant attempts return a 403.</li>
                <li>Each business can upload its own logo for white-label branding, stored in Supabase Storage.</li>
                <li>The Supabase service role key is backend-only; the anon key is safe for the frontend.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Architecture</h2>
              <div className="space-y-4 text-portfolio-text-muted text-sm sm:text-base leading-relaxed">
                <p>
                  The backend is a FastAPI application organized into modular routers — one per domain (inventory, employees,
                  schedule, financials, reminders, dashboard). A shared auth middleware validates the JWT on every request
                  and injects the <code className="text-portfolio-text bg-portfolio-surface/60 px-1 py-0.5 rounded text-xs">business_id</code> into the request context.
                </p>
                <p>
                  AI features are encapsulated in a <code className="text-portfolio-text bg-portfolio-surface/60 px-1 py-0.5 rounded text-xs">WatsonxClient</code> service with local fallback
                  algorithms in <code className="text-portfolio-text bg-portfolio-surface/60 px-1 py-0.5 rounded text-xs">inventory_engine.py</code> and <code className="text-portfolio-text bg-portfolio-surface/60 px-1 py-0.5 rounded text-xs">schedule_engine.py</code>.
                  This means the app degrades gracefully if WatsonX is unavailable rather than breaking entirely.
                </p>
                <p>
                  The frontend is a React + TypeScript SPA using React Router for client-side navigation. Auth and business
                  state are managed through React Context (<code className="text-portfolio-text bg-portfolio-surface/60 px-1 py-0.5 rounded text-xs">AuthContext</code>, <code className="text-portfolio-text bg-portfolio-surface/60 px-1 py-0.5 rounded text-xs">BusinessContext</code>),
                  and API calls go through an Axios client configured with the current session token.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Technology Stack</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                <div>
                  <p className="text-portfolio-text font-medium mb-2">Backend</p>
                  <ul className="list-disc pl-6 space-y-1 text-portfolio-text-muted">
                    <li>FastAPI (Python)</li>
                    <li>Supabase (PostgreSQL + Auth + Storage)</li>
                    <li>IBM WatsonX.ai</li>
                    <li>Pydantic</li>
                  </ul>
                </div>
                <div>
                  <p className="text-portfolio-text font-medium mb-2">Frontend</p>
                  <ul className="list-disc pl-6 space-y-1 text-portfolio-text-muted">
                    <li>React + TypeScript</li>
                    <li>React Router</li>
                    <li>TailwindCSS</li>
                    <li>Axios</li>
                    <li>Lucide React</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Winning at MI DevFest</h2>
              <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed">
                AstraERP took first place at MI DevFest Hackathon. The judging criteria centered on technical execution,
                real-world applicability, and the integration of AI in a meaningful way. The combination of a fully functional
                multi-tenant system built in under 48 hours, IBM WatsonX powering actual business logic (not just a chatbot),
                and a clean demo of data isolation across tenants made the difference. The Instacart integration was a
                highlight — it turned an AI-generated order list into a real, actionable workflow.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Takeaways</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted text-sm sm:text-base">
                <li>Multi-tenancy at the database layer (RLS) is far more secure than application-level filtering alone.</li>
                <li>Graceful AI fallbacks are essential — WatsonX isn't always available, and the app can't break when it isn't.</li>
                <li>Scoping a hackathon project tightly around a real user pain point (small business ops) made the demo compelling and the product feel complete.</li>
                <li>FastAPI's automatic OpenAPI docs were invaluable for rapid frontend-backend iteration under time pressure.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Repository</h2>
              <p className="text-xs sm:text-sm text-portfolio-text-muted">
                The full source code is available on GitHub:{" "}
                <a
                  href="https://github.com/josephkhemmoro/astra-erp"
                  target="_blank"
                  rel="noreferrer"
                  className="text-portfolio-accent hover:text-portfolio-accent/80"
                >
                  astra-erp on GitHub
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AstraERPArticle;