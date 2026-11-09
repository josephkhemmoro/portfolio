import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import hackathonScreenshot from "@/assets/hackathon_ss.png";

const DTEHackathonArticle = () => {
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
            <span className="text-portfolio-text">DTE Hackathon: Outage Routing Optimizer</span>
          </nav>

          <header className="mb-10">
            <time className="block text-sm text-portfolio-text-muted mb-2">October 3, 2025</time>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-4">DTE Energy Hackathon: Optimized Routing Simulator for Outage Dispatch Crews</h1>
            <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed">
              During a DTE Energy hackathon, our team built an intelligent routing optimization system to help dispatch crews respond to power outages more efficiently. The solution combines real-time data processing, route optimization algorithms, and an intuitive interface to minimize response times and maximize crew utilization.
            </p>
          </header>

          <section className="space-y-8 sm:space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Project Overview</h2>
              <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed">
                When power outages occur, dispatch crews need to respond quickly and efficiently. Our hackathon project, built by the "Terabyte Titans" team, addressed the challenge of optimal crew routing by building a real-time simulation system that calculates the most efficient paths for dispatch crews to tackle simultaneous outages. The solution uses Azure Maps for routing, implements a greedy nearest-neighbor optimization algorithm, and provides an interactive visualization of outage locations, service territories, and optimized routes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">The Challenge</h2>
              <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed mb-4">
                DTE Energy's dispatch operations face several complexities:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li><span className="text-portfolio-text font-medium">Multiple simultaneous outages</span> requiring strategic crew allocation</li>
                <li><span className="text-portfolio-text font-medium">Dynamic priorities</span> based on outage severity, customer impact, and safety considerations</li>
                <li><span className="text-portfolio-text font-medium">Real-time constraints</span> such as traffic, weather, and crew availability</li>
                <li><span className="text-portfolio-text font-medium">Resource optimization</span> to minimize total response time across all incidents</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Our Solution</h2>
              <div className="space-y-4 text-portfolio-text-muted">
                <p>
                  We developed a full-stack routing optimization simulator with the following key components:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="text-portfolio-text font-medium">Greedy Nearest-Neighbor Algorithm:</span> Iteratively selects the closest outage from the current crew location, minimizing immediate travel time</li>
                  <li><span className="text-portfolio-text font-medium">Azure Maps Integration:</span> Real-time route calculation using Azure Maps Directions API with live traffic data and polyline encoding</li>
                  <li><span className="text-portfolio-text font-medium">Interactive Map Visualization:</span> Azure Maps-powered interface showing outage locations, service territories, optimized routes, and crew positions</li>
                  <li><span className="text-portfolio-text font-medium">GeoJSON Data Ingestion:</span> Dynamic loading and parsing of outage data from GeoJSON feature collections</li>
                  <li><span className="text-portfolio-text font-medium">Route Persistence:</span> Express.js backend to save completed routes and calculate aggregate statistics</li>
                  <li><span className="text-portfolio-text font-medium">Performance Analytics:</span> Real-time tracking of total distance traveled and time elapsed across all completed jobs</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Technical Approach</h2>
              <div className="space-y-4 text-portfolio-text-muted">
                <p>
                  <span className="text-portfolio-text font-medium">Routing Algorithm:</span> We implemented a greedy nearest-neighbor heuristic that dynamically selects the next outage based on minimum travel time from the current location. The algorithm queries Azure Maps Directions API for each candidate job, comparing actual driving routes with traffic considerations rather than simple straight-line distances.
                </p>
                <p>
                  <span className="text-portfolio-text font-medium">Data Processing:</span> Outage data is loaded from GeoJSON feature collections via a custom parser that extracts coordinates, addresses, SLA deadlines, and status information. The system validates geometry types, handles missing fields with defaults, and maintains type safety through TypeScript interfaces.
                </p>
                <p>
                  <span className="text-portfolio-text font-medium">Polyline Decoding:</span> Azure Maps returns route geometries as encoded polylines to reduce payload size. I implemented a custom decoder that reverses the Google/OSRM polyline compression algorithm, extracting coordinate sequences for smooth route visualization on the map.
                </p>
                <p>
                  <span className="text-portfolio-text font-medium">State Management:</span> Zustand handles application state including job lists, route data, crew locations, and optimization triggers. The store pattern enables reactive updates across components when routes are calculated or jobs are completed.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li><span className="text-portfolio-text font-medium">Dynamic job filtering:</span> Sort outages by "Newest" or "SLA Soon" to prioritize critical work</li>
                <li><span className="text-portfolio-text font-medium">One-click route optimization:</span> "Optimize Route" button recalculates the best next job from current location</li>
                <li><span className="text-portfolio-text font-medium">Service territory overlay:</span> Visual boundary showing DTE's coverage area on the map</li>
                <li><span className="text-portfolio-text font-medium">Route visualization:</span> Real-time polyline rendering of optimized driving paths with traffic considerations</li>
                <li><span className="text-portfolio-text font-medium">Completion tracking:</span> Mark jobs as "Done" and see cumulative distance/time statistics</li>
                <li><span className="text-portfolio-text font-medium">Celebration modal:</span> Congratulatory UI showing total metrics when all outages are resolved</li>
              </ul>
              <figure className="mt-6">
                <img
                  src={hackathonScreenshot}
                  alt="DTE hackathon routing simulator interface showing outage list on the left with filtering options and an interactive Azure Maps visualization on the right displaying service territory, outage locations, and optimized route."
                  className="w-full rounded-lg border border-portfolio-border/30 shadow-sm bg-portfolio-surface object-cover"
                />
                <figcaption className="mt-2 text-xs text-portfolio-text-muted text-center">
                  Figure: Interactive routing simulator interface with outage management and real-time route visualization
                </figcaption>
              </figure>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Results & Impact</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li><span className="text-portfolio-text font-medium">Real-time optimization:</span> System calculates optimal next job in seconds using live traffic data</li>
                <li><span className="text-portfolio-text font-medium">Visual route tracking:</span> Dispatchers can see total distance and time for completed routes</li>
                <li><span className="text-portfolio-text font-medium">Successful hackathon demo:</span> Showcased interactive simulation with real DTE service territory data</li>
                <li><span className="text-portfolio-text font-medium">Scalable architecture:</span> Modular design supports extension to multi-crew coordination</li>
                <li><span className="text-portfolio-text font-medium">Production-ready patterns:</span> TypeScript types, error handling, and API abstraction for maintainability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Technology Stack</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li><span className="text-portfolio-text font-medium">Frontend:</span> React 19 + TypeScript + Vite for fast development and type safety</li>
                <li><span className="text-portfolio-text font-medium">Mapping:</span> Azure Maps Control SDK with custom polyline decoding</li>
                <li><span className="text-portfolio-text font-medium">Routing API:</span> Azure Maps Directions API with traffic-aware route calculation</li>
                <li><span className="text-portfolio-text font-medium">State Management:</span> Zustand for lightweight, reactive state</li>
                <li><span className="text-portfolio-text font-medium">Backend:</span> Express.js with TypeScript (ts-node) for route persistence</li>
                <li><span className="text-portfolio-text font-medium">Data Format:</span> GeoJSON for geospatial outage and territory data</li>
                <li><span className="text-portfolio-text font-medium">Concurrent Processes:</span> Concurrently to run Vite dev server and Express backend together</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Team & My Role</h2>
              <p className="text-portfolio-text-muted leading-relaxed mb-4">
                As part of the "Terabyte Titans" hackathon team, I contributed to both frontend and backend development:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li>Implemented the greedy routing algorithm with Azure Maps API integration</li>
                <li>Built the polyline decoding logic to visualize route geometries on the map</li>
                <li>Developed the route persistence system with Express backend and completion analytics</li>
                <li>Designed the TypeScript type system for jobs, crews, routes, and assignments</li>
                <li>Created the interactive map visualization with service territories and real-time route updates</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Lessons Learned</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li>Greedy algorithms provide fast, acceptable solutions for time-constrained hackathons, but more sophisticated approaches (simulated annealing, genetic algorithms) could yield better global optimality</li>
                <li>Azure Maps polyline encoding significantly reduces API response sizes—understanding the compression format was crucial for smooth route rendering</li>
                <li>Separating route calculation logic from visualization state enables cleaner testing and better debugging of optimization behavior</li>
                <li>Real-time traffic integration dramatically affects routing decisions compared to simple distance-based heuristics</li>
                <li>Building a minimal Express backend for route persistence allowed us to track aggregate metrics without overcomplicating the frontend</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Future Enhancements</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li><span className="text-portfolio-text font-medium">Multi-crew support:</span> Extend from single-crew optimization to simultaneous multi-crew coordination with load balancing</li>
                <li><span className="text-portfolio-text font-medium">Advanced algorithms:</span> Replace greedy approach with simulated annealing or genetic algorithms for global route optimization</li>
                <li><span className="text-portfolio-text font-medium">Animated route playback:</span> Leverage existing GPS trace animation logic to visualize crew movement over time</li>
                <li><span className="text-portfolio-text font-medium">Constraint handling:</span> Add crew shift times, skill requirements, and equipment availability to routing decisions</li>
                <li><span className="text-portfolio-text font-medium">Database integration:</span> Replace file-based route storage with PostgreSQL for persistent analytics and reporting</li>
                <li><span className="text-portfolio-text font-medium">Real-time updates:</span> WebSocket integration for live outage notifications and dynamic route recalculation</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DTEHackathonArticle;
