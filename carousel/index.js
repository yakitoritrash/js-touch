const filmstrip = document.getElementById("filmstrip");
const left_btn = document.getElementById("left-control");
const right_btn = document.getElementById("right-control");
const dots = document.getElementById("dots");

const images = document.querySelectorAll(".carimage");
const tot_slides = images.length;
let currentSlide = 0;

const updateCarousel = function() {
  filmstrip.style.transform = `translateX(${currentSlide * -100}%)`;
}

left_btn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = tot_slides - 1;
  }
  updateCarousel();
})

right_btn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= tot_slides) {
    currentSlide = 0;
  }
  updateCarousel();
})
