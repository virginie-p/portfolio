import React from 'react'
import Banner2 from './../img/banniere.jpg'
import Wave from './Wave.js'
import Arrow from './../img/arrow.png'

class Header extends React.Component {
    navigateToSection(e) {
        e.preventDefault();
        let elementID = e.target.getAttribute('data-section');
        let navSize = document.getElementsByClassName('responsive-menu')[0].offsetHeight;
        let elementTop = document.getElementById(elementID).getBoundingClientRect().top;
        let bodyRect = document.body.getBoundingClientRect().top;

        let offsetPosition = (elementTop - bodyRect) - navSize;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

    }
    render() {
        return (
            <div className="header">
                <img src={Banner2} alt="Bureau avec un ordinateur portable de développeur" />
                <div className="headerContent">
                    <h1>Virginie Pereira</h1>
                    <h2>Développeuse Web</h2>
                    <div className="box bounce-7">
                        <div id="arrow">
                            <img data-section="about-me" onClick={this.navigateToSection} style={{with: "auto"}} src={Arrow} alt="Flèche incitant à scroller vers le bas"/>
                        </div>
                    </div>
                </div>
                <Wave className="wave" />
            </div>
        )
    }
}

export default Header