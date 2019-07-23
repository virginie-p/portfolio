import React from 'react'
import divider from './../img/divider-01.png'
import PDF from './../img/pdf.png'

function Journey() {
    return (
            <section id="my-journey">
                <div className="sectionTitle">
                    <img src={divider} alt=""/>
                    <h1>Mon Parcours</h1>
                    <img src={divider} alt=""/>
                </div>
                <div>
                    <p>Vous voulez en savoir plus sur le chemin que j'ai parcouru ? </p>
                    <a style={{display:"flex", justifyContent:"center"}} href="https://virginie-pereira.fr/CV.pdf">
                        <p>Téléchargez mon CV</p>
                        <img style={{width:"40px", paddingLeft:"10px"}} src={PDF} alt="Lien vers mon CV"/>
                    </a>  
                </div>
            </section>
    )
}

export default Journey