// Function to show the next image in the gallery
function showNextImage() {
  // Get the currently active image container
  const currentImage = document.querySelector('.img-gallery .image-container.active');
  // Get the next sibling of the current image container
  const nextImage = currentImage.nextElementSibling;
  // Check if there is a next image
  if (nextImage) {
    // Remove the 'active' class from the current image container
    currentImage.classList.remove('active');
    // Add the 'active' class to the next image container
    nextImage.classList.add('active');
  }
}

// Function to show the previous image in the gallery
function showPrevImage() {
  // Get the currently active image container
  const currentImage = document.querySelector('.img-gallery .image-container.active');
  // Get the previous sibling of the current image container
  const prevImage = currentImage.previousElementSibling;
  // Check if there is a previous image
  if (prevImage) {
    // Remove the 'active' class from the current image container
    currentImage.classList.remove('active');
    // Add the 'active' class to the previous image container
    prevImage.classList.add('active');
  }
}

// Event listener to handle touch events
document.addEventListener('DOMContentLoaded', () => {
  let startX = 0;
  let isDragging = false;

  // Event listener for touchstart event
  document.addEventListener('touchstart', (e) => {
    // Get the x-coordinate of the touch position
    startX = e.touches[0].clientX;
    // Set isDragging flag to true
    isDragging = true;
  });

  // Event listener for touchmove event
  document.addEventListener('touchmove', (e) => {
    // Exit if not currently dragging
    if (!isDragging) return;
    // Get the x-coordinate of the current touch position
    const endX = e.touches[0].clientX;
    // Calculate the horizontal distance dragged
    const diffX = startX - endX;
    // If dragged more than 50 pixels to the left, show the next image
    if (diffX > 50) {
      showNextImage();
      isDragging = false;
    } else if (diffX < -50) {
      showPrevImage();
      isDragging = false;
    }
  });

  // Event listener for mousedown event
  document.addEventListener('mousedown', (e) => {
    // Get the x-coordinate of the mouse position
    startX = e.clientX;
    // Set isDragging flag to true
    isDragging = true;
  });

  // Event listener for mousemove event
  document.addEventListener('mousemove', (e) => {
    // Exit if not currently dragging
    if (!isDragging) return;
    // Get the x-coordinate of the current mouse position
    const endX = e.clientX;
    // Calculate the horizontal distance dragged
    const diffX = startX - endX;
    // If dragged more than 50 pixels to the left, show the next image
    if (diffX > 50) {
      showNextImage();
      isDragging = false;
    } else if (diffX < -50) {
      showPrevImage();
      isDragging = false;
    }
  });

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
