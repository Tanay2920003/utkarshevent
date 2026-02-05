"use client";

import * as React from "react";
import Navbar from "@/components/Navbar";
import { AlertToast } from "@/components/ui/alert-toast";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";

const initialAlerts = [
     { id: 1, styleVariant: 'filled', variant: 'success', title: 'Payment processed', description: 'Transaction ID: #f4402' },
     { id: 2, styleVariant: 'filled', variant: 'warning', title: 'Connection failed', description: 'Check your Internet connection' },
     { id: 3, styleVariant: 'filled', variant: 'info', title: 'Update available', description: 'Version 2.1.0 ready to install' },
     { id: 4, styleVariant: 'filled', variant: 'error', title: 'Something went wrong', description: 'Please try again later' },
     { id: 5, styleVariant: 'default', variant: 'success', title: 'Payment processed', description: 'Transaction ID: #f4402' },
     { id: 6, styleVariant: 'default', variant: 'warning', title: 'Connection failed', description: 'Check your Internet connection' },
     { id: 7, styleVariant: 'default', variant: 'info', title: 'Update available', description: 'Version 2.1.0 ready to install' },
     { id: 8, styleVariant: 'default', variant: 'error', title: 'Something went wrong', description: 'Please try again later' },
] as const;


export default function AlertToastDemo() {
     const [alerts, setAlerts] = React.useState<any[]>(initialAlerts as any);

     const handleClose = (id: number) => {
          setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
     };

     const resetAlerts = () => {
          setAlerts(initialAlerts as any);
     }

     return (
          <>
               <Navbar />
               <div className="px-10 py-20 max-w-5xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold text-center">Alert Toast Demo</h1>

                    <div className="flex justify-center">
                         <Button onClick={resetAlerts} disabled={alerts.length === initialAlerts.length}>
                              Reset Alerts
                         </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
                         {/* Filled Style Column */}
                         <div className="space-y-4 w-full max-w-sm">
                              <h2 className="text-xl font-semibold mb-4 text-center">Filled Style</h2>
                              <AnimatePresence>
                                   {alerts
                                        .filter(a => a.styleVariant === 'filled')
                                        .map(({ id, variant, title, description, styleVariant }) => (
                                             <AlertToast
                                                  key={id}
                                                  variant={variant}
                                                  styleVariant={styleVariant}
                                                  title={title}
                                                  description={description}
                                                  onClose={() => handleClose(id)}
                                             />
                                        ))}
                              </AnimatePresence>
                         </div>

                         {/* Default Style Column */}
                         <div className="space-y-4 w-full max-w-sm">
                              <h2 className="text-xl font-semibold mb-4 text-center">Default Style</h2>
                              <AnimatePresence>
                                   {alerts
                                        .filter(a => a.styleVariant === 'default')
                                        .map(({ id, variant, title, description, styleVariant }) => (
                                             <AlertToast
                                                  key={id}
                                                  variant={variant}
                                                  styleVariant={styleVariant}
                                                  title={title}
                                                  description={description}
                                                  onClose={() => handleClose(id)}
                                             />
                                        ))}
                              </AnimatePresence>
                         </div>
                    </div>
               </div>
          </>
     );
}
