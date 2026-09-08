const Skills = ({areaTitle, skills}) => {
  return (
    <div className="corners px-5 py-4 mt-[3rem] w-[14rem]">
      <h1 className="text-center text-[18px] font-medium mb-3 text-black dark:text-white">{areaTitle}</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill, index) => (
          <span key={index} className="bg-primary-tint dark:bg-white/10 text-primary dark:text-white text-xs px-3 py-1 rounded-full">{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default Skills