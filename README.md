# Dynamic Particle Text Animation

A modern and customizable particle background generator built with **Next.js**, **TypeScript**, and **tsparticles**. Users can input dynamic text, preview animated particles, and export the particle configuration JSON for use in their own projects.

## Features
- 🎉 **Dynamic Particle Background**: Real-time particle effects based on user input.
- 📂 **Export Particle Config**: Download the configuration JSON for easy reuse.
- 🌐 **Built with Modern Tools**: Developed using Next.js App Router, Tailwind CSS, and TypeScript.

## Demo
Check out the live demo [here](https://text-particle-gen.vercel.app/)

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at http://localhost:3000.

## Export Config
**To export the particle configuration:**

1. Input your desired text in the input box.
2. Click the "Export Particle Config" button to download the JSON file.
3. Use the downloaded particlesConfig.json file in your project by integrating it with tsparticles.

## Technologies Used
• Next.js (App Router)
• TypeScript
• Tailwind CSS
• tsparticles

## Folder Structure
```
src/
├── app/
│   ├── page.tsx         // Main page with particle background
│   ├── components/
│   │   ├── DynamicInput.tsx
│   │   └── ParticleBackground.tsx
├── utils/
│   └── particlesConfig.ts // Particle configuration generator
├── styles/
│   └── globals.css       // Global styles
```

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is open-source and available under the MIT License.

Made with ❤️ by botea
