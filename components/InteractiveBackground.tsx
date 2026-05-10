'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export default function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const pixelMouseX = useMotionValue(-1000);
  const pixelMouseY = useMotionValue(-1000);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize from -1 to 1 based on screen center
      mouseX.set((e.clientX / innerWidth) * 2 - 1);
      mouseY.set((e.clientY / innerHeight) * 2 - 1);
      
      // Raw pixels for trail
      pixelMouseX.set(e.clientX);
      pixelMouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, pixelMouseX, pixelMouseY]);

  // Smooth configs
  const smoothConfig = { damping: 50, stiffness: 100, mass: 1 };
  
  // Create parallax transforms
  const x1 = useSpring(useTransform(mouseX, [-1, 1], [-80, 80]), smoothConfig);
  const y1 = useSpring(useTransform(mouseY, [-1, 1], [-80, 80]), smoothConfig);

  const x2 = useSpring(useTransform(mouseX, [-1, 1], [50, -50]), smoothConfig);
  const y2 = useSpring(useTransform(mouseY, [-1, 1], [50, -50]), smoothConfig);

  const x3 = useSpring(useTransform(mouseX, [-1, 1], [-30, 30]), smoothConfig);
  const y3 = useSpring(useTransform(mouseY, [-1, 1], [-30, 30]), smoothConfig);

  // Cursor trail configs
  const trailX1 = useSpring(pixelMouseX, { stiffness: 300, damping: 30, mass: 1 });
  const trailY1 = useSpring(pixelMouseY, { stiffness: 300, damping: 30, mass: 1 });
  
  const trailX2 = useSpring(pixelMouseX, { stiffness: 100, damping: 30, mass: 1.5 });
  const trailY2 = useSpring(pixelMouseY, { stiffness: 100, damping: 30, mass: 1.5 });

  // Avoid hydration mismatch by waiting for mount
  if (!mounted) return (
    <div className="absolute inset-0 -z-10 bg-[#050505] overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-blue-600/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-blue-900/25 blur-[120px] rounded-full" />
    </div>
  );

  return (
    <div className="fixed inset-0 w-screen h-screen -z-10 bg-[#050505] overflow-hidden pointer-events-none">
      {/* Light cursor trail */}
      <motion.div
        style={{ x: trailX1, y: trailY1, translateX: '-50%', translateY: '-50%' }}
        className="absolute top-0 left-0 w-[40px] h-[40px] bg-blue-400/40 blur-[10px] rounded-full mix-blend-screen"
      />
      
      {/* Larger soft cursor trail */}
      <motion.div
        style={{ x: trailX2, y: trailY2, translateX: '-50%', translateY: '-50%' }}
        className="absolute top-0 left-0 w-[150px] h-[150px] bg-indigo-500/20 blur-[40px] rounded-full mix-blend-screen"
      />

      {/* Atmospheric Orbs */}
      <motion.div
        style={{ x: x1, y: y1 }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen"
      />

      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-blue-900/25 blur-[120px] rounded-full mix-blend-screen"
      />

      <motion.div
        style={{ x: x3, y: y3 }}
        className="absolute top-[40%] left-[40%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-500/15 blur-[120px] rounded-full mix-blend-screen"
      />

      {/* Cinematic Film Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px'
        }} 
      />
    </div>
  );
}
