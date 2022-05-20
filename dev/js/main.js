// on a besoin de la nav et des sections
let navBar = document.querySelector('header nav.nav');
let sectionsArray = document.getElementsByTagName('section');

// [MODIFIABLE] les classes qu'on veut ajouter à la nav depuis les sections
let adaptiveNavClasses = [
    '--waterbg',
    '--airbg',
    '--darkbg',
    'section-even',
    'section-odd'
];

// les limites des sections (sont actualisées si on redimensionne la fenêtre)
let sectionsLimits = refreshSectionsLimitsArray();
window.addEventListener('resize', function(){sectionsLimits = refreshSectionsLimitsArray()})

// la nav prend la classe de la section à chaque fois qu'elle passe dessus
window.addEventListener('scroll', function() {
    sectionsLimits.forEach((sectionOffset, currentSectionIndex) => {
        if(window.scrollY > sectionOffset ) {
            addNavClassFromSection(currentSectionIndex)
        }
    })
})


// la nav prend la classe de la section à l'index nthSection
function addNavClassFromSection(nthSection) {
    adaptiveNavClasses.forEach(adaptiveNavClass => {
        navBar.classList.remove(adaptiveNavClass);
        if(sectionsArray[nthSection].classList.contains(adaptiveNavClass)) {
            navBar.classList.add(adaptiveNavClass);
        }
    });
}

// établit l'emplacement des limites des sections
// (à fixer : ne se réinitialise pas si on redimensionne la fenêtre)
function refreshSectionsLimitsArray() {
    let refreshSectionsLimits = []
    Array.from(sectionsArray).forEach(section => {
        refreshSectionsLimits.push(section.offsetTop);
    })
    return refreshSectionsLimits;
}