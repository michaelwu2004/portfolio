import React from 'react'
import { Link, Element } from 'react-scroll'

function Test() {
  return (
    <div>
      <div className='flex flex-row w-full relative top-0 space-x-10'>
        <Link
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
        >
          1
        </Link>
        <Link
          to="test2"
          spy={true}
          smooth={true}
          duration={500}
        >
          2
        </Link>
        <Link
          to="test3"
          spy={true}
          smooth={true}
          duration={500}
        >
          3
        </Link>
      </div>
      <Element id="test1" name="test1">
        <div className='h-96 relative'>
          penis 1
        </div>
      </Element>
      <Element id="test2" name="test1">
        <div className='h-96 relative'>
          penis 2
        </div>
      </Element>
      <Element id="test" name="test1">
        <div className='h-96 relative'>
          penis??
        </div>
      </Element>
      <Element id="test" name="test1">
        <div className='h-96 relative'>
          penis??
        </div>
      </Element>
      <Element id="test" name="test1">
        <div className='h-96 relative'>
          penis??
        </div>
      </Element>
      <Element id="test" name="test1">
        <div className='h-96 relative'>
          penis??
        </div>
      </Element>

      <Element id="test3" name="test1">
        <div className='h-96 relative'>
          penis 3
        </div>
      </Element>

    </div>
  )
}

export default Test