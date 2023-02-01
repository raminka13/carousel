let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slideIndex += 1;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
showSlides();