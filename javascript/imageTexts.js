document.addEventListener('DOMContentLoaded', () => {
  const imageTexts = [
    { title: 'Title 1', country: 'Country 1' },
    { title: 'Title 2', country: 'Country 2' },
    { title: 'Title 3', country: 'Country 3' },
    { title: 'Title 4', country: 'Country 4' },
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
});
