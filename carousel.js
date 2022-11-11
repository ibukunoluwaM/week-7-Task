const track = document.querySelector('.img_holder');
// storing the li

const slides = Array.from(track.children);

// defining the next and previous buttons
const nextButton = document.querySelector('.button-right');
const prevButton = document.querySelector('.button-left');

// define the dots
const dotNav = document.querySelector('.my-nav');
const dots = Array.from(dotNav.children);

// got the width here
const slideSize = slides[0].getBoundingClientRect();

const slideWidth = slideSize.width;

// bearings

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);


// important function

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// moving backwards

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});
// CLICK RIGHT TO MOVE RIGHT

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    

    // move to next style
   moveToSlide(track, currentSlide, nextSlide);
})

dotNav.addEventListener('click', e => {
    const clickedDot = e.target.closest('button');

    if (!clickedDot) return;
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotNav.querySelector('.current-slide');
    const clickedIndex = dots.findIndex(dot => dot === clickedDot);
    const targetSlide = slides[clickedIndex];

    moveToSlide(track, currentSlide, targetSlide);
    // to  make the darker dots move on the current slide indeed.
    currentDot.classList.remove('current-slide');
    clickedDot.classList.add('current-slide');
})