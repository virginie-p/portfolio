if (window.href === "https://virginie-pereira.fr") {
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
}
