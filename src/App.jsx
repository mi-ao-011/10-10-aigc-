import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Strengths from './components/Strengths.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  // 支持 #about / #work 等深链接：页面加载后自动定位到对应模块
  useEffect(() => {
    const id = window.location.hash.replace('#', '')
    if (!id) return
    const target = document.getElementById(id)
    if (!target) return
    const timer = window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'auto', block: 'start' })
    }, 60)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Strengths />
        <Contact />
      </main>
    </>
  )
}
