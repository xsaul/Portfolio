const Project = ({img, link, name}) => {
  return (
    <div className="py-5 mb-5">
                  <img
                    src={img}
                    alt={name}
                    className="rounded-lg object-cover w-full max-w-[500px] mb-10"
                    layout="responsive"
                  />
                  <a className="py-1 px-2 mt-5 text-2xl text-gray-200 hover:border-dashed hover:border-b-2 hover:border-[#cd6e15]" href={link} target="_blank" >{name}</a>
                </div>
  )
}

export default Project