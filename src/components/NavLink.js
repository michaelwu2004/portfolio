
export const NavLink = ({ destination, text }) => {
  return (
    <div className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer" >
      <a
        href={destination}>
        {text}
      </a>
    </div>
  )
}