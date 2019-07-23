import imageP1 from './../src/img/projet-1.png'
import imageP2 from './../src/img/projet-2.png'
import imageP3 from './../src/img/projet-3.png'
import imageP4 from './../src/img/projet-4.png'
import imageP5 from './../src/img/projet-5.png'

const projects = [
    {
        key: 1,
        bullet: "=0",
        name: "WebAgency : intégration d'un maquette",
        image: imageP1
    },
    {
        key: 2,
        bullet: "=1",
        name: "Office du Tourisme de Strasbourg : site Wordpress",
        image: imageP2
    },
    {
        key: 3,
        bullet: "=2",
        name: "Bikee: récupération de données via une API et affichage dynamique d'une carte en JS",
        image: imageP3
    }, 
    {
        key: 4,
        bullet: "=3",
        name: "Un Billet pour l'Alaska: blog avec back-office d'administration en PHP",
        image: imageP4
    }, 
    {
        key: 5,
        bullet: "=4",
        name: "Epic Friends: site de rencontres amicales pour Geek (projet de fin de formation)",
        image: imageP5
    }
];

export default projects