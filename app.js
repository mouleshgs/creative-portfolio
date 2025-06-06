// anime({
//     targets: '#box',
//     translateX: window.innerWidth-250,
//     easing: 'easeInOutQuad',
//     duration: 3000,
//     loop: false,
//     direction: 'alternate',
// }); 


const name = document.getElementById("my-name");
const namemoulesh = document.querySelector(".namemoulesh");
const blob = document.querySelector(".blob");
const skills = document.querySelectorAll(".skill");

anime ({
    targets: '.namemoulesh',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 14000,
    delay: function(el, i) { return i * 250},
    direction: 'alternate-reverse',
});

anime ({
    targets: '.blob',
    translateX: 10,
    skew: '10',
    rotate: '20',
    scale: 1.1,
    duration: 2000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop:true,
});

  anime({
    targets: '#floating-div',
    scale: [1.1, 1.15],
    rotate: [10, -3, 10],
    duration: 6000,
    delay: 500,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: 3
  });



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skill = entry.target;

            anime({
                targets: skill,
                duration: 2000,
                width: ['0%', getComputedStyle(skill).width], 
                easing: 'cubicBezier(.5, .05, .1, .3)',
            });

            observer.unobserve(skill);

        }
    });
}, {
    threshold: 0.8, 
});

skills.forEach(skill => observer.observe(skill));


name.addEventListener('mouseover', () => {
    namemoulesh.classList.add('fill-blue-500');
});

name.addEventListener('mouseout', () => {
    namemoulesh.classList.remove('fill-blue-500');
});


