import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: "en", label: "English", flagCode: "us" },
  { code: "es", label: "Español", flagCode: "mx" },
  { code: "pt", label: "Português", flagCode: "br" },
];

const circles = [
  { base: "top-16 left-12 w-20 h-20 bg-marigold dark:bg-white/50", exit: "-translate-x-32 -translate-y-32", delay: "delay-0" },
  { base: "top-24 right-20 w-14 h-14 bg-coral dark:bg-white/70", exit: "translate-x-40 -translate-y-24", delay: "delay-100" },
  { base: "bottom-24 left-24 w-16 h-16 bg-skywash dark:bg-white/40", exit: "-translate-x-28 translate-y-36", delay: "delay-150" },
  { base: "bottom-16 right-16 w-10 h-10 bg-marigold dark:bg-white/50", exit: "translate-x-36 translate-y-28", delay: "delay-75" },
  { base: "top-1/2 left-8 w-8 h-8 bg-coral dark:bg-white/70", exit: "-translate-x-40 translate-y-8", delay: "delay-200" },
  { base: "top-1/3 right-10 w-6 h-6 bg-skywash dark:bg-white/40", exit: "translate-x-32 -translate-y-8", delay: "delay-100" },
];

const LanguageModal = ({ onSelect }) => {
  const { i18n } = useTranslation();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.overflow = "auto";
  };
}, []);

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    setIsExiting(true);
    setTimeout(() => {
  onSelect();
}, 1100);
  };

  return (
    <div className={`fixed inset-0 z-[100] bg-canvas dark:bg-midnight flex items-center justify-center px-6 overflow-hidden transition-opacity duration-700 ${isExiting ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      {circles.map((circle, index) => (
        <div
          key={index}
          className={`absolute rounded-full hidden md:block transition-transform duration-500 ease-in ${circle.base} ${circle.delay} ${isExiting ? circle.exit : "translate-x-0 translate-y-0"}`}
        />
      ))}

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">Saul González Portfolio</h1>
<h2 className="text-xl md:text-2xl font-medium text-graphite dark:text-white/70 mb-8">Choose your language</h2>
        <div className="flex flex-col gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="flex items-center justify-center gap-3 bg-primary-tint hover:bg-primary hover:text-white text-black text-lg font-medium px-6 py-3 rounded-btn transition-colors duration-200"
            >
              <img src={`https://flagcdn.com/w40/${lang.flagCode}.png`} alt={lang.label} className="w-6 h-auto rounded-sm" />
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LanguageModal