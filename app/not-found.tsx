"use client";

import React from "react";
import Link from "next/link";
import FuzzyText from "@/components/ui/FuzzyText";
import { motion } from "framer-motion";

export default function NotFound() {
     return (
          <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
               <div className="relative">
                    <FuzzyText
                         baseIntensity={0.2}
                         hoverIntensity={0.5}
                         enableHover
                    >
                         404
                    </FuzzyText>

                    {/* Glow behind 404 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
               </div>

               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-12 space-y-6"
               >
                    <h2 className="text-2xl md:text-3xl font-bold text-white/80 tracking-tight">
                         Page Lost in the Cosmos
                    </h2>
                    <p className="text-white/40 max-w-md mx-auto leading-relaxed">
                         The link you followed might be broken, or the page may have been moved.
                         Don't worry, you can find your way back.
                    </p>

                    <div className="pt-8">
                         <Link
                              href="/"
                              className="inline-flex items-center px-8 py-3 rounded-full bg-white text-black font-bold uppercase tracking-widest text-sm hover:scale-105 transition active:scale-95"
                         >
                              Back to Reality
                         </Link>
                    </div>
               </motion.div>

               {/* Grid pattern background overlay */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          </div>
     );
}
