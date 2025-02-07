import Link from "next/link";
import imgEdy from "../../../public/assets/diez.png";
import img2 from "../../../public/image.png";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faReact, faJs } from '@fortawesome/free-brands-svg-icons';

export default function Aside () {
    return (
        <>
            {/* <aside className="w-[30%] h-[60%] max-w-sm card sticky top-0 bg-red-100">
                <Image
                src={img}
                alt="Profilesss"
                className="w-32 h-32 rounded-full mx-auto"
                />
                <h1 className="text-center text-xl font-bold mt-4">My Portfolio</h1>
                <nav className="mt-6 space-y-4">
                <Link href="#intro" className="block text-center">Intro</Link>
                <Link href="#professional-background" className="block text-center">Professional Background</Link>
                <Link href="#educational-background" className="block text-center">Educational Background</Link>
                <Link href="#projects" className="block text-center">Projects</Link>
                <Link href="#contact" className="block text-center">Contact</Link>
                </nav>
            </aside> */}


            <div className=" bg-transparent p-5 w-[20%] max-w-sm h-full">

                <div className="bg-gray-800 h-[60vh] shadow-xl rounded-lg card sticky top-5 max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
                    <div className="rounded-t-lg h-32 overflow-hidden">
                        <Image className="object-cover object-top w-full" 
                        src={img2}
                        alt="Profilesss"
                        />
                    </div>
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-gray-400 rounded-full overflow-hidden">
                        <Image className="object-cover object-center h-32 ml-[-10%]" 
                        src={imgEdy}
                                alt="Profilesss"
                        />
                    </div>
                <div className="text-center mt-2">
                <h2 className="font-semibold text-custom-blue">EDILY MORA</h2>
                <p className="text-gray-500">SOFTWARE ENGINEER</p>
            </div>
            <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around text-xs">
                <li className="flex flex-col items-center justify-around">
                <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",}} />
                    <div>JavaScript</div>
                </li>
                <li className="flex flex-col items-center justify-between">
                
                <FontAwesomeIcon icon={faNode} style={{color: 'green' }}/>
                    <div>Node.js</div>
                </li>
                <li className="flex flex-col items-center justify-around">
                <FontAwesomeIcon icon={faReact} style={{color: "#42a7f5" }} />
                    <div>React.js</div>
                </li>
            </ul>
            <div className="p-4 border-t mx-8 mt-2">
                <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
            </div>
        </div>
        </div>
          </>
    )
}



