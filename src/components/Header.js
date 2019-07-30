import React from 'react'
import Banner2 from './../img/banniere.jpg'
import Wave from './Wave.js'

function Header() {
   
    return (
        <div className="header">
            <img src={Banner2} alt="" />
            <div className="headerContent">
                <h1>Virginie Pereira</h1>
                <h2>Développeuse Web</h2>    
            </div>
            <Wave className="wave" />
        </div>
    )
}

export default Header