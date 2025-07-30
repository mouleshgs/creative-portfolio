const canvas = document.getElementById('confetti-canvas');

const myConfetti = confetti.create(canvas, {
  resize: true,
  useWorker: true
});

const duration = 14 * 1000;
const animationEnd = Date.now() + duration;
let skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  const timeLeft = animationEnd - Date.now();

  const ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  myConfetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      y: Math.random() * skew - 0.2
    },
    colors: ['#155dfc', '#2b7fff'],
    shapes: ['circle', 'circle', 'square'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.5, 1),
    drift: randomInRange(-0.5, 0.5)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
})();


var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    initialSlide: 0,
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
