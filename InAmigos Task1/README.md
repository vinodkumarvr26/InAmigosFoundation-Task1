# InAmigos Foundation - NGO Awareness Website

A premium, modern, responsive single-page NGO awareness website built for the **InAmigos Foundation**. The site is designed with a sleek dark aesthetic, glassmorphism cards, interactive orbital charts, scroll-based metrics count-ups, and a responsive CSS grid layout.

## 🚀 Features
- **Agency-Level Aesthetics**: Clean dark slate theme with vibrant emerald green and amber accents.
- **Scroll Tickers**: Live counting numbers for NGO milestones.
- **Concentric Orbital Ecosystem**: An interactive planetary orbit chart highlighting key campaigns (Seva, Bachpanshala, Jeev, Udaan, Prakriti, Vikas).
- **Responsive Navigation**: Adaptive sticky header menu with scroll-depth progress bar and back-to-top button.
- **Performance Optimized**: Inline SVGs, lazy-loaded local assets, and clean caching configuration.

## 📁 Project Structure
```
├── assets/                    # Image and visual assets
│   ├── hero_bg.png            # Main hero section background image
│   ├── problem_img.png        # Problem statement visual
│   ├── gallery_community.png  # Photo journey gallery image
│   └── project_*.jpg          # Local images for the key campaigns
├── index.html                 # Semantic single-page HTML layout
├── style.css                  # Core CSS styles and responsive design tokens
├── script.js                  # Interactive client-side animations and features
├── netlify.toml               # Netlify configuration file for headers and caching
└── README.md                  # Project documentation
```

## 💻 Local Development
To run this project locally:
1. Open the project folder in your editor or terminal.
2. Spin up any local HTTP server. For example, using Python:
   ```bash
   python -m http.server 8000
   ```
3. Open your browser and navigate to `http://localhost:8000`.

## ☁️ Netlify Deployment
This project is configured and ready for production deployment on **Netlify**!

### Method 1: GitHub Integration (Recommended)
1. Push this project folder to your GitHub repository.
2. Log into your [Netlify Dashboard](https://app.netlify.com/).
3. Click **Add new site** > **Import an existing project**.
4. Choose **GitHub** and select your repository.
5. Under build settings:
   - **Build command**: Leave blank
   - **Publish directory**: `.` (or leave blank; the `netlify.toml` file will automatically define this)
6. Click **Deploy site**.

### Method 2: Netlify Drop (Drag & Drop)
1. Log into your [Netlify Dashboard](https://app.netlify.com/).
2. Go to [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop this entire project folder into the upload zone.
4. Netlify will deploy the site instantly.
