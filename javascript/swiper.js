// Function to find the index of the current image in the gallery
function findCurrentImageIndex(src) {
  const images = document.querySelectorAll('.img-gallery img');
  for (let i = 0; i < images.length; i += 1) {
    if (src === images[i].src) {
      return i;
    }
  }
  return -1; // Return -1 if the image is not found
}

// Function to show the next image in the gallery
function showNextImage() {
  const fullImage = document.getElementById('fullImg');
  const currentIndex = findCurrentImageIndex(fullImage.src);
  if (currentIndex >= 0) {
    const images = document.querySelectorAll('.img-gallery img');
    const nextIndex = (currentIndex + 1) % images.length; // Wrap around to the first image
    fullImage.src = images[nextIndex].src;
  }
}

// Function to show the previous image in the gallery
function showPrevImage() {
  const fullImage = document.getElementById('fullImg');
  const currentIndex = findCurrentImageIndex(fullImage.src);
  if (currentIndex >= 0) {
    const images = document.querySelectorAll('.img-gallery img');
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    fullImage.src = images[prevIndex].src;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let startX = 0;
  let isDragging = false;

  // Function to handle touchstart event
  function handleTouchStart(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
  }

  // Function to handle touchmove event
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

  // Function to handle mousedown event
  function handleMouseDown(e) {
    startX = e.clientX;
    isDragging = true;
  }

  // Function to handle mousemove event
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

  // Add event listeners for touch and mouse events to handle dragging/swiping
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

  // Initialize the gallery by setting the first image as the full image
  const images = document.querySelectorAll('.img-gallery img');
  if (images.length > 0) {
    document.getElementById('fullImg').src = images[0].src;
  }
});
