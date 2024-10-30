// Typewriter Effect
const mengetik = new Typed(".typing", {
  strings: ["Restu Ardiansyah", "Front End Development"],
  typeSpeed: 120,
  backSpeed: 60,
  loop: true,
});

let currentSlide = 0;

function changeSlide(n) {
  const slides = document.querySelectorAll(".slider-image");
  const indicators = document.querySelectorAll(".indicator");

  // Update current slide index
  currentSlide += n;

  // Loop back to the first slide if at the end
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  // Loop to the last slide if at the start
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
}

