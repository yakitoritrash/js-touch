const filmstrip = document.getElementById("filmstrip");
const left_btn = document.getElementById("left-control");
const right_btn = document.getElementById("right-control");
const dots = document.getElementById("dots");

const dotElements = dots.children;
const images = document.querySelectorAll(".carimage");
const tot_slides = images.length;
let currentSlide = 0;

const updateCarousel = function() {
  filmstrip.style.transform = `translateX(${currentSlide * -100}%)`;
  for (let i = 0; i < tot_slides; i++) {
    dotElements[i].classList.remove("active-dot");
  }
  dotElements[currentSlide].classList.add("active-dot");
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

for (let i = 0; i < tot_slides; i++) {
  let dote = document.createElement("div");
  dots.appendChild(dote);
  dote.addEventListener("click", () => {
    currentSlide = i;
    updateCarousel();
  });
};

setInterval(() => {
  right_btn.click();
  if (currentSlide === tot_slides) {
    left_btn.click();
  }
}, 5000);
