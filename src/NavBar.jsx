import { useState } from "react";

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }

    return (
        <div className="header">
            <div className="container">
                <nav className="navbar">
                    <div className={`burger-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="burger manu">
                        <span></span>
                        <span></span>
                        <span></span>

                        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#about">About me</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#certificates">Certificates</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="nav">
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#about">About me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#certificates">Certificates</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar