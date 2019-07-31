import React, {Component} from 'react'
import Burger from './../img/menu.png'

class Nav extends Component {

    componentDidMount() {
        let menuElts = document.getElementsByClassName('menuElts')[0];

        function toggleMenu() {
            if (menuElts.style.maxHeight){
                menuElts.style.maxHeight = null;
                menuElts.style.display = "hidden";
                menuElts.style.padding = 0;
            } else {
                menuElts.style.display = "block";
                menuElts.style.maxHeight = menuElts.scrollHeight + "px";
                menuElts.style.padding = "10px 0";
            }  
        }

        if (window.innerWidth <= 450) {
            let menuTitle = document.getElementsByClassName('toggleMenu')[0];
            menuTitle.addEventListener('click', toggleMenu);
            menuElts.addEventListener('click', toggleMenu);
        }

    }

    navigateToSection(e) {
        let elementID = e.target.getAttribute('data-section');
        e.preventDefault();
        document.getElementById(elementID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    render() {
        return (
            <nav className="menuCollapsible">
                <div className="toggleMenu">
                    <p>Menu</p>
                    <img src={Burger} alt=""/>
                </div>
                <ul className="menuElts">
                    <li data-section="about-me" onClick={this.navigateToSection}>A propos</li>
                    <li data-section="my-journey" onClick={this.navigateToSection}>Mon parcours</li>
                    <li data-section="my-projects" onClick={this.navigateToSection}>Mes projets</li>
                    <li data-section="contact-form" onClick={this.navigateToSection}>Me contacter</li>
                </ul>
            </nav>
        )
    }

}

export default Nav