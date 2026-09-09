import { useTranslation } from 'react-i18next';

const accentStyles = {
  skywash: "bg-skywash dark:bg-white/10 text-black dark:text-white",
  coral: "bg-coral dark:bg-white/10 text-white dark:text-white",
  marigold: "bg-marigold dark:bg-white/10 text-black dark:text-white",
};

const Job = ({ index, highlight }) => {
  const { t } = useTranslation();
  const isAccent = Boolean(highlight);
  return (
    <div className={`mb-8 p-6 rounded-card ${isAccent ? accentStyles[highlight] : "corners"}`}>
      <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-end">
  <div className="flex flex-col gap-1 md:flex-row md:items-end md:gap-3">
    <h3 className={`text-lg font-medium ${isAccent ? "" : "text-black dark:text-white"}`}>{t(`job.${index}.company`)}</h3>
    <h3 className={`font-semibold text-sm border-b-2 w-fit ${isAccent ? "border-current" : "text-primary border-primary"}`}>{t(`job.${index}.position`)}</h3>
  </div>
  <span className={`font-medium text-sm ${isAccent ? "opacity-80" : "text-stone dark:text-white/60"}`}>{t(`job.${index}.date`)}</span>
</div>
      <p className={`mt-3 leading-[1.8rem] ${isAccent ? "opacity-90" : "text-graphite dark:text-white/70"}`}>{t(`job.${index}.description`)}</p>
    </div>
  )
}

export default Job