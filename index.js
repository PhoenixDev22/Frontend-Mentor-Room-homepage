const openNavigation = document.querySelector(".open");
const closeNavigation = document.querySelector(".close");
const theNavigation = document.querySelector(".navigation");
const theImages = Array.from(document.querySelectorAll(".hero__img"));
const theContent = Array.from(document.querySelectorAll(".content > div"));

const next = document.getElementById("next");
const previous = document.getElementById("previous");

let currentIndex = 0;

console.log(theContent)
imageSwitcher(currentIndex);

next.addEventListener("click", function(){
    if(currentIndex >= theImages.length - 1){
        currentIndex = 0;
    }else{
        currentIndex++;
    }
    imageSwitcher(currentIndex);
})
previous.addEventListener("click", function(){
    if(currentIndex <= 0){
        currentIndex = theImages.length - 1;
    }else{
        currentIndex--;
    }
    imageSwitcher(currentIndex);
})
function imageSwitcher(){
    theImages.forEach(img => {
        theImages.forEach(img => img.classList.remove("active__opacity"));
        theImages[currentIndex].classList.add("active__opacity")
    })
    theImages.forEach(cont => {
        theContent.forEach(cont => cont.classList.remove("active__opacity"));
        theContent[currentIndex].classList.add("active__opacity")
    })
}


openNavigation.addEventListener("click" , function(){
    theNavigation.classList.add("toggle__nav");
})
closeNavigation.addEventListener("click", function(){
    theNavigation.classList.remove("toggle__nav")
})