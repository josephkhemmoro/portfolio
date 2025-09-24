import { Linkedin, Github, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 bg-portfolio-bg">
      <div className="max-w-4xl text-left">
        <div className="mb-8">
          <img 
            src={profilePhoto} 
            alt="Profile photo"
            className="w-24 h-24 rounded-full mb-8 object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-portfolio-text mb-6 leading-tight">
          Student, software engineer, innovator, and dedicated learner.
        </h1>
        
        <p className="text-xl text-portfolio-text-muted max-w-3xl mb-8 leading-relaxed">
        I’m Joseph, a computer science student and software engineer based in Detroit, MI. 
        I’m the co-founder of Myndra, a multi-agent AI platform, and I enjoy building projects 
        that combine problem-solving, creativity, and technology.
        </p>
        
        <div className="flex items-left space-x-6">
          <a 
            href="https://www.linkedin.com/in/josephkhemmoro/" 
            className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/josephkhemmoro" 
            className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="mailto:jujukhemmoro@gmail.com" 
            className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;