////////// MENU FIXED //////////

// fenêtre "au scroll", on applique la fonction scrolling
window.onscroll = function() {Scrolling()};

// on va rechercher la nav
let nav = document.querySelector('nav');

// défini la hauteur de l'écran sur la "nav" (comme ça on doit pas faire de calcul)
let sticky = nav.offsetTop; 

// fonction scrolling
function Scrolling() {
    // si on scroll verticalement, quand on arrive sur la nav, on appel le class sticky 
    if (window.pageYOffset >= sticky) { 
        nav.classList.add ('sticky');
    } 
    // sinon on l'enleve
    else { 
        nav.classList.remove('sticky');
    }
}



