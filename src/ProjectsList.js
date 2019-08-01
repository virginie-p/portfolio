import imageP1 from './../src/img/projet-1.png'
import imageP2 from './../src/img/projet-2.png'
import imageP3 from './../src/img/projet-3.png'
import imageP4 from './../src/img/projet-4.png'
import imageP5 from './../src/img/projet-5.png'

const projects = [
    {
        key: 1,
        bullet: "=0",
        name: "WebAgency : intégration d'une maquette",
        technologies: "HTML/CSS",
        image: imageP1, 
        url: "https://virginie-pereira.fr/projet-1"
    },
    {
        key: 2,
        bullet: "=1",
        name: "Office du Tourisme de Strasbourg : site Wordpress",
        technologies: "Wordpress",
        image: imageP2,
        url: "https://virginie-pereira.fr/projet-2"
    },
    {
        key: 3,
        bullet: "=2",
        name: "Bikee: site de réservations de vélo sur Nantes",
        technologies: "Javascript",
        image: imageP3,
        url: "https://virginie-pereira.fr/projet-3"
    }, 
    {
        key: 4,
        bullet: "=3",
        name: "Un Billet pour l'Alaska: blog avec back-office d'administration",
        technologies: "PHP, jQuery,Bootstrap",
        image: imageP4,
        url: "https://virginie-pereira.fr/projet-4"
    }, 
    {
        key: 5,
        bullet: "=4",
        name: "Epic Friends: site de rencontres amicales pour Geek",
        technologies: "PHP, jQuery, Twig, Composer",
        image: imageP5,
        url: "https://epic-friends.virginie-pereira.fr/"
    }
];

export default projects