
var swiper = new Swiper(".mySwiper", {
    effect: "cards",  
    grabCursor: true,   
    initialSlide: 2,
    cardsEffect: {
        rotate: true,  
        perSlideOffset: 18, 
        perSlideRotate: 10,  
    },
    autoplay: {
        delay: 5000,
    },
});

let menu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");

menu.addEventListener("click", (e) => {
    mobileMenu.classList.toggle("hidden");
});
