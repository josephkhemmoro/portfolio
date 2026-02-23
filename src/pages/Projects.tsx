import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  name: string;
  description: string;
  link: string;
  icon: string;
  iconBg: string;
}

const projects: Project[] = [
  {
    name: "Car Damage Detection",
    description: "Deep learning pipeline for detecting and classifying vehicle damage — dents, scratches, cracks, and more — using YOLOv8 and YOLO11.",
    link: "https://github.com/josephkhemmoro/car-damage-detection",
    icon: "🚘",
    iconBg: "bg-red-500/10",
  },
  {
    name: "AstraERP",
    description: "Award-winning multi-tenant SaaS ERP for small businesses with AI-powered scheduling and inventory management using IBM WatsonX.",
    link: "https://github.com/josephkhemmoro/astra-erp",
    icon: "🏢",
    iconBg: "bg-orange-500/10",
  },
  {
    name: "Pothole Detector",
    description: "AI-powered pothole detection system using computer vision and machine learning to identify road damage.",
    link: "https://github.com/josephkhemmoro/active_pothole_detection",
    icon: "🚗",
    iconBg: "bg-blue-500/10",
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio website built with React, TypeScript, and TailwindCSS showcasing my work and experience.",
    link: "https://github.com/josephkhemmoro/portfolio",
    icon: "💼",
    iconBg: "bg-purple-500/10",
  },
  {
    name: "DTE Hackathon",
    description: "Energy management solution developed during DTE Energy hackathon focusing on sustainable energy practices.",
    link: "https://github.com/josephkhemmoro/dte-hackathon",
    icon: "⚡",
    iconBg: "bg-pink-500/10",
  },
  {
    name: "RayDX",
    description: "Medical imaging analysis platform leveraging AI to assist in diagnostic radiology workflows.",
    link: "https://github.com/josephkhemmoro/raydx-backend",
    icon: "🏥",
    iconBg: "bg-green-500/10",
  },
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-bg flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-20">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-portfolio-text mb-4">
              Things I've made and where to find them.
            </h1>
            <p className="text-portfolio-text-muted text-base md:text-lg max-w-3xl">
              Below are some of the projects I've worked on in my freetime and in my academics. 
              If you have questions on the technologies used or how I built them, check out the docs tab for 
              more info on each project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-transparent hover:bg-portfolio-surface/50 border border-portfolio-border/30 rounded-2xl p-6 hover:border-portfolio-border/50 transition-all duration-300 block"
              >
                <div className="mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${project.iconBg} text-2xl`}>
                    {project.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-portfolio-text mb-2">
                  {project.name}
                </h3>

                <p className="text-portfolio-text-muted text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="inline-flex items-center gap-2 text-sm text-portfolio-text-muted group-hover:text-portfolio-accent transition-colors duration-300">
                  <ExternalLink className="w-4 h-4" />
                  <span>View on GitHub</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
