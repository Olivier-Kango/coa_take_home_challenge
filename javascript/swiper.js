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

document.addEventListener('DOMContentLoaded', () => {
  let startX = 0; // Initialize startX variable to track initial touch/mouse position
  let isDragging = false; // Flag to indicate whether dragging/swiping is in progress

  // Function to handle touchstart event
  function handleTouchStart(e) {
    // Get the x-coordinate of the touch position
    startX = e.touches[0].clientX;
    // Set isDragging flag to true to indicate dragging/swiping has started
    isDragging = true;
  }

  // Function to handle touchmove event
  function handleTouchMove(e) {
    // Exit if dragging/swiping is not in progress
    if (!isDragging) return;
    // Get the x-coordinate of the current touch position
    const endX = e.touches[0].clientX;
    // Calculate the horizontal distance dragged/swiped
    const diffX = startX - endX;
    // If dragged/swiped more than 50 pixels to the left, show the next image
    if (diffX > 50) {
      showNextImage();
      // Reset isDragging flag to false after the action is performed
      isDragging = false;
    } else if (diffX < -50) {
      // If dragged/swiped more than 50 pixels to the right, show the previous image
      showPrevImage();
      // Reset isDragging flag to false after the action is performed
      isDragging = false;
    }
  }

  // Function to handle mousedown event
  function handleMouseDown(e) {
    // Get the x-coordinate of the mouse position
    startX = e.clientX;
    // Set isDragging flag to true to indicate dragging/swiping has started
    isDragging = true;
  }

  // Function to handle mousemove event
  function handleMouseMove(e) {
    // Exit if dragging/swiping is not in progress
    if (!isDragging) return;
    // Get the x-coordinate of the current mouse position
    const endX = e.clientX;
    // Calculate the horizontal distance dragged/swiped
    const diffX = startX - endX;
    // If dragged/swiped more than 50 pixels to the left, show the next image
    if (diffX > 50) {
      showNextImage();
      // Reset isDragging flag to false after the action is performed
      isDragging = false;
    } else if (diffX < -50) {
      // If dragged/swiped more than 50 pixels to the right, show the previous image
      showPrevImage();
      // Reset isDragging flag to false after the action is performed
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
});
