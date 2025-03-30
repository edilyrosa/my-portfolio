// src/app/layout.js

'use client'
import { useState, useEffect } from 'react';
import "./globals.css";
import Header  from "./header/Header";
import AsideVertical from "./body/AsideVertical";
import AsideHorizontal from "./body/AsideHorizontal";
import MainContent from "./body/MainContent";
import SplashCursor from './SplashCursor'


export default function Layout({ children }) {

  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    // Función para actualizar el estado basado en el tamaño de la ventana
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768); // `md:` en Tailwind (mínimo 768px)
    };

    // Llamamos a la función al cargar y cada vez que cambia el tamaño
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      {/* <body className="overflow-x-hidden h-screen grid grid-rows-[auto_1fr_auto]"> */}
      <body className="overflow-x-hidden h-screen grid grid-rows-[auto_auto_30vh]">
      {/* <SplashCursor /> */}
        <header className="row-span-1 flex items-center justify-center">
        {/* <header className={`row-span-1 flex items-center justify-center ${isMediumScreen ? ' row-span-1  ' : ' row-span-[50%] '}`} > */}
          <Header />
        </header>

        <main className={`frow-span-1 flex flex-col md:flex-row ap-5 p-5 `} >
         {/* Renderizar componente basado en el tamaño de la pantalla */}
         {isMediumScreen === false ? <AsideHorizontal />  : <AsideVertical/>  }
     
          <MainContent />
    
        </main>

        <footer className=" row-span-1 bg-gray-800 text-white flex items-center justify-center h-20">
          <p className="text-xl font-bold">© 2023 | Desarrollado por: Edily Mora</p>
        </footer>
      </body>
    </html>
  );
}






