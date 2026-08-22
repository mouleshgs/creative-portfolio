import { useState } from 'react'

export default function About() {
  const [githubHovered, setGithubHovered] = useState(false)

  return (
    <section id="about" className="overflow-hidden min-h-screen relative flex items-center justify-center">
      <style>{`@keyframes blob-drift {
        from { transform: translateX(0) skew(0deg) rotate(0deg) scale(1); }
        to { transform: translateX(10px) skew(10deg) rotate(20deg) scale(1.1); }
      }`}</style>
      <div className=" relative lg:ml-24 lg:static top-24 flex gap-10 lg:gap-8 flex-col w-full lg:w-1/2 justify-center items-center text-center">
        <h1 className="text-3xl lg:text-4xl text-blue-600 font-extrabold font-mono mb-4">Hello, I'm Moulesh G S,</h1>
        <p className="text-slate-600 text-sm lg:text-lg max-w-2xl px-4">A passionate <strong>student</strong> with a knack for <strong>algorithmic problem-solving, web development, and AI-powered solutions.</strong> I thrive on blending creativity and logic to craft <strong>efficient and scalable</strong> projects. With experience in <strong>Java, frontend frameworks, and machine learning,</strong> I enjoy exploring tech trends, solving challenges, and <strong>continuously improving my skills.</strong></p>
        <div className="flex flex-row gap-10 p-5 items-center justify-center">
          <button onClick={() => window.open('https://github.com/mouleshgs/', '_blank')} onMouseEnter={() => setGithubHovered(true)} onMouseLeave={() => setGithubHovered(false)} className="flex shadow-xl justify-center items-center gap-3 border p-3 rounded border-blue-500 hover:bg-black hover:text-white"><img src="/assests/svgs/github.svg" alt="" className="w-4 h-4" style={{ filter: githubHovered ? 'brightness(0) invert(1)' : 'none' }} />Github</button>
          <button onClick={() => window.open('https://www.linkedin.com/in/mouleshgs/', '_blank')} className="flex shadow-xl justify-center items-center gap-3 border p-3 rounded border-blue-500 text-slate-700 hover:bg-blue-600 hover:text-slate-100"><img src="/assests/svgs/linkedin.svg" alt="" className="w-4 h-4" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(94%) saturate(2200%) hue-rotate(213deg) brightness(80%) contrast(105%)' }} />LinkedIn</button>
        </div>
      </div>
      <div className="absolute left-[-3] opacity-85 lg:opacity-90 lg:static lg:w-1/3">
        <div className="relative top-[-40px]">
          <img src="/assests/myimage.webp" alt="Portfolio image of mine" className="lg:opacity-90 left-1/3 hover:opacity-95 hover:scale-110 transition-all rounded-full w-44 h-44 lg:w-50 lg:h-50 object-cover z-10 absolute lg:top-[31%] lg:left-1/4" />
          <svg className="blob opacity-25 lg:opacity-80" style={{ animation: 'blob-drift 2s ease-in-out infinite alternate', transformOrigin: 'center', transformBox: 'fill-box' }} viewBox="0 0 500 500" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(279.2749475430375 259.7466320640338)">
              <path d="M89.7 -117.5C118 -103 143.6 -79 148.2 -51.3C152.8 -23.7 136.3 7.6 124.7 39.6C113 71.5 106.2 104.1 86.2 113.3C66.2 122.4 33.1 108.1 -3.4 112.8C-40 117.5 -79.9 141.3 -119.6 138.5C-159.2 135.8 -198.5 106.5 -206.1 70C-213.7 33.6 -189.6 -10.1 -171.5 -52.6C-153.4 -95.2 -141.4 -136.6 -113.8 -151.3C-86.2 -166 -43.1 -154 -6.2 -145.5C30.8 -137 61.5 -132 89.7 -117.5" fill="#3b82f6" />
            </g>
          </svg>
        </div>
      </div>
      <div className="programming absolute bottom-4 left-4 pointer-events-none z-0 hidden md:block opacity-90" style={{ animation: 'programming-drift 7s ease-in-out infinite alternate' }}>
        <img src="/assests/svgs/programming-animate.svg" alt="Coding SVG" className="w-80 h-auto" />
      </div>
    </section>
  )
}
