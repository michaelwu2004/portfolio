import ezboardImage from '../assets/EzBoard.png'
import doodleBetImage from '../assets/doodleBet.png'
import repsImage from '../assets/reps.png'


const placeholder = {
  company: "Cornell",
  title: "Student",
  startDate: "Aug 2023",
  endDate: "May 2025",
  skills: ["1", "2", "3"]
}

export const experiences = [
  {
    company: "Cornell Biomedical Jiang Lab",
    title: "Undergraduate Research Assistant",
    startDate: "Aug 2023",
    endDate: "Present",
    skills: [],
    link: "https://jgroup.bme.cornell.edu/"
  },
  {
    company: "Cornell Web Development Club",
    title: "Software Developer",
    startDate: "Aug 2023",
    endDate: "Present",
    skills: [],
    link: "https://www.cornellwebdev.com/"
  },
  {
    company: "Data Science for Cornell",
    title: "Undergraduate Research Assistant",
    startDate: "Jan 2023",
    endDate: "May 2023",
    skills: []
  },
]

export const projects = [
  {
    company: "",
    title: "EZBoard",
    skills: ["React", "Express", "Socket.io", "HTTP", "Cors", "Vite"],
    link: "https://github.com/michaelwu2004/ezboard",
    image: ezboardImage
  },
  {
    company: "",
    title: "DoodleBet",
    skills: ["React", "Context API", "Tailwind"],
    link: "https://github.com/michaelwu2004/doodlebet",
    image: doodleBetImage
  },
  {
    company: "",
    title: "reps",
    skills: ["React", "Firebase", "Redux"],
    link: "https://github.com/michaelwu2004/reps",
    image: repsImage
  },
]

