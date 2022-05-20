// counter rond

let totalNumber = document.querySelectorAll('.counter-text');
let getNumber = Array.from(totalNumber)

//
// window.onscroll = function() {counterscroll};

// 
// let skills = document.getElementById('skilling');

//
//let stockage = skills.offsetTop;

// fonction scrolling
// function counterscroll() {
    // si on scroll verticalement, quand on arrive sur la nav, on appel le class sticky 
    // if (window.pageYOffset >= stockage) { 
        getNumber.map((viewNumber) => {
            console.log(viewNumber.dataset.number)
            let startCount = 0
            let counterUP = () => {
                startCount++
                viewNumber.innerHTML = `${startCount}`
                if(startCount == viewNumber.dataset.number){
                    clearInterval(countStop)
                }
            }
            let countStop = setInterval(() => {
                counterUP()
            },50)
        })
  //  } 
// }

// counter jauge

let jauge25 = document.querySelector('.coding-25');
let jauge30 = document.querySelector('.coding-30');
let jauge33 = document.querySelector('.coding-33');
let jauge40 = document.querySelector('.coding-40');
let jauge45 = document.querySelector('.coding-45');
let jauge60 = document.querySelector('.coding-60');
let jauge75 = document.querySelector('.coding-75');
let jauge80 = document.querySelector('.coding-80');
let number = document.querySelectorAll('.coding__rod')
let pourcentage = 0;
let addition = 0.3;
jauge25.style.width= '0%'
jauge30.style.width= '0%'
jauge33.style.width= '0%'
jauge40.style.width= '0%'
jauge45.style.width= '0%'
jauge60.style.width= '0%'
jauge75.style.width= '0%'
jauge80.style.width= '0%'

setInterval (
    function() {
        if (pourcentage <= 25)
        {
            pourcentage += addition
            jauge25.style.width = `${pourcentage}%`
        }
        if (pourcentage <= 30)
        {
            pourcentage += addition
            jauge30.style.width = `${pourcentage}%`
        }
        if (pourcentage <= 33)
        {
            pourcentage += addition
            jauge33.style.width = `${pourcentage}%`
        }
        if (pourcentage <= 40)
        {
            pourcentage += addition
            jauge40.style.width = `${pourcentage}%`
        }
        if (pourcentage <= 45)
        {
            pourcentage += addition
            jauge45.style.width = `${pourcentage}%`
        }
        if (pourcentage <= 60)
        {
            pourcentage += addition
            jauge60.style.width = `${pourcentage}%`
        }
        if (pourcentage <= 75)
        {
            pourcentage += addition
            jauge75.style.width = `${pourcentage}%`
        }
        if (pourcentage <= 80)
        {
            pourcentage += addition
            jauge80.style.width = `${pourcentage}%`
        }
    },
    100)
    
    
    
    
    