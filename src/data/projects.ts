interface ProjectCaseStudy {
  slug: string;
  name: string;
  icon: string;
  iconBg: string;
  headline: string;
  summary: string;
  stack: string[];
  context: string;
  contributions: { title: string; detail: string }[];
  source?: string;
}

export const caseStudies: ProjectCaseStudy[] = [
  {
    slug: "kova-aco",
    name: "Kova ACO",
    icon: "📦",
    iconBg: "bg-green-500/10",
    headline: "One workspace for orders, profiles, and invoices",
    summary: "A customer portal and operator dashboard for a checkout service. I worked on bulk imports, order tracking, and billing.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    context: "Customers needed one place to manage their profiles, check order progress, and pay invoices. Operators needed to handle those same workflows across many customers with different access permissions.",
    contributions: [
      { title: "Order reconciliation", detail: "I built email parsing that turns retailer confirmations, shipments, deliveries, and cancellations into a consistent order history. The sync deduplicates events so reprocessing a message doesn’t create duplicate activity." },
      { title: "Profile imports", detail: "I added staged uploads for larger import files and improved validation so operators can find errors before creating profiles. I also added member filters and bulk actions to make profiles easier to manage at scale." },
      { title: "Billing", detail: "I integrated Stripe invoicing and payment-status updates. Invoice creation uses idempotency so a retry can safely recover without creating another invoice." },
    ],
  },
  {
    slug: "shiftly",
    name: "Shiftly",
    icon: "🗓️",
    iconBg: "bg-blue-500/10",
    headline: "Employee scheduling with a manager review step",
    summary: "A team-built scheduling app that turns employee availability and staffing rules into schedules managers can review and publish.",
    stack: ["React", "FastAPI", "Supabase", "PostgreSQL"],
    context: "Our team built Shiftly around three roles. Employees enter their availability, managers review generated schedules, and administrators manage accounts. The scheduling service checks availability and staffing constraints before managers publish shifts.",
    contributions: [
      { title: "Manager workspace", detail: "I built the manager dashboard and helped connect its schedule and team views to authenticated APIs. I added browser checks for the scheduling workflow and prepared fixtures for repeatable demos." },
      { title: "Account lifecycle", detail: "I added signup email confirmation and a permanent account deletion flow for administrators. The deletion flow handles related scheduling records so an account can be removed cleanly." },
      { title: "Deployment and handoff", detail: "I configured the React frontend on Vercel and the backend services on Railway. I also documented the setup and how to verify the integrated prototype." },
    ],
  },
  {
    slug: "recreserve",
    name: "RecReserve",
    icon: "🎾",
    iconBg: "bg-purple-500/10",
    headline: "Court reservations for tennis and pickleball clubs",
    summary: "Players can find courts, reserve time, and join waitlists. Club staff manage availability and reservations from a web dashboard.",
    stack: ["Expo", "React Native", "Next.js", "Supabase"],
    context: "A club needs two different views of the same schedule. Players need to see when they can book. Staff need to set booking rules, manage courts, and update reservations when availability changes.",
    contributions: [
      { title: "Player app", detail: "The Expo app lets players switch between clubs, browse by sport, book and cancel reservations, and join waitlists for reserved slots." },
      { title: "Club dashboard", detail: "The Next.js dashboard brings together court hours, booking rules, member tiers, and a reservation calendar. Staff can also close courts for weather and notify affected players." },
      { title: "Shared data", detail: "The mobile app and admin dashboard share TypeScript types in one repository. Supabase provides the shared database and authentication." },
    ],
    source: "https://github.com/josephkhemmoro/RecReserve",
  },
];

export const projectArticles = caseStudies.map((project) => ({
  date: "November 9, 2026",
  title: `${project.name} – ${project.headline}`,
  description: project.summary,
  url: `/projects/${project.slug}`,
}));
