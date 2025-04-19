import useFetch from "./UseFetch"
import Contact from "./Contact";
import Footer from "./Footer";
import Skill from "./Skill";
import Certificate from "./Cert"
import Project from "./Project";
import About from "./About"
import Hero from "./Hero"
const Home = () => {
    // const { error, isPending, data: certificates } = useFetch('http://localhost:8000/certificates')
    // const { data: skills } = useFetch('http://localhost:8000/skills')
    // const { data: projects } = useFetch('http://localhost:8000/projects')
    // const { data: aboutme } = useFetch('http://localhost:8000/aboutme')
    // const { data: certificates } = useFetch('http://localhost:8000/certificates')
    return (
        <div className="home">
              <section id="hero" className="hero">
                {/* { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div>}
                { heros && <Hero heros={heros} /> } */}
                <Hero />
                 </section>         
            <section id="skills" className="skills">
                {/* { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { skills && <Skill skills={skills} /> } */}
                <Skill />
            </section>        
            <section id="about" className="about">
                {/* { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { aboutme && <About aboutme={aboutme} /> } */}
                <About />
            </section>        
            <section id="projects" className="projects">
                <div className="container">
                    <h2>Projects</h2>
                    <div className="project-list">
                        <Project />
                    </div>
                </div>
            </section>        
            <section id="certificates" className="certificates">
                {/* { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { certificates && <Certificate certificates={certificates} /> } */}
                <Certificate />
            </section>        
            <section id="contact" className="contact">
                <Contact />
            </section>        
            <div className="footer">
                <Footer />
            </div>        
        </div>
    )
}

export default Home