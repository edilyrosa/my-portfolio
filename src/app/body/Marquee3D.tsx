// import { cn } from "./utils";
// import { Marquee } from "./marquee";

// const reviews = [
//   {
//     name: "Zulia's University (LUZ)",
//     username: "Degree in Law",
//     body: "2004 – 2009",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy47s2mPmG4U5CbFp8RVuWFsLUMntOb1-DQw&s",
//   },
//   {
//     name: "Zulia's University (LUZ)",
//     username: "Magister Scientiarum",
//     body: "2009 – 2016",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlvVWebM4ms1BIGKC5fvN8ak5HL33yBT7zg&s",
//   },
//   {
//     name: "Rafael Belloso Chacín University (URBE)",
//     username: "Software Engineering Degree",
//     body: "2020 - 2025",
//     img: "https://pbs.twimg.com/profile_images/1612468312817934337/Kc6WTR1i_400x400.jpg",
//   },
//   {
//     name: "Coursera Project Network",
//     username: "Search Engine Optimization (SEO)",
//     body: "2024",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYccWyy9jqwGNqmV0VPvsExV2mFX9bevg0w&s",
//   },
// ]

// const firstRow = reviews
// const secondRow = [...reviews].reverse()
// const thirdRow = reviews
// const fourthRow = [...reviews].reverse()

// const ReviewCard = ({
//   img,
//   name,
//   username,
//   body,
// }: {
//   img: string
//   name: string
//   username: string
//   body: string
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative h-40 w-64 shrink-0 cursor-pointer overflow-hidden rounded-xl border p-4 transition-colors",
//         // light styles
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width={"40%"} height={"40%"} alt="" src={img || "/placeholder.svg"} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   )
// }

// export default function Marquee3D() {
//   return (
//     <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden [perspective:1000px]">
//       <div
//         className="flex flex-row items-center gap-4 [transform-style:preserve-3d]"
//         style={{
//           transform: "rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
//         }}
//       >
//         <Marquee pauseOnHover vertical className="[--duration:40s] [--gap:1rem]">
//           {firstRow.map((review, index) => (
//             <ReviewCard key={`${review.username}-${index}`} {...review} />
//           ))}
//         </Marquee>
//         <Marquee reverse pauseOnHover vertical className="[--duration:35s] [--gap:1rem]">
//           {secondRow.map((review, index) => (
//             <ReviewCard key={`${review.username}-${index}`} {...review} />
//           ))}
//         </Marquee>
//         <Marquee pauseOnHover vertical className="[--duration:45s] [--gap:1rem]">
//           {thirdRow.map((review, index) => (
//             <ReviewCard key={`${review.username}-${index}`} {...review} />
//           ))}
//         </Marquee>
//         <Marquee reverse pauseOnHover vertical className="[--duration:50s] [--gap:1rem]">
//           {fourthRow.map((review, index) => (
//             <ReviewCard key={`${review.username}-${index}`} {...review} />
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   )
// }















// import { cn } from "./utils";
// import { Marquee } from "./marquee";

// const reviews = [
//   {
//     name: "Zulia's University (LUZ)",
//     username: "Degree in Law",
//     body: "2004 – 2009",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy47s2mPmG4U5CbFp8RVuWFsLUMntOb1-DQw&s",
//   },
//   {
//     name: "Zulia's University (LUZ)",
//     username: "Magister Scientiarum",
//     body: "2009 – 2016",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlvVWebM4ms1BIGKC5fvN8ak5HL33yBT7zg&s",
//   },
//   {
//     name: "Rafael Belloso Chacín University (URBE)",
//     username: "Software Engineering Degree",
//     body: "2020 - 2025",
//     img: "https://pbs.twimg.com/profile_images/1612468312817934337/Kc6WTR1i_400x400.jpg",
//   },
//   {
//     name: "Coursera Project Network",
//     username: "Search Engine Optimization (SEO)",
//     body: "2024",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYccWyy9jqwGNqmV0VPvsExV2mFX9bevg0w&s",
//   },
// ];

// const firstRow = reviews;
// const secondRow = [...reviews].reverse();
// const thirdRow = reviews;
// const fourthRow = [...reviews].reverse();

// const ReviewCard = ({
//   img,
//   name,
//   username,
//   body,
// }: {
//   img: string;
//   name: string;
//   username: string;
//   body: string;
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative h-[12vw] w-[18vw] min-h-[120px] min-w-[180px] shrink-0 cursor-pointer overflow-hidden rounded-xl border p-4 transition-colors",
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full w-[30%] h-[30%] min-w-[40px] min-h-[40px]" alt="" src={img || "/placeholder.svg"} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   );
// };

// export default function Marquee3D() {
//   return (
//     <div className="relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden [perspective:1000px]">
//       <div
//         className="flex flex-row items-center gap-4 [transform-style:preserve-3d]"
//         style={{
//           transform: "rotateX(20deg) rotateY(-10deg) rotateZ(20deg)", // 🔥 Mantiene la inclinación original
//         }}
//       >
//         <Marquee pauseOnHover vertical className="[--duration:40s] [--gap:1rem]">
//           {firstRow.map((review, index) => (
//             <ReviewCard key={`${review.username}-${index}`} {...review} />
//           ))}
//         </Marquee>
//         <Marquee reverse pauseOnHover vertical className="[--duration:35s] [--gap:1rem]">
//           {secondRow.map((review, index) => (
//             <ReviewCard key={`${review.username}-${index}`} {...review} />
//           ))}
//         </Marquee>
//         <Marquee pauseOnHover vertical className="[--duration:45s] [--gap:1rem]">
//           {thirdRow.map((review, index) => (
//             <ReviewCard key={`${review.username}-${index}`} {...review} />
//           ))}
//         </Marquee>
//         <Marquee reverse pauseOnHover vertical className="[--duration:50s] [--gap:1rem]">
//           {fourthRow.map((review, index) => (
//             <ReviewCard key={`${review.username}-${index}`} {...review} />
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// }





// import { cn } from "./utils";
// import { Marquee } from "./marquee";

// const reviews = [
//   {
//     name: "Zulia's University (LUZ)",
//     username: "Degree in Law",
//     body: "2004 – 2009",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy47s2mPmG4U5CbFp8RVuWFsLUMntOb1-DQw&s",
//   },
//   {
//     name: "Zulia's University (LUZ)",
//     username: "Magister Scientiarum",
//     body: "2009 – 2016",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlvVWebM4ms1BIGKC5fvN8ak5HL33yBT7zg&s",
//   },
//   {
//     name: "Rafael Belloso Chacín University (URBE)",
//     username: "Software Engineering Degree",
//     body: "2020 - 2025",
//     img: "https://pbs.twimg.com/profile_images/1612468312817934337/Kc6WTR1i_400x400.jpg",
//   },
//   {
//     name: "Coursera Project Network",
//     username: "Search Engine Optimization (SEO)",
//     body: "2024",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYccWyy9jqwGNqmV0VPvsExV2mFX9bevg0w&s",
//   },
// ];

// const firstRow = reviews;
// const secondRow = [...reviews].reverse();
// const thirdRow = reviews;
// const fourthRow = [...reviews].reverse();

// const ReviewCard = ({
//   img,
//   name,
//   username,
//   body,
// }: {
//   img: string;
//   name: string;
//   username: string;
//   body: string;
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative shrink-0 cursor-pointer overflow-hidden rounded-xl border p-4 transition-colors",
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//         "w-[clamp(140px, 16vw, 200px)] h-[clamp(120px, 14vw, 180px)]"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img
//           className="rounded-full"
//           style={{
//             width: "clamp(30px, 30%, 50px)",
//             height: "clamp(30px, 30%, 50px)",
//           }}
//           alt=""
//           src={img || "/placeholder.svg"}
//         />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   );
// };

// export default function Marquee3D() {
//   return (
//     <div className="relative flex w-full flex-col items-center justify-center overflow-hidden p-4">
//       {/* 🎯 Se asegura de que todo esté dentro del contenedor */}
//         <div
//           className=" w-full max-w-[90%] max-h-[50vh] flex flex-row items-center gap-4 [transform-style:preserve-3d]"
//           style={{
//             transform: "rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
//             clipPath: "polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%)",
//           }}
//         >
//           <Marquee pauseOnHover vertical className="[--duration:40s] [--gap:1rem]">
//             {firstRow.map((review, index) => (
//               <ReviewCard key={`${review.username}-${index}`} {...review} />
//             ))}
//           </Marquee>
//           <Marquee reverse pauseOnHover vertical className="[--duration:35s] [--gap:1rem]">
//             {secondRow.map((review, index) => (
//               <ReviewCard key={`${review.username}-${index}`} {...review} />
//             ))}
//           </Marquee>
//           <Marquee pauseOnHover vertical className="[--duration:45s] [--gap:1rem]">
//             {thirdRow.map((review, index) => (
//               <ReviewCard key={`${review.username}-${index}`} {...review} />
//             ))}
//           </Marquee>
//           <Marquee reverse pauseOnHover vertical className="[--duration:50s] [--gap:1rem]">
//             {fourthRow.map((review, index) => (
//               <ReviewCard key={`${review.username}-${index}`} {...review} />
//             ))}
//           </Marquee>
//         </div>
     
//     </div>
//   );
// }



import { cn } from "./utils";
import { Marquee } from "./marquee";

const reviews = [
  {
    name: "Zulia's University (LUZ)",
    username: "Degree in Law",
    body: "2004 – 2009",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy47s2mPmG4U5CbFp8RVuWFsLUMntOb1-DQw&s",
  },
  {
    name: "Zulia's University (LUZ)",
    username: "Magister Scientiarum",
    body: "2009 – 2016",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlvVWebM4ms1BIGKC5fvN8ak5HL33yBT7zg&s",
  },
  {
    name: "Rafael Belloso Chacín University (URBE)",
    username: "Software Engineering Degree",
    body: "2020 - 2025",
    img: "https://pbs.twimg.com/profile_images/1612468312817934337/Kc6WTR1i_400x400.jpg",
  },
  {
    name: "Coursera Project Network",
    username: "Search Engine Optimization (SEO)",
    body: "2024",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYccWyy9jqwGNqmV0VPvsExV2mFX9bevg0w&s",
  },
];

const firstRow = reviews;
const secondRow = [...reviews].reverse();
const thirdRow = reviews;
const fourthRow = [...reviews].reverse();

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => {
  return (
    <figure
      className={cn(
        "relative shrink-0 cursor-pointer overflow-hidden rounded-xl border p-4 transition-colors",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "w-[clamp(140px, 16vw, 200px)] h-[clamp(120px, 14vw, 180px)]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          style={{ width: "clamp(30px, 30%, 50px)", height: "clamp(30px, 30%, 50px)" }}
          alt=""
          src={img || "/placeholder.svg"}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Marquee3D() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden p-4">
      {/* lg: 4 Marquees */}
      <div className="hidden lg:flex w-full max-w-[90%] max-h-[50vh] flex-row items-center gap-4 [transform-style:preserve-3d]" style={{ transform: "rotateX(20deg) rotateY(-10deg) rotateZ(20deg)", clipPath: "polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%)" }}>
        <Marquee pauseOnHover vertical className="[--duration:40s] [--gap:1rem]">{firstRow.map((review, index) => (<ReviewCard key={`${review.username}-${index}`} {...review} />))}</Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:35s] [--gap:1rem]">{secondRow.map((review, index) => (<ReviewCard key={`${review.username}-${index}`} {...review} />))}</Marquee>
        <Marquee pauseOnHover vertical className="[--duration:45s] [--gap:1rem]">{thirdRow.map((review, index) => (<ReviewCard key={`${review.username}-${index}`} {...review} />))}</Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:50s] [--gap:1rem]">{fourthRow.map((review, index) => (<ReviewCard key={`${review.username}-${index}`} {...review} />))}</Marquee>
      </div>

      {/* md: 3 Marquees */}
      <div className="hidden md:flex lg:hidden w-full max-w-[90%] max-h-[50vh] flex-row items-center gap-4 [transform-style:preserve-3d]" style={{ transform: "rotateX(20deg) rotateY(-10deg) rotateZ(20deg)", clipPath: "polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%)" }}>
        <Marquee pauseOnHover vertical className="[--duration:40s] [--gap:1rem]">{firstRow.map((review, index) => (<ReviewCard key={`${review.username}-${index}`} {...review} />))}</Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:35s] [--gap:1rem]">{secondRow.map((review, index) => (<ReviewCard key={`${review.username}-${index}`} {...review} />))}</Marquee>
        <Marquee pauseOnHover vertical className="[--duration:45s] [--gap:1rem]">{thirdRow.map((review, index) => (<ReviewCard key={`${review.username}-${index}`} {...review} />))}</Marquee>
      </div>

      {/* sm y menores: 2 Marquees */}
      <div className="flex md:hidden w-full max-w-[90%] max-h-[50vh] flex-row items-center gap-4 [transform-style:preserve-3d]" style={{ transform: "rotateX(20deg) rotateY(-10deg) rotateZ(20deg)", clipPath: "polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%)" }}>
        <Marquee pauseOnHover vertical className="[--duration:40s] [--gap:1rem]">{firstRow.map((review, index) => (<ReviewCard key={`${review.username}-${index}`} {...review} />))}</Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:35s] [--gap:1rem]">{secondRow.map((review, index) => (<ReviewCard key={`${review.username}-${index}`} {...review} />))}</Marquee>
      </div>
    </div>
  );
}
