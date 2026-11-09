import { ArrowDown, ArrowUpRight } from "lucide-react";
import profilePhoto from "@/assets/authentic_headshot.png";

export default function HeroSection() {
  return (
    <section className="site-container portfolio-hero" aria-labelledby="portfolio-title">
      <div>
        <p className="portfolio-label hero-location">Software engineer in metro Detroit</p>
        <h1 id="portfolio-title">Joseph<br />Khemmoro</h1>
        <p className="hero-intro">
          I build software for the people running day-to-day operations, from tracking customer orders to putting together a work schedule.
        </p>
        <div className="hero-actions">
          <a className="portfolio-button" href="#selected-work">
            Explore my work <ArrowDown size={17} aria-hidden="true" />
          </a>
          <a className="portfolio-link" href="mailto:josephkhemmoro@gmail.com">
            Get in touch <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <figure className="hero-portrait">
        <img src={profilePhoto} alt="Joseph Khemmoro" width="544" height="568" fetchPriority="high" />
        <figcaption>
          <span>Siemens</span>
          <span>Software Developer Intern</span>
        </figcaption>
      </figure>
    </section>
  );
}
