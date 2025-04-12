import { HoverEffect } from "./card-hover-effect";


export function CardHoverEffectDemo() {
  return (
    <div className="w-full mx-auto px-2">
      <HoverEffect items={projects.map(project => ({
      ...project,
      img: typeof project.img === 'string' ? project.img : ''
      }))} />
    </div>
  );
}
export const projects = [
 
  {
    img:"/app-2.mp4",
    title:"Task Management App: Next.js, Backend | SQL | Real-Time Data | Analytics & Visualization",
    description: "Built with expertise in: State Management, Form Validation, Secure Input Handling, Scalable Architecture, and Backend Development with SQL & Parameterized Queries. Integrated React Context API + SWR to enable real-time data sync across shared components — ensuring instant updates without reloads and elevating user experience.",
    link: "https://management-task-psi.vercel.app/",
  },
  {
    img:"/app-1.mp4",
    title: "LearnSEO: Next.js | Tailwind CSS | SEO | Lighthouse | UI/UX Design",
    description:"Modern web performance (LCP 90+ via Google Lighthouse). The site features a clean, responsive layout enhanced by interactive elements and parallax scrolling effects, delivering an engaging and intuitive user experience. ",
    link: "https://learnseo.vercel.app/",
  },
  {
    img:"/app-3.mp4",
    title:"Ultimo Chisme: SEO-Optimized Digital Magazine | React.js, Material UI | Vite | A-Frame |Responsive Design | SEO Best Practices",
    description:"Built a visually immersive and SEO-friendly digital magazine application focused on performance and user experience. Designed with a clean, editorial layout, the app integrates fast-loading strategies via Vite",
    link: "https://revista-app.vercel.app/",
  },
  {
    img:"/app-4.mp4",
    title: "SysProGestion: React.js | Node.js | Express | PostgreSQL | Email Token Authentication | REST APIs | Prisma ORM",
    description:
      "Designed for the Maracaibo City Hall, I contributed to the frontend and authentication features, helping implement a secure email token login system. The app offers a modern dashboard, responsive design, and intuitive user experience, streamlining coordination between public institutions and students.",
    link: "https://sysprogestion.vercel.app/",
  },
  // {
  //   img:pro2,
  //   title: "Amazon",
  //   description:
  //     "A multinational technology company focusing on e-commerce, cloud",
  //   link: "https://amazon.com",
  // },
//   {
//     img:pro2,
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactunal computs.",
//     link: "https://microsoft.com",
//   },
 ];
