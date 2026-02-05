"use client";

import { motion } from "framer-motion";



export default function Template({ children }: { children: React.ReactNode }) {
     return (
          <div className="relative overflow-hidden">
               <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
               >
                    {children}
               </motion.div>

               {/* Wipe bars */}
               <div className="fixed inset-0 pointer-events-none z-[9999] flex flex-col h-screen overflow-hidden">
                    {[...Array(4)].map((_, i) => (
                         <motion.div
                              key={i}
                              className="flex-1 bg-blue-600 relative border-l border-white/10 shadow-[-10px_0_30px_rgba(37,99,235,0.2)]"
                              initial={{ scaleX: 1 }}
                              animate={{ scaleX: 0 }}
                              transition={{ duration: 1, ease: "circOut", delay: i * 0.05 }}
                              style={{ originX: 0 }}
                         />
                    ))}
               </div>

               {/* Secondary wipe for depth */}
               <div className="fixed inset-0 pointer-events-none z-[9998] flex flex-col h-screen overflow-hidden">
                    {[...Array(4)].map((_, i) => (
                         <motion.div
                              key={i}
                              className="flex-1 bg-blue-950 relative"
                              initial={{ scaleX: 1 }}
                              animate={{ scaleX: 0 }}
                              transition={{ duration: 1, ease: "circOut", delay: i * 0.05 + 0.1 }}
                              style={{ originX: 0 }}
                         />
                    ))}
               </div>
          </div>
     );
}
