
import { AboutMe } from "./AboutMe"
import { Experience } from "./Experience"
import { Projects } from "./Projects"
import { NavLink } from "./NavLink"

export const Home = () => {
  const navText = ['About Me', 'Experience', 'Projects']
  const dest = ['#aboutme', '#experience', '#projects']

  return (
    <div className="bg-gradient-to-r from-blue-600 from-10% to-blue-800 text-white font-bold">
      <div className='h-fit fixed top-0 z-50 pt-8 pl-8 pr-8 w-full flex flex-row bg-gradient-to-r from-blue-600 from-10% to-blue-800'>
        <div className='w-3/6'>
          Michael Wu
        </div>
        <div className='w-3/6 flex flex-row place-content-end space-x-4 '>
          {
            navText.map((text, idx) => (
              <NavLink text={text} destination={dest[idx]} />
            ))
          }

        </div>
      </div>
      <div className="snap-y snap-mandatory overflow-auto no-scrollbar h-screen bg-gradient-to-r from-blue-600 from-10% to-blue-800 pt-8">
        <div id="aboutme">
          <AboutMe />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    </div>
  )
}