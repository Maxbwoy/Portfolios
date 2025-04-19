import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Certificate from './Cert'
import Contact from './Contact'
import Home from './Home'
import Skill from './Skill'
import Project from './Project'
import Hero from './Hero'
import './App.css'
// import CertificateView from './CertificateView'
// import ProjectDetail from './ProjectDetail'
import NavBar from './NavBar'
import About from './About'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Cert" element={<Certificate />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        {/* <Route path="/certificates/:id" element={<CertificateView />} /> */}
        {/* <Route path="/projects/:id " element={<ProjectDetail />} /> */}
      </Routes>
    </Router>
  )
}

export default App
