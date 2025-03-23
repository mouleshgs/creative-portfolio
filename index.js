
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
