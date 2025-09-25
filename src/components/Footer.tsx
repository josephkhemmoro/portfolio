const Footer = () => {
  return (
    <footer className="mt-8 md:mt-12 border-t border-portfolio-border/20 bg-portfolio-bg">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200">About</a>
            <a href="/articles" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200">Articles</a>
            <a href="#projects" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200">Projects</a>
          </nav>
          <p className="text-xs text-portfolio-text-muted">
            {new Date().getFullYear()} Joseph Khemmoro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;