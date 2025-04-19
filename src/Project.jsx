import { Link } from "react-router-dom"
import { getImageProURL } from "./utils/ImagePro-util"

const projects = [
    {
        id: "45gfsf", title: " My portfolio", description: "This is my personal porfolio Website designed to showcase my Projects.",
        lang: "fab fa-html5 fa-2x", lang1: "fab fa-css fa-2x", lang2: "fab fa-square-js fa-2x", image: "web.JPG", git: "", view: "maxbwoy.netlify.app"
    },
    {
        id: "fdddj54", title: "Website for Restraunt", description: "This is a simple website design for Restraunt.",
        lang: "fab fa-html5 fa-2x", lang1: "fab fa-css fa-2x", lang2: "fab fa-square-js fa-2x", image:"Rest.JPG", git: "https://github.com/Maxbwoy/Res", view: "https://maxres.netlify.app"
    },
    {
        id: "45hggf", title: "ToDo", description: "This is a simple ToDo website design.",
        lang: "fab fa-react fa-2x", lang1: "", lang2: "", image:"{A00FF59D-6082-450D-A305-085BE8DF5E7E}.png.jpg", git: "https://github.com/Maxbwoy/Res", view: "https://maxbtodo.netlify.app"
    }
]

const Project = () => {
    return (
        <>
            {projects.map(project => (
                <div className="project" key={project.id}>
                    <img src={getImageProURL(project.image)} alt={project.title} /*style="width: 100%; height: 200px; border-bottom: 2px solid royalblue;"*/ />
                    <div className="project-langs-container">
                        <i className={project.lang}></i>
                        <i className={project.lang1}></i>
                        <i className={project.lang2}></i>
                    </div>
                    <h2>{project.title}</h2>
                    <a href={project.git} className="project-r" target="_blank" rel="noopener noreferrer">View report</a>
                    <a href={project.view} className="project-a" target="_blank" rel="noopener noreferrer">View Project</a>
                </div >
            ))}
        </>
    )
}

export default Project