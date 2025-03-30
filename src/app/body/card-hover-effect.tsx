import { cn } from "./utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
//import video2 from "../../../public/app-2.mp4"
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

  const handleTouchStart = (idx: number) => {
    setHoveredIndex(idx);
  };

  const handleTouchEnd = () => {
    setHoveredIndex(null);
  };

  //!, la siguiente <div, para que sea a 3 col: grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 py-2

  return (
    <div
      className={cn(
        `grid grid-cols-1 md:grid-cols-2 py-2
        `,
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          target="_blank"
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onTouchStart={() => handleTouchStart(idx)}
          onTouchEnd={handleTouchEnd}
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
            <div className="w-[100%] h-[100%] flex flex-row md:flex-col">
              <div className="relative h-[70%] w-[100%] lg:w-[85%] mx-auto">
                <div className="justify-center p-2 rounded-3xl">
                  {/* <Image
                    src={item.img}
                    alt={'mm'}
                    width={800}
                    height={800}
                    className="bg-black
                    p-4 border-0.75 rounded-xl 
                    shadow-[0px_4px_10px_rgba(255,255,255,0.3)] 
                    hover:shadow-[0px_4px_10px_rgba(255,255,255,0.9)]
                    hover:saturate-200 hover:contrast-120
                    active:shadow-[0px_4px_10px_rgba(255,255,255,0.9)]
                    active:saturate-200 active:contrast-120
                    h-[28vh] w-full
                    
                    object-fill
                    "
                    /> */}

              {/* <video loop autoPlay muted>
                <source src="/app-2.mp4"  type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video> */}

<video
        loop
        autoPlay
        muted
        className="
          bg-black
          p-4 border-[0.75px] rounded-xl 
          shadow-[0px_4px_10px_rgba(255,255,255,0.3)] 
          hover:shadow-[0px_4px_10px_rgba(255,255,255,0.9)]
          hover:saturate-200 hover:contrast-120
          active:shadow-[0px_4px_10px_rgba(255,255,255,0.9)]
          active:saturate-200 active:contrast-120
          h-[28vh] w-full
          object-fill
        "
      >
        <source src={item.img} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>


                </div>
              </div>
              <div className="h-[30%] w-[100%] flex flex-col justify-center px-2">
                <CardTitle>
                  <h3 className="leading-tight px-2 text-base md:text-[12px] xl:font-xs font-semibold text-[rgb(255,255,255)]"> 
                    Skills: <span className="text-[rgb(0,255,255)]">{item.title}</span>
                  </h3>

                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
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
        `rounded-2xl h-full w-full overflow-hidden border border-gray-800 dark:border-white/[0.2]
         group-hover:border-slate-700 group-active:border-slate-700 relative z-20
         bg-cover bg-center
         bg-[#1c1b1b]
         `,
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
        "py-1 px-2 text-zinc-400 text-sm text-justify md:text-[10px] xl:text-xs",
        className
      )}
    >
      {children}
    </p>
  );
};
