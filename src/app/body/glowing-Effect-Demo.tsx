"use client"
import type React from "react"
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react"
import { GlowingEffect } from "./glowing-effect"
import Image, { StaticImageData } from "next/image";
import pro1 from "../../../public/assets/pro1.jpg";
import pro2 from "../../../public/assets/pro2.png";
import pro3 from "../../../public/assets/pro3.jpg";
import pro4 from "../../../public/assets/pro4.jpg";

// Datos de las tarjetas
const items = [

  {
    area:"md:[grid-area:1/1/2/7] lg:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />, 
    title: "SEO, Web Development, Next.js, React.js",
    description: "Designed and developed a blog focused on...",
    image:pro3,
    url: "https://www.ultimochisme.com/"
  },
 {
  area:"md:[grid-area:2/1/3/7] lg:[grid-area:1/6/5/25] xl:[grid-area:2/1/3/5]",
    icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />, 
    title: "The best AI code editor ever.",
    description: "Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me.",
    image: pro2,
    url: "https://learning-js-ten.vercel.app/"
  },

   {
    area:"md:[grid-area:2/1/10/7] lg:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />, 
    title: 'Back-end & Front-end, Next.js, Prisma ORM, cibersecurity, authentication, authorization...',
    description: "Syspro Gestión (Full-Stack Management System)",
    image: pro4,
    url: "https://sysprogestion.vercel.app/"
  },


  {
    area:"md:[grid-area:1/6/10/13] lg:[grid-area:1/6/5/25] xl:[grid-area:1/4/4/13]",
    icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />, 

    title: "SEO, UX/UI Design, Next.js",
    description: "Developed a learning platform optimized for SEO...",
    image:pro1,
    url: "https://learning-js-ten.vercel.app/"
  },
]




export default function GlowingEffectDemo() {
  return (
    <ul className="sm:ml-[3%] grid grid-cols-1 grid-rows-none gap-2 md:gap-x-[7%] max-h-screen 
      md:grid-cols-10 md:grid-rows-2 lg:gap-3 lg:gap-x-[3%] xl:gap-x-[8%]">
      {items.map((item, index) => (
        <GridItem key={index} {...item} />
      ))}
    </ul>
  )
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string | StaticImageData;
    url: string;
  }

const GridItem = ({ area, icon, title, description, image, url }: GridItemProps) => {
  return (
    <li className={`
    transform transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden
   max-h-[30vh] ocho:max-h-[40vh] md:max-h-[30vh] lg:max-h-[55vh] xl:max-h-[90vh] list-none ${area} 
   w-[95%] mx-auto`}>
      <div className="relative h-full rounded-3xl border border-gray-800 p-2 md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="bg-black border border-gray-700 relative flex h-full flex-col 
        justify-between gap-4 overflow-hidden md:p-5 p-4 border-0.75 rounded-xl 
        shadow-[0px_4px_10px_rgba(255,255,255,0.3)] hover:shadow-[0px_4px_10px_rgba(255,255,255,0.6)]">
          {/* Imagen */}
          <div className="h-[60%] w-full">
            <Image src={image} alt={title}  width={300} height={200}
              className="w-full h-full object-cover transition duration-300 hover:object-fill ease-in-out" 
              />
          </div>
          
          {/* Contenido */}
          <div className="mt-[-40%] h-[40%] p-2 flex flex-col justify-center text-center">
            <div className="w-fit mx-auto rounded-lg border border-gray-600 p-2 bg-[rgb(0,255,255)]">{icon}</div>
            <h3 className="text-[10px] font-semibold text-[rgb(255,255,255)]"> Skills: <span className="text-[rgb(0,255,255)]">{title} </span></h3>
            <p className="text-[9px] text-gray-400 mt-1">{description}</p>
            <a href={url} target="_blank" className="text-[8px] text-[rgb(0,0,255)] hover:underline mt-1 block">
              <i>{url}</i>
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}



