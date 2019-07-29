import React from 'react'
import LinkedIn from './../img/linkedin.png'
import Github from './../img/github.png'

function Footer() {
    return (
        <footer>
            <p>Virginie PEREIRA - 2019 ©</p>
            <ul>
                <li><a href="https://www.linkedin.com/in/virginie-pereira-4898ab76/"><img src={LinkedIn} alt=""/></a></li>
                <li><a href="https://github.com/virginie-p"><img src={Github} alt=""/></a></li>
            </ul>
        </footer>
    )
}

export default Footer