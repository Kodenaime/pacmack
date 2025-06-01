import React from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Timer from './components/Timer/Timer'
import Goal from './components/Goal/Goal'
import Events from './components/Events/Events'
import Speakers from './components/Speakers/Speakers'
import Location from './components/Location/Location'
import Sponsors from './components/Sponsors/Sponsors'
import Team from './components/Team/Team'
import Donate from './components/Donate/Donate'
import Contact from './components/Contact/Contact'
import Faqs from './components/Faqs/Faqs'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Hero />
      <Timer />
      <About />
      <Goal />
      <Events />
      <Speakers />
      <Location />
      <Sponsors />
      <Team />
      <Donate />
      <Contact />
      <Faqs />
      <Donate />
      <Footer />
    </div>
  )
}

export default App