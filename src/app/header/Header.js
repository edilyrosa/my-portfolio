// 'use client';
// import { useState, useEffect, useCallback } from 'react';
// import uno from '../../../assets/uno.png';
// import dos from '../../../assets/dos.png';
// import tres from '../../../assets/tres.png';
// import cuatro from '../../../assets/cuatro.png';
// import cinco from '../../../assets/cinco.png';
// import seis from '../../../assets/seis.png';
// import siete from '../../../assets/siete.png';
// import ocho from '../../../assets/ocho.png';
// import nueve from '../../../assets/nueve.png';
// import diez from '../../../assets/diez.png';
// import Image from 'next/image';

// const images = [
//   // { url: uno, alt: 'Nature' },
//   // { url: dos, alt: 'Architecture' },
//   { url: tres, alt: 'Technology' },
//   { url: cuatro, alt: 'Animals' },
//   { url: cinco, alt: 'Animals' },
//   { url: seis, alt: 'Animals' },
//   { url: siete, alt: 'Animals' },
//   { url: ocho, alt: 'Animals' },
//   { url: nueve, alt: 'Animals' },
//   { url: diez, alt: 'Animals' },
// ];

// export default function ScrollImageSlider() {
//   const [index, setIndex] = useState(0);
//   const [scrollEnabled, setScrollEnabled] = useState(false);

//   const handleScroll = useCallback((event) => {
//     event.preventDefault();
//     const delta = event.deltaY;

//     if (delta > 0) {
//       if (index < images.length - 1) {
//         setIndex((prev) => prev + 1);
//       } else {
//         setScrollEnabled(true);
//       }
//     } else if (delta < 0) {
//       if (index > 0) {
//         setIndex((prev) => prev - 1);
//         setScrollEnabled(false);
//       }
//     }
//   }, [index]);

//   useEffect(() => {
//     const handleWheel = (event) => handleScroll(event);
//     window.addEventListener('wheel', handleWheel, { passive: false });
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, [handleScroll]);

//   return (
//     <>
  
//     <div className="w-screen h-screen flex justify-center items-center overflow-hidden bg-gray-900">
      // <Image
      //   src={images[index].url}
      //   alt={images[index].alt}
      //   className={`w-full h-auto max-h-screen object-contain shadow-2xl transition-opacity duration-500 ${
      //     images[index].url === tres ? 'drop-shadow-[0_0_40px_rgba(255,149,0,0.5)]' :
      //     images[index].url === cuatro ? 'drop-shadow-[0_0_50px_rgba(255,110,0,0.5)]' :
          
      //     images[index].url === cinco ? 'drop-shadow-[0_0_60px_rgba(255,80,0,0.5)]' :
      //     images[index].url === seis ? 'drop-shadow-[0_0_70px_rgba(255,70,0,0.6)]' :
      //     images[index].url === siete ? 'drop-shadow-[0_0_80px_rgba(255,30,0,0.7)]' :
      //     images[index].url === ocho ? 'drop-shadow-[0_0_90px_rgba(255,0,0,0.8)]' :
      //     images[index].url === nueve ? 'drop-shadow-[0_0_100px_rgba(0,100,100,0.8)]' :
      //     images[index].url === diez ? 'drop-shadow-[0_0_110px_rgba(0,200,200,1)]' : ''
      //   }`}
      //   priority
      // />
//     </div>
//     </>
//   );
// }


//!otro
// 'use client';
// import { useState, useEffect, useCallback } from 'react';
// import Image from 'next/image';
// import tres from '../../../assets/tres.png';
// import cuatro from '../../../assets/cuatro.png';
// import cinco from '../../../assets/cinco.png';
// import seis from '../../../assets/seis.png';
// import siete from '../../../assets/siete.png';
// import ocho from '../../../assets/ocho.png';
// import nueve from '../../../assets/nueve.png';
// import diez from '../../../assets/diez.png';

// const images = [
//   { url: tres, alt: 'Technology' },
//   { url: cuatro, alt: 'Animals' },
//   { url: cinco, alt: 'Animals' },
//   { url: seis, alt: 'Animals' },
//   { url: siete, alt: 'Animals' },
//   { url: ocho, alt: 'Animals' },
//   { url: nueve, alt: 'Animals' },
//   { url: diez, alt: 'Animals' },
// ];

// export default function ScrollImageSlider() {
//   const [index, setIndex] = useState(0);
//   const [scrollEnabled, setScrollEnabled] = useState(false);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleScroll = useCallback(
//     (event) => {
//       const delta = event.deltaY;

//       if (delta > 0 && index < images.length - 1) {
//         setIndex((prev) => prev + 1);
//         event.preventDefault();
//       } else if (delta < 0 && index > 0) {
//         setIndex((prev) => prev - 1);
//         event.preventDefault();
//       } else if (index === images.length - 1 && delta > 0) {
//         setScrollEnabled(true);
//       }
//     },
//     [index],
//   );

//   useEffect(() => {
//     window.addEventListener('wheel', handleScroll, { passive: false });
//     return () => window.removeEventListener('wheel', handleScroll);
//   }, [handleScroll]);

//   // if (!isClient) {
//   //   return (
//   //     <div className="w-screen h-screen flex justify-center items-center overflow-hidden bg-gray-900">
//   //       <div className="w-full h-auto max-h-screen object-contain shadow-2xl" />
//   //     </div>
//   //   );
//   // }

//   return (
//     <div className="w-full h-full mx-auto flex justify-end items-end overflow-hidden">
      // <Image
      //   src={images[index].url}
      //   alt={images[index].alt}
      //   className={`w-[80%] h-auto max-h-screen object-contain shadow-2xl transition-opacity duration-500 ${
      //     images[index].url === tres ? 'drop-shadow-[0_0_40px_rgba(255,149,0,0.5)]' :
      //     images[index].url === cuatro ? 'drop-shadow-[0_0_50px_rgba(255,110,0,0.5)]' :
          
      //     images[index].url === cinco ? 'drop-shadow-[0_0_60px_rgba(255,80,0,0.5)]' :
      //     images[index].url === seis ? 'drop-shadow-[0_0_70px_rgba(255,70,0,0.6)]' :
      //     images[index].url === siete ? 'drop-shadow-[0_0_80px_rgba(255,30,0,0.7)]' :
      //     images[index].url === ocho ? 'drop-shadow-[0_0_90px_rgba(255,0,0,0.8)]' :
      //     images[index].url === nueve ? 'drop-shadow-[0_0_100px_rgba(0,100,100,0.8)]' :
      //     images[index].url === diez ? 'drop-shadow-[0_0_110px_rgba(0,200,200,1)]' : ''
      //   }`}
      //   priority
      // />
//     </div>
//   );
// }



//ultimo
// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import tres from '../../../assets/tres.png';
// import cuatro from '../../../assets/cuatro.png';
// import cinco from '../../../assets/cinco.png';
// import seis from '../../../assets/seis.png';
// import siete from '../../../assets/siete.png';
// import ocho from '../../../assets/ocho.png';
// import nueve from '../../../assets/nueve.png';
// import diez from '../../../assets/diez.png';

// const images = [
//   { url: tres, alt: 'Technology' },
//   { url: cuatro, alt: 'Animals' },
//   { url: cinco, alt: 'Animals' },
//   { url: seis, alt: 'Animals' },
//   { url: siete, alt: 'Animals' },
//   { url: ocho, alt: 'Animals' },
//   // { url: nueve, alt: 'Animals' },
//   { url: diez, alt: 'Animals' },
// ];

// export default function ScrollImageSlider() {
//   const [index, setIndex] = useState(0);
//   const [isClient, setIsClient] = useState(false);
//   const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//     setTimeout(() => setShowText(true), 1000);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 400);

//     return () => clearInterval(interval);
//   }, []);

//   // if (!isClient) {
//   //   return (
//   //     <div className="w-full h-full flex justify-center items-center overflow-hidden bg-gray-900">
//   //       <div className="w-full h-auto max-h-screen object-contain shadow-2xl" />
//   //     </div>
//   //   );
//   // }

//   return (
//     <div className="relative w-full h-full mx-auto flex justify-end items-end overflow-hidden">
 
//       {showText && (
//         <div className="absolute top-10 left-10 text-white text-5xl font-bold opacity-0 animate-fade-in">
//           <h1>Bienvenido al Carrusel</h1>
//           <p className="text-2xl mt-2">Explora las imágenes en bucle</p>
//         </div>
//       )}
//      <Image
//         src={images[index].url}
//         alt={images[index].alt}
//         className={`w-[80%] h-auto max-h-screen object-contain shadow-2xl transition-opacity duration-500 ${
//           images[index].url === tres ? 'drop-shadow-[0_0_40px_rgba(255,149,0,0.5)]' :
//           images[index].url === cuatro ? 'drop-shadow-[0_0_50px_rgba(255,110,0,0.5)]' :
          
//           images[index].url === cinco ? 'drop-shadow-[0_0_60px_rgba(255,80,0,0.5)]' :
//           images[index].url === seis ? 'drop-shadow-[0_0_70px_rgba(255,70,0,0.6)]' :
//           images[index].url === siete ? 'drop-shadow-[0_0_80px_rgba(255,30,0,0.7)]' :
//           images[index].url === ocho ? 'drop-shadow-[0_0_90px_rgba(255,0,0,0.8)]' :
//           // images[index].url === nueve ? 'drop-shadow-[0_0_100px_rgba(0,100,100,0.8)]' :
//           images[index].url === diez ? 'drop-shadow-[0_0_110px_rgba(0,200,200,1)]' : ''
//         }`}
//         priority
//       />
//     </div>
//   );
// }










// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
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
//   const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     // Muestro el texto con un pequeño retraso
//     const timer = setTimeout(() => setShowText(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 400);
//     return () => clearInterval(interval);
//   }, []);

//   // De acuerdo a la imagen actual, se asigna un drop shadow particular.
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
   
//     <div className=" bg-[linear-gradient(360deg,rgba(255,255,255,0)_10%,rgba(42,226,255,1)_81%)] flex w-full h-[100vh] lg:pt-[10%] overflow-hidden perspective-1000">
//       {/* Texto superpuesto era --> relative  */}
//       <div
//         className={`
//           lg:w-full absolute top-20 left-10 text-white font-bold transition-all duration-500 transform origin-top
//           ${showText ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
//         `}
//         style={{ transitionDelay: '500ms' }}
//       >
//   <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  pt-[-50%] md:pt-[-5%] xl:text-5xl mt-4 transition-all duration-100">
//     WEB DEVELOPER FULL STACK
//   </h1>
//   <p className="text-[rgb(0,0,0)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4 ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10 transition-all duration-500">
//     UX/UI DESIGN
//   </p>
//   <p className="text-[rgb(0,255,255,1)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 transition-all duration-500">
//     CYBERSECURITY
//   </p>
//   <h2 className="text-[rgb(255,255,255)] text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4 ml-8 sm:ml-12 md:ml-16 lg:ml-22 xl:ml-26 transition-all duration-500">
//     SOFTWARE ENGINEER
//   </h2>
//   <div className="flex flex-col items-start justify-start">
//     <p className=" text-[rgb(255,0,255,0.8)] text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] xl:text-[6rem]">+4</p>
//     <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">YEARS OF EXPERIENCE</p>
//   </div>
//       </div>


//       {/* Contenedor fijo para la imagen */}
//       <div className="h-full overflow-hidden">
//         <Image
//           src={images[index].url || "/placeholder.svg"}
//           alt={images[index].alt}
//           fill
//           objectFit="contain"
//           className={`w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-auto ml-[15%] mt-[-25%] md:mt-[-13%] lg:mt-[0%] ransition-opacity duration-400 ${dropShadowClass}`}
//           priority
//         />
//       </div>
//     </div>
//      </>
//   );
// }









// 'use client';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faNode, faReact, faJs } from '@fortawesome/free-brands-svg-icons';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
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

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       [
//         "WEB DEVELOPER FULL STACK", 
//         "UX/UI DESIGN", 
//         "CYBERSECURITY", 
//         "SOFTWARE ENGINEER", 
//         "+4 YEARS OF EXPERIENCE"
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

//   return (
//     <>
//       <div className="bg-[linear-gradient(360deg,rgba(255,255,255,0)_10%,rgba(42,226,255,1)_81%)] flex w-full h-[100vh] lg:pt-[10%] overflow-hidden perspective-1000">
//         <div className="lg:w-full absolute top-20 left-10 text-white font-bold transition-all duration-500 transform origin-top">
//           {[
//             { text: "WEB DEVELOPER FULL STACK", className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-white" },
//             { text: "UX/UI DESIGN", className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[rgb(0,0,0)]" },
//             { text: "CYBERSECURITY", className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[rgb(0,255,255,1)]" },
//             { text: "SOFTWARE ENGINEER", className: "text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl text-[rgb(255,255,255)]" },
//             { text: "+4 YEARS OF EXPERIENCE", className: "text-xl sm:text-2xl md:text-3xl text-[rgb(255,0,255,0.8)]" }
//           ].map((item, idx) => (
//             <p 
//               key={idx} 
//               className={`${item.className} mt-4 transition-all duration-700 ease-in-out opacity-0 translate-y-[-50%] ${visibleItems.includes(idx) ? 'opacity-100 translate-y-0' : ''}`}
//               style={{ transitionDelay: `${idx * 100}ms` }}
              
//             >
//               {item.text}
//             </p>
//           ))}


//           <ul className="py-4 mt-2 text-gray-700 flex items-start justify-start gap-[5%] text-xs ">
//             <li className="flex flex-col items-center justify-around">
//               <FontAwesomeIcon icon={faJs} className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl lg:text-6xl" />
//               <div>JavaScript</div>
//             </li>
//             <li className="flex flex-col items-center justify-around">
//               <FontAwesomeIcon icon={faNode} className="text-green-600 text-2xl sm:text-3xl md:text-4xl lg:text-6xl" />
//               <div>Node.js</div>
//             </li>
//             <li className="flex flex-col items-center justify-around">
//               <FontAwesomeIcon icon={faReact} className="text-blue-400 text-2xl sm:text-3xl md:text-4xl lg:text-6xl" />
//               <div>React.js</div>
//             </li>
//           </ul>



//         </div>


        
//         <div className="h-full overflow-hidden">
//           <Image
//             src={images[index].url || "/placeholder.svg"}
//             alt={images[index].alt}
//             fill
//             objectFit="contain"
//             className={`w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-auto ml-[15%] mt-[-25%] md:mt-[-13%] lg:mt-[0%] transition-opacity duration-400 drop-shadow-[0_0_210px_rgba(255,0,255,1)]`}
//             priority
//           />
//         </div>
//       </div>
//     </>
//   );
// }










'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faReact, faJs } from '@fortawesome/free-brands-svg-icons';
import tres from '../../../public/assets/tres.png';
import cuatro from '../../../public/assets/cuatro.png';
import cinco from '../../../public/assets/cinco.png';
import seis from '../../../public/assets/seis.png';
import siete from '../../../public/assets/siete.png';
import ocho from '../../../public/assets/ocho.png';
import diez from '../../../public/assets/diez.png';

const images = [
  { url: tres, alt: 'Technology' },
  { url: cuatro, alt: 'Animals' },
  { url: cinco, alt: 'Animals' },
  { url: seis, alt: 'Animals' },
  { url: siete, alt: 'Animals' },
  { url: ocho, alt: 'Animals' },
  { url: diez, alt: 'Animals' },
];

export default function ScrollImageSlider() {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const [visibleIcons, setVisibleIcons] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      [
        "WEB DEVELOPER FULL STACK", 
        "UX/UI DESIGN", 
        "CYBERSECURITY", 
        "SOFTWARE ENGINEER", 
        "+4",
        "YEARS OF EXPERIENCE"
      ].forEach((_, idx) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, idx]);
        }, idx * 100);
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      [0, 1, 2].forEach((idx) => {
        setTimeout(() => {
          setVisibleIcons((prev) => [...prev, idx]);
        }, idx * 100);
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  

  let dropShadowClass = '';
  if (images[index].url === tres) {
    dropShadowClass = 'drop-shadow-[0_0_40px_rgba(0,0,255,0.5)]';
  } else if (images[index].url === cuatro) {
    dropShadowClass = 'drop-shadow-[0_0_50px_rgba(255,120,255,0.5)]';
  } else if (images[index].url === cinco) {
    dropShadowClass = 'drop-shadow-[0_0_60px_rgba(255,0,255,0.5)]';
  } else if (images[index].url === seis) {
    dropShadowClass = 'drop-shadow-[0_0_70px_rgba(255,0,255,0.6)]';
  } else if (images[index].url === siete) {
    dropShadowClass = 'drop-shadow-[0_0_80px_rgba(255,0,255,0.7)]';
  } else if (images[index].url === ocho) {
    dropShadowClass = 'drop-shadow-[0_0_90px_rgba(255,0,255,0.8)]';
  } else if (images[index].url === diez) {
    dropShadowClass = 'drop-shadow-[0_0_210px_rgba(255,0,255,1)]';
  }

  return (
    <div className='h-screen'>
      <div className="bg-[linear-gradient(360deg,rgba(255,255,255,0)_10%,rgba(42,226,255,1)_81%)] 
      flex w-full overflow-hidden perspective-1000
     h-[50vh] xs:h-[70vh] ocho:h-screen 
     overflow-y-scroll snap-y snap-mandatory 
      scroll-smooth hide-scrollbar
      "
      >

        <div className="absolute top-10 lg:top-20 left-[5%] text-white font-bold transition-all duration-700 ease-in-out transform origin-top">
          {[
            { text: "WEB DEVELOPER FULL STACK", className: "xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-white" },
            { text: "UX/UI DESIGN", className:" text-sm s:text-base xs:text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  mt-5 lg:mt-10 text-[rgb(0,0,0)]" },
            { text: "CYBERSECURITY", className: "text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[rgb(0,255,255,1)]" },
            { text: "SOFTWARE ENGINEER", className: "text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl text-[rgb(255,255,255)]" },
            { text: "+4", className: "ml-14 text-3xl md:ml-8 md:mt-[2.5vh] sm:text-4xl md:text-6xl sm:mt-8 mt-[10%] text-[rgb(255,0,255,0.8)]" },
            { text: "YEARS OF EXPERIENCE", className: "text-xs md:text-sm mt-[-1vh] sm:mb-[-5vh] sm:mt-[-1vh] lg:mt-[-1%] pb-4 text-[rgb(255,0,255,0.8)]" }
          ].map((item, idx) => (
            <p
              key={idx}
              className={`${item.className} mt-[5px] lg:mt-[3%] transition-all duration-700 ease-in-out opacity-0 translate-y-[-50%] ${visibleItems.includes(idx) ? 'opacity-100 translate-y-0' : ''}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.text}
            </p>
          ))}
         
          <ul className="px-2 flex sm:items-start sm:justify-start
             mt-[-1%] s:mt-[-5%] xs:mt-[8%] sm:mt-[0%] md:mt-[-1%] lg:mt-[-3%]
             py-4 gap-[10%] sm:gap-[3%] justify-around w-screen
         ">
            {[faJs, faNode, faReact].map((icon, idx) => (
              <li
                key={idx}
                className={`flex flex-col items-center justify-around gap-2
                  mt-[5%] sm:mt-[10px] md:mt-[2%] 
                  transition-all duration-700 ease-in-out opacity-0 translate-x-[-50%] hover:scale-110 
                  hover:translate-y-[5px] ${visibleIcons.includes(idx) ? 'opacity-100 translate-x-0' : ''}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className={`${idx === 0 ? 'text-yellow-500' : idx === 1 ? 'text-green-600' : 'text-blue-400'} 
                  text-xl s:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl`}
                />
                <div className="text-white px-2
                text-xs s:text-base xs:text-xl sm:text-xs md:text-sm lg:text-base">
                  {idx === 0 ? 'JavaScript' : idx === 1 ? 'Node.js' : 'React.js'}
                </div>
              </li>
            ))}
          </ul>

          
       
        </div>


        <div className=" overflow-hidden">
          <Image
            src={images[index].url || "/placeholder.svg"}
            alt={images[index].alt}
            fill
            objectFit="contain"
            // className={`w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-auto max-h-full ml-[15%] mt-[-30%] md:mt-[-15%] lg:mt-[0%] transition-opacity duration-400 ${dropShadowClass}`}
            className={`max-w-full ml-[15%] 
               mt-[-60%] s:mt-[-50%] xs:mt-[-30%] sm:mt-[-25%] md:mt-[-15%] lg:mt-[0%] 
               transition-opacity duration-400 ${dropShadowClass}`}
            priority
          />
        </div>
   
      </div>
    </div>
  );
}



