import Collapsible from "react-collapsible"

export const Item = ({ isExperience, title, description, link, dates }) => {
  return (
    <div className="m-2.5 bg-blue-700 rounded-md p-4 transition ease-in-out delay-150 hover:scale-105">
      {isExperience ?
        <div>
          <Collapsible trigger={title + " |  " + dates}>
            <p>{description}</p>
          </Collapsible>
        </div>
        :
        <div>
          <a href={link}>
            <div >
              <div>
                {title + " | " + dates}
              </div>
            </div>
          </a>
        </div>
      }
    </div>
  )
}

