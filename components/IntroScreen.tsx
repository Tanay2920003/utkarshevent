"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShatterButton } from "./ui/shatter-button";

interface IntroScreenProps {
     onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
     const [isExiting, setIsExiting] = useState(false);

     const handleStart = () => {
          // Small delay to let the shatter animation play out
          setTimeout(() => {
               setIsExiting(true);
               // Another delay for the fade-out to complete before notifying parent
               setTimeout(() => {
                    onComplete();
               }, 800);
          }, 400);
     };

     return (
          <AnimatePresence>
               {!isExiting && (
                    <motion.div
                         initial={{ opacity: 1 }}
                         exit={{ opacity: 0, filter: "blur(20px)" }}
                         transition={{ duration: 0.8, ease: "easeInOut" }}
                         className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
                    >
                         <motion.div
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.2, duration: 0.6 }}
                              className="text-center space-y-8"
                         >
                              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
                                   BBD UTKARSH 2026
                              </h1>

                              <div className="pt-4">
                                   <ShatterButton
                                        onClick={handleStart}
                                        shatterColor="#3b82f6"
                                        className="text-lg md:text-xl uppercase tracking-widest px-12 py-6 bg-blue-600/10 hover:bg-blue-600/20"
                                   >
                                        Ready to Start Event
                                   </ShatterButton>
                              </div>

                              <motion.p
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 0.4 }}
                                   transition={{ delay: 1, duration: 1 }}
                                   className="text-white/40 text-sm tracking-[0.5em] uppercase pt-12"
                              >
                                   Virasat se Vikas tak
                              </motion.p>
                         </motion.div>

                         {/* Background ambient glow */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
                    </motion.div>
               )}
          </AnimatePresence>
     );
}
