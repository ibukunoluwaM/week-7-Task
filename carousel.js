const carousel = document.querySelector(".carousel-container");
const btns = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slides");
const backButton = document.querySelector(".button-left");
const nextButton = document.querySelector(".button-right");

// the buttons.
let counter = 0;


// defining the backButton

backButton.addEventListener("click", () => {
    counter--;
    carouselSlide();
});

// defining the nextButton
nextButton.addEventListener("click", () => {
    counter++;
    carouselSlide();
});

// the sliding process
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  

carousel.addEventListener('mouseover', () => {
    btns.forEach((btn) => {
        btn.style.display = "block";
    });
});

carousel.addEventListener('mouseout', () => {
    btns.forEach((btn) => {
        btn.style.display = "none";
    });
});

const carouselSlide = () => {
    if (counter === slides.length) {
        counter = 0;
    }

    if (counter < 0) {
        counter = slides.length - 1; 
    }

    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};