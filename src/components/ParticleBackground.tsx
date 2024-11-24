"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { particlesConfig } from "../utils/particlesConfig";

interface ParticleBackgroundProps {
  text: string;
}

export default function ParticleBackground({ text }: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig(text)}
      className="absolute inset-0 z-0"
    />
  );
}
