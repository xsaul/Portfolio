import { useTranslation } from 'react-i18next';

const accentClasses = ["bg-marigold dark:bg-white/10 text-black dark:text-white", "bg-coral dark:bg-white/10 text-white dark:text-white", "bg-skywash dark:bg-white/10 text-black dark:text-white"];
const qaTools = [
  ["Jira", "TestRail", "Xbox", "PlayStation"],
  ["Jira", "TestRail", "Cloud Gaming"],
  ["Postman", "Charles Proxy", "Manual Testing"],
];

const QAHighlights = () => {
  const { t } = useTranslation();
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {qaTools.map((tools, index) => (
        <div key={index} className={`rounded-card p-6 ${accentClasses[index]}`}>
          <h4 className="text-xl font-semibold mb-2">{t(`qa.${index}.title`)}</h4>
          <p className="text-sm mb-4 opacity-90">{t(`qa.${index}.description`)}</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <span key={i} className="bg-white/90 dark:bg-white/20 text-black dark:text-white text-xs px-3 py-1 rounded-full">{tool}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default QAHighlights