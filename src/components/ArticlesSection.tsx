import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  { title: "Car Damage Detection with YOLOv8 and YOLO11", url: "/articles/car-damage-detection" },
  { title: "Building AstraERP at the MI DevFest Hackathon", url: "/articles/astra-erp" },
  { title: "Detecting Potholes with Computer Vision", url: "/articles/active-pothole-detection" },
];

export default function ArticlesSection() {
  return (
    <section aria-labelledby="home-articles">
      <h2 className="subsection-title" id="home-articles">From the archive</h2>
      <ul className="home-article-list">
        {articles.map(({ title, url }) => (
          <li key={url}><Link to={url}>{title} <ArrowRight size={16} aria-hidden="true" /></Link></li>
        ))}
      </ul>
      <Link className="portfolio-link mt-5" to="/articles">
        Browse articles <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}
