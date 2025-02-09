

// 'use client';
// import RotatingText from '../RotatingText.js';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faNode, faReact, faJs } from '@fortawesome/free-brands-svg-icons';
// import tres from '../../../public/assets/tres.png';
// import cuatro from '../../../public/assets/cuatro.png';
// import cinco from '../../../public/assets/cinco.png';
// import seis from '../../../public/assets/seis.png';
// import siete from '../../../public/assets/siete.png';
// import ocho from '../../../public/assets/ocho.png';
// import diez from '../../../public/assets/diez.png';

// const images = [
//   { url: tres, alt: 'Technology' },
//   { url: cuatro, alt: 'Animals' },
//   { url: cinco, alt: 'Animals' },
//   { url: seis, alt: 'Animals' },
//   { url: siete, alt: 'Animals' },
//   { url: ocho, alt: 'Animals' },
//   { url: diez, alt: 'Animals' },
// ];

// export default function ScrollImageSlider() {
//   const [index, setIndex] = useState(0);
//   const [visibleItems, setVisibleItems] = useState([]);
//   const [visibleIcons, setVisibleIcons] = useState([]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       [ 
//         "SOFTWARE ENGINEER", 
//         "+4",
//         "YEARS OF EXPERIENCE"
//       ].forEach((_, idx) => {
//         setTimeout(() => {
//           setVisibleItems((prev) => [...prev, idx]);
//         }, idx * 100);
//       });
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 400);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       [0, 1, 2].forEach((idx) => {
//         setTimeout(() => {
//           setVisibleIcons((prev) => [...prev, idx]);
//         }, idx * 100);
//       });
//     }, 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   let dropShadowClass = '';
//   if (images[index].url === tres) {
//     dropShadowClass = 'drop-shadow-[0_0_40px_rgba(255,0,255,0.5)]';
//   } else if (images[index].url === cuatro) {
//     dropShadowClass = 'drop-shadow-[0_0_50px_rgba(255,0,255,0.5)]';
//   } else if (images[index].url === cinco) {
//     dropShadowClass = 'drop-shadow-[0_0_60px_rgba(255,0,255,0.5)]';
//   } else if (images[index].url === seis) {
//     dropShadowClass = 'drop-shadow-[0_0_70px_rgba(255,0,255,0.6)]';
//   } else if (images[index].url === siete) {
//     dropShadowClass = 'drop-shadow-[0_0_80px_rgba(255,0,255,0.7)]';
//   } else if (images[index].url === ocho) {
//     dropShadowClass = 'drop-shadow-[0_0_90px_rgba(255,0,255,0.8)]';
//   } else if (images[index].url === diez) {
//     dropShadowClass = 'drop-shadow-[0_0_210px_rgba(255,0,255,1)]';
//   }

//   return (
//     <>
//       <div className="bg-[linear-gradient(360deg,rgba(255,255,255,0)_10%,rgba(42,226,255,1)_81%)] flex w-full h-[100vh] max-h-[100vh] max-h-full overflow-hidden perspective-1000">
        
//       <div className="relative top-10 left-[5%] w-full">
//   {/* 1. Contenedor para el RotatingText */}
//   <div className="mb-4">
//     <RotatingText
//       texts={[
//         "WEB DEVELOPER",
//         "FULL STACK",
//         "UX/UI DESIGN",
//         "AI",
//         "CYBERSECURITY",
//         "SOFTWARE ENGINEER",
//       ]}
//       mainClassName="text-3xl dm:text-4xl lg:text-5xl px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-start rounded-lg"
//       staggerFrom="last"
//       initial={{ y: "100%" }}
//       animate={{ y: 0 }}
//       exit={{ y: "-120%" }}
//       staggerDuration={0.025}
//       splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
//       transition={{ type: "spring", damping: 30, stiffness: 400 }}
//       rotationInterval={2000}
//     />
//   </div>

//   {/* 2. Contenedor para el bloque de texto */}
//   <div className="mb-4 mt-4">
//     {[
//       { text: "SOFTWARE ENGINEER", className:"mt-[5vh] font-extrabold lg:mt-[10vh] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[rgb(255,255,255)]" },
//       { text: "+4", className:"text-xl sm:text-4xl md:text-6xl font-extrabold md:text-8xl mt-8 lg:mt-[10vh] text-[rgb(255,0,255,0.8)]" },
//       { text: "YEARS OF EXPERIENCE", className: "text-xs md:text-sm mt-[5vh]  lg:mt-[-2vh] sm:mt-[-2vh] lg:mt-[-1vh] text-[rgb(255,0,255,0.8)]" }
//     ].map((item, idx) => (
//       <p
//         key={idx}
//         className={`${item.className} mt-4 lg:mt-[3%] transition-all duration-700 ease-in-out opacity-0 translate-y-[-50%] ${visibleItems.includes(idx) ? 'opacity-100 translate-y-0' : ''}`}
//         style={{ transitionDelay: `${idx * 100}ms` }}
//       >
//         {item.text}
//       </p>
//     ))}
//   </div>

//   {/* 3. Contenedor para los iconos */}
//   <div>
//     <ul className="ml-[5%] py-4 mt-[5vh] flex lg:items-start lg:justify-start gap-[10px] gap-[2%] lg:gap-[10%] text-gray-700 text-xs">
//       {[faJs, faNode, faReact].map((icon, idx) => (
//         <li
//           key={idx}
//           className={`mt-[-3vh] lg:mt-[5vh] flex flex-col items-start justify-start sm:mt-[10px] transition-all duration-700 ease-in-out opacity-0 translate-x-[-50%] hover:scale-110 hover:translate-y-[5px] ${visibleIcons.includes(idx) ? 'opacity-100 translate-x-0' : ''}`}
//           style={{ transitionDelay: `${idx * 100}ms` }}
//         >
//           <FontAwesomeIcon
//             icon={icon}
//             className={`${idx === 0 ? 'text-yellow-500' : idx === 1 ? 'text-green-600' : 'text-blue-400'} text-2xl sm:text-3xl md:text-4xl lg:text-6xl`}
//           />
//           <div className="text-white text-xs md:text-sm lg:text-base">
//             {idx === 0 ? 'JavaScript' : idx === 1 ? 'Node.js' : 'React.js'}
//           </div>
//         </li>
//       ))}
//     </ul>
//   </div>
// </div>


//         <div className="h-full overflow-hidden">
//           <Image
//             src={images[index].url || "/placeholder.svg"}
//             alt={images[index].alt}
//             fill
//             objectFit="contain"
//             className={`w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-auto max-h-[100vh] max-h-full ml-[15%] mt-[-25%] md:mt-[-15%] lg:mt-[0%] transition-opacity duration-400 ${dropShadowClass}`}
//             priority
//           />
//         </div>
//       </div>
//     </>
//   );
// }
