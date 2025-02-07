// src/app/layout.js
import Link from "next/link";
import "./globals.css";
import img from "../../public/portfolio.jpg";
import Image from "next/image";
import Header  from "./header/Header";
import Aside from "./body/Aside";
import MainContent from "./body/MainContent";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden h-screen grid grid-rows-[auto_1fr_auto]">
        <header className="flex items-center justify-center h-screen">
          <Header />
        </header>

        <main className="flex h-screen gap-5 p-5">
          <Aside />
          <MainContent />
        </main>

        <footer className="bg-blue-500 text-white flex items-center justify-center h-20">
          <p className="text-xl font-bold">© 2023 | Desarrollado por: Ediliano</p>
        </footer>
      </body>
    </html>
  );
}






