import { Outlet } from "react-router-dom"
import Projects from "../Components/Projects"
import Skills from "../Components/Skills";
import AboutMe from "../Components/AboutMe";
import Footer from "../Components/Footer";
import { Link as ScrollLink } from 'react-scroll';


const RootLayout = () => {
  
  return (
    <>
        <div className="px-20 py-6 h-auto">
              <div>
                <div className="flex justify-between w-full items-center">
                  <span className="font-semibold hover:underline">Suharshit Singh Sachdeva</span>
                  <span className="font-semibold hover:underline">Full-Stack Web Developer</span>
                  <span>
                      <ScrollLink to="section-Projects" smooth={true} duration={400} className="px-5 cursor-pointer rounded-lg py-2 hover:text-[#865Dff] hover:shadow-[#865DFF] hover:shadow-md hover:ease-in bg-zinc-800">
                          Projects
                      </ScrollLink>
                  </span>
                  <span>
                      <ScrollLink to="section-about-me" smooth={true} duration={400} className="px-5 cursor-pointer rounded-lg py-2 hover:shadow-[#865DFF] hover:text-[#865Dff] hover:shadow-md hover:ease-in bg-zinc-800">
                          About Me
                      </ScrollLink>
                  </span>
                </div>
              </div>
            <div className="h-screen">
              <Outlet/>
            </div>
            <div className="h-screen py-8">
              <Skills/>
            </div>
            <div id="section-Projects" className="h-screen py-8">
              <Projects/>
            </div>
            <div id="section-about-me" className="h-screen py-8">
              <AboutMe/>
            </div>
            <div className="h-[20vh] mt-3">
              <Footer/>
            </div>
        </div>
    </>
  )
}

export default RootLayout