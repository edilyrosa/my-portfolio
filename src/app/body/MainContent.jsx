import React from "react";
import  Marquee3D  from "./Marquee3D";
import GlowingEffectDemo from "./glowing-Effect-Demo";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import Formulario from '../../components/Formulario'

export default function MainContent() {
  return (
    <>

      {/* Estilos inline para ocultar la barra de scroll */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <section className="w-full h-screen overflow-y-scroll snap-y snap-mandatory 
      scroll-smooth hide-scrollbar">


        
        {/* Sección Intro */}
       <section id="intro" 
       className=" w-[98%] md:h-screen snap-start flex flex-col justify-start md:justify-center items-center">
          <div className="mx-auto px-4">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            BRINGING IDEAS TO LIFE THROUGH INTUITIVE AND 
              <span className="text-[rgb(0,255,255)]"> ENGAGING USER EXPERIENCES. 
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4">
            Specializing in crafting beautifully designed products from concept to creation.
            </p>
            
            <div className="flex flex-row justify-center items-round gap-[10%] mt-10">
                {/* Hijo 1 */}
                <div className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold">+5</div>
                  <div className="text-[10px] md:text-base text-gray-400">YEARS OF<br/>EXPERIENCE</div>
                </div>

                {/* Hijo 2 */}
                <div className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold">+33</div>
                  <div className="text-[10px] md:text-base text-gray-400">PROJECTS<br/>COMPLETED</div>
                </div>

                {/* Hijo 3 */}
                <div className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold">+5</div>
                  <div className="text-[10px] md:text-base text-gray-400">WORLDWIDE<br/>CLIENTS</div>
                </div>
            </div>

              <div className="flex flex-col justify-center items-center gap-[4%] mt-10">
                <p>My work</p> 
                 <p className="text-4xl transition transform hover:translate-y-5">⬇️</p>
              </div> 

          </div>
             
  
        </section>
        
    

        
<div className="h-screen"></div>

        {/* Sección Experiencia Profesional */}
        <section id="laboral-experience" 
        className="md:h-screen w-[98%] snap-start flex flex-col 
        justify-center items-center">
          <div className="mx-auto px-4">
          <h2 className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              font-bold text-center"> 
              LABORAL <span className="text-[rgb(0,255,255)]"> EXPERIENCE. </span>
            </h2>
            <p className="
            my-4 text-justify text-gray-300
            text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-4">
              As a freelance developer, I have successfully delivered scalable and high-performance solutions while also contributing as an instructor, sharing knowledge on web development. Additionally, my academic background includes a degree in Software Engineering and a Master’s in Law, demonstrating my versatility and analytical skills in problem-solving and project execution.
            </p>
            <GlowingEffectDemo/>
          </div>
        </section>

<div className="h-screen"></div>


        {/* Sección Educación */}
        <section id="educational-background" 
        className="md:h-screen w-[98%]  snap-start flex flex-col 
        pt-4 justify-start lg:pt-2 lg:justify-center items-center">
          <div className="mx-auto px-2">
            <h2 className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              font-bold mb-4 text-center"> 
              ACADEMY <span className="text-[rgb(0,255,255)]"> BACKGROUND. </span>
            </h2>
            <p className="
            my-4 text-justify text-gray-300
            text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-4">
            I have studied at various universities and institutes, where I have learned about the most important 
            technologies and programming languages used worldwide. I hold a <span className="text-[rgb(0,255,255)]">Degrees in Software Engineering,</span>  Law 
            and a Master&apos;s degree in Business from different universities.
            </p>
            <Marquee3D />
          </div>
        </section>
       
       
<div className="h-screen"></div>
        
        {/* Sección experience jobs */}
        <section id="projects" 
        className="md:h-screen snap-start flex flex-col justify-center items-center">
    
            <h2 
            className="
            mt-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center">
              MOST RECENT <span className="text-[rgb(0,255,255)]"> PROJECTS.</span>
            </h2>
            <div className="text-center my-1
             text-base sm:text-lg md:text-xl lg:text-2xl
            "> <i>Click on the card to visit the Website - Demos.</i></div>
            <CardHoverEffectDemo/>
       
        </section>
        
<div className="h-screen"></div>
        
        {/* Sección Contacto */}
        <section id="contact" 
        className="w-[98%] md:h-screen snap-start flex flex-col justify-start md:justify-center items-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 
              className="text-3xl font-bold mb-4 text-center">
              CONTACT <span className="text-[rgb(0,255,255)]"> ME.</span>
            </h2> 
            {/* <p>
              Si deseas ponerte en contacto para colaboraciones o proyectos, envíame un correo a:
              <a href="mailto:edily@example.com" className="ml-2 underline text-blue-400">
                edily@example.com
              </a>
            </p> */}
            <Formulario />
          </div>
        </section>

      </section>
    </>
  );
}
