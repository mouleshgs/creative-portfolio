let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');

let sliderContainerWidth = sliderContainer.clientWidth;
let elementsToShow = 3;

let cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length*cardWidth+'px';
slider.style.transition = 'margin';
slider.style.transitionDuration = '1s';

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth+'px';

}

function next() {
    let a = +slider.style.marginLeft.slice(0,-2);
    let b = -cardWidth*(cards.length - elementsToShow);

    if (parseFloat(a.toFixed(2)) != parseFloat(b.toFixed(2)))
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px';
}
function prev() {
    let a = +slider.style.marginLeft.slice(0,-2);
    if (parseFloat(a.toFixed(2)) != 0)
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+'px';

}
