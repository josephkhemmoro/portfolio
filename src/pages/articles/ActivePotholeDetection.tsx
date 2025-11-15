import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import potholeDemo from "@/assets/pothole_demo.gif";

const ActivePotholeDetectionArticle = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-bg flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
          <nav className="mb-8 text-xs sm:text-sm">
            <Link to="/" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors">Home</Link>
            <span className="mx-2 text-portfolio-text-muted">/</span>
            <Link to="/articles" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors">Articles</Link>
            <span className="mx-2 text-portfolio-text-muted">/</span>
            <span className="text-portfolio-text">Active Pothole Detection with YOLOv8</span>
          </nav>

          <header className="mb-10">
            <time className="block text-sm text-portfolio-text-muted mb-2">November 5, 2025</time>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-4">
              Active Pothole Detection using YOLOv8
            </h1>
            <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed">
              This project explores real-time pothole detection on road surfaces using the YOLOv8 object detection
              model. The goal is to build a lightweight computer vision pipeline that can power automated road
              inspection, ADAS-like safety features, or municipal monitoring tools.
            </p>
            <div className="mt-6 rounded-2xl overflow-hidden border border-portfolio-border/30 bg-portfolio-surface/40">
              <img
                src={potholeDemo}
                alt="Demo of YOLOv8 active pothole detection running on road footage"
                className="w-full h-auto object-cover"
              />
            </div>
          </header>

          <section className="space-y-8 sm:space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Project Overview</h2>
              <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed">
                Roads degrade over time, and potholes are a common source of damage and safety risk. Instead of
                relying only on manual inspection, this project uses computer vision to automatically detect potholes
                in images and video. The core model is YOLOv8, trained on a custom dataset of road scenes with labeled
                potholes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Features</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li>Real-time detection of potholes from video streams or static images.</li>
                <li>Bounding boxes drawn around detected hazards for quick visual inspection.</li>
                <li>Built with Python, OpenCV, and the Ultralytics YOLOv8 library.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Architecture & Workflow</h2>
              <div className="space-y-4 text-portfolio-text-muted text-sm sm:text-base leading-relaxed">
                <p>
                  The system centers around a YOLOv8 detection model that receives frames from a camera or video file,
                  runs inference, then returns predictions with bounding boxes for potholes.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="text-portfolio-text font-medium">Data pipeline:</span> road images and frames
                    are preprocessed, resized, and normalized before being passed to the model.
                  </li>
                  <li>
                    <span className="text-portfolio-text font-medium">YOLOv8 model:</span> trained on a custom
                    pothole dataset, producing bounding boxes, confidence scores, and class labels.
                  </li>
                  <li>
                    <span className="text-portfolio-text font-medium">Visualization:</span> OpenCV is used to draw
                    boxes and labels on each frame for debugging and demo purposes.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Technology Stack</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li>Python</li>
                <li>Ultralytics YOLOv8</li>
                <li>OpenCV</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Usage</h2>
              <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed mb-3">
                The repository includes scripts to run detection on images or video. After installing dependencies,
                you can run a command to start detection and visualize bounding boxes on each frame.
              </p>
              <p className="text-xs sm:text-sm text-portfolio-text-muted">
                For full setup instructions and commands, see the GitHub repository:
                {" "}
                <a
                  href="https://github.com/josephkhemmoro/active_pothole_detection"
                  target="_blank"
                  rel="noreferrer"
                  className="text-portfolio-accent hover:text-portfolio-accent/80"
                >
                  active_pothole_detection on GitHub
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Future Directions</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li>Integrate GPS or mapping data to log pothole locations over time.</li>
                <li>Deploy the model to an edge device or mobile app for on-vehicle detection.</li>
                <li>Experiment with additional datasets and techniques to improve robustness.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ActivePotholeDetectionArticle;
