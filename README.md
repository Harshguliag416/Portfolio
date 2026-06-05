# 🌐 Harsh Gulia — 3D Developer Portfolio

A responsive, high-end 3D developer portfolio representing full-stack web and AI projects. Styled with dark mode aesthetics and premium interactive features.

---

## 🚀 Key Features

* **3D Interactive Scene**: Includes 3D computer models and globe models built with Three.js.
* **Fluid Layout**: Modern typography (Google Fonts) and custom glassmorphic panels.
* **Work Experience Timeline**: Interactive professional roadmap rendering.
* **E-mail Contact Form**: Clean email sender panel linked directly with EmailJS client.

---

## 🛠️ Tech Stack

* **Framework**: React + Vite (TypeScript)
* **3D Rendering**: Three.js, `@react-three/fiber`, `@react-three/drei`
* **Animations**: Framer Motion, React Parallax Tilt
* **Styling**: Tailwind CSS
* **Deployment**: GitHub Pages / Replit

---

## 📦 Project Structure

```
Portfolio/
├── public/                 # 3D GLTF models, scenes, and textures
├── src/
│   ├── assets/             # Brand logos and technology badges
│   ├── components/         # 3D Canvas, Loader, Sections, Navbar
│   ├── hoc/                # High-order components
│   ├── utils/              # Framer motion configurations
│   ├── main.tsx            # App mount
│   └── index.css           # Global Tailwind utilities
├── tailwind.config.cjs     # Styling config
└── vite.config.ts          # Compilation settings
```

---

## ⚙️ Run Portfolio Locally

1. **Clone**:
   ```bash
   git clone https://github.com/Harshguliag416/Portfolio.git
   cd Portfolio
   ```
2. **Install**:
   ```bash
   npm install
   ```
3. **Configure Environment Variables**:
   Create a `.env` file in the root folder and define:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. **Execute**:
   ```bash
   npm run dev
   ```
