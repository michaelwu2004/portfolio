import './Animation.css'
import Me from '../assets/michaelwu.png'
export const AboutMe = () => {
  return (
    <div className="snap-start h-screen pt-24 pb-20 flex flex-col">
      <div className="flex justify-self-center justify-center p-10 h-96 flex-1">
        <img className="rounded-lg object-fit h-full w-fit" src={Me} alt="Me" />
      </div>

      <div className="justify-self-center p-10 h-96 flex-1">
        Hey, I’m Michael Wu, a computer science sophomore at Cornell University. I’m passionate about machine learning, robotics, and full-stack development. When I’m not hitting the books or the gym, I’m brainstorming exciting tech projects with friends, aiming to innovate and make a mark in the tech world.
      </div>
      <div className="flex flex-row justify-center items-center">
        <a href="#experience" className="emphasized-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>


    </div>
  )
}


