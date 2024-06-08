document.addEventListener('DOMContentLoaded', () => {
  let images = document.querySelectorAll('.img-gallery img');
  const wrapper = document.getElementById('wrapper');
  const imgWrapper = document.getElementById('fullImg');
  const close = document.querySelector('.close');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  let currentIndex = 0;

  function openModal(index) {
    currentIndex = index;
    wrapper.style.display = 'flex';
    imgWrapper.src = images[currentIndex].src;
  }

  function attachEventListeners() {
    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        openModal(index);
      });
    });
  }

  attachEventListeners();

  close.addEventListener('click', () => {
    wrapper.style.display = 'none';
  });

  prev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    imgWrapper.src = images[currentIndex].src;
  });

  next.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    imgWrapper.src = images[currentIndex].src;
  });

  // Re-attach event listeners when images are updated
  document.addEventListener('imagesUpdated', () => {
    // Re-select the images because they have been replaced
    images = document.querySelectorAll('.image-container img');
    attachEventListeners();
  });
});
