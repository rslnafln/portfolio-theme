let burger = document.querySelector(".burger")
let main_nav = document.querySelector(".nav")

Burger.addEventListener("click",function(){
    Burger.classList.toggle("active");
    Main_nav.classList.toggle("active");
});

let ignoreClickOnMeElement = document.querySelector(".nav");

document.addEventListener('click', function(event) {
    let isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    
    if(Burger.classList.contains("active")){
        
        if (!isClickInsideElement) {
            Burger.classList.toggle("active");
            Main_nav.classList.toggle("active");
        }
    }
});