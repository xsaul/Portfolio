import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import dev from "../images/AvatarMouthOpen.png";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col md:flex-row items-center gap-10">
      <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-marigold dark:bg-white/50 hidden md:block" />
<div className="absolute top-32 -right-12 w-10 h-10 rounded-full bg-coral dark:bg-white/70 hidden md:block" />
<div className="absolute -bottom-12 left-1/3 w-14 h-14 rounded-full bg-skywash dark:bg-white/40 hidden md:block" />

      <div className="relative z-10 mx-auto w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-primary dark:border-white/40 overflow-hidden shrink-0">
        <img className="w-[85%] h-[85%] object-contain mx-auto mt-[7.5%]" src={dev} alt="dev-avatar" />
      </div>
      <div className="relative z-10 text-center md:text-left">
        <h2 className="text-5xl leading-tight text-black dark:text-white font-semibold md:text-6xl tracking-tight">
          {t('hero_title')}{' '}
          <span className="bg-marigold dark:bg-white/10 text-black dark:text-white rounded-full px-4 py-1">{t('hero_title2')}</span>
        </h2>
        <h3 className="text-2xl text-graphite dark:text-white/70 py-2 font-medium md:text-3xl mt-4">
          {t('hero_subtitle')}
        </h3>
        <p className="text-lg py-2 leading-8 text-stone dark:text-white/60">
          {t('hero_description')}
        </p>
        <div className="flex text-4xl justify-center md:justify-start gap-6 py-3">
  <a href="https://github.com/xsaul" target="_blank" className="text-black/60 dark:text-white/60 hover:text-primary transition-colors duration-300">
    <AiFillGithub />
  </a>
  <a href="https://www.linkedin.com/in/saul-gonzalez-423932241/" target="_blank" className="text-black/60 dark:text-white/60 hover:text-primary transition-colors duration-300">
    <AiFillLinkedin />
  </a>
</div>
      </div>
    </div>
  )
}

export default Hero