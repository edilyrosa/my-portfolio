import React from "react";

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
      <section className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar">
        {/* Sección Intro */}
        <section id="intro" className="h-screen snap-start flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Bienvenida</h1>
            <p>
              Hola, soy Edily Mora, una desarrolladora Full Stack apasionada por la tecnología y la innovación.
              Bienvenida a mi portafolio, donde podrás conocer mis proyectos y mi experiencia profesional.
            </p>
          </div>
        </section>
        {/* Sección Experiencia Profesional */}
        <section id="professional-background" className="h-screen snap-start flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Experiencia Profesional</h2>
            <p>
              He trabajado en diversas empresas desarrollando aplicaciones web complejas con tecnologías como React,
              Node.js, entre otras. Mi experiencia me permite adaptarme rápidamente a nuevos retos y entornos de trabajo.
            </p>
          </div>
        </section>
        {/* Sección Educación */}
        <section id="educational-background" className="h-screen snap-start flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Formación Académica</h2>
            <p>
              Completé mi formación en Ingeniería de Sistemas y he realizado cursos especializados en desarrollo web,
              diseño de interfaces y metodologías ágiles. La educación continua es parte fundamental de mi carrera.
            </p>
          </div>
        </section>
        {/* Sección Proyectos */}
        <section id="projects" className="h-screen snap-start flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
            <p>
              A lo largo de mi carrera, he participado en proyectos que demuestran mi capacidad para crear soluciones
              digitales innovadoras, desde plataformas de e-commerce hasta aplicaciones móviles y sistemas de gestión.
            </p>
          </div>
        </section>
        {/* Sección Contacto */}
        <section id="contact" className="h-screen snap-start flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <p>
              Si deseas ponerte en contacto para colaboraciones o proyectos, envíame un correo a:
              <a href="mailto:edily@example.com" className="ml-2 underline text-blue-400">
                edily@example.com
              </a>
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
