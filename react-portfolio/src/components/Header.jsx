import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="text-lg lg:text-la flex justify-between font-light bg-blue-600 text-white p-10 h-16 items-center">
      <div className="flex justify-around lg:hidden md:gap-48 items-center gap-20">
        <button aria-label="menu" onClick={() => setOpen((s) => !s)} className="menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <h1 className="text-center whitespace-nowrap">Moulesh's Portfolio</h1>
      </div>

      <div className="ml-5">
        <ul className="gap-10 hidden lg:flex md:flex">
          <li className="hover:text-slate-400"><a href="#">Home</a></li>
          <li className="hover:text-slate-400"><a href="#about">About Me</a></li>
          <li className="hover:text-slate-400"><a href="#myskills">My Skills</a></li>
        </ul>
      </div>

      <div className="mr-5">
        <ul className="hidden gap-10 items-center lg:flex md:flex">
          <li className="hover:text-slate-400"><a href="#projects">Projects</a></li>
          <li>
            <a className="bg-blue-500 rounded p-2 hover:bg-blue-800 block" href="/contact.html">Contact Me</a>
          </li>
        </ul>
      </div>

      <nav id="mobileMenu" className={`mobile-menu transition-all duration-300 lg:hidden flex items-center justify-center w-full gap-7 bg-blue-600 bg-opacity-90 absolute left-0 text-white p-4 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'}`}>
        <a href="#" className="py-2 z-50">Home</a>
        <a href="#projects" className="py-2">Projects</a>
        <a href="#about" className="py-2">About</a>
        <a href="/contact.html" className="py-2">Contact</a>
      </nav>
    </header>
  )
}
