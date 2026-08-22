import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import '../../output.css'
import confetti from 'canvas-confetti'
import { FaFileAlt } from 'react-icons/fa'

function App() {
  useEffect(() => {
    AOS.init({ once: true })

    // confetti similar to original site
    const canvas = document.getElementById('confetti-canvas')
    if (!canvas) return
    const myConfetti = confetti.create(canvas, { resize: true, useWorker: true })
    const duration = 6 * 1000
    const animationEnd = Date.now() + duration
    let skew = 1

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    let animationFrame

    ;(function frame() {
      const timeLeft = animationEnd - Date.now()
      const ticks = Math.max(200, 500 * (timeLeft / duration))
      skew = Math.max(0.8, skew - 0.001)

      myConfetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: { x: Math.random(), y: Math.random() * skew - 0.3 },
        colors: ['#155dfc', '#2b7fff'],
        shapes: ['circle', 'circle', 'square'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.5, 1),
        drift: randomInRange(-0.5, 0.5)
      })

      if (timeLeft > 0) animationFrame = requestAnimationFrame(frame)
    })()

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div className="relative bg-yellow-100 min-h-screen overflow-x-hidden antialiased">
      <canvas id="confetti-canvas" className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"></canvas>
      <div className="relative z-10">
      <section className="relative">
      <Header />
      <Hero />
      </section>
      <main>
        <About />
        <FaFileAlt aria-hidden="true" style={{ width: '24px', height: '24px', flexShrink: 0, color: '#f3f3f3', display: 'block' }} />
        <Skills />
        <Projects />
      </main>
      <Footer />
      </div>
      <a href="/assests/resume.pdf" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
        <span className="font-semibold">Resume</span>
      </a>
    </div>
  )
}

export default App
