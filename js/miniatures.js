const userImage = document.querySelector('.pictures');
const miniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createImages = (picture) => {
  const createImage = miniaturesTemplate.cloneNode(true);
  createImage.querySelector('.picture__img').src = picture.url;
  createImage.querySelector('.picture__img').alt = picture.description;
  createImage.querySelector('.picture__likes').textContent = picture.likes;
  createImage.querySelector('.picture__comments').textContent = picture.comments.length;

  return createImage;
};


const generateMiniatures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const miniature = createImages(picture);
    fragment.append(miniature);
  });

  userImage.append(fragment);
};

export{generateMiniatures};
