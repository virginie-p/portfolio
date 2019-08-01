import React from 'react'
import photo from './../img/profile-picture.jpg'
import LeftQuote from './LeftQuote.js'
import RightQuote from './RightQuote.js'

function About() {
    return (
        <section id="about-me">
            <div className="sectionTitle">
                <h2>À propos de moi</h2>                
            </div>
            <div className="sectionContent">
                <img id="profilePicture" src={photo} alt="Virginie PEREIRA"/>
                <div id="bubble">
                    <div id="bubble-content">
                        <LeftQuote />
                        <p>
                            Geekette depuis le plus jeune âge, j'ai débuté ma carrière dans la gestion de projets.<br/>
                            Alors que, par attrait, je me spécialisais dans le domaine web, je me suis rendue compte que les langages informatiques m'intéressaient tout particulièrement.<br/>
                            J'ai donc entamé une reconversion professionnelle et me voilà Développeuse Web !
                        </p>
                        <RightQuote />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About