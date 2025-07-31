import { useTranslation } from 'react-i18next';
const Job = ({ index }) => {
  const { t } = useTranslation();
  return (
    <div className="mb-[5rem]">
          <div className="flex justify-between mt-[2rem]">
            <div className="flex items-end">
          <h3 className="text-lg">{t(`job.${index}.company`)}</h3>
          <h3 className="font-bold text-sm ml-[1.5rem] border-dashed border-b-2 border-[#cd6e15]">{t(`job.${index}.position`)}</h3>
            </div>
          <span className="font-bold">{t(`job.${index}.date`)}</span>
          </div>
          <p className="corners mt-[1.5rem] leading-[1.8rem] px-[2rem] py-[1rem]">{t(`job.${index}.description`)}</p>
        </div>
  )
}

export default Job