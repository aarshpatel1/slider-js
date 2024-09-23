const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length; // 6
let currentSlide = 0;
const intervelTime = 3000;
let slideIntervel;

// move slides
function updateSlide() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// move slide to next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlide();
}

// move silde to previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlide();
}

// Automatic slide intervel
function startSlider() {
    slideIntervel = setInterval(nextSlide, intervelTime);
}

// stop the slider
function stopSlider() {
    clearInterval(slideIntervel);
}

// EVENT LISTNERS
document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
    stopSlider();
    startSlider();
});

document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
    stopSlider();
    startSlider();
});

// automatically start the slider
startSlider();