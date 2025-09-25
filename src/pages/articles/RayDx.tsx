import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const RayDxArticle = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-bg flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
          <nav className="mb-8 text-xs sm:text-sm">
            <a href="/" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors">Home</a>
            <span className="mx-2 text-portfolio-text-muted">/</span>
            <a href="/articles" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors">Articles</a>
            <span className="mx-2 text-portfolio-text-muted">/</span>
            <span className="text-portfolio-text">RayDx Backend</span>
          </nav>

          <header className="mb-10">
            <time className="block text-sm text-portfolio-text-muted mb-2">June 15, 2025</time>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-portfolio-text mb-4">RayDx Backend: Pneumonia Detection API with MobileNetV2 and xAI Report Generation</h1>
            <p className="text-sm sm:text-base text-portfolio-text-muted leading-relaxed">
              A medical AI backend that analyzes chest X-ray images for pneumonia detection using a fine‑tuned MobileNetV2 model and generates professional radiology reports via xAI's Grok‑3, with production‑ready logging, validation, and deployment.
            </p>
          </header>

          <section className="space-y-8 sm:space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Project Overview</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li>Binary classification of chest X‑rays: normal vs. pneumonia</li>
                <li>Pretrained <span className="text-portfolio-text font-medium">MobileNetV2</span> fine‑tuned for medical imaging</li>
                <li>Report generation via <span className="text-portfolio-text font-medium">xAI Grok‑3</span></li>
                <li>Confidence scores returned with predictions</li>
                <li>Robust image validation and preprocessing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Features</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li>Deep Learning inference (PyTorch) with CPU/CUDA/MPS support</li>
                <li>AI‑generated radiological reports using xAI Grok‑3</li>
                <li>CORS support for frontend integration</li>
                <li>Comprehensive logging and error handling</li>
                <li>Health checks and debug routes</li>
                <li>Production‑ready via Gunicorn</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">API Endpoints</h2>
              <div className="space-y-2 text-portfolio-text-muted text-sm sm:text-base">
                <p><span className="text-portfolio-text font-medium">GET /</span> — Health check</p>
                <p><span className="text-portfolio-text font-medium">GET /debug</span> — Debug information</p>
                <p>
                  <span className="text-portfolio-text font-medium">POST /predict</span> — Multipart upload of a chest X‑ray image (<code>file</code>) returns JSON:
                </p>
                <pre className="bg-portfolio-surface/50 border border-portfolio-border/30 rounded p-3 overflow-x-auto text-xs"><code>{`{
  "prediction": "normal|pneumonia",
  "confidence": 95.67,
  "report": "Detailed radiological report..."
}`}</code></pre>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Quick Start</h2>
              <ol className="list-decimal pl-6 space-y-2 text-portfolio-text-muted text-sm sm:text-base">
                <li>Clone repo and create a virtual environment</li>
                <li>Install dependencies: <code>pip install -r requirements.txt</code></li>
                <li>Create <code>.env</code> with <code>XAI_API_KEY</code> and <code>PORT</code></li>
                <li>Run dev: <code>python app.py</code> (http://localhost:5000)</li>
                <li>Production: <code>gunicorn -w 4 -b 0.0.0.0:5000 app:app</code></li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Project Structure</h2>
              <pre className="bg-portfolio-surface/50 border border-portfolio-border/30 rounded p-3 overflow-x-auto text-xs"><code>{`Backend/
├── app.py              # Flask application
├── train_model.py      # Model training script
├── preprocess.py       # Data preprocessing script
├── pneumonia_model.pth # Trained weights
├── requirements.txt    # Dependencies
├── .env                # Environment variables (create)
└── venv/               # Virtual environment
`}</code></pre>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Model Details</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li>Architecture: MobileNetV2</li>
                <li>Input: 224×224 RGB with normalization</li>
                <li>Classes: 2 (normal, pneumonia)</li>
                <li>Devices: CPU, CUDA (NVIDIA), MPS (Apple Silicon)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Security & Logging</h2>
              <ul className="list-disc pl-6 space-y-2 text-portfolio-text-muted">
                <li>Strict file type checks and size limits</li>
                <li>CORS restrictions for production</li>
                <li>Environment variable protection</li>
                <li>All calls/errors logged to console and <code>api_calls.log</code></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-portfolio-text mb-3">Usage Examples</h2>
              <p className="text-portfolio-text-muted mb-2 text-sm sm:text-base">cURL</p>
              <pre className="bg-portfolio-surface/50 border border-portfolio-border/30 rounded p-3 overflow-x-auto text-xs"><code>{`curl -X POST \
  http://localhost:5000/predict \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@chest_xray.jpg'`}</code></pre>
              <p className="text-portfolio-text-muted mt-4 mb-2 text-sm sm:text-base">Python</p>
              <pre className="bg-portfolio-surface/50 border border-portfolio-border/30 rounded p-3 overflow-x-auto text-xs"><code>{`import requests
url = "http://localhost:5000/predict"
files = {"file": open("chest_xray.jpg", "rb")}
response = requests.post(url, files=files)
print(response.json())`}</code></pre>
              <p className="text-portfolio-text-muted mt-4 mb-2 text-sm sm:text-base">JavaScript</p>
              <pre className="bg-portfolio-surface/50 border border-portfolio-border/30 rounded p-3 overflow-x-auto text-xs"><code>{`const fd = new FormData();
fd.append('file', fileInput.files[0]);
fetch('http://localhost:5000/predict', { method: 'POST', body: fd })
  .then(r => r.json())
  .then(console.log);`}</code></pre>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RayDxArticle;
