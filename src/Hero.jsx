const Hero = () => {
    return (
        <div className="container">
            <h2> <div id="greet"></div> Hello, I'm <span>Abel Mawuse Amedor.</span></h2>
            <p>A passionate <strong>Front-end Engineer</strong> and <strong>Graphic Designer</strong> crafting beautiful and functional websites and graphics.</p>
            <a href="#projects" className="btn">View My Works <span className="far fa-eye"></span></a>
            <a href="https://github.com/Maxbwoy" className="github" target="_blank" rel="noopener noreferrer">Github<i /*style="color: white; margin-left: 5px; font-size: 25px;"*/ className="fab fa-github-square"></i></a>
        </div>
    )
}

export default Hero