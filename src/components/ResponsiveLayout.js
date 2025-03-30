"use client";
import { useState, useEffect } from "react";
import AsideVertical from "../app/body/AsideVertical";
import AsideHorizontal from "../app/body/AsideHorizontal";
import MainContent from "../app/body/MainContent";
import FloatingDockDemo from "./FloatingDockDemo";


export default function ResponsiveLayout({ children }) {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="frow-span-1 flex flex-col md:flex-row p-5">
      {
        isMediumScreen 
            ? <AsideVertical /> 
            : <FloatingDockDemo  />
      }
     
      <MainContent>{children}</MainContent>
    </main>
  );
}
