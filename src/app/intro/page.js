import img from "../../../public/portfolio.jpg";
import Image from "next/image";
import './img.css'

export default function ProfessionalBackground() {
    return (
      <>
      <h1 className="font-extrabold flex items-center justify-center text-[2rem] p-4 m-4">WEB DEVELOPER FULLSTACK!</h1>
  
      <p className="text-xl font-bold flex items-center justify-center text-justify p-4 m-4">
        Soluciones digitales innovadoras, combinando tecnología, diseño inteligencia artifical y seguridad, a traves de interfaces atractivas con Diseño UX/UI para ofrecer experiencias excepcionales.
      </p>
      
      <p className="text-xl font-bold flex items-center justify-center text-justify p-4 m-4">
            Conocimiento en Ciberseguridad y Legislación Digital que aseguran el cumpliendo del marco normativo aplicable en cada proyecto, con sistema de log para el volcado de las actividad importantes.      
      </p>

        <Image
                src={img}
                alt="Profilesss"
                className="w-32 h-32 rounded-full mx-auto mi-imagen"
               
                />






<h1 className="font-extrabold flex items-center justify-center text-[2rem] p-4 m-4">WEB DEVELOPER FULLSTACK!</h1>
  
  <p className="text-xl font-bold flex items-center justify-center text-justify p-4 m-4">
    Soluciones digitales innovadoras, combinando tecnología, diseño inteligencia artifical y seguridad, a traves de interfaces atractivas con Diseño UX/UI para ofrecer experiencias excepcionales.
  </p>
  
  <p className="text-xl font-bold flex items-center justify-center text-justify p-4 m-4">
        Conocimiento en Ciberseguridad y Legislación Digital que aseguran el cumpliendo del marco normativo aplicable en cada proyecto, con sistema de log para el volcado de las actividad importantes.      
  </p>

    <Image
            src={img}
            alt="Profilesss"
            className="w-32 h-32 rounded-full mx-auto mi-imagen"
           
            />
      </>
    )

  }