# Wisdom College for Creativity & Design - Landing Page

A modern, high-performance, and visually stunning landing page for Wisdom College for Creativity & Design, a premier design institute in Ghaziabad. Built with React, TypeScript, and Tailwind CSS, this project focuses on delivering exceptional user experience through cutting-edge design aesthetics including 3D elements, smooth animations, and comprehensive SEO optimization.

## 🚀 Features

*   **Modern Aesthetics:** Premium dark mode UI featuring glassmorphism, glowing gradients, and a highly polished color palette.
*   **3D Hero Section:** Interactive 3D floating shapes in the hero background using Three.js and React Three Fiber to immediately showcase creative capability.
*   **Smooth Navigation & Interaction:** Fully working anchor links with smooth scroll implementation across the Navbar and Footer to key sections (Courses, Curriculum, About).
*   **Dynamic Micro-Animations:** Extensive use of `framer-motion` for scroll-triggered reveal animations, hover effects, and engaging component interactions.
*   **Responsive Layout:** Carefully crafted to perform beautifully across all device sizes (mobile, tablet, desktop).
*   **Professional SEO:** Fully implemented technical SEO for superior search engine indexing and social media sharing.

## 🛠️ Technology Stack

*   **Framework:** React 18 build powered by [Vite](https://vitejs.dev/) for lightning-fast HMR and optimized production builds.
*   **Language:** TypeScript for type-safe code that minimizes runtime errors and improves developer experience.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) for rapid, utility-first styling without leaving the markup.
*   **Animations:** [Framer Motion](https://www.framer.com/motion/) handling all complex declarative animations and gestures.
*   **3D Graphics:** `@react-three/fiber` and `@react-three/drei` for rendering WebGL 3D elements seamlessly inside React.
*   **Icons:** [Lucide React](https://lucide.dev/) for pixel-perfect, consistent SVG icons.

## 🔍 SEO Implementation (Professional Grade)

The site is configured with robust technical SEO to ensure high visibility for local queries like "Graphic design institute in Ghaziabad":

1.  **Semantic Meta Tags (`index.html`):** Custom `<title>`, targeted `<meta name="description">`, `<meta name="keywords">`, `<link rel="canonical">`, and robot directives (`index, follow`).
2.  **Social Media Optimization:** Complete Open Graph (`og:*`) tags for Facebook/LinkedIn and Twitter Cards (`twitter:*`) configuration for rich, engaging URL previews.
3.  **JSON-LD Structured Data:** Implemented `CollegeOrUniversity` Schema.org markup. This helps search engines explicitly understand the entity: its official name, location (Ghaziabad), social media mapping for Knowledge Panels, and "Educational Courses" offer type.
4.  **Crawling Directives:** 
    *   `robots.txt`: Strict configuration explicitly allowing search spiders full access.
    *   `sitemap.xml`: XML sitemap pointing to the primary route to ensure fast and regular indexing with a "weekly" change frequency.
5.  **Semantic HTML5:** Strict utilization of `<nav>`, `<main>`, `<section>`, `<footer>`, and hierarchical heading structures (`h1`-`h4`) throughout the JSX rendering tree to maximize screen-reader and spider crawl accessibility.

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1.  Clone the repository and install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server natively:
    ```bash
    npm run dev
    ```

3.  Open `http://localhost:5173` to view the application in the browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This generates a `dist/` directory ready to be deployed to platforms like Vercel, Netlify, or standard NGINX servers.

## 📂 Project Structure

*   `/src/components/`: Reusable React components (Navbar, Hero, Features, Courses, Footer, etc.)
*   `/src/assets/`: Static assets such as images and branding materials.
*   `/public/`: Root level static files including the favicon, `robots.txt`, and `sitemap.xml`.
*   `index.html`: Entry point, heavily populated with SEO strategies.
*   `App.tsx` & `main.tsx`: Core application wrappers and routing.
