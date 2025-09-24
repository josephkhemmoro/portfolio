import { ChevronRight } from "lucide-react";

const ArticlesSection = () => {
  const articles = [
    {
      date: "April 21, 2024",
      title: "Regression Models for AirBnB Price Prediction in San Diego",
      description: "This article discusses the process of ingesting and cleaning data to train Support Vector and Random Forest regression models on San Diego AirBnB data to predict the nightly price of a listing.",
    },
    {
      date: "February 11, 2024", 
      title: "Creating a CI/CD Pipeline",
      description: "Utilizing GitLab CI, AWS, and Docker, I automated the building, testing, containerization and deployment of a React application to the cloud.",
    },
    {
      date: "December 16, 2023",
      title: "Predicting Reservoir Storage Capacity Using Machine Learning",
      description: "This project compared the effectiveness of six different machine learning techniques in predicting reservoir storage value based off of historical climate and reservoir data. Top models recorded up to 99.8% effectiveness in hindcast reporting.",
    },
    {
      date: "October 2, 2023",
      title: "Tech for Good: Creating Trust in Online Marketplaces with Vouchify",
      description: "",
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-portfolio-text mb-12">
        What I've Been Working On...
      </h2>
      
      <div className="space-y-12">
        {articles.map((article, index) => (
          <article key={index} className="group">
            <div className="flex items-start gap-4">
              <div className="w-1 h-16 bg-portfolio-surface rounded-full flex-shrink-0 mt-1"></div>
              <div className="flex-1">
                <time className="text-sm text-portfolio-text-muted mb-2 block">
                  {article.date}
                </time>
                <h3 className="text-xl font-semibold text-portfolio-text mb-3 group-hover:text-portfolio-accent transition-colors duration-200">
                  {article.title}
                </h3>
                {article.description && (
                  <p className="text-portfolio-text-muted leading-relaxed mb-4">
                    {article.description}
                  </p>
                )}
                <a 
                  href="#" 
                  className="inline-flex items-center text-portfolio-accent hover:text-portfolio-accent/80 transition-colors duration-200"
                >
                  Read article
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;