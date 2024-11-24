"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import ParticleBackground from "../components/ParticleBackground";
import { particlesConfig } from "../utils/particlesConfig";

const DynamicInput = dynamic(() => import("../components/DynamicInput"), {
  ssr: false,
});

export default function Home() {
  const [text, setText] = useState("Hello World");

  const exportConfig = () => {
    const configData = particlesConfig(text);
    const blob = new Blob([JSON.stringify(configData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);

    // Create a temporary link and trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = "particlesConfig.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <main className="z-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-8">
          Dynamic Particle Text Animation
        </h1>
        <p className="text-white mb-8">from dev to devs by botea</p>
        <DynamicInput text={text} setText={setText} />
        <button
          onClick={exportConfig}
          className="mt-4 px-6 py-2 rounded bg-blue-500 text-white font-bold hover:bg-blue-600 focus:outline-none"
        >
          Export Particle Config
        </button>
      </main>
      <ParticleBackground text={text} />
    </div>
  );
}
