import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main className="relative">
      {/* id="home" on a wrapper so footer "Home" nav link works */}
      <div id="home">
        <Hero />
      </div>
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
