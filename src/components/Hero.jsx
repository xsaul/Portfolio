import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import dev from "../images/AvatarMouthOpen.png";
import { useTranslation } from 'react-i18next';

const Hero = () => {
const { t } = useTranslation();
  return (
            <div className="flex">
        <div className="relative mx-auto bg-gradient-to-b from-[#cd6e15] rounded-full w-80 h-80 mt-15 overflow-hidden md:h-[30rem] md:w-[122rem]">
          <img className="w-[20rem] mt-[3rem] ml-[3rem]" src={dev} alt="dev-avatar" layout="fill" objectfit="cover" />
        </div>
        <div className="text-center mt-[1.5rem] ml-[1rem] px-[1.5rem]">
          <h2 className="text-5xl py-2 text-white font-semibold md:text-6xl">
            {t('hero_title')}
           <span className="text-[#cd6e15]"> {t('hero_title2')}</span>
          </h2>
          <h3 className="text-2xl text-gray-200 py-2 font-semibold md:text-3xl">
            {t('hero_subtitle')}
          </h3>
          <p className="text-lg py-2 leading-8 text-gray-200">
            {t('hero_description')}
          </p>
        <div className="flex text-5xl justify-center gap-10 py-3 text-gray-600 cursor-pointer">
          <a className="text-white" href="https://github.com/xsaul" target="_blank">
            <AiFillGithub className="hover:text-[#cd6e15]" />
          </a>
          <a
            className="text-white"
            href="https://www.linkedin.com/in/saul-gonzalez-423932241/" target="_blank"
          >
            <AiFillLinkedin className="hover:text-[#cd6e15]" />
          </a>
          </div>
        </div>
        </div>
  )
}

export default Hero