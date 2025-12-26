# 🎨 Browser Based Image Editor

> **A professional-grade, browser-based image manipulation tool built with Vanilla JavaScript and HTML5 Canvas.**

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Version](https://img.shields.io/badge/version-1.0.0-green.svg) ![Status](https://img.shields.io/badge/status-stable-purple.svg)

## 🚀 Overview

The **Advanced Image Editor** is a powerful web application that brings desktop-class photo editing features directly to the browser. Unlike simple filter apps, this project leverages the **HTML5 Canvas 2D API** for high-performance, real-time image processing. It features a scalable, configuration-driven architecture that allows for the dynamic generation of UI controls and seamless state management.

Whether you're looking for granular control over exposure and color or want one-click professional aesthetic presets, this editor delivers a smooth, responsive experience.

## ✨ Key Features

### 🛠️ Professional-Grade Tools
This isn't just about overlaying a CSS filter. We use advanced canvas context manipulation to ensure high-fidelity output.
*   **brightness** & **Contrast**: Fine-tune exposure and dynamic range.
*   **Saturation** & **Grayscale**: Control color intensity or go monochrome.
*   **Sepia**, **Invert**, & **Hue Rotate**: Creative color grading tools.
*   **Blur** & **Opacity**: Advanced texture and transparency handling.

### ⚡ Intelligent Preset System
A unique feature of this project is its **Preset Engine**. Instead of hardcodng values, we use a robust object-based state management system that applies complex combinations of filters instantly.
*   **Vintage**: A nostalgic, faded look with warm undertones.
*   **Cinematic**: High-contrast, cool-toned grading for a dramatic feel.
*   **Las Vegas**: Vibrant, saturated colors that pop.
*   **Moody**, **Laos**, **SoftGlow**, and many more.

### 💻 Advanced Architecture
*   **Dynamic UI Generation**: Control sliders are not hardcoded in HTML. The application parses a central configuration object to dynamically generate controls, making it effortless to add new filters in the future.
*   **Real-time Rendering**: Changes are applied instantly to the canvas using optimized rendering cycles.
*   **Non-Destructive Workflow**: The original image data is preserved, allowing for a "Reset" function that instantly restores the original state without reloading.

### 🎨 Modern & Responsive UI
*   **Interactive Animations**: Smooth transitions for sliders and notifications.
*   **Responsive Layout**: Adaptive split-screen interface (`left` preview, `right` controls).

## 🛠️ Tech Stack

*   **Core**: Vanilla JavaScript (ES6+)
*   **Rendering**: HTML5 Canvas API (`CanvasRenderingContext2D`)
*   **Styling**: CSS3 (Custom Properties/Variables, Flexbox, Animations)
*   **Icons**: Remix Icon

## 🚀 Getting Started

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/image-editor.git
    ```

2.  **Open the Project**
    Simply open `index.html` in your favorite web browser. No build step or server required!

3.  **Start Editing**
    *   Click **"Choose Image"** to upload a file.
    *   Use the **Filters** tab to manually adjust settings.
    *   Try the **Presets** for instant looks.
    *   Click **"Download Now"** to save your masterpiece.

## 📂 Project Structure

```
Image Editor/
├── index.html      # Main application structure
├── script.js       # Core logic, state management, and canvas rendering
├── style.css       # Styling, variables, and responsive design
├── theme.css       # Color palettes and theme definitions
└── README.md       # Project documentation
```

## 🔮 Future Improvements

*   [ ] **Histogram integration** for professional exposure analysis.
*   [ ] **Crop and Rotate** functionality.
*   [ ] **Layer support** for watermarks or text overlays.
*   [ ] **WebGL Backend** for even faster processing of 4K+ images.

## 🤝 Contribution

Contributions are welcome! If you have ideas for new presets or filters, feel free to fork the repo and submit a pull request.

---

<p align="center">
  Made with ❤️ by Sounarva Bardhan
</p>
