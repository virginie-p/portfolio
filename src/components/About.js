import React from 'react'
import photo from './../img/profile-picture.png'
import divider from './../img/divider-01.png'

function About() {
    return (
        <section id="about-me">
            <div className="sectionTitle">
                <img src={divider} alt=""/>
                <h1>A propos de moi</h1>
                <img src={divider} alt=""/>
            </div>
            <div className="sectionContent">
                <img id="profilePicture" src={photo} alt=""/>
                <div id="bubble">
                    <p>
                        "Geekette" depuis le plus jeune âge, j'ai débuté ma carrière dans la gestion de projets. <br/>
                        Alors que, par attrait, je me spécialisais dans le domaine web, je me suis rendue compte que les langages informatiques m'intéressaient tout particulièrement. <br/>
                        J'ai donc entamé une reconversion professionnelle et me voilà Développeuse Web ! </p>
                </div>
            </div>
            

        </section>
    )
}

export default About