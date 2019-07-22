import React from 'react'
import Banner2 from './../img/banniere.jpg'
import { tada } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

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
            <svg className="wave" version="1.1" x="0px" y="0px"
                viewBox="414 377 1440 40" preserveAspectRatio="none">
                <path d="M414,417h1440v-13.7c-72.4-9.1-186.7-20.9-323-24.3c-247.8-6.2-373.3,19.3-588,26c-124.3,3.9-306.8,3.3-529-25"/>
            </svg>
        </div>
    )
}

export default Header