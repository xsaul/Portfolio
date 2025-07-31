import logoSmall from "../images/logoSmall.jpg";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <nav className="py-5 mb-7 flex justify-between">
          <a href="#">
            <img className="max-w-[10rem]" src={logoSmall} alt="Logo" />
          </a>
          <ul className="flex items-center">
            <li>
              <div className="py-4 px-5">
      <select onChange={handleChange} defaultValue={i18n.language} className="p-2 rounded bg-gray-800 text-white">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="pt">Português BR</option>
      </select>
    </div>
            </li>
            <li>
              <a className="text-white hover:border-dashed hover:border-b-2 hover:border-[#cd6e15] py-1 px-2" href="#projects">{t('projects')}</a>
            </li>
            <li>
              <a
                className="hover:bg-[#e67b18] bg-[#cd6e15] text-gray-200 px-4 py-2 border-none rounded-md ml-8"
                href="https://rxresu.me/xsaul/frontend-development" target="_blank"
              >
              {t('resume_button')}
              </a>
            </li>
          </ul>
        </nav>
  )
}

export default Navbar