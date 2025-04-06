
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        320: { 
            cardsEffect: {
                rotate: true,
                perSlideOffset: 6,  
                perSlideRotate: 3,  
            },
        },
        768: { 
            cardsEffect: {
                rotate: true,
                perSlideOffset: 15,
                perSlideRotate: 8,
            },
        },
        1024: {
            cardsEffect: {
                rotate: true,
                perSlideOffset: 18,
                perSlideRotate: 10,
            },
        },
    },
});


let menu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");

menu.addEventListener("click", () => {
    mobileMenu.classList.toggle("opacity-100");
    mobileMenu.classList.toggle("translate-y-0");
    mobileMenu.classList.toggle("pointer-events-auto");
});

