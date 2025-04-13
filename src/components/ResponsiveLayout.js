"use client";
import { useState, useEffect } from "react";
import AsideVertical from "../app/body/AsideVertical";
import MainContent from "../app/body/MainContent";

export default function ResponsiveLayout({ children }) {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="frow-span-1 flex flex-col md:flex-row p-5">
      {
        isMediumScreen && <AsideVertical /> 
          
      }
      <MainContent>{children}</MainContent>
    </main>
  );
}

