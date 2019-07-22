import React from 'react'
import Banner2 from './../img/banniere.jpg'
import { tada } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Wave from './Wave.js'

function Header() {
    const animate = {
        tada: {
            animation: '4 2s',
            animationName: Radium.keyframes(tada, 'tada')
          }
    }
   
    return (
        <div className="header">
            <img src={Banner2} alt="" />
            <div className="headerContent">
                <StyleRoot>
                    <h1 style={animate.tada}>Virginie PEREIRA</h1>
                </StyleRoot>
                <h2>Développeuse Web</h2>
                
            </div>
            <Wave className="wave" />
        </div>
    )
}

export default Header