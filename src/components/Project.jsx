const accentBorders = ["!border-t-marigold dark:!border-t-white/50", "!border-t-coral dark:!border-t-white/70", "!border-t-skywash dark:!border-t-white/40"];

const Project = ({img, link, name, index}) => {
  return (
    <div className={`corners !border-t-4 p-4 ${accentBorders[index % 3]}`}>
      <img src={img} alt={name} className="rounded-lg object-cover w-full mb-4" />
      <a className="text-lg font-medium text-black dark:text-white hover:text-primary dark:hover:text-white/60 transition-colors duration-200" href={link} target="_blank">{name}</a>
    </div>
  )
}

export default Project