import React from 'react'
import Banner2 from './../img/banniere.jpg'
import Wave from './Wave.js'
import Arrow from './../img/arrow.png'

function Header() {
   
    return (
        <div className="header">
            <img src={Banner2} alt="" />
            <div className="headerContent">
                <h1>Virginie Pereira</h1>
                <h2>Développeuse Web</h2>
                <div className="box bounce-7"> 
                    <div id="arrow"> 
                        <img style={{with: "auto"} }src={Arrow} alt=""/>
                    </div>
                </div>
            </div>
            <Wave className="wave" />
        </div>
    )
}

export default Header