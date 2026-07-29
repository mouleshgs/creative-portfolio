export default function About() {
  return (
    <section id="about" className="overflow-hidden min-h-screen relative flex items-center justify-center">
      <div className=" relative lg:ml-24 lg:static top-24 flex gap-10 lg:gap-8 flex-col w-full lg:w-1/2 justify-center items-center text-center">
        <h1 className="text-3xl lg:text-4xl text-blue-600 font-extrabold font-mono mb-4">Hello, I'm Moulesh G S,</h1>
        <p className="text-slate-600 text-sm lg:text-lg max-w-2xl px-4">A passionate <strong>student</strong> with a knack for <strong>algorithmic problem-solving, web development, and AI-powered solutions.</strong> I thrive on blending creativity and logic to craft <strong>efficient and scalable</strong> projects.</p>
        <div className="flex flex-row gap-10 p-5 items-center justify-center">
          <button onClick={() => window.open('https://github.com/mouleshgs/', '_blank')} className="flex shadow-xl justify-center items-center gap-3 border p-3 rounded border-blue-500 hover:bg-black hover:text-white">Github</button>
          <button onClick={() => window.open('https://www.linkedin.com/in/mouleshgs/', '_blank')} className="flex shadow-xl justify-center items-center gap-3 border p-3 rounded border-blue-500 text-slate-700 hover:bg-blue-600 hover:text-slate-100">LinkedIn</button>
        </div>
      </div>
    </section>
  )
}
