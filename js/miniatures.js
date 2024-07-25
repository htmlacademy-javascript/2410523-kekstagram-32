const userImage = document.querySelector('.pictures');
const miniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createImages = (picture) => {
  const photosElement = miniaturesTemplate.cloneNode(true);
  photosElement.querySelector('.picture__img').src = picture.url;
  photosElement.querySelector('.picture__img').alt = picture.description;
  photosElement.querySelector('.picture__likes').textContent = picture.likes;
  photosElement.querySelector('.picture__comments').textContent = picture.comments.length;
  photosElement.querySelector('.picture__img').dataset.pictureId = picture.id;

  return photosElement;
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
