import { useState } from "react"

const skills = [
    { id: 1, title: "Html", class: "fab fa-html5 fa-3x" },
    { id: 2, title: "Css", class: "fab fa-css fa-3x" },
    { id: 3, title: "JavaSript", class: "fab fa-square-js fa-3x" },
    { id: 4, title: "React", class: "fab fa-react fa-3x" },
    { id: 5, title: "Sql", class: "fa fa-database fa-3x" },
    { id: 6, title: "Php", class: "fab fa-php fa-3x" },
    { id: 7, title: "Git", class: "fab fa-square-git fa-3x" }
    // { id: 8, title: "Illustrator", class: "", image: "adobe-illustrator.abad2cbc.svg" },
    // { id: 9, title: "Figma", class: "", image: "figma2.09b2413a.svg" },
    // { id: 10, title: "Photoshop", class: "", image: "photoshop.778ccaa3.svg" }
]

const Skill = () => {
    // const [hideImage, setHideImage] = useState(null)
    // if (!skill.image) return <img style={{display:none : block}}/>
    return (
        <>
            <h2>Technical Skills</h2>
            <div className="container">
                <div className="skill-list" id="skill-lists">
                    {skills.map((skill) => (
                        <div className="skill" key={skill.id}>
                        {/* <img src={`./src/assets/skills/${skill.image}`} alt={skill.title} className={img ? '' : 'hidden'} /> */}
                            <span className={skill.class}></span>
                            <div className="names">
                                <h3>{skill.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skill