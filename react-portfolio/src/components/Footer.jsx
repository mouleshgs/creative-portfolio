export default function Footer() {
  return (
    <footer className="bg-blue-600 text-slate-100 py-3">
      <div className="container mx-auto px-4 text-center">
        <div className="mt-2 flex justify-center space-x-6">
          <a href="#about" className="text-gray-200 hover:text-white">About</a>
          <a href="#projects" className="text-gray-200 hover:text-white">Projects</a>
          <a href="/contact.html" className="text-gray-200 hover:text-white">Contact</a>
        </div>
        <div className="mt-3 flex justify-center space-x-6">
          <a href="https://github.com/mouleshgs" target="_blank" rel="noreferrer" aria-label="GitHub"><img src="/assests/svgs/github.svg" alt="" className="w-4 h-4" style={{ filter: 'brightness(0) saturate(100%) invert(91%) sepia(7%) saturate(239%) hue-rotate(182deg) brightness(96%) contrast(94%)' }} /></a>
          <a href="https://www.linkedin.com/in/mouleshgs/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src="/assests/svgs/linkedin.svg" alt="" className="w-4 h-4" style={{ filter: 'brightness(0) saturate(100%) invert(91%) sepia(7%) saturate(239%) hue-rotate(182deg) brightness(96%) contrast(94%)' }} /></a>
        </div>
        <p className="text-slate-200 text-sm mt-2">Life's too short for merge conflicts :)</p>
        <p className="mt-1 text-sm text-slate-300">© 2025 Moulesh.</p>
      </div>
    </footer>
  )
}
