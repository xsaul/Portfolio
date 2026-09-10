import { useState } from "react";
import ProjectModal from "./ProjectModal";

const accentBorders = ["!border-t-marigold dark:!border-t-white/50", "!border-t-coral dark:!border-t-white/70", "!border-t-skywash dark:!border-t-white/40"];

const Project = ({img, link, name, index, stack, githubLink}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDetails = Boolean(stack);

  return (
    // <div
    //   className={`corners !border-t-4 p-4 ${accentBorders[index % 3]} ${hasDetails ? "cursor-pointer" : ""}`}
    //   onClick={() => hasDetails && setIsOpen(true)}
    // >
    //   <img src={img} alt={name} className="rounded-lg object-cover w-full mb-4" />
    //   <a
    //     className="text-lg font-medium text-black dark:text-white hover:text-primary transition-colors duration-200"
    //     href={link}
    //     target="_blank"
    //     onClick={(e) => e.stopPropagation()}
    //   >
    //     {name}
    //   </a>

    //   {hasDetails && isOpen && (
    //     <ProjectModal
    //       name={name}
    //       img={img}
    //       link={link}
    //       stack={stack}
    //       githubLink={githubLink}
    //       index={index}
    //       onClose={() => setIsOpen(false)}
    //     />
    //   )}
    // </div>
    <div
  className={`corners !border-t-4 p-4 group ${accentBorders[index % 3]} ${hasDetails ? "cursor-pointer" : ""}`}
  onClick={() => hasDetails && setIsOpen(true)}
>
  {/* Contenedor con overflow-hidden para contener el zoom de la imagen */}
  <div className="overflow-hidden rounded-lg mb-4">
    <img 
      src={img} 
      alt={name} 
      className="w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" 
    />
  </div>

  <a
    className="text-lg font-medium text-black dark:text-white group-hover:text-primary dark:group-hover:text-gray-400 transition-colors duration-200"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
  >
    {name}
  </a>

  {hasDetails && isOpen && (
    <ProjectModal
      name={name}
      img={img}
      link={link}
      stack={stack}
      githubLink={githubLink}
      index={index}
      onClose={() => setIsOpen(false)}
    />
  )}
</div>
  )
}

export default Project