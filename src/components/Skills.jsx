const Skills = ({areaTitle, skills}) => {
  return (
    <div className="corners px-5 py-3 mt-[6rem]">
      <div className="text-center mb-2">
    <h1 className="text-[18px]">{areaTitle}</h1>
      </div>
    <div className="flex flex-wrap gap-x-8 text-center shadow-lg rounded-xl h-40 w-[14rem]">
        {skills.map((skill, index) => (
            <p key={index} className="text-gray-200 text-sm mt-1">{skill}</p>
        ))}
    </div>
    </div>
  )
}

export default Skills