const userImage = document.querySelector('.pictures');
const miniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createImages = (picture) => {
  const imageElement = miniaturesTemplate.cloneNode(true);
  const itemImageElement = imageElement.querySelector('.picture__img');
  itemImageElement.src = picture.url;
  itemImageElement.alt = picture.description;
  imageElement.querySelector('.picture__likes').textContent = picture.likes;
  imageElement.querySelector('.picture__comments').textContent = picture.comments.length;
  itemImageElement.dataset.pictureId = picture.id;

  return imageElement;
};


const generateMiniatures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const miniature = createImages(picture);
    fragment.append(miniature);
  });

  userImage.append(fragment);
};


export{createImages, generateMiniatures};
