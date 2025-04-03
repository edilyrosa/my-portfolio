"use client"
import type React from "react"
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react"
import { GlowingEffect } from "./glowing-effect"
import Image, { StaticImageData } from "next/image";
import ingenio from "../../../public/assets/ingenio.jpg";
import freelance from "../../../public/assets/freelance.jpg";
import alcaldia from "../../../public/assets/alcaldia.png";
import nuvector from "../../../public/assets/nuvector.png";

// Datos de las tarjetas
const items = [

  {
    area:"md:[grid-area:1/1/2/7] lg:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />, 
    title: "Maracaibo City Hall",
    description: "Maracaibo, Venezuela (Working on-site)",
    duties: "Software Developer: Js - Electron.js",
    image:alcaldia,
    url: ""
  },
 {
  area:"md:[grid-area:2/1/3/7] lg:[grid-area:1/6/5/25] xl:[grid-area:2/1/3/5]",
    icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />, 
    title: "Nuvector",
    description: "Georgia, United States (Remotely)",
    duties: "Software Developer: Js, Python, AWS. Protocols: BLE, LORA, LORAWAN...",
    image: nuvector,
    url: ""
  },

   {
    area:"md:[grid-area:2/1/10/7] lg:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />, 
    title: 'Freelance LATAM (Remotely)',
    description:'LATAM',
    duties: "Explaining the following technologies: HTML, CSS, Tailwind, JavaScript, Node.js, React.js",
    image: freelance,
    url: ""
  },


  {
    area:"md:[grid-area:1/6/10/13] lg:[grid-area:1/6/5/25] xl:[grid-area:1/4/4/13]",
    icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />, 
    title: "Ingenio 360 (Remotely)",
    description: "San Salvador, El Salvador",
    duties: "Instructor of the following technologies: HTML, CSS, Tailwind, JavaScript, Node.js, React.js",
    image:ingenio,
    url: "https://ingenio-360.com/"
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
    duties: string;
    image: string | StaticImageData;
    url: string;
  }

const GridItem = ({ area, icon, title, description, duties, image, url }: GridItemProps) => {
  return (
    <li className={`
    transform transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden
   max-h-[30vh] ocho:max-h-[40vh] md:max-h-[30vh] lg:max-h-[55vh] xl:max-h-[90vh] list-none ${area} 
   w-[95%] mx-auto`}>
      <div className="relative h-full rounded-3xl border border-gray-800 p-2 md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        
        
        <div className="relative h-full md:p-5 p-4 
          flex flex-row md:flex-col justify-between gap-4
           overflow-hidden border-0.75 rounded-xl 
         bg-black border border-gray-700
          shadow-[0px_4px_10px_rgba(255,255,255,0.3)] hover:shadow-[0px_4px_10px_rgba(255,255,255,0.6)]">
          
            {/* Imagen */}
            <div className="md:h-[60%] w-[50%] md:w-full">
              <Image src={image} alt={title}  width={300} height={200}
                className="w-full h-full object-fill transition duration-300 hover:object-fill ease-in-out" 
                />
            </div>
            
            {/* Contenido */}
            <div className="md:h-[40%] w-[50%] md:w-full mt-1 md:mt-[-40%] p-2 flex flex-col justify-center text-center">
              <div className="w-fit mx-auto rounded-lg border border-gray-600 p-2 bg-[rgb(0,255,255)]">{icon}</div>
              <h3 className="text-[10px] font-semibold text-[rgb(255,255,255)]"> <span className="text-[rgb(0,255,255)]">{title} </span></h3>
              <p className="text-[9px] text-gray-400 mt-1">{description}</p>
              <p className="text-[9px] text-gray-400 mt-1">{duties}</p>
              <a href={url} target="_blank" className="text-[8px] text-[rgb(0,0,255)] hover:underline mt-1 block">
                <i>{url}</i>
              </a>
            </div>

        </div>

      </div>
    </li>
  )
}



