let slideIndex = 1;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

showSlides(slideIndex);

// Next/previous controls
// eslint-disable-next-line no-unused-vars
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
// eslint-disable-next-line no-unused-vars
function currentSlide(n) {
  showSlides(slideIndex = n);
}