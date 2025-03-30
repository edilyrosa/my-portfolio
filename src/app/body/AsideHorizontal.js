import Link from "next/link";
import RotatingText from '../RotatingText';
import imgEdy from "../../../public/assets/diez.png";
import img2 from "../../../public/image.png";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faReact, faJs } from '@fortawesome/free-brands-svg-icons';

export default function AsideHorizontal() {
  return (
    <div className="card sticky top-5 bg-gray-800 w-full shadow-xl rounded-lg flex 
    flex-row items-center p-1">
      
      
        <div className="sm:w-1/3 rounded-lg overflow-hidden w-24 h-auto">
          <Image className="object-contain object-center w-full h-full" src={imgEdy} alt="Profile" />
        </div>
       
      
      
      <div className="w-full sm:w-2/3 flex flex-col justify-start items-start p-1">
     
        <RotatingText
          texts={[
            "WEB DEVELOPER FULL STACK",
            "UX/UI DESIGN",
            "CYBERSECURITY",
            "SOFTWARE ENGINEER",
            "+4 YEARS OF EXPERIENCE"
          ]}
          mainClassName="text-black md:text-[8px] lg:text-xs sm:text-xs p-1 mx-auto my-1 max-w-[90%] bg-cyan-400 rounded-lg text-center"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        
        <h2 className="font-semibold text-custom-blue text-center text-xs">EDILY MORA</h2>
        <p className="text-white italic text-center text-xs">SOFTWARE ENGINEER</p>


        <ul className="flex justify-center sm:justify-start space-x-4 text-gray-700 mt-2">
          <li className="flex flex-col items-center">
            <FontAwesomeIcon icon={faJs} style={{ color: "#FFD43B", fontSize: "1em" }} />
            <div className="text-xs">JavaScript</div>
          </li>
          <li className="flex flex-col items-center">
            <FontAwesomeIcon icon={faNode} style={{ color: 'green', fontSize: "1em" }} />
            <div className="text-xs">Node.js</div>
          </li>
          <li className="flex flex-col items-center">
            <FontAwesomeIcon icon={faReact} style={{ color: "#42a7f5", fontSize: "1em" }} />
            <div className="text-xs">React.js</div>
          </li>
        </ul>
      </div>
      <div className="p-3 mt-3">
        <button className="text-xs block mx-auto rounded-full bg-gray-900 hover:shadow-lg hover:bg-cyan-300 hover:text-gray-900 font-semibold text-white px-4 py-1">
          Lets Talk
        </button>
      </div>
    </div>
  );
}


