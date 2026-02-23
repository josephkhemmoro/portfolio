import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const NAV_LINKS = [
  { label: "About",    to: "/about" },
  { label: "Articles", to: "/articles" },
  { label: "Projects", to: "/projects" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isOpen, setIsOpen]               = useState(false);
  const [isMounted, setIsMounted]         = useState(false); // keep drawer in DOM during exit

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close drawer on route change
  useEffect(() => {
    if (isOpen) closeDrawer();
  }, [location.pathname]);

  const openDrawer = () => {
    setIsMounted(true);
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    // isMounted stays true until exit animation finishes (onAnimationEnd)
  };

  return (
    <>
      {location.pathname !== "/" && (
        <Link
          to="/"
          className="fixed top-4 left-4 sm:left-5 z-50 block"
          title="Back to Home"
          aria-label="Back to Home"
        >
          <img
            src={profilePhoto}
            alt="Profile photo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-portfolio-border/40 shadow-sm object-cover"
          />
        </Link>
      )}

      {/* Desktop Navigation */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-auto max-w-6xl mx-auto rounded-full transition-all duration-300 hidden md:block ${
        isScrolled
          ? "bg-portfolio-bg/90 shadow-lg border border-portfolio-border/20 py-3 px-6"
          : "bg-portfolio-bg/70 backdrop-blur-sm border border-portfolio-border/10 py-4 px-8"
      }`}>
        <div className="flex items-center space-x-8">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-portfolio-text hover:text-portfolio-accent transition-colors duration-200 text-sm font-medium"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile hamburger button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={isOpen ? closeDrawer : openDrawer}
          className={`p-3 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-portfolio-accent/40 ${
            isScrolled || isOpen
              ? "bg-portfolio-bg/90 shadow-lg border border-portfolio-border/20"
              : "bg-portfolio-bg/70 backdrop-blur-sm border border-portfolio-border/10"
          }`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className="block transition-all duration-300"
            style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            {isOpen
              ? <X    className="w-5 h-5 text-portfolio-text" />
              : <Menu className="w-5 h-5 text-portfolio-text" />
            }
          </span>
        </button>
      </div>

      {/* Drawer + Backdrop */}
      {isMounted && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden ${
              isOpen ? "overlay-open" : "overlay-close"
            }`}
            onClick={closeDrawer}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div
            className={`fixed top-0 right-0 z-40 h-full w-72 bg-portfolio-bg border-l border-portfolio-border/20 shadow-2xl flex flex-col md:hidden ${
              isOpen ? "drawer-open" : "drawer-close"
            }`}
            onAnimationEnd={() => {
              if (!isOpen) setIsMounted(false);
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-6 pt-8 pb-6 border-b border-portfolio-border/15">
              <img
                src={profilePhoto}
                alt="Joseph Khemmoro"
                className="w-10 h-10 rounded-full border border-portfolio-border/40 object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-portfolio-text leading-tight">Joseph Khemmoro</p>
                <p className="text-xs text-portfolio-text-muted">Software Engineer</p>
              </div>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-4 py-6 space-y-1">
              {NAV_LINKS.map(({ label, to }, i) => (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-colors duration-200 ${
                    location.pathname === to
                      ? "text-portfolio-accent bg-portfolio-surface/60"
                      : "text-portfolio-text hover:text-portfolio-accent hover:bg-portfolio-surface/40"
                  }`}
                  style={
                    isOpen
                      ? { animation: `drawer-link-enter 0.3s ease both`, animationDelay: `${0.08 + i * 0.06}s` }
                      : {}
                  }
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="px-6 py-6 border-t border-portfolio-border/15">
              <p className="text-xs text-portfolio-text-muted">josephkhemmoro@gmail.com</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;