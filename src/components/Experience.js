import { Item } from "./Item"
import { Element } from "react-scroll"
export const Experience = () => {
  const experiences = [
    {
      title: "Cornell Web Development",
      description: "At Cornell Web Development, I've played a pivotal role as a Software Engineer, implementing a robust MongoDB backend for user authorization while leveraging Microsoft Azure to efficiently manage and store data for a user base. My efforts significantly boosted system performance by 40% through the implementation of Weviate, reducing search times and enhancing overall efficiency. Additionally, I've excelled in fostering a collaborative environment, bridging the gap between design and development teams, resulting in successful and streamlined product development cycles.",
      dates: "Aug 2023 - Present"
    },
    {
      title: "Cornell Jiang Biomedical Lab",
      description: "My tenure at Cornell Jiang Biomedical Lab has been marked by substantial contributions as an Undergraduate Research Assistant. Notably, I introduced automation into our data processing workflow, achieving an astounding 98% reduction in processing time through the implementation of Python scripts. Furthermore, I've taken the lead in team presentations, aligning our research endeavors with project objectives and ensuring seamless progress updates. Additionally, I successfully developed and fine-tuned a neural network, attaining an impressive 80% accuracy rate for analyzing Raman spectroscopy samples.",
      dates: "Aug 2023 - Present"
    },
    {
      title: "355Code",
      description: "At 355Code, I've crafted tailored lesson plans that cater to diverse learning styles and aptitudes, ensuring each student grasps fundamental concepts while cultivating a deeper understanding of these programming languages. Employing a structured yet adaptable approach, I've guided students through the intricacies of coding, encouraging hands-on exploration and project-based learning. Through patient guidance and individualized attention, I've witnessed significant strides in students' comprehension and application of Python and JavaScript, fostering not only technical proficiency but also instilling problem-solving skills essential for their academic and future professional endeavors.",
      dates: "Aug 2023 - Present"
    },
    {
      title: "Data Science for Cornell ",
      description: "During my involvement with Data Science for Cornell, I contributed significantly as an Undergraduate Research Assistant. My primary focus was on optimizing room selection in housing assignments using Shapley matching methodologies, resulting in a fairer and more efficient allocation process. Facilitating regular meetings to present our findings and managing insightful discussions on research papers were integral to ensuring progress alignment within the team.",
      dates: "Jan 2023 – May 2023"
    },

  ]
  return (
    <Element name="experience">
      <div className="snap-start h-screen pt-24 pl-16 pr-16 pb-16 flex flex-col">
        <div className="rounded h-full">
          <div className="p-4"> Experience </div>
          {
            experiences.map((experience) => (
              <Item isExperience={true} title={experience.title} description={experience.description} dates={experience.dates} />
            ))
          }

        </div>
      </div>
    </Element>
  )
}