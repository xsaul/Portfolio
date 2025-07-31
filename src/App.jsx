import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Job from "./components/Job";
import Project from "./components/Project";
import projectData from "./projectData";
import Skills from "./components/Skills";
import skillData from "./skillData";
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const jobIndexes = [0, 1, 2];
  return (
    <main className="background px-10 md:px-15 lg:px-20">
      <section className="min-h-screen">
        <Navbar />
        <Hero />
      </section>
      <section className="mt-[7rem]">
            <h4 className="text-4xl absolute text-[#cd6e15]">{t('skills_title')}</h4>
        <div className="flex flex-wrap flex-col justify-evenly md:flex-row items-center">
          {
          skillData.map((skill, index) => (
            <Skills
            key={index}
            areaTitle={skill.areaTitle}
            skills={skill.skills}
            />
          ))
          }
        </div>
      </section>
      <section className="mt-[7rem]">
        <h3 className="text-4xl text-[#cd6e15] py-1 mb-5">{t('experience_title')}</h3>
         {jobIndexes.map((index) => (
            <Job 
              key={index}
              index={index}
            />
      ))}
      </section>
      <section className="mt-[7rem]" id="projects">
          <h3 className="text-4xl text-[#cd6e15] py-1 mb-5">{t('projects_title')}</h3>
        <div className="gridd">
          {
            projectData.map((project, index) => (
              <Project 
              key={index}
              img={project.img}
              link={project.link}
              name={project.name}
              />
            ))}
        </div>
      </section>
      <div>
      </div>
    </main>
  );
}

export default App;