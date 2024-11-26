
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/header'
import Hero from './components/Hero'
// import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'

function App() {

  return (
    <div className='w-screen bg-black relative z-0 flex flex-col justify-center'>
        <Header />
        <Hero />
        <About />
        <Service />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
