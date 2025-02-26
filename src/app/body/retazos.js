   
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-brands-svg-icons';
import  Marquee3D  from "./Marquee3D";
import Image from "next/image";
import pro1 from "../../../public/assets/pro1.jpg";
import freelancer from "../../../public/assets/freelancer.png";
import freelancer2 from "../../../public/assets/freela.jpg";
import GlowingEffectDemo from "./glowing-Effect-Demo";

export default function MainContent() {
  return (
    <>

<section id="laboral-experiences" 
className="h-screen mx-auto snap-start flex flex-col justify-center items-center">

<h2 
className="mt-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center">
  LABORAL <span className="text-[rgb(0,255,255)]"> EXPERIENCE. 
  </span>
</h2>

{/* Contenedor de laboral experiences */}
<div id="experiences-container" 
      className=" h-full flex flex-col lg:flex-row
            lg:flex-wrap justify-center items-center">

              
  {/* experience 1 */}
  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden flex 
  
      h-[40%] hover:h-[70%] w-[40%] mb-[-5%] hover:mb-[2%] p-2

      ">

    <div className="w-full p-2 flex flex-col justify-start text-center">
    <Image 
        src={freelancer2} alt="Transacciones y Efectos Inmersivos" 
         className="w-full h-full object-fill my-6" />
      <h3 className="mt-1 text-md font-semibold text-[rgb(0,255,255)]">Software Dev.</h3>
      <p className="pb-4 text-xs text-gray-400">
          Proyecto de comercio electrónico desarrollado con React y Node.js.
      </p>
    </div>

  </div>
  
  
  {/* experience 2 */}
  <div className="bg-gray-800 mb-[-5%] hover:mb-[2%] shadow-lg rounded-lg overflow-hidden
      flex h-[40%] hover:h-[70%]
      w-[40%] 
      ">
 
    <div className="w-full p-2 flex flex-col justify-start text-center">
      <Image src={freelancer2} alt="Transacciones y Efectos Inmersivos" 
        className="w-full h-full object-fill my-6"/>
      <h3 className="mt-1 text-md font-semibold text-[rgb(0,255,255)]">Software Dev.</h3>
      <p className="pb-8 text-xs text-gray-400">
          Proyecto de comercio electrónico desarrollado con React y Node.js.
      </p>
    </div>

  </div>

  
  {/* experience 3 */}
  <div className="bg-gray-800 mt-[-5%] hover:mt-[2%] shadow-lg rounded-lg overflow-hidden
      flex h-[40%] hover:h-[70%]
      w-[40%] 
      ">


 
    <div className="w-full p-2 flex flex-col justify-start text-center">
    <Image  src={freelancer2} alt="Transacciones y Efectos Inmersivos" 
        className="w-full h-full object-fill my-6" />
      <h3 className="mt-1 text-md font-semibold text-[rgb(0,255,255)]">Software Dev.</h3>
      <p className="pb-2 text-xs text-gray-400">
          Proyecto de comercio electrónico desarrollado con React y Node.js.
      </p>
    </div>

  </div>




  {/* experience 4 */}
  <div className="bg-gray-800 mt-[-5%] hover:mt-[2%] shadow-lg rounded-lg overflow-hidden
      flex h-[40%] hover:h-[70%]
      w-[40%] 
      ">

 
    <div className="w-full p-2 flex flex-col justify-start text-center">
    <Image  src={freelancer2} alt="Transacciones y Efectos Inmersivos" 
        className="w-full h-full object-fill my-6" />
      <h3 className="mt-1 text-md font-semibold text-[rgb(0,255,255)]">Software Dev.</h3>
      <p className="pb-2 text-xs text-gray-400">
          Proyecto de comercio electrónico desarrollado con React y Node.js.
      </p>
      
    </div>

  </div>


</div> 


</section>




<section id="projects" 
              className="h-screen snap-start flex flex-col justify-start md:justify-end items-center">
          
          <div className="mx-auto px-1">
            
            <h2 
            className="mt-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center">
              MOST RECENT <span className="text-[rgb(0,255,255)]"> PROJECTS. 
              </span>
            </h2>
  
                {/* Contenedor de Proyectos */}
            <div id="proyectos-container" 
              className="mx-auto p-1 flex flex-col lg:flex-row 
                          gap-[1vw] flex-wrap justify-center items-center w-full">
            
         
            {/* Proyecto 1 */}
            <div className="bg-gray-800 m-1 shadow-lg rounded-lg
                w-full max-w-[70vw] h-[30vh] lg:max-w-[30vw] lg:h-[35vh] 
                flex flex-col 
                transform transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
  
              {/* Imagen ocupando el 70% superior */}
              <div className="h-[60%] w-full">
                <Image 
                  src={pro1}
                  alt="Transacciones y Efectos Inmersivos" 
                  className="w-full h-full object-cover transition duration-[3000ms] hover:object-fill ease-in-out"
                  />
              </div>

              {/* Descripción ocupando el 30% inferior */}
              <div className="h-[40%] p-2 flex flex-col justify-center text-center">
                <h3 className="text-md font-semibold text-[rgb(0,255,255)]">Transacciones y Efectos Inmersivos</h3>
                <p className="text-xs text-gray-400 mt-1">
                    Proyecto de comercio electrónico desarrollado con React y Node.js.
                </p>
                <a href="https://learning-js-ten.vercel.app/" target="_blank" 
                  className="text-[rgb(0,255,255)] hover:underline mt-1 block text-xs">
                  <i>https://learning-js-ten.vercel.app/</i>
                </a>
              </div>

            </div>


            {/* Proyecto 1 */}
            <div className="bg-gray-800 m-1 shadow-lg rounded-lg
                w-full max-w-[70vw] h-[30vh] lg:max-w-[30vw] lg:h-[35vh] 
                flex flex-col transform transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
  
              {/* Imagen ocupando el 70% superior */}
              <div className="h-[60%] w-full">
                <Image 
                  src={pro1}
                  alt="Transacciones y Efectos Inmersivos" 
                  className="w-full h-full object-cover transition duration-300 hover:object-fill"
                 
                  
                  />
              </div>

              {/* Descripción ocupando el 30% inferior */}
              <div className="h-[40%] p-2 flex flex-col justify-center text-center">
                <h3 className="text-md font-semibold text-[rgb(0,255,255)]">Transacciones y Efectos Inmersivos</h3>
                <p className="text-xs text-gray-400 mt-1">
                    Proyecto de comercio electrónico desarrollado con React y Node.js.
                </p>
                <a href="https://learning-js-ten.vercel.app/" target="_blank" 
                  className="text-[rgb(0,255,255)] hover:underline mt-1 block text-xs">
                  <i>https://learning-js-ten.vercel.app/</i>
                </a>
              </div>

            </div>
            {/* Proyecto 1 */}
            <div className="bg-gray-800 m-1 shadow-lg rounded-lg
                w-full max-w-[70vw] h-[30vh] lg:max-w-[30vw] lg:h-[35vh] 
                flex flex-col transform transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
  
              {/* Imagen ocupando el 70% superior */}
              <div className="h-[60%] w-full">
                <Image 
                  src={pro1}
                  alt="Transacciones y Efectos Inmersivos" 
                  className="w-full h-full object-cover transition duration-300 hover:object-fill"
                 
                  
                  />
              </div>

              {/* Descripción ocupando el 30% inferior */}
              <div className="h-[40%] p-2 flex flex-col justify-center text-center">
                <h3 className="text-md font-semibold text-[rgb(0,255,255)]">Transacciones y Efectos Inmersivos</h3>
                <p className="text-xs text-gray-400 mt-1">
                    Proyecto de comercio electrónico desarrollado con React y Node.js.
                </p>
                <a href="https://learning-js-ten.vercel.app/" target="_blank" 
                  className="text-[rgb(0,255,255)] hover:underline mt-1 block text-xs">
                  <i>https://learning-js-ten.vercel.app/</i>
                </a>
              </div>

            </div>
            {/* Proyecto 1 */}
            <div className="bg-gray-800 m-1 shadow-lg rounded-lg
                w-full max-w-[70vw] h-[30vh] lg:max-w-[30vw] lg:h-[35vh] 
                flex flex-col transform transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
  
              {/* Imagen ocupando el 70% superior */}
              <div className="h-[60%] w-full">
                <Image 
                  src={pro1}
                  alt="Transacciones y Efectos Inmersivos" 
                  className="w-full h-full object-cover transition duration-300 hover:object-fill"
                 
                  
                  />
              </div>

              {/* Descripción ocupando el 30% inferior */}
              <div className="h-[40%] p-2 flex flex-col justify-center text-center">
                <h3 className="text-md font-semibold text-[rgb(0,255,255)]">Transacciones y Efectos Inmersivos</h3>
                <p className="text-xs text-gray-400 mt-1">
                    Proyecto de comercio electrónico desarrollado con React y Node.js.
                </p>
                <a href="https://learning-js-ten.vercel.app/" target="_blank" 
                  className="text-[rgb(0,255,255)] hover:underline mt-1 block text-xs">
                  <i>https://learning-js-ten.vercel.app/</i>
                </a>
              </div>

            </div>
        

          





          

            </div>

          </div>

        </section>

</>)}
