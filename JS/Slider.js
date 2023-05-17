const slidesContainer = document.querySelector('.slides');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;

function showSlide(index) {
  const slideWidth = slidesContainer.clientWidth;
  slidesContainer.style.transform = `translateX(-${slideWidth * index}px)`;
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slidesContainer.children.length) {
    currentSlide = slidesContainer.children.length - 1;
  }
  showSlide(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide(currentSlide);
