// import { cn } from "./utils";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";
// import pro1 from "../../../public/assets/pro1.jpg";

// export const HoverEffect = ({
//   items,
//   className,
// }: {
//   items: {
//     img: string;
//     title: string;
//     description: string;
//     link: string;
//   }[];
//   className?: string;
// }) => {
//   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div
//       className={cn(
//         "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
//         className
//       )}
//     >
//       {items.map((item, idx) => (
//         <Link
//           href={item?.link}
//           key={item?.link}
//           className="relative group  block p-2 h-full w-full"
//           onMouseEnter={() => setHoveredIndex(idx)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <AnimatePresence>
//             {hoveredIndex === idx && (
//               <motion.span
//                 className="absolute inset-0 h-full w-full bg-[rgb(0,255,255)] dark:bg-slate-800/[0.8] block  rounded-3xl"
//                 layoutId="hoverBackground"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: 1,
//                   transition: { duration: 0.15 },
//                 }}
//                 exit={{
//                   opacity: 0,
//                   transition: { duration: 0.15, delay: 0.2 },
//                 }}
//               />
//             )}
//           </AnimatePresence>
//           <Card>

//             <Image src={item.img} alt={'mm'} layout="fill" className="h-[30%]" />
//             <CardTitle>{item.title}</CardTitle>
//             <CardDescription>{item.description}</CardDescription>
//           </Card>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export const Card = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         `rounded-2xl h-full w-full p-4 overflow-hidden 
//         bg-black border border-gray-800 dark:border-white/[0.2] group-hover:border-slate-700 
//         relative z-20`,
//         className
//       )}
//     >
//       <div className="relative z-50">
//         <div className="p-4 bg-red-900">{children}</div>
//       </div>
//     </div>
//   );
// };
// export const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
//       {children}
//     </h4>
//   );
// };
// export const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <p
//       className={cn(
//         "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// // export const CardImage = ({
// //   className,
// //   src,
// //   alt,
// // }: {
// //   className?: string;
// //   src: string;
// //   alt: string;
// // }) => {
// //   return (
// //     <div className={cn("relative w-full h-[30%]", className)}>
// //       <Image src={src} alt={alt} layout="fill" objectFit="cover"/>
// //     </div>
// //   );
// // };




import { cn } from "./utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import pro1 from "../../../public/assets/pro1.jpg";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    img: string;
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[rgb(0,255,255)] dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="relative h-[40%] w-full overflow-hidden">
              <Image src={item.img} alt={'mm'} width={500} height={300} className="h-full w-full object-cover p-4" />
            </div>
            <div className="h-[60%] flex flex-col justify-center p-4">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `rounded-2xl h-full w-full overflow-hidden 
        bg-black border border-gray-800 dark:border-white/[0.2] group-hover:border-slate-700 
        relative z-20`,
        className
      )}
    >
      <div className="relative z-50">
        <div>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
