import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import profilePhoto from "@/assets/authentic_headshot.png";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import PhotoMarquee from "@/components/PhotoMarquee";

const About = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-portfolio-text mb-6">
                About me
              </h1>

              <div className="prose prose-invert max-w-none text-portfolio-text-muted">
                <p>
                  I grew up in South Lyon, Michigan, and study computer science at Wayne State University.
                  I’m a software developer intern at Siemens and a co-founder of Myndra, a multi-agent AI platform.
                </p>
                <Separator className="my-4 bg-portfolio-border/20" />
                <p>
                  I like working on the parts of a product that make it dependable in everyday use.
                  On Kova, that meant turning retailer emails into a consistent order history.
                  On Shiftly, it meant connecting the manager dashboard to scheduling and account workflows.
                </p>
                <Separator className="my-4 bg-portfolio-border/20" />
                <p>
                  Away from my desk, I like playing video games, driving, and spending time with friends and family.
                </p>
              </div>

              
            </div>

            <div className="lg:top-24 order-last lg:order-none">
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                <div className="rounded-3xl overflow-hidden border border-portfolio-border/30 shadow-xl rotate-3">
                  <img
                    src={profilePhoto}
                    alt="Joseph Khemmoro smiling"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 px-2">
                <Link
                  to="https://www.linkedin.com/in/josephkhemmoro"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-portfolio-text hover:text-portfolio-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Follow on LinkedIn</span>
                </Link>
                <Link
                  to="https://github.com/josephkhemmoro"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-portfolio-text hover:text-portfolio-accent transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>Follow on GitHub</span>
                </Link>

                <div className="pt-6 mt-2 border-t border-portfolio-border/20" />

                <a
                  href="mailto:josephkhemmoro@gmail.com"
                  className="inline-flex items-center gap-3 text-portfolio-text hover:text-portfolio-accent transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>josephkhemmoro@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          {/* Marquee section */}
          <div className="mt-12 -mx-6">
            <div className="px-6">
              <PhotoMarquee />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
