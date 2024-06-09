document.addEventListener('DOMContentLoaded', () => {
  // Select all the images within the .img-gallery
  let images = document.querySelectorAll('.img-gallery img');

  // Select elements for the modal
  const wrapper = document.getElementById('wrapper');
  const imgWrapper = document.getElementById('fullImg');
  const close = document.querySelector('.close');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  let currentIndex = 0; // Initialize the current index

  // Function to open the modal with a specific index
  function openModal(index) {
    currentIndex = index; // Set the current index
    wrapper.style.display = 'flex'; // Display the modal
    imgWrapper.src = images[currentIndex].src; // Set the source of the modal image
  }

  // Function to attach event listeners to each image
  function attachEventListeners() {
    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        openModal(index); // Open the modal with the index of the clicked image
      });
    });
  }

  attachEventListeners(); // Attach event listeners to images

  // Event listener for the close button
  close.addEventListener('click', () => {
    wrapper.style.display = 'none'; // Hide the modal when the close button is clicked
  });

  // Event listener for the previous button
  prev.addEventListener('click', () => {
    // Update the current index
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    // Set the source of the modal image to the previous image
    imgWrapper.src = images[currentIndex].src;
  });

  // Event listener for the next button
  next.addEventListener('click', () => {
    // Update the current index
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    // Set the source of the modal image to the next image
    imgWrapper.src = images[currentIndex].src;
  });

  // Re-attach event listeners when images are updated (if needed)
  document.addEventListener('imagesUpdated', () => {
    // Re-select the images because they have been replaced
    images = document.querySelectorAll('.image-container img');
    // Re-attach event listeners to images
    attachEventListeners();
  });
});
