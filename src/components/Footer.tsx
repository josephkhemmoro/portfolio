import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer-inner">
        <p>© {new Date().getFullYear()} Joseph Khemmoro</p>
        <nav aria-label="Contact links">
          <a href="https://github.com/josephkhemmoro"><Github size={16} aria-hidden="true" /> GitHub</a>
          <a href="https://www.linkedin.com/in/josephkhemmoro/"><Linkedin size={16} aria-hidden="true" /> LinkedIn</a>
          <a href="mailto:josephkhemmoro@gmail.com"><Mail size={16} aria-hidden="true" /> Email</a>
        </nav>
      </div>
    </footer>
  );
}
