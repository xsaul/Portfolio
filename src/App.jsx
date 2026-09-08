import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Job from "./components/Job";
import Project from "./components/Project";
import projectData from "./projectData";
import Skills from "./components/Skills";
import skillData from "./skillData";
import QAHighlights from "./components/QAHighlights";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import LanguageModal from "./components/LanguageModal";

function App() {
  const { t } = useTranslation();
  const jobIndexes = [0, 1, 2, 3, 4];

const [showLangModal, setShowLangModal] = useState(true);

const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);

  return (
     <main className="background px-10 md:px-15 lg:px-20">
      {showLangModal && <LanguageModal onSelect={() => setShowLangModal(false)} />}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <section className="corners relative overflow-hidden px-6 py-14 md:px-16">
      <Hero />
      </section>
      <section className="mt-28">
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
    highlight={index === 0 ? "skywash" : index === 2 ? "marigold" : index === 4 ? "coral" : null}
  />
))}
      </section>
      <section className="mt-16">
  <h3 className="text-4xl text-primary py-1 mb-5">{t('qa_title')}</h3>
  <QAHighlights />
</section>
      <section className="mt-[7rem] pb-20 scroll-mt-24" id="projects">
          <h3 className="text-4xl text-[#cd6e15] py-1 mb-5">{t('projects_title')}</h3>
        <div className="gridd">
          {
  projectData.map((project, index) => (
    <Project 
      key={index}
      img={project.img}
      link={project.link}
      name={project.name}
      index={index}
    />
  ))
}
        </div>
      </section>
      <div>
      </div>
    </main>
  );
}

export default App;