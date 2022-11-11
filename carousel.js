const track = document.querySelector('.img_holder');
// storing the li

const slides = Array.from(track.children);

// defining the next and previous buttons
const btns = document.querySelectorAll('.btn');
const nextButton = document.querySelector('.button-right');
const prevButton = document.querySelector('.button-left');

// define the dots
const dotNav = document.querySelector('.my-nav');
const dots = Array.from(dotNav.children);

// got the width here
const slideSize = slides[0].getBoundingClientRect();

const slideWidth = slideSize.width;


let counter = 0;
// bearings

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

// important function

const moveToSlide = (track, currentSlide, targetSlide) => {
    if (counter === slides.length) {
        counter = 0;
    }

    
    if (counter < 0) {
        counter = slides.length - 1;
    }


    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

}

prevButton.addEventListener('click', e => {
    counter--;
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
});
// CLICK RIGHT TO MOVE RIGHT

nextButton.addEventListener('click', e => {
    counter++;
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    // move to next style
   moveToSlide(track, currentSlide, nextSlide);
});

// hiding the buttons

track.addEventListener('mouseover', () => {
    btns.forEach((btn) => {
        btn.style.display = "block";
    });
});

track.addEventListener('mouseout', () => {
    btns.forEach((btn) => {
        btn.style.display = "none";
    });
});


// moving backwards






dotNav.addEventListener('click', e => {
    const clickedDot = e.target.closest('button');

    if (!clickedDot) return;
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotNav.querySelector('.current-slide');
    const clickedIndex = dots.findIndex(dot => dot === clickedDot);
    const targetSlide = slides[clickedIndex];   
})