import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

let menuElts = document.getElementsByClassName('menuElts')[0];

function toggleMenu() {

    if (menuElts.style.maxHeight){
        menuElts.style.maxHeight = null;
        menuElts.style.display = "hidden";
        menuElts.style.padding = 0;
    } else {
        menuElts.style.display = "block";
        menuElts.style.maxHeight = menuElts.scrollHeight + "px";
        menuElts.style.padding = "10px 0";
    }  
}

let menuTitle = document.getElementsByClassName('toggleMenu')[0];
menuTitle.addEventListener('click', toggleMenu);

if (window.innerWidth <= 450) {
    menuElts.addEventListener('click', toggleMenu);
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
