// "use client"

// import type React from "react"
// import { Box, Lock, Search, Settings, Sparkles } from "lucide-react"
// import { GlowingEffect } from "./glowing-effect"

// export default function GlowingEffectDemo() {
//   return (
//     <ul className="grid grid-cols-1 grid-rows-none gap-4 max-h-[80%] 
//         md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2">
//       <GridItem
//         area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
//         icon={<Box className="h-4 w-4 text-red-900 dark:text-blue-400" />}
//         title="Do things the right way"
//         description="Running out of copy so I'll write anything."
//       />

//       <GridItem
//         area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
//         icon={<Settings className="h-4 w-4 text-red-900 dark:text-neutral-400" />}
//         title="The best AI code editor ever."
//         description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
//       />

//       <GridItem
//         area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
//         icon={<Lock className="h-4 w-4 text-red-900 dark:text-neutral-400" />}
//         title="You should buy Aceternity UI Pro"
//         description="It's the best money you'll ever spend"
//       />

//       <GridItem
//         area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
//         icon={<Sparkles className="h-4 w-4 text-red-900 dark:text-neutral-400" />}
//         title="This card is also built by Cursor"
//         description="I'm not even kidding. Ask my mom if you don't believe me."
//       />

//       <GridItem
//         area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
//         icon={<Search className="h-4 w-4 text-red-900 dark:text-neutral-400" />}
//         title="Coming soon on Aceternity UI"
//         description="I'm writing the code as I record this, no shit."
//       />
//     </ul>
//   )
// }

// interface GridItemProps {
//   area: string
//   icon: React.ReactNode
//   title: string
//   description: React.ReactNode
// }

// const GridItem = ({ area, icon, title, description }: GridItemProps) => {
//   return (
//     <li className={`max-h-[90%] list-none ${area}`}>
//       <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
//         <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
//         <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
//           <div className="relative flex flex-1 flex-col justify-between gap-3">
//             <div className="w-fit rounded-lg border border-gray-600 p-2 ">{icon}</div>
//             <div className="space-y-3">
//               <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
//                 {title}
//               </h3>
//               <h2
//                 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
//               md:text-base/[1.375rem]  text-black dark:text-neutral-400"
//               >
//                 {description}
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   )
// }



// "use client"

// import type React from "react"
// import { Box, Lock, Search, Settings, Sparkles } from "lucide-react"
// import { GlowingEffect } from "./glowing-effect"

// export default function GlowingEffectDemo() {
//   return (
//     <ul className="grid grid-cols-1 grid-rows-none gap-3 max-h-screen 
//         md:grid-cols-12 md:grid-rows-3 lg:gap-3 xl:grid-rows-2">
//       <GridItem
//         area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
//         icon={<Box className="h-4 w-4 text-red-900 dark:text-blue-400" />}
//         title="Do things the right way"
//         description="Running out of copy so I'll write anything."
//       />

//       <GridItem
//         area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
//         icon={<Settings className="h-4 w-4 text-red-900 dark:text-neutral-400" />}
//         title="The best AI code editor ever."
//         description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
//       />

//       <GridItem
//         area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
//         icon={<Lock className="h-4 w-4 text-green-900 dark:text-neutral-400" />}
//         title="You should buy Aceternity UI Pro"
//         description="It's the best money you'll ever spend"
//       />

//       <GridItem
//         area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
//         icon={<Sparkles className="h-4 w-4 text-red-900 dark:text-neutral-400" />}
//         title="This card is also built by Cursor"
//         description="I'm not even kidding. Ask my mom if you don't believe me."
//       />

//       <GridItem
//         area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
//         icon={<Search className="h-4 w-4 text-red-900 dark:text-neutral-400" />}
//         title="Coming soon on Aceternity UI"
//         description="I'm writing the code as I record this, no shit."
//       />
//     </ul>
//   )
// }

// interface GridItemProps {
//   area: string
//   icon: React.ReactNode
//   title: string
//   description: React.ReactNode
// }

// const GridItem = ({ area, icon, title, description }: GridItemProps) => {
//   return (
//     <li className={`max-h-[10vh] md:max-h-[20vh] lg:max-h-[20vh] xl:max-h-[70vh] list-none ${area}`}>
//       <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
//         <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
//         <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-0.75 p-4 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-5">
//           <div className="relative flex flex-1 flex-col justify-between gap-2">
//             <div className="w-fit rounded-lg border border-gray-600 p-2 ">{icon}</div>
//             <div className="space-y-2">
//               <h3 className="pt-0.5 text-lg font-semibold text-balance text-black dark:text-white">
//                 {title}
//               </h3>
//               <h2 className="text-sm text-black dark:text-neutral-400">
//                 {description}
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   )
// }



// "use client"

// import type React from "react"
// import { Box, Lock, Search, Settings, Sparkles } from "lucide-react"
// import { GlowingEffect } from "./glowing-effect"

// export default function GlowingEffectDemo() {
//   return (
//     <ul className="grid grid-cols-1 grid-rows-none gap-3 max-h-screen 
//         md:grid-cols-12 md:grid-rows-3 lg:gap-3 xl:grid-rows-2">
//       <GridItem
//         area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
//         icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="Do things the right way"
//         description="Running out of copy so I'll write anything."
//       />
 
//       <GridItem
//         area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
//         icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="The best AI code editor ever."
//         description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
//       />
 
//       <GridItem
//         area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
//         icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="You should buy Aceternity UI Pro"
//         description="It's the best money you'll ever spend"
//       />
 
//       <GridItem
//         area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
//         icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="This card is also built by Cursor"
//         description="I'm not even kidding. Ask my mom if you don't believe me."
//       />
 
//       <GridItem
//         area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
//         icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="Coming soon on Aceternity UI"
//         description="I'm writing the code as I record this, no shit."
//       />
//     </ul>
//   )
// }

// interface GridItemProps {
//   area: string
//   icon: React.ReactNode
//   title: string
//   description: React.ReactNode
// }

// const GridItem = ({ area, icon, title, description }: GridItemProps) => {
//   return (
//     <li className={`max-h-[20vh] md:max-h-[20vh] lg:max-h-[20vh] xl:max-h-[70vh] list-none ${area} max-w-[90%] mx-auto`}>
//       <div className="relative h-full rounded-3xl border  border-gray-800 p-2 md:p-3">
//         <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
//         <div className="
//              bg-black border border-gray-700 
//             relative flex h-full flex-col justify-between 
//             gap-4 overflow-hidden md:p-5 p-4
//             border-0.75 
//             rounded-xl 
//             shadow-[0px_4px_10px_rgba(255,255,255,0.3)]
//             hover:shadow-[0px_4px_10px_rgba(255,255,255,0.6)]
//             ">
//           <div className="relative flex flex-1 flex-col justify-between gap-2">
//             <div className="bg-[rgb(0,255,255)]  w-fit rounded-lg border border-gray-600 p-2 ">{icon}</div>
//             <div className="space-y-2">
//               <h3 className="pt-0.5 text-lg font-semibold text-balance text-black dark:text-white">
//                 {title}
//               </h3>
//               <h2 className="text-sm text-black dark:text-neutral-400">
//                 {description}
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   )
// }

"use client"

import type React from "react"

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react"
import { GlowingEffect } from "./glowing-effect"
import Image, { StaticImageData } from "next/image";
import pro1 from "../../../public/assets/pro1.jpg";

// Datos de las tarjetas
const items = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />, 
    title: "Do things the right way",
    description: "Running out of copy so I'll write anything.",
    image: pro1,
    url: "https://learning-js-ten.vercel.app/"
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />, 
    title: "The best AI code editor ever.",
    description: "Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me.",
    image: pro1,
    url: "https://learning-js-ten.vercel.app/"
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />, 
    title: "You should buy Aceternity UI Pro",
    description: "It's the best money you'll ever spend",
    image:pro1,
    url: "https://learning-js-ten.vercel.app/"
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />, 
    title: "This card is also built by Cursor",
    description: "I'm not even kidding. Ask my mom if you don't believe me.",
    image:pro1,
    url: "https://learning-js-ten.vercel.app/"
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: <Search className="h-4 w-4 text-black dark:text-neutral-400" />, 
    title: "Coming soon on Aceternity UI",
    description: "I'm writing the code as I record this, no shit.",
    image:pro1,
    url: "https://learning-js-ten.vercel.app/"
  }
]

export default function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-3 max-h-screen md:grid-cols-12 md:grid-rows-3 lg:gap-3 xl:grid-rows-2">
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
    max-h-[30vh] md:max-h-[35vh] lg:max-h-[40vh] xl:max-h-[40vh] list-none ${area} max-w-[95%] mx-auto`}>
      <div className="relative h-full rounded-3xl border border-gray-800 p-2 md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="bg-black border border-gray-700 relative flex h-full flex-col justify-between gap-4 overflow-hidden md:p-5 p-4 border-0.75 rounded-xl shadow-[0px_4px_10px_rgba(255,255,255,0.3)] hover:shadow-[0px_4px_10px_rgba(255,255,255,0.6)]">
          {/* Imagen */}
          <div className="h-[60%] w-full">
            <Image src={image} alt={title} className="w-full h-full object-cover transition duration-300 hover:object-fill ease-in-out" width={300} height={200} />
          </div>
          
          {/* Contenido */}
          <div className="h-[40%] p-2 flex flex-col justify-center text-center">
            <div className="w-fit mx-auto rounded-lg border border-gray-600 p-2 bg-[rgb(0,255,255)]">{icon}</div>
            <h3 className="text-md font-semibold text-[rgb(0,255,255)]">{title}</h3>
            <p className="text-xs text-gray-400 mt-1">{description}</p>
            <a href={url} target="_blank" className="text-[rgb(0,255,255)] hover:underline mt-1 block text-xs">
              <i>{url}</i>
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}
