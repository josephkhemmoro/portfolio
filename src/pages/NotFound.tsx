import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="site-container portfolio-page">
        <header className="portfolio-page-heading">
          <h1>Page not found</h1>
          <p>The address may have changed.</p>
        </header>
        <Link className="portfolio-button" to="/projects">Browse projects</Link>
      </main>
      <Footer />
    </>
  );
}
