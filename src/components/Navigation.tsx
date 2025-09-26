import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Keep menu mounted during exit animation
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <a
          href="/"
          className="fixed top-4 left-4 sm:left-5 z-50 block"
          title="Back to Home"
          aria-label="Back to Home"
        >
          <img
            src={profilePhoto}
            alt="Profile photo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-portfolio-border/40 shadow-sm object-cover"
          />
        </a>
      )}

      {/* Desktop Navigation */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-auto max-w-6xl mx-auto rounded-full transition-all duration-300 hidden md:block ${
      isScrolled 
        ? 'bg-portfolio-bg/90 shadow-lg border border-portfolio-border/20 py-3 px-6' 
        : 'bg-portfolio-bg/70 backdrop-blur-sm border border-portfolio-border/10 py-4 px-8'
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-portfolio-text hover:text-portfolio-accent transition-colors duration-200 text-sm font-medium"
          >
            About
          </Link>
          <Link 
            to="/articles" 
            className="text-portfolio-text hover:text-portfolio-accent transition-colors duration-200 text-sm font-medium"
          >
            Articles
          </Link>
          <Link 
            to="/projects" 
            className="text-portfolio-text hover:text-portfolio-accent transition-colors duration-200 text-sm font-medium"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-40 md:hidden">
        <button
          onClick={() => {
            if (!isMobileMenuOpen) {
              setShowMobileMenu(true);
              setIsMobileMenuOpen(true);
            } else {
              setIsMobileMenuOpen(false);
              // keep showMobileMenu true until exit animation ends
            }
          }}
          className={`p-3 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-portfolio-accent/40 focus:ring-offset-2 focus:ring-offset-transparent ${
            isScrolled 
              ? 'bg-portfolio-bg/90 shadow-lg border border-portfolio-border/20' 
              : 'bg-portfolio-bg/70 backdrop-blur-sm border border-portfolio-border/10'
          }`}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-portfolio-text" />
          ) : (
            <Menu className="w-5 h-5 text-portfolio-text" />
          )}
        </button>
        
        {/* Mobile Menu Dropdown */}
        {showMobileMenu && (
          <div
            id="mobile-menu"
            className={`absolute top-full right-0 mt-2 w-48 bg-portfolio-bg/95 backdrop-blur-sm border border-portfolio-border/20 rounded-2xl shadow-lg py-2 origin-top-right transform-gpu will-change-transform ${
              isMobileMenuOpen ? 'animate-bubble-pop' : 'animate-bubble-pop-out'
            }`}
            onAnimationEnd={() => {
              if (!isMobileMenuOpen) {
                setShowMobileMenu(false);
              }
            }}
          >
            <Link 
              to="/" 
              className="block px-4 py-3 text-portfolio-text hover:text-portfolio-accent hover:bg-portfolio-hover/40 transition-colors duration-200 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/articles" 
              className="block px-4 py-3 text-portfolio-text hover:text-portfolio-accent hover:bg-portfolio-hover/40 transition-colors duration-200 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Articles
            </Link>
            <Link 
              to="/projects" 
              className="block px-4 py-3 text-portfolio-text hover:text-portfolio-accent hover:bg-portfolio-hover/40 transition-colors duration-200 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;