document.addEventListener('DOMContentLoaded', () => {
  // Array containing information about each image
  const imageTexts = [
    { title: 'Fennec Fox', country: 'India' },
    { title: 'Humpback Whale', country: 'South Africa' },
    { title: 'Common Brown Baboon', country: 'South Africa' },
    { title: 'Spotted Deer', country: 'Amazon' },
  ];

  // Select the container for the image gallery
  const imgGallery = document.querySelector('.img-gallery');
  // Select all the images within the gallery
  const images = imgGallery.querySelectorAll('img');

  // Function to create a new image container with associated text
  function createImageContainer(image, text) {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const imageText = document.createElement('div');
    imageText.classList.add('image-text');

    const title = document.createElement('h2');
    const titleWords = text.title.split(' ');
    if (titleWords.length > 1) {
      const firstLine = titleWords.slice(0, -1).join(' ');
      const secondLine = titleWords.slice(-1)[0];
      title.innerHTML = `${firstLine}<br>${secondLine}`;
    } else {
      title.textContent = text.title;
    }

    const country = document.createElement('p');
    country.textContent = text.country;

    imageText.appendChild(title);
    imageText.appendChild(country);

    imageContainer.appendChild(image.cloneNode(true));
    imageContainer.appendChild(imageText);

    const knowMore = document.createElement('p');
    knowMore.classList.add('more-info');
    imageContainer.appendChild(knowMore);
    knowMore.textContent = 'more-info';

    return imageContainer;
  }

  // Replace each image with a new image container containing text
  imageTexts.forEach((text, index) => {
    const image = images[index];
    const imageContainer = createImageContainer(image, text);
    imgGallery.replaceChild(imageContainer, image);
  });

  // Dispatch a custom event to signal that the new images have been created
  document.dispatchEvent(new Event('imagesUpdated'));
});
