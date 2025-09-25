import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ArticlesSection from "./ArticlesSection";
import WorkExperience from "./WorkExperience";
import Footer from "./Footer";

const PortfolioLayout = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg flex flex-col">
      <Navigation />
      <main className="flex-1 pb-8 md:pb-12">
        <HeroSection />
        <div className="max-w-6xl mx-auto px-6 bg-portfolio-bg py-5 md:py-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ArticlesSection />
            </div>
            <div className="lg:sticky lg:top-24">
              <WorkExperience />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioLayout;