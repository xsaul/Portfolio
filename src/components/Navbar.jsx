import logoSmall from "../images/logoSmall.jpg";
import { useTranslation } from 'react-i18next';
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <nav className="sticky top-0 z-50 bg-canvas/90 dark:bg-midnight/90 backdrop-blur py-4 mb-7 flex justify-between items-center border-b border-black/[0.08] dark:border-white/[0.1]">
  <a href="#" className="bg-skywash dark:bg-white/10 text-white dark:text-white font-semibold text-2xl px-6 py-2.5 rounded-full hover:opacity-80 transition-opacity duration-200">
  Saul González
</a>
  <ul className="flex items-center gap-2">
    <li>
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="p-2 rounded-btn bg-white dark:bg-midnight border border-black/[0.08] dark:border-white/[0.1] text-black dark:text-white transition-colors duration-200"
    aria-label="Toggle dark mode"
  >
    {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
  </button>
</li>
    <li>
      <select onChange={handleChange} value={i18n.language} className="p-2 rounded-btn bg-white dark:bg-midnight border border-black/[0.08] dark:border-white/[0.1] text-black/90 dark:text-white text-sm">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="pt">Português BR</option>
      </select>
    </li>
    <li>
      <a className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white px-3 py-2 rounded-btn transition-colors duration-200" href="#projects">{t('projects')}</a>
    </li>
    <li>
      <a
  className="bg-primary hover:bg-[#a85a10] text-white px-4 py-2 rounded-btn ml-4 text-sm font-medium transition-colors duration-200"
  href={`${import.meta.env.BASE_URL}cv-${i18n.language}.pdf`}
  download={`Saul Gonzalez - CV.pdf`}
>
{t('resume_button')}
</a>
    </li>
  </ul>
</nav>
  )
}

export default Navbar