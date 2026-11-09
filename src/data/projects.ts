export interface ProjectCaseStudy {
  slug: string;
  name: string;
  category: string;
  headline: string;
  summary: string;
  stack: string[];
  context: string;
  contributions: { title: string; detail: string }[];
  flow: string[];
  source?: string;
}

export const caseStudies: ProjectCaseStudy[] = [
  {
    slug: "kova-aco",
    name: "Kova ACO",
    category: "Commerce operations",
    headline: "One workspace for orders, profiles, and invoices",
    summary: "A customer portal and operator dashboard for a checkout service. I worked on bulk imports, order tracking, and billing.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    context: "Customers needed one place to manage their profiles, check order progress, and pay invoices. Operators needed to handle those same workflows across many customers with different access permissions.",
    contributions: [
      { title: "Order reconciliation", detail: "I built email parsing that turns retailer confirmations, shipments, deliveries, and cancellations into a consistent order history. The sync deduplicates events so reprocessing a message doesn’t create duplicate activity." },
      { title: "Profile imports", detail: "I added staged uploads for larger import files and improved validation so operators can find errors before creating profiles. I also added member filters and bulk actions to make profiles easier to manage at scale." },
      { title: "Billing", detail: "I integrated Stripe invoicing and payment-status updates. Invoice creation uses idempotency so a retry can safely recover without creating another invoice." },
    ],
    flow: ["Retailer email", "Order history", "Customer dashboard"],
  },
  {
    slug: "shiftly",
    name: "Shiftly",
    category: "Wayne State team capstone",
    headline: "Employee scheduling with a manager review step",
    summary: "A team-built scheduling app that turns employee availability and staffing rules into schedules managers can review and publish.",
    stack: ["React", "FastAPI", "Supabase", "PostgreSQL"],
    context: "Our team built Shiftly around three roles. Employees enter their availability, managers review generated schedules, and administrators manage accounts. The scheduling service checks availability and staffing constraints before managers publish shifts.",
    contributions: [
      { title: "Manager workspace", detail: "I built the manager dashboard and helped connect its schedule and team views to authenticated APIs. I added browser checks for the scheduling workflow and prepared fixtures for repeatable demos." },
      { title: "Account lifecycle", detail: "I added signup email confirmation and a permanent account deletion flow for administrators. The deletion flow handles related scheduling records so an account can be removed cleanly." },
      { title: "Deployment and handoff", detail: "I configured the React frontend on Vercel and the backend services on Railway. I also documented the setup and how to verify the integrated prototype." },
    ],
    flow: ["Availability", "Manager review", "Published schedule"],
  },
  {
    slug: "recreserve",
    name: "RecReserve",
    category: "Mobile and web app",
    headline: "Court reservations for tennis and pickleball clubs",
    summary: "Players can find courts, reserve time, and join waitlists. Club staff manage availability and reservations from a web dashboard.",
    stack: ["Expo", "React Native", "Next.js", "Supabase"],
    context: "A club needs two different views of the same schedule. Players need to see when they can book. Staff need to set booking rules, manage courts, and update reservations when availability changes.",
    contributions: [
      { title: "Player app", detail: "The Expo app lets players switch between clubs, browse by sport, book and cancel reservations, and join waitlists for reserved slots." },
      { title: "Club dashboard", detail: "The Next.js dashboard brings together court hours, booking rules, member tiers, and a reservation calendar. Staff can also close courts for weather and notify affected players." },
      { title: "Shared data", detail: "The mobile app and admin dashboard share TypeScript types in one repository. Supabase provides the shared database and authentication." },
    ],
    flow: ["Find a court", "Choose a time", "Book or join the waitlist"],
    source: "https://github.com/josephkhemmoro/RecReserve",
  },
  {
    slug: "mtg-chase-workbench",
    name: "MTG Chase Workbench",
    category: "Desktop tool",
    headline: "A live card overlay for OBS",
    summary: "A Mac and Windows tool for choosing the Magic cards and price estimates to show during a livestream.",
    stack: ["Python", "JavaScript", "OBS", "Scryfall"],
    context: "During a pack opening, the streamer needs to change the card list and mark pulls while viewers keep seeing a clean overlay. The workbench separates the browser controls from the transparent OBS view.",
    contributions: [
      { title: "Card selection", detail: "Streamers can combine sets, choose exact printings and finishes, reorder the display, and override an estimated price. Pack profiles save those choices for future streams." },
      { title: "Stream layout", detail: "The browser source supports portrait video and can place the strip at the top or bottom of the scene. Selections and pulled-card markers persist locally across sessions." },
    ],
    flow: ["Load sets", "Curate cards", "Show in OBS"],
  },
];

export const archivedProjects = [
  { name: "Car Damage Detection", category: "Computer vision", summary: "Detecting six types of vehicle damage with YOLOv8 and YOLO11.", article: "/articles/car-damage-detection", source: "https://github.com/josephkhemmoro/car-damage-detection" },
  { name: "AstraERP", category: "MI DevFest hackathon", summary: "An award-winning small-business ERP with AI-assisted scheduling and inventory.", article: "/articles/astra-erp", source: "https://github.com/josephkhemmoro/astra-erp" },
  { name: "Active Pothole Detection", category: "Computer vision", summary: "Identifying road damage in images and video with YOLOv8 and OpenCV.", article: "/articles/active-pothole-detection", source: "https://github.com/josephkhemmoro/active_pothole_detection" },
  { name: "DTE Energy Hackathon", category: "Routing", summary: "A simulator for routing dispatch crews during power outages.", article: "/articles/dte-hackathon", source: "https://github.com/josephkhemmoro/dte-hackathon" },
  { name: "Myndra", category: "AI research", summary: "Multi-agent orchestration with shared memory and a radiology prototype.", article: "/articles/myndra" },
  { name: "RayDx", category: "Medical imaging", summary: "A Flask API for detecting pneumonia in chest X-rays with MobileNetV2.", article: "/articles/raydx", source: "https://github.com/josephkhemmoro/raydx-backend" },
  { name: "Portfolio Website", category: "Web app", summary: "The React and TypeScript source for this site.", source: "https://github.com/josephkhemmoro/portfolio" },
];
