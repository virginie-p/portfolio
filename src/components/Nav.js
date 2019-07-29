import React from 'react'
import Burger from './../img/menu.png'

function Nav() {

    const navigateToSection = (e) => {
        let elementID = e.target.getAttribute('data-section');
        e.preventDefault();
        document.getElementById(elementID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    return (
        <nav className="menuCollapsible">
            <div className="toggleMenu">
                <p>Menu</p>
                <img src={Burger} alt=""/>
            </div>
            <ul className="menuElts">
                <li data-section="about-me" onClick={navigateToSection}>A propos</li>
                <li data-section="my-journey" onClick={navigateToSection}>Mon parcours</li>
                <li data-section="my-projects" onClick={navigateToSection}>Mes projets</li>
                <li data-section="contact-form" onClick={navigateToSection}>Me contacter</li>
            </ul>
        </nav>
    )

}

export default Nav