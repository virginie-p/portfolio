import React from 'react'
import PDF from './../img/pdf.png'

function Journey() {
    return (
            <section id="my-journey">
                <div className="sectionTitle">
                    <h2>Mon Parcours</h2>
                </div>
                <div className="sectionContent">
                    <p>Vous voulez en savoir plus sur le chemin que j'ai parcouru ? </p>
                    <a href="https://virginie-pereira.fr/CV.pdf" target="_blank"  rel="noopener noreferrer">
                        <p>Téléchargez mon CV</p>
                        <img src={PDF} alt="Lien vers mon CV"/>
                    </a>  
                </div>
            </section>
    )
}

export default Journey