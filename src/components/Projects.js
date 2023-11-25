import { Item } from "./Item"
export const Projects = () => {
  const projects = [
    {
      title: "reps",
      link: "https://github.com/michaelwu2004/reps",
      dates: "Jul 2023"
    }
  ]
  return (
    <div id="projects" className="snap-start h-screen flex flex-col">
      <div className="rounded pt-24 pl-16 pr-16 pb-16 overflow-auto no-scrollbar h-full">
        <div className="p-4"> Projects </div>
        {
          projects.map((project) => (
            <Item isExperience={false} title={project.title} link={project.link} dates={project.dates} />
          ))
        }


      </div>
    </div>
  )
}