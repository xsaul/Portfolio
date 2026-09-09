import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub } from "react-icons/ai";
import { FiX } from "react-icons/fi";

const ProjectModal = ({ name, img, link, stack, githubLink, index, onClose }) => {
  const { t } = useTranslation();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/50 flex items-center justify-center px-6 transition-opacity duration-300 ${isExiting ? "opacity-0" : "opacity-100"}`}
      onClick={handleClose}
    >
      <div className="corners max-w-lg w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors duration-200"
          aria-label="Close"
        >
          <FiX size={22} />
        </button>

        <img src={img} alt={name} className="rounded-lg object-cover w-full mb-4" />
        <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">{name}</h3>
        <p className="text-graphite dark:text-white/70 leading-relaxed mb-4">
          {t(`project_details.${index}.description`)}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map((tech, i) => (
            <span key={i} className="bg-primary-tint dark:bg-white/10 text-primary dark:text-white text-xs px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={link}
            target="_blank"
            className="flex-1 text-center bg-primary hover:bg-[#a85a10] text-white px-4 py-2 rounded-btn text-sm font-medium transition-colors duration-200"
          >
            {t('project_modal_view_site')}
          </a>
          <a
            href={githubLink}
            target="_blank"
            className="flex-1 corners flex items-center justify-center gap-2 hover:bg-primary-tint dark:hover:bg-white/10 text-black dark:text-white px-4 py-2 rounded-btn text-sm font-medium transition-colors duration-200"
          >
            <AiFillGithub size={18} />
            {t('project_modal_source_code')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal