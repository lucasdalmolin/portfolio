const options: Options = [
  { id: 'about', name: "about" },
  { id: 'experience', name: "experience" },
  // { id: 'projects', name: "Projects" },
  { id: 'contact', name: "contact" },
];

const Navbar = () => {

  return (
    <nav className='sticky top-0 border-b border-secondary-500 p-4 z-50 backdrop-blur-sm bg-opacity-30 bg-primary-200'>
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-md font-semibold">Lucas Dal Molin</h1>
        <ul className="flex flex-row space-x-1">
          {options.map((option) => (
            <li className="text-xs" id={option.id} key={option.id}>{option.name}</li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

type Option = {
  id: string
  name: string
}

export type Options = Array< Option >