let burger = document.querySelector(".burger")
let main_nav = document.querySelector(".nav")

burger.addEventListener("click",function(){
    burger.classList.toggle("active");
    main_nav.classList.toggle("active");
});

let ignoreClickOnMeElement = document.querySelector(".nav");

document.addEventListener('click', function(event) {
    let isClickInsideElement = ignoreClickOnMeElement.contains(event.target);

    if(burger.classList.contains("active")){

        if (!isClickInsideElement) {
            burger.classList.toggle("active");
            main_nav.classList.toggle("active");
        }
    }
});