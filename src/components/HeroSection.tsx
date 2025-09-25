import { Linkedin, Github, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-portfolio-bg">
      <div className="max-w-4xl text-left w-full">
        <div className="mb-6 sm:mb-8">
          <img 
            src={profilePhoto} 
            alt="Profile photo"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-6 sm:mb-8 object-cover"
          />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-text mb-4 sm:mb-6 leading-tight">
          Student, software engineer, innovator, and dedicated learner.
        </h1>
        
        <p className="text-lg sm:text-xl text-portfolio-text-muted max-w-3xl mb-6 sm:mb-8 leading-relaxed">
        I’m Joseph, a computer science student and software engineer based in Detroit, MI. 
        I’m the co-founder of Myndra, a multi-agent AI platform, and I enjoy building projects 
        that combine problem-solving, creativity, and technology.
        </p>
        
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a 
            href="https://www.linkedin.com/in/josephkhemmoro/" 
            className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200 p-2 -m-2"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a 
            href="https://github.com/josephkhemmoro" 
            className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200 p-2 -m-2"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a 
            href="mailto:jujukhemmoro@gmail.com" 
            className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200 p-2 -m-2"
            aria-label="Email Contact"
          >
            <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;