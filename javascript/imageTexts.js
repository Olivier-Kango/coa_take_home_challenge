document.addEventListener('DOMContentLoaded', () => {
  const imageTexts = [
    { title: 'Fennec Fox', country: 'India' },
    { title: 'Humpback Whale', country: 'South Africa' },
    { title: 'Common Brown Baboon', country: 'South Africa' },
    { title: 'Spotted Deer', country: 'Amazon' },
  ];

  const imgGallery = document.querySelector('.img-gallery');
  const images = imgGallery.querySelectorAll('img');

  imageTexts.forEach((text, index) => {
    const image = images[index];
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const imageText = document.createElement('div');
    imageText.classList.add('image-text');

    const title = document.createElement('h2');
    title.textContent = text.title;

    const country = document.createElement('p');
    country.textContent = text.country;

    imageText.appendChild(title);
    imageText.appendChild(country);

    imageContainer.appendChild(image.cloneNode(true));
    imageContainer.appendChild(imageText);

    imgGallery.replaceChild(imageContainer, image);
  });

  const h2Elements = document.querySelectorAll('.image-text h2');
  h2Elements.forEach((h2) => {
    const words = h2.textContent.split(' ');
    if (words.length > 1) {
      const lastWord = words.pop();
      h2.innerHTML = `${words.join(' ')} <span class="last-word">${lastWord}</span>`;
    }
  });

  // Dispatch a custom event to signal that the new images have been created
  document.dispatchEvent(new Event('imagesUpdated'));
});
