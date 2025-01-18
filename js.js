let currentIndex = 0;
const slides = document.querySelectorAll('.slider .slide');

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
    currentIndex = (currentIndex + 1) % slides.length;
}

setInterval(changeSlide, 3000);