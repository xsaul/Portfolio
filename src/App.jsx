import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsCode, BsCodeSlash } from "react-icons/bs";
import dev from "../public/dev-ed-wave.png";
import web1 from "../public/Bank.jpg";
import web3 from "../public/LoopS.jpg";
import web4 from "../public/CrowdF.jpg";
import web5 from "../public/Blogr.jpg";
import web6 from "../public/Hulu.png";
import logoSmall from "../public/logoSmall.jpg";

function App() {
  return (
    <main className="bg-[#050505] px-10 md:px-15 lg:px-20">
      <section className="min-h-screen">
        <nav className="py-5 mb-7 flex justify-between">
          <a href="#">
            <img className="max-w-[10rem]" src={logoSmall} alt="Logo" />
          </a>
          <ul className="flex items-center">
            <li>
              <a
                className="hover:bg-[#e67b18] bg-[#cd6e15] text-gray-200 px-4 py-2 border-none rounded-md ml-8"
                href="https://rxresu.me/r/XiWhyrcp" target="_blank"
              >
              CV here
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-[#cd6e15] font-medium md:text-6xl">
            Saul González
          </h2>
          <h3 className="text-2xl text-gray-200 py-2 font-semibold md:text-3xl">
            <span className="border-dashed border-b-2 border-[#cd6e15]">
              Front-end
            </span>{" "}
            developer
          </h3>
          {/* <p className="text-lg py-5 leading-8 text-gray-200 max-w-xl mx-auto">
            Freelancer providing services for Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusamus, dolorum ducimus. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Totam
            asperiores, obcaecati, porro molestias odit, natus eius excepturi
            aliquid repellat incidunt autem provident eveniet sed? Error.
          </p> */}
          <p className="text-lg py-2 leading-8 text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-[#cd6e15]"> agencies </span>
            consulted for <span className="text-[#cd6e15]">startups </span>
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p>
        </div>

        <div className="flex text-5xl justify-center gap-10 py-3 text-gray-600 cursor-pointer">
          <a className="text-white" href="https://twitter.com/xsaulglz" target="_blank">
            <AiFillTwitterCircle className="hover:text-[#cd6e15]" />
          </a>
          <a
            className="text-white"
            href="https://www.linkedin.com/in/saul-gonz%C3%A1lez-423932241/" target="_blank"
          >
            <AiFillLinkedin className="hover:text-[#cd6e15]" />
          </a>
        </div>

        <div className="relative mx-auto bg-gradient-to-b from-[#cd6e15] rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <img src={dev} alt="dev-avatar" layout="fill" objectfit="cover" />
        </div>
      </section>

      <section>
        {/* <div>
          <h3 className="text-3xl text-gray-200 py-1 mt-[5rem]">
            Services I offer
          </h3>
          
        </div> */}

        <div className="lg:flex gap-10 text-center justify-center">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 w-auto flex flex-col items-center">
            <BsCode className="h-1/2 w-1/2 text-[#cd6e15]" />
            <h3 className="text-lg font-medium pt-6 pb-2"></h3>
            <p className="py-2"></p>
            <h4 className="py-4 text-2xl text-[#cd6e15]">Code tools I use</h4>
            <p className="text-gray-200 text-xl py-1">HTML5</p>
            <p className="text-gray-200 text-xl py-1">CSS</p>
            <p className="text-gray-200 text-xl py-1">JavaScript</p>
            <p className="text-gray-200 text-xl py-1">React</p>
            <p className="text-gray-200 text-xl py-1">BootStrap</p>
            <p className="text-gray-200 text-xl py-1">Tailwind</p>
            <p className="text-gray-200 text-xl py-1">Git</p>
            <p className="text-gray-200 text-xl py-1">Sass</p>

            <BsCodeSlash className="h-1/2 w-1/2 mt-[3rem] text-[#cd6e15]" />
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-4xl text-[#cd6e15] py-1">Projects I've done</h3>
          {/* <p className="text-lg py-2 leading-8 mb-[2rem] text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-[#cd6e15]"> agencies </span>
            consulted for <span className="text-[#cd6e15]">startups </span>
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p> */}
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div>
          <div className="basis-1/3 flex-1 py-5 mb-5">
              <img
                src={web4}
                alt=""
                className="rounded-lg object-cover w-50 h-full mb-10"
                layout="responsive"
              />
              <a className="py-5 px-2 mt-5 text-2xl text-gray-200 border-solid border-2 rounded border-white hover:border-[#cd6e15] hover:text-[#cd6e15]" href="https://xsaul.github.io/crowdfunding-product-page/" target="_blank" >Crowdfunding Site</a>
            </div>
            <div className="basis-1/3 flex-1 py-5 mb-5">
              <img
                src={web1}
                alt=""
                className="rounded-lg object-cover w-full h-full mb-10"
                layout="responsive"
              />
              <a className="py-5 px-2 mt-5 text-2xl text-gray-200 border-solid border-2 rounded border-white hover:border-[#cd6e15] hover:text-[#cd6e15]" href="https://xsaul.github.io/Bank-app/" target="_blank">Bank site</a>
            </div>
            <div className="basis-1/3 flex-1 py-5 mb-5">
              <img
                src={web3}
                alt=""
                className="rounded-lg object-cover w-full h-full mb-10"
                layout="responsive"
              />
              <a className="py-5 px-2 mt-5 text-2xl text-gray-200 border-solid border-2 rounded border-white hover:border-[#cd6e15] hover:text-[#cd6e15]" href="https://xsaul.github.io/loopstudios-landing-page/" target="_blank">LoopStudios site</a>
            </div>
            <div className="basis-1/3 flex-1 py-5 mb-5">
              <img
                src={web5}
                alt=""
                className="rounded-lg object-cover w-full h-full mb-10"
                layout="responsive"
              />
              <a className="py-5 px-2 mt-5 text-2xl text-gray-200 border-solid border-2 rounded border-white hover:border-[#cd6e15] hover:text-[#cd6e15]" href="https://xsaul.github.io/blogr-landing-page/" target="_blank">Blogr site</a>
            </div>
            <div className="basis-1/3 flex-1 py-5 mb-5">
              <img
                src={web6}
                alt=""
                className="rounded-lg object-cover w-full h-full mb-10"
                layout="responsive"
              />
              <a className="py-5 px-2 mt-5 text-2xl text-gray-200 border-solid border-2 rounded border-white hover:border-[#cd6e15] hover:text-[#cd6e15]" href="https://xsaul.github.io/hulu-landingpage-clone/" target="_blank">Hulu clone page</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
