const images = document.querySelectorAll('img');
const wrapper = document.getElementById('wrapper');
const imgWrapper = document.getElementById('fullImg');
const close = document.querySelector('span');

function openModal(pic) {
  wrapper.style.display = 'flex';
  imgWrapper.src = pic;
}

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    openModal(`images/img${index}.jpg`);
  });
});

close.addEventListener('click', () => {
  wrapper.style.display = 'none';
});
