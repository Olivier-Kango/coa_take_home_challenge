// Function to show the next image in the gallery
function showNextImage() {
  const currentImage = document.querySelector('.img-gallery .image-container.active');
  const nextImage = currentImage.nextElementSibling;
  if (nextImage) {
    currentImage.classList.remove('active');
    nextImage.classList.add('active');
  }
}

// Function to show the previous image in the gallery
function showPrevImage() {
  const currentImage = document.querySelector('.img-gallery .image-container.active');
  const prevImage = currentImage.previousElementSibling;
  if (prevImage) {
    currentImage.classList.remove('active');
    prevImage.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let startX = 0;
  let isDragging = false;

  function handleTouchStart(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
  }

  function handleTouchMove(e) {
    if (!isDragging) return;
    const endX = e.touches[0].clientX;
    const diffX = startX - endX;
    if (diffX > 50) {
      showNextImage();
      isDragging = false;
    } else if (diffX < -50) {
      showPrevImage();
      isDragging = false;
    }
  }

  function handleMouseDown(e) {
    startX = e.clientX;
    isDragging = true;
  }

  function handleMouseMove(e) {
    if (!isDragging) return;
    const endX = e.clientX;
    const diffX = startX - endX;
    if (diffX > 50) {
      showNextImage();
      isDragging = false;
    } else if (diffX < -50) {
      showPrevImage();
      isDragging = false;
    }
  }

  document.addEventListener('touchstart', handleTouchStart);
  document.addEventListener('touchmove', handleTouchMove);
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mousemove', handleMouseMove);

  // Prevent default behavior on touchmove and mousemove to prevent interference with swipe
  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
  });
});
