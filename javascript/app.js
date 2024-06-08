const images = document.querySelectorAll('.img-gallery img');
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

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    openModal(index);
  });
});

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
