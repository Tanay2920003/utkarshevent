"use client";

import React from "react";
import { MiniNavbar } from "./ui/mini-navbar";
import { InteractiveMenu } from "./ui/modern-mobile-menu";

export default function Navbar() {
     return (
          <>
               {/* Desktop Navigation */}
               <MiniNavbar />

               {/* Mobile Navigation */}
               <InteractiveMenu />
          </>
     );
}
