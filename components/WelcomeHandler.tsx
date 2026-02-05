"use client";

import * as React from "react";
import Cookies from "js-cookie";
import { AlertToast } from "@/components/ui/alert-toast";
import { AnimatePresence } from "framer-motion";

export function WelcomeHandler() {
     const [stage, setStage] = React.useState<"none" | "welcome" | "utkarsh">("none");

     React.useEffect(() => {
          const hasVisited = Cookies.get("has_visited");
          if (!hasVisited) {
               setStage("welcome");
               Cookies.set("has_visited", "true", { expires: 365 });
          }
     }, []);

     React.useEffect(() => {
          if (stage === "welcome") {
               const timer = setTimeout(() => {
                    setStage("utkarsh");
               }, 3000); // Show "Welcome" for 3 seconds
               return () => clearTimeout(timer);
          }
     }, [stage]);

     if (stage === "none") return null;

     return (
          <div className="fixed bottom-4 right-4 z-[100] w-full max-w-sm">
               <AnimatePresence mode="wait">
                    {stage === "welcome" && (
                         <AlertToast
                              key="welcome"
                              variant="success"
                              styleVariant="filled"
                              title="Welcome! 👋"
                              description="We're glad to have you here."
                              onClose={() => setStage("none")}
                         />
                    )}
                    {stage === "utkarsh" && (
                         <AlertToast
                              key="utkarsh"
                              variant="info"
                              styleVariant="filled"
                              title="BBD Utkarsh 2026 🚀"
                              description="Get ready for the state's biggest cultural festival!"
                              onClose={() => setStage("none")}
                         />
                    )}
               </AnimatePresence>
          </div>
     );
}
