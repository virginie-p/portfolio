import React, {Component} from 'react'
import Burger from './../img/menu.png'
import Logo from './../img/logo.png'

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

        if (window.innerWidth <= 750) {
            let menuTitle = document.getElementsByClassName('toggleMenu')[0];
            menuTitle.addEventListener('click', toggleMenu);
            menuElts.addEventListener('click', toggleMenu);
        }

    }

    navigateToSection(e) {
        e.preventDefault();
        let elementID = e.target.getAttribute('data-section');
        let navSize = document.getElementsByClassName('responsive-menu')[0].offsetHeight;
        let elementTop = document.getElementById(elementID).getBoundingClientRect().top;
        let bodyRect = document.body.getBoundingClientRect().top;
        console.log('elementTop:' + elementTop);
        console.log('navSize:' + navSize);

        let offsetPosition = (elementTop - bodyRect) - navSize;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

    }

    render() {
        return (
            <nav className="menuCollapsible">
                <div className="responsive-menu">
                    <div id="menu-logo">
                        <img src={Logo} alt="Logo de Virginie PEREIRA"/>
                    </div>
                    <div className="toggleMenu">
                        <p>Menu</p>
                        <img src={Burger} alt="Icône cliquable pour accéder au menu"/>
                    </div>
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