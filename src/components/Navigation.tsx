import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-6xl mx-auto rounded-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-portfolio-bg/90 shadow-lg border border-portfolio-border/20 py-3 px-6' 
        : 'bg-portfolio-bg/70 backdrop-blur-sm border border-portfolio-border/10 py-4 px-8'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a 
            href="#about" 
            className="text-portfolio-text hover:text-portfolio-accent transition-colors duration-200 text-sm font-medium"
          >
            About
          </a>
          <a 
            href="#docs" 
            className="text-portfolio-text hover:text-portfolio-accent transition-colors duration-200 text-sm font-medium"
          >
            Docs
          </a>
          <a 
            href="#projects" 
            className="text-portfolio-text hover:text-portfolio-accent transition-colors duration-200 text-sm font-medium"
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;