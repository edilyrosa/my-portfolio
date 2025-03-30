// "use client"

// import React from "react"

// import { cn } from "../../lib/utils"
// import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react"
// import Link from "next/link"
// import { useRef, useState, useEffect } from "react"
// import Image from "next/image"

// export const FloatingDock = ({ items, className }) => {
//   const mouseX = useMotionValue(Number.POSITIVE_INFINITY)
//   const [isSticky, setIsSticky] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       // Calculate when to switch to sticky mode (when scroll position is greater than 50vh)
//       const scrollPosition = window.scrollY
//       const viewportHeight = window.innerHeight
//       const threshold = viewportHeight * 0.5 // 50vh

//       setIsSticky(scrollPosition >= threshold)
//     }

//     window.addEventListener("scroll", handleScroll)

//     // Initial check
//     handleScroll()

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   return (
//     <motion.div
//       onMouseMove={(e) => mouseX.set(e.pageX)}
//       onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
//       className={cn(
//         "mb-[10px] left-1/2 -translate-x-1/2 z-50 flex h-16 gap-4 items-center rounded-2xl bg-transparent dark:bg-neutral-900 px-4 py-3 shadow-lg transition-all duration-300",
//         isSticky ? "fixed top-[10px]" : "fixed top-[60vh] -translate-y-1/2",
//         className,
//       )}
//     >
//       {items.map((item) => (
//         <IconContainer mouseX={mouseX} key={item.title} isSpecial={item.title === "Aceternity UI"} {...item} />
//       ))}
//     </motion.div>
//   )
// }

// function IconContainer({ mouseX, title, icon, href, isSpecial = false }) {
//   const ref = useRef(null)

//   const distance = useTransform(mouseX, (val) => {
//     const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

//     return val - bounds.x - bounds.width / 2
//   })

//   // Make the special icon 30% larger
//   const sizeMultiplier = isSpecial ? 1.3 : 1

//   const widthTransform = useTransform(
//     distance,
//     [-150, 0, 150],
//     [40 * sizeMultiplier, 80 * sizeMultiplier, 40 * sizeMultiplier],
//   )

//   const heightTransform = useTransform(
//     distance,
//     [-150, 0, 150],
//     [40 * sizeMultiplier, 80 * sizeMultiplier, 40 * sizeMultiplier],
//   )

//   const widthTransformIcon = useTransform(
//     distance,
//     [-150, 0, 150],
//     [20 * sizeMultiplier, 40 * sizeMultiplier, 20 * sizeMultiplier],
//   )

//   const heightTransformIcon = useTransform(
//     distance,
//     [-150, 0, 150],
//     [20 * sizeMultiplier, 40 * sizeMultiplier, 20 * sizeMultiplier],
//   )

//   const width = useSpring(widthTransform, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   })

//   const height = useSpring(heightTransform, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   })

//   const widthIcon = useSpring(widthTransformIcon, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   })

//   const heightIcon = useSpring(heightTransformIcon, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   })

//   const [hovered, setHovered] = useState(false)

//   // Check if the icon is an Image component
//   const isImageIcon = icon && icon.type === Image

//   return (
//     <Link href={href}>
//       <motion.div
//         ref={ref}
//         style={{ width, height }}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         className={cn(
//           "aspect-square rounded-full bg-cyan-300 border border-cyan-700 dark:bg-neutral-800 flex items-center justify-center relative overflow-hidden",
//           isSpecial && "border-2 border-primary",
//         )}
//       >
//         <AnimatePresence>
//           {hovered && (
//             <motion.div
//               initial={{ opacity: 0, y: 10, x: "-50%" }}
//               animate={{ opacity: 1, y: 0, x: "-50%" }}
//               exit={{ opacity: 0, y: 2, x: "-50%" }}
//               className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
//             >
//               {title}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {isImageIcon && isSpecial ? (
//           // For the special Image icon, make it fill the container
//           <div className="absolute inset-0 w-full h-full ml-[-8px]">
//             {React.cloneElement(icon, {
//               fill: true,
//               className: "object-cover",
//               sizes: "100%",
//               priority: true,
//             })}
//           </div>
//         ) : (
//           // For regular icons
//           <motion.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
//             {icon}
//           </motion.div>
//         )}
//       </motion.div>
//     </Link>
//   )
// }



"use client"
import { cn } from "../../lib/utils"
//import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import Link from "next/link"
import { useRef, useState, useEffect } from "react"

export const FloatingDock = ({ items, className }) => {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate when to switch to sticky mode (when scroll position is greater than 50vh)
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      const threshold = viewportHeight * 0.5 // 50vh

      setIsSticky(scrollPosition >= threshold)
    }

    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn(
        "mb-[10px] left-1/2 -translate-x-1/2 z-50 flex h-16 gap-4 items-center rounded-2xl bg-transparent dark:bg-neutral-900 px-4 py-3 shadow-lg transition-all duration-300",
        isSticky ? "fixed top-[10px]" : "fixed top-[60vh] -translate-y-1/2",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          title={item.title}
          icon={item.icon}
          href={item.href}
          className={item.className}
          sizeMultiplier={item.sizeMultiplier || 1}
        />
      ))}
    </motion.div>
  )
}

function IconContainer({ mouseX, title, icon, href, className, sizeMultiplier = 1 }) {
  const ref = useRef(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(
    distance,
    [-150, 0, 150],
    [40 * sizeMultiplier, 80 * sizeMultiplier, 40 * sizeMultiplier],
  )

  const heightTransform = useTransform(
    distance,
    [-150, 0, 150],
    [40 * sizeMultiplier, 80 * sizeMultiplier, 40 * sizeMultiplier],
  )

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20 * sizeMultiplier, 40 * sizeMultiplier, 20 * sizeMultiplier],
  )

  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20 * sizeMultiplier, 40 * sizeMultiplier, 20 * sizeMultiplier],
  )

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const [hovered, setHovered] = useState(false)

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "aspect-square rounded-full bg-cyan-300 border border-cyan-700 dark:bg-neutral-800 flex items-center justify-center relative overflow-hidden",
          className,
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  )
}

