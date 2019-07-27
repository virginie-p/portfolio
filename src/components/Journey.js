import React from 'react'
import PDF from './../img/pdf.png'

function Journey() {
    return (
            <section id="my-journey">
                <div className="sectionTitle">
                    <h1>Mon Parcours</h1>
                </div>
                <div>
                    <p>Vous voulez en savoir plus sur le chemin que j'ai parcouru ? </p>
                    <a style={{display:"flex", justifyContent:"center", textDecoration: "none", fontWeight: 800}} href="https://virginie-pereira.fr/CV.pdf" target="_blank"  rel="noopener noreferrer">
                        <p>Téléchargez mon CV</p>
                        <img src={PDF} alt="Lien vers mon CV"/>
                    </a>  
                </div>
            </section>
    )
}

export default Journey