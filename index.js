let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');

let elementsToShow = getElementsToShow();
let cardWidth = calculateCardWidth();

function toggleTextVisibility() {
    let elementsText = document.querySelectorAll('.sliderList p');
    let elementsImage = document.querySelectorAll('.sliderList img');

    if (window.innerWidth <= 650) {
        elementsText.forEach(el => {
            el.style.fontSize = "12px";
        });
        elementsImage.forEach(el => {
            el.style.height = "50%";
        });
        
    } else if (window.innerWidth <= 900) {
        elementsText.forEach(el => {
            el.style.fontSize = "14px";
        });
        elementsImage.forEach(el => {
            el.style.height = "70%";
        });
    }
    else {
        elementsText.forEach(el => el.style.display = 'block');
    }

}

toggleTextVisibility();
window.addEventListener('resize', toggleTextVisibility);


// Apply initial styles
updateSliderStyles();

// Update layout on window resize
window.addEventListener('resize', () => {
    elementsToShow = getElementsToShow();
    cardWidth = calculateCardWidth();
    updateSliderStyles();
});

// Function to determine elements to show based on screen size
function getElementsToShow() {
    if (window.innerWidth <= 600) return 1;  // Mobile: Show 1 element
    if (window.innerWidth <= 900) return 2;  // Tablet: Show 2 elements
    return 3;  // Default: Show 3 elements
}

// Function to calculate card width dynamically
function calculateCardWidth() {
    return sliderContainer.clientWidth / elementsToShow;
}

// Function to update styles dynamically
function updateSliderStyles() {
    let newWidth = cards.length * cardWidth;
    slider.style.width = newWidth + 'px';

    for (let index = 0; index < cards.length; index++) {
        cards[index].style.width = cardWidth + 'px';
    }

    // Reset margin to avoid layout issues
    slider.style.marginLeft = '0px';

    // Ensure smooth transitions
    slider.style.transition = 'margin-left 0.5s ease-in-out';
}

// Next Slide Function
function next() {
    let currentMargin = parseFloat(slider.style.marginLeft) || 0;
    let maxMargin = -cardWidth * (cards.length - elementsToShow);

    if (currentMargin > maxMargin) {
        slider.style.marginLeft = (currentMargin - cardWidth) + 'px';
    }
}

// Previous Slide Function
function prev() {
    let currentMargin = parseFloat(slider.style.marginLeft) || 0;

    if (currentMargin < 0) {
        slider.style.marginLeft = (currentMargin + cardWidth) + 'px';
    }
}

