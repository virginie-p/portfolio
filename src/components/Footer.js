import React from 'react'
import {ReactComponent as LinkedIn} from './../img/linkedin.svg'
import {ReactComponent as Github} from './../img/github-logo.svg'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <Link to="/legal-notice">Mentions Légales</Link>
            <p>Virginie PEREIRA - 2019 ©</p>
            <ul>
                <li><a href="https://www.linkedin.com/in/virginie-pereira-4898ab76/"><LinkedIn/></a></li>
                <li><a href="https://github.com/virginie-p"><Github/></a></li>
            </ul>
        </footer>
    )
}

export default Footer