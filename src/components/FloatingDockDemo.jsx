// import { FloatingDock } from "../components/ui/floating-dock"
// import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react"
// import Image from "next/image"

// export default function FloatingDockDemo() {
//   const links = [
//     {
//       title: "Home",
//       icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "#",
//     },
//     {
//       title: "Products",
//       icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "#",
//     },
//     {
//       title: "Components",
//       icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "#",
//     },
//     {
//       title: "Aceternity UI",
//       icon: <Image src="/assets/diez.png" alt="Aceternity Logo"/>,
//       href: "#",
//     },
//     {
//       title: "Changelog",
//       icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "#",
//     },
//     {
//       title: "Twitter",
//       icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "#",
//     },
//     {
//       title: "GitHub",
//       icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "#",
//     },
//   ]

//   return (
//     <div className="relative w-full">
//       <FloatingDock items={links} />

      
//     </div>
//   )
// }




import { FloatingDock } from "../components/ui/floating-dock"
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react"
import Image from "next/image"

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <div className="relative w-full h-full ml-[-8px]">
          <Image src="/assets/diez.png" alt="Aceternity Logo" fill className="object-cover" sizes="100%" priority />
        </div>
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
  ]

  return (
    <div className="relative w-full">
      <FloatingDock items={links} />
    </div>
  )
}

