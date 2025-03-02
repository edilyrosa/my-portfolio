import { HoverEffect } from "./card-hover-effect";
import pro1 from "../../../public/assets/pro1.jpg";
import pro2 from "../../../public/assets/pro2.png";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects.map(project => ({
      ...project,
      img: typeof project.img === 'string' ? project.img : project.img.src
      }))} />
    </div>
  );
}
export const projects = [
  {
    img:pro1.src,
    title: "SEO, Web Development, Next.js, React.js",
    description:"Learning platform of JS and CSS optimized for SEO...",
    link: "https://learning-js-ten.vercel.app/",
  },
  {
    img:pro2.src,
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    img:pro2.src,
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    img:pro2.src,
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    img:pro2,
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    img:pro2,
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
