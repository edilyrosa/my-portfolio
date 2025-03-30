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
    title:"Next.js, SQL, API, Data Analytics & Visualization.",
    description: "Required knowledge in: State Management, Form Handling & Validation, Security & Data Sanitization, Modular & Scalable Code, Database & Backend Development, Security Best Practices, and Secure Query Handling (Parameterized Queries).",
    link: "https://management-task-psi.vercel.app/",
  },
  {
    img:"/app-1.mp4",
    title: ": SEO, Web Development, Next.js, React.js",
    description:
      "Built a management platform with secure RESTful APIs and a PostgreSQL database...",
    link: "https://learnseo.vercel.app/",
  },
  {
    img:"/app-3.mp4",
    title:"Magasine",
    description:
      "Designed and developed a blog focused on entertainment, implementing Google AdSense...",
    link: "https://revista-app.vercel.app/",
  },
  {
    img:"/app-4.mp4",
    title: ": Back-end & Front-end, Next.js, Prisma ORM",
    description:
      "Built a management platform with secure RESTful APIs and a PostgreSQL database...",
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
