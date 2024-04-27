import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import dev from "../src/images/dev-ed-wave.png";
import web1 from "../src/images/Bank.jpg";
import web2 from "../src/images/space-app.png";
import web3 from "../src/images/LoopS.jpg";
import web4 from "../src/images/Starbucks.jpg";
import web5 from "../src/images/Drinkally.jpg";
import web6 from "../src/images/Hulu.png";
import logoSmall from "../src/images/logoSmall.jpg";

function App() {
  return (
    <main className="background px-10 md:px-15 lg:px-20">
      <section className="min-h-screen finisher-header">
        <nav className="py-5 mb-7 flex justify-between">
          <a href="#">
            <img className="max-w-[10rem]" src={logoSmall} alt="Logo" />
          </a>
          <ul className="flex items-center">
            <li>
              <a className="text-white hover:bg-[#cd6e15] rounded-md px-4 py-2" href="#projects">Projects</a>
            </li>
            <li>
              <a
                className="hover:bg-[#e67b18] bg-[#cd6e15] text-gray-200 px-4 py-2 border-none rounded-md ml-8"
                href="https://rxresu.me/xsaul/frontend-development" target="_blank"
              >
              Resume here
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex">


        <div className="relative mx-auto bg-gradient-to-b from-[#cd6e15] rounded-full w-80 h-80 mt-15 overflow-hidden md:h-[30rem] md:w-[122rem]">
          <img src={dev} alt="dev-avatar" layout="fill" objectfit="cover" />
        </div>


        <div className="text-center mt-[1.5rem] ml-[1rem] px-[1.5rem]">
          <h2 className="text-5xl py-2 text-[#cd6e15] font-semibold md:text-6xl">
            Saul González
          </h2>
          <h3 className="text-2xl text-gray-200 py-2 font-semibold md:text-3xl">
            <span className="border-dashed border-b-2 border-[#cd6e15]">
              Front-end
            </span>{" "}
            developer
          </h3>
          <p className="text-lg py-2 leading-8 text-gray-200">
            This is the beginning of my journey as a
            developer, where I would love to do remote work for
            <span className="text-[#cd6e15]"> agencies </span> or
            for <span className="text-[#cd6e15]">startups </span>
            and collaborate with talanted people to create digital products for
            both business and consumer use.
          </p>
        

        <div className="flex text-5xl justify-center gap-10 py-3 text-gray-600 cursor-pointer">
          <a className="text-white" href="https://github.com/xsaul" target="_blank">
            <AiFillGithub className="hover:text-[#cd6e15]" />
          </a>
          <a
            className="text-white"
            href="https://www.linkedin.com/in/saul-gonz%C3%A1lez-423932241/" target="_blank"
          >
            <AiFillLinkedin className="hover:text-[#cd6e15]" />
          </a>
          </div>
        </div>
        </div>
      </section>

      <section className="mt-[7rem]">

        <div className="lg:flex text-center justify-center">
            <h4 className="text-2xl absolute text-[#cd6e15]">Code tools I use</h4>
          <div className="text-center shadow-lg rounded-xl mt-[7rem] mb-[5rem] w-auto parent items-center">
            <p className="text-gray-200 text-xl  px-3 py-3">HTML5</p>
            <p className="text-gray-200 text-xl  px-3 py-3">CSS3</p>
            <p className="text-gray-200 text-xl  px-3 py-3">JavaScript</p>
            <p className="text-gray-200 text-xl  px-3  py-3">React</p>
            <p className="text-gray-200 text-xl  px-3 py-3">TailwindCSS</p>
            <p className="text-gray-200 text-xl  px-3  py-3">BootStrap</p>
            <p className="text-gray-200 text-xl  px-3 py-3">Figma</p>
            <p className="text-gray-200 text-xl  px-3 py-3">Git</p>

          </div>
        </div>
        <svg className="w-[84.3rem] ml-[-5rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e77000" fillOpacity="0.95" d="M0,128L24,122.7C48,117,96,107,144,106.7C192,107,240,117,288,128C336,139,384,149,432,160C480,171,528,181,576,192C624,203,672,213,720,229.3C768,245,816,267,864,250.7C912,235,960,181,1008,181.3C1056,181,1104,235,1152,234.7C1200,235,1248,181,1296,138.7C1344,96,1392,64,1416,48L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
        <svg className="w-[84.3rem] ml-[-5rem] mt-[-0.02rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e77000" fillOpacity="0.95" d="M0,160L24,144C48,128,96,96,144,122.7C192,149,240,235,288,224C336,213,384,107,432,90.7C480,75,528,149,576,186.7C624,224,672,224,720,197.3C768,171,816,117,864,80C912,43,960,21,1008,64C1056,107,1104,213,1152,234.7C1200,256,1248,192,1296,138.7C1344,85,1392,43,1416,21.3L1440,0L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
      </section>

      <section id="jobs">
        <div>
        <h3 className="text-4xl text-[#cd6e15] py-1">Jobs experience</h3>
        </div>
        <div>
          <div className="flex justify-between mt-[2rem]">
          <h3 className="">ACRI S.C.</h3>
          <span className="font-bold">September 2023 - Present</span>
          </div>
          <p className="corners mt-[1.5rem] leading-[1.8rem] px-[2rem] py-[1rem]">My experience so far in this company has been developing apps based on some macros (.xlsx) they created a long time ago for the processes they use in their main business of the company and to have more control of what the employees do with them they wanted to start to create web apps and I was in charge in all the frontend part.  The main tools I used to achieve these apps were React, TailwindCSS, and Redux.
Also, I was in charge of the design of the apps so I got experience working with Figma creating Layouts, and also learning important concepts of UI/UX to make the apps easy to use for the users.</p>
        </div>
      </section>

      <section className="mt-[10.2rem]" id="projects">
        <div>
          <h3 className="text-4xl text-[#cd6e15] py-1">Projects I've done</h3>
        </div>
        <div className="gridd">
          <div className="py-5 mb-5">
              <img
                src={web4}
                alt=""
                className="rounded-lg object-cover w-full max-w-[500px] mb-10"
                layout="responsive"
              />
              <a className="py-5 px-2 mt-5 text-2xl text-gray-200 border-solid border-2 rounded border-white hover:border-[#cd6e15] hover:text-[#cd6e15]" href="https://xsaul.github.io/starbucks-clone-site/" target="_blank" >Starbucks Clone Site</a>
            </div>
            <div className="py-5 mb-5">
              <img
                src={web5}
                alt=""
                className="rounded-lg object-cover mb-10 w-full max-w-[500px]"
                layout="responsive"
              />
              <a className="py-5 px-2 mt-5 text-2xl text-gray-200 border-solid border-2 rounded border-white hover:border-[#cd6e15] hover:text-[#cd6e15]" href="https://xsaul.github.io/drinkally/" target="_blank">Drinkally site</a>
            </div>
            <div className="py-5 mb-5">
              <img
                src={web2}
                alt=""
                className="rounded-lg object-cover mb-10 w-full max-w-[500px]"
                layout="responsive"
              />
              <a className="py-5 px-2 mt-5 text-2xl text-gray-200 border-solid border-2 rounded border-white hover:border-[#cd6e15] hover:text-[#cd6e15]" href="https://xsaul.github.io/space-tourism/" target="_blank">Space Tourism site</a>
            </div>
            <div className="py-5 mb-5">
              <img
                src={web1}
                alt=""
                className="rounded-lg object-cover w-full max-w-[500px] mb-10"
                layout="responsive"
              />
              <a className="py-5 px-2 mt-5 text-2xl text-gray-200 border-solid border-2 rounded border-white hover:border-[#cd6e15] hover:text-[#cd6e15]" href="https://xsaul.github.io/Bank-app/" target="_blank">Bank site</a>
            </div>
            <div className="py-5 mb-5">
              <img
                src={web3}
                alt=""
                className="rounded-lg object-cover w-full max-w-[500px] h-[15.8rem] mb-10"
                layout="responsive"
              />
              <a className="py-5 px-2 mt-5 text-2xl text-gray-200 border-solid border-2 rounded border-white hover:border-[#cd6e15] hover:text-[#cd6e15]" href="https://xsaul.github.io/loopstudios-landing-page/" target="_blank">LoopStudios site</a>
            </div>
            <div className="py-5 mb-5">
              <img
                src={web6}
                alt=""
                className="rounded-lg object-cover w-full max-w-[500px] mb-10"
                layout="responsive"
              />
              <a className="py-5 px-2 mt-5 text-2xl text-gray-200 border-solid border-2 rounded border-white hover:border-[#cd6e15] hover:text-[#cd6e15]" href="https://xsaul.github.io/hulu-landingpage-clone/" target="_blank">Hulu clone page</a>
            </div>
        </div>
      </section>
      <div>
      <svg className="w-[84.3rem] ml-[-5rem] mt-[-3.5rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e77000" fillOpacity="0.95" d="M0,224L16,202.7C32,181,64,139,96,112C128,85,160,75,192,96C224,117,256,171,288,170.7C320,171,352,117,384,117.3C416,117,448,171,480,176C512,181,544,139,576,138.7C608,139,640,181,672,213.3C704,245,736,267,768,256C800,245,832,203,864,170.7C896,139,928,117,960,138.7C992,160,1024,224,1056,240C1088,256,1120,224,1152,213.3C1184,203,1216,213,1248,213.3C1280,213,1312,203,1344,197.3C1376,192,1408,192,1424,192L1440,192L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path></svg>
      </div>
    </main>
  );
}

export default App;
