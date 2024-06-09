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

  // Iterate over each item in the imageTexts array
  imageTexts.forEach((text, index) => {
    // Get the corresponding image element
    const image = images[index];
    // Create a container for the image and its text
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    // Create a container for the text associated with the image
    const imageText = document.createElement('div');
    imageText.classList.add('image-text');

    // Create a title element for the image
    const title = document.createElement('h2');
    // Split the title into words
    const titleWords = text.title.split(' ');
    // Check if the title has more than one word
    if (titleWords.length > 1) {
      // If so, format the title to display on two lines
      const firstLine = titleWords.slice(0, -1).join(' ');
      const secondLine = titleWords.slice(-1)[0];
      title.innerHTML = `${firstLine}<br>${secondLine}`;
    } else {
      // Otherwise, set the title as is
      title.textContent = text.title;
    }

    // Create a paragraph element for the country
    const country = document.createElement('p');
    country.textContent = text.country;

    // Append the title and country elements to the text container
    imageText.appendChild(title);
    imageText.appendChild(country);

    // Clone the image element and append it to the image container
    imageContainer.appendChild(image.cloneNode(true));
    // Append the text container to the image container
    imageContainer.appendChild(imageText);

    // Create a paragraph element for displaying additional information
    const knowMore = document.createElement('p');
    knowMore.classList.add('more-info');
    // Append the "more info" text to the image container
    imageContainer.appendChild(knowMore);
    knowMore.textContent = 'more-info';

    // Replace the original image with the new image container
    imgGallery.replaceChild(imageContainer, image);
  });

  // Dispatch a custom event to signal that the new images have been created
  document.dispatchEvent(new Event('imagesUpdated'));
});
