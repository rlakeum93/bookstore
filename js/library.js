const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let counter = 0;

function updateCarousel() {
  slide.style.transform = `translateX(-${1300 * counter}px)`; // move exactly 1300px per slide
  dots.forEach(dot => dot.classList.remove('active'));
  dots[counter].classList.add('active');
}

next.addEventListener('click', () => {
  counter = (counter + 1) % images.length;
  updateCarousel();
});

prev.addEventListener('click', () => {
  counter = (counter - 1 + images.length) % images.length;
  updateCarousel();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    counter = index;
    updateCarousel();
  });
});

// Auto play
setInterval(() => {
  counter = (counter + 1) % images.length;
  updateCarousel();
}, 7000); // 4000ms = 4 seconds

// Initial slide
showSlide(slideIndex);
