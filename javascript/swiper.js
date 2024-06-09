// swipe.js

function showNextImage() {
  const currentImage = document.querySelector('.image-container.active');
  const nextImage = currentImage.nextElementSibling;
  if (nextImage) {
    currentImage.classList.remove('active');
    nextImage.classList.add('active');
  }
}

function showPrevImage() {
  const currentImage = document.querySelector('.image-container.active');
  const prevImage = currentImage.previousElementSibling;
  if (prevImage) {
    currentImage.classList.remove('active');
    prevImage.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const imgGallery = document.querySelector('.img-gallery');
  let startX = 0;

  imgGallery.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  imgGallery.addEventListener('touchmove', (e) => {
    const endX = e.touches[0].clientX;
    const diffX = startX - endX;
    if (diffX > 50) {
      showNextImage();
    } else if (diffX < -50) {
      showPrevImage();
    }
  });

  imgGallery.addEventListener('mousedown', (e) => {
    startX = e.clientX;
  });

  imgGallery.addEventListener('mousemove', (e) => {
    const endX = e.clientX;
    const diffX = startX - endX;
    if (diffX > 50) {
      showNextImage();
    } else if (diffX < -50) {
      showPrevImage();
    }
  });

  // Prevent default behavior on touchmove and mousemove to prevent interference with swipe
  imgGallery.addEventListener('touchmove', (e) => {
    e.preventDefault();
  });

  imgGallery.addEventListener('mousemove', (e) => {
    e.preventDefault();
  });
});
