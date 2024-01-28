import React from 'react'
import Card from './Card'
import Michael from '../assets/michaelwu.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Element, Link } from 'react-scroll'
import { experiences, projects } from './Constants';


function Home() {
  const [selectedSection, setSelectedSection] = useState(null);

  const placeholder = {
    company: "Cornell",
    title: "Student",
    startDate: "Aug 2023",
    endDate: "May 2025",
    skills: ["1", "2", "3"]
  }

  const firstP = "Hello! I'm a sophomore at Cornell University, where I am pursuing a major in Computer Science and a minor in Electrical and Computer Engineering. My academic focus revolves around of machine learning, full-stack development, and robotics."
  const secondP = "Beyond the confines of the classroom, I find joy in maintaining a healthy lifestyle through regular workouts. Additionally, I channel my creativity and passion for technology into my game studio, Wu Studio, where I engage in exciting small projects."

  return (
    <div className='flex flex-row h-screen nice-font plat-text'>
      <div className='w-1/4'>
        <div className='flex flex-col space-y-3 p-10'>
          <div>
            <img src={Michael} />
          </div>
          <div className=' font-bold'>
            Michael Wu
          </div>
          <SectionSelectors text="About Me" destination='aboutme' setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
          <SectionSelectors text="Experience" destination='experience' setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
          <SectionSelectors text="Projects" destination='projects' setSelectedSection={setSelectedSection} selectedSection={selectedSection} />
          <div className='flex flex-row space-x-4 justify-center'>
            <FontAwesomeIcon icon={faGithub} size='3x' />
            <FontAwesomeIcon icon={faLinkedin} size='3x' />
          </div>
        </div>
      </div>
      <div id='informationElement' className='w-3/4 p-10 flex flex-col space-y-8 overflow-y-auto hide-scrollbar-y'>
        <Element id='aboutme'>
          <div className='space-y-5'>
            <div>
              {firstP}
            </div>
            <div>
              {secondP}
            </div>
          </div>
        </Element>

        <Element id="experience">
          <SectionTitle text="Experiences" />
        </Element>
        {
          experiences.map((experience) => (
            <Card content={experience} />
          ))
        }

        <Element id="projects">
          <SectionTitle text="Projects" />
        </Element>
        {
          projects.map((project) => (
            <Card content={project} />
          ))
        }
      </div>
    </div>
  )
}

function SectionSelectors({ text, destination, setSelectedSection, selectedSection }) {
  const isSelected = destination === selectedSection;
  return (
    <Link
      to={destination}
      spy={true}
      smooth={true}
      duration={500}
      containerId='informationElement'
    >
      <div
        className={`cursor-pointer ${isSelected ? 'selected' : ''}`}
        onClick={() => setSelectedSection(destination)}
      >
        {text}

      </div>
    </Link>

  )
}

function SectionTitle({ text }) {
  return (
    <div className='flex flex-row items-center'>
      <div className='mr-5'>
        {text}
      </div>
      <div className="w-full border-t platinum"></div>
    </div>
  )
}

export default Home