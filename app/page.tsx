"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { HorizonHeroSection } from "@/components/ui/horizon-hero-section";
import { IntroScreen } from "@/components/IntroScreen";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import SpiralLoader from "@/components/ui/spiral-loader";
import { AnimatePresence, motion } from "framer-motion";
import Cookies from "js-cookie";

export default function Home() {
  const [loadingStage, setLoadingStage] = useState<"loader" | "intro" | "main" | "checking">("checking");

  React.useEffect(() => {
    // Check if user has already seen the intro
    const hasSeenIntro = Cookies.get("has_seen_intro");

    if (hasSeenIntro) {
      setLoadingStage("main");
    } else {
      setLoadingStage("loader");
    }
  }, []);

  React.useEffect(() => {
    if (loadingStage === "loader") {
      const timer = setTimeout(() => {
        setLoadingStage("intro");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loadingStage]);

  const handleIntroComplete = () => {
    Cookies.set("has_seen_intro", "true", { expires: 365 });
    setLoadingStage("main");
  };

  return (
    <main className="bg-black min-h-screen">
      <AnimatePresence mode="wait">
        {loadingStage === "checking" ? null :
          loadingStage === "loader" ? (
            <motion.div
              key="pre-loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black z-[110]"
            >
              <SpiralLoader />
            </motion.div>
          ) : loadingStage === "intro" ? (
            <IntroScreen key="intro" onComplete={handleIntroComplete} />
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Navbar />
              <HorizonHeroSection />

              <div className="py-24 bg-black relative">
                <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white italic">
                    Festival Moments
                  </h2>
                  <p className="text-white/40 mt-4 uppercase tracking-[0.3em] text-sm">
                    Catch a glimpse of the Utkarsh experience
                  </p>
                </div>

                <ZoomParallax
                  images={[
                    { src: "/parallax/coding_hackathon_high_tech_1770304981731.png", alt: "Hackathon" },
                    { src: "/parallax/cultural_dance_modern_fusion_fest_1770304998171.png", alt: "Cultural Dance" },
                    { src: "/parallax/music_concert_neon_vibe_1770305019441.png", alt: "Music Concert" },
                    { src: "/parallax/ai_robotics_display_expo_1770305034569.png", alt: "AI Expo" },
                    { src: "/parallax/art_installation_interactive_lights_1770305052775.png", alt: "Art Installation" },
                    { src: "/parallax/coding_hackathon_high_tech_1770304981731.png", alt: "Coding Section" },
                    { src: "/parallax/music_concert_neon_vibe_1770305019441.png", alt: "Grand Finale" },
                  ]}
                />
              </div>

              {/* Call to action at bottom of hero */}
              <div className="relative z-20 text-center pb-20">
                <a
                  href="/timeline"
                  className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-105 transition font-bold uppercase tracking-wider text-white"
                >
                  View Full Schedule →
                </a>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </main>
  );
}
