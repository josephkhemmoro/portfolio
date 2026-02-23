import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CarDamageDetectionArticle = () => {
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
            <span className="text-portfolio-text">Car Damage Detection using YOLOv8 & YOLO11</span>
          </nav>

          <header className="mb-10">
            <time className="block text-sm text-portfolio-text-muted mb-2">December 5, 2025</time>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-4">
              Car Damage Detection using YOLOv8 & YOLO11
            </h1>
            <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed">
              A deep learning computer vision project that detects and classifies vehicle damage — dents, scratches,
              cracks, shattered glass, lamp damage, and flat tires — using the YOLOv8 and YOLO11 object detection
              models trained on the CarDD dataset.
            </p>
          </header>

          <section className="space-y-8 sm:space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Project Overview</h2>
              <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed">
                Vehicle damage assessment is a time-consuming process — adjusters have to manually inspect each car,
                categorize damage types, and estimate repair costs. Computer vision can automate the detection step,
                making inspections faster, more consistent, and scalable. This project builds a full pipeline: from
                dataset preparation and model training, to inference and evaluation, all centered around the YOLO
                family of real-time object detectors.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Damage Categories</h2>
              <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed mb-3">
                The model is trained to detect six distinct types of vehicle damage, each representing a common
                real-world inspection category:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted text-sm sm:text-base">
                <li><span className="text-portfolio-text font-medium">Dents</span> — deformations in body panels from impact</li>
                <li><span className="text-portfolio-text font-medium">Scratches</span> — surface-level paint or clear-coat damage</li>
                <li><span className="text-portfolio-text font-medium">Cracks</span> — fractures in bumpers, body panels, or trim</li>
                <li><span className="text-portfolio-text font-medium">Glass shatter</span> — broken windshields or windows</li>
                <li><span className="text-portfolio-text font-medium">Lamp damage</span> — cracked or broken headlights and taillights</li>
                <li><span className="text-portfolio-text font-medium">Tire flat</span> — deflated or structurally compromised tires</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Dataset</h2>
              <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed">
                The project uses the <span className="text-portfolio-text font-medium">CarDD (Car Damage Detection)</span> dataset,
                organized in YOLO format with train, validation, and test splits. Each image is paired with annotation
                files containing bounding box coordinates and class labels for each damage instance. The YOLO format
                makes it straightforward to feed directly into the Ultralytics training pipeline without additional
                conversion steps.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Models: YOLOv8 vs YOLO11</h2>
              <div className="space-y-3 text-portfolio-text-muted text-sm sm:text-base leading-relaxed">
                <p>
                  The project experiments with two generations of YOLO — YOLOv8 and the newer YOLO11 — to compare
                  detection accuracy and inference speed on the same damage dataset.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="text-portfolio-text font-medium">YOLOv8n-seg</span> — the nano segmentation
                    variant, offering pixel-level masks on top of bounding boxes, useful for more precise damage
                    boundary estimation.
                  </li>
                  <li>
                    <span className="text-portfolio-text font-medium">YOLO11n</span> — the nano detection variant
                    of the YOLO11 architecture, offering improved accuracy at similar model sizes compared to v8.
                  </li>
                </ul>
                <p>
                  Both models start from pretrained weights and are fine-tuned on the CarDD dataset, keeping training
                  time manageable while benefiting from ImageNet-scale feature representations.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Pipeline & Project Structure</h2>
              <div className="space-y-3 text-portfolio-text-muted text-sm sm:text-base leading-relaxed">
                <p>The project is broken into focused scripts, each handling one stage of the pipeline:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="text-portfolio-text font-medium">prepare_data.py</span> — loads and preprocesses
                    the CarDD dataset, validates annotation files, and sets up the directory structure expected by
                    the YOLO trainer.
                  </li>
                  <li>
                    <span className="text-portfolio-text font-medium">train.py</span> — kicks off fine-tuning using
                    the Ultralytics API, pointing to <code className="text-portfolio-text bg-portfolio-surface/60 px-1 py-0.5 rounded text-xs">cardd.yaml</code> for
                    dataset configuration and saving the best checkpoint to <code className="text-portfolio-text bg-portfolio-surface/60 px-1 py-0.5 rounded text-xs">best.pt</code>.
                  </li>
                  <li>
                    <span className="text-portfolio-text font-medium">analyze_damage.py</span> — runs inference on a
                    single image, outputs bounding boxes with class labels and confidence scores, and can render
                    annotated results via OpenCV.
                  </li>
                  <li>
                    <span className="text-portfolio-text font-medium">test_pipeline.py</span> — evaluates the trained
                    model on the held-out test split, reporting mAP and per-class metrics.
                  </li>
                  <li>
                    <span className="text-portfolio-text font-medium">check_gpu.py</span> — utility to verify CUDA
                    availability and confirm the correct device is being used for training.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Technology Stack</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted text-sm sm:text-base">
                <li>Python</li>
                <li>Ultralytics YOLO (YOLOv8 & YOLO11)</li>
                <li>PyTorch</li>
                <li>OpenCV</li>
                <li>NumPy</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Usage</h2>
              <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed mb-3">
                After installing dependencies and preparing the dataset, training and inference each run as a single
                script. The inference script accepts an image path and returns annotated output with damage
                classifications and confidence scores.
              </p>
              <p className="text-xs sm:text-sm text-portfolio-text-muted">
                Full setup instructions and scripts are available on GitHub:{" "}
                <a
                  href="https://github.com/josephkhemmoro/car-damage-detection"
                  target="_blank"
                  rel="noreferrer"
                  className="text-portfolio-accent hover:text-portfolio-accent/80"
                >
                  car-damage-detection on GitHub
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Future Directions</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted text-sm sm:text-base">
                <li>Build a web or mobile interface so non-technical users can upload photos and get instant damage reports.</li>
                <li>Integrate severity scoring per damage class to assist with automated repair cost estimation.</li>
                <li>Expand the dataset with additional edge cases — night shots, partial occlusion, heavy rain — to improve robustness.</li>
                <li>Benchmark larger YOLO variants (YOLOv8m, YOLO11m) against the nano models to quantify the accuracy/speed tradeoff.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CarDamageDetectionArticle;