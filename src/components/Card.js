import React from 'react'

function Card({ content }) {
  const { company, title, startDate, endDate, skills, desc, link, image } = content
  return (
    <a className='transition ease-in-out delay-150 hover:scale-105' href={link}>
      <div className='platinum oxford-text p-4 flex flex-row flex-wrap'>
        {
          startDate ?
            <div className='relative w-1/4'>
              {startDate} - {endDate}
            </div>
            :
            <div>
              <img className='w-50 h-50' src={image} alt='' />
            </div>
        }
        <div className='flex flex-col space-y-2 relative w-3/4 flex-wrap'>
          <div className='font-bold'>
            {title}
          </div>
          <div className='text-sm'>
            {company}
          </div>
          <div className='text-xs'>
            {desc}
          </div>
          <div className='flex flex-row flex-wrap'>
            {
              skills.map((skill) => (
                <BubbleText text={skill} />
              ))
            }
          </div>
        </div>
      </div>
    </a>
  )
}

function BubbleText({ text }) {
  return (
    <div className='silver-lake-blue m-1 p-1 pl-2 pr-2 rounded'>
      {text}
    </div>
  )
}

export default Card