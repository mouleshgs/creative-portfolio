import { useEffect } from 'react'

export default function Skills() {
  useEffect(() => {
    const skills = document.querySelectorAll('.skill')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skill = entry.target
            const fullWidth = getComputedStyle(skill).width
            skill.style.width = fullWidth
            observer.unobserve(skill)
          }
        })
      },
      { threshold: 0.5 }
    )

    skills.forEach((s) => {
      // start collapsed
      s.style.width = '0%'
      observer.observe(s)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="myskills" className="bg-blue-600 p-3">
      <h1 data-aos="fade-up" data-aos-duration="1000" className="text-7xl tracking-wide font-bold font-sans text-yellow-50 text-center mt-5">My Skills</h1>
      <div className="flex flex-col gap-6 m-4 justify-start mt-8 font-mono">
        {/* skills animated bars will animate width on intersection */}
        <p className="text-xl text-slate-200">Java, DSA</p>
        <div className="w-auto bg-yellow-50 h-8 rounded"><div className="skill bg-blue-500 w-10/12 h-8 rounded-l text-center"><p className="pt-1 text-white">80%</p></div></div>
        <p className="text-xl text-slate-200">React, Web Development</p>
        <div className="w-auto bg-yellow-50 h-8 rounded"><div className="skill bg-blue-500 w-4/6 h-8 rounded-l text-center"><p className="pt-1 text-white">70%</p></div></div>
        <p className="text-xl text-slate-200">Linux, Git</p>
        <div className="w-auto bg-yellow-50 h-8 rounded"><div className="skill bg-blue-500 w-3/4 h-8 rounded-l text-center"><p className="pt-1 text-white">75%</p></div></div>
      </div>
    </section>
  )
}
