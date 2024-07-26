const userImage = document.querySelector('.pictures');
const miniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createImages = (picture) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)
  const imageElement = miniaturesTemplate.cloneNode(true);
  const itemImageElement = imageElement.querySelector('.picture__img');
  itemImageElement.src = picture.url;
  itemImageElement.alt = picture.description;
  imageElement.querySelector('.picture__likes').textContent = picture.likes;
  imageElement.querySelector('.picture__comments').textContent = picture.comments.length;
  itemImageElement.dataset.pictureId = picture.id;
<<<<<<< HEAD
=======
  const createImage = miniaturesTemplate.cloneNode(true);
  createImage.querySelector('.picture__img').src = picture.url;
  createImage.querySelector('.picture__img').alt = picture.description;
  createImage.querySelector('.picture__likes').textContent = picture.likes;
  createImage.querySelector('.picture__comments').textContent = picture.comments.length;
  createImage.querySelector('.picture__img').dataset.pictureId = picture.id;
>>>>>>> 4e45a33 (Затык с заданием 8.14)

  return imageElement;
=======
  const photosElement = miniaturesTemplate.cloneNode(true);
  photosElement.querySelector('.picture__img').src = picture.url;
  photosElement.querySelector('.picture__img').alt = picture.description;
  photosElement.querySelector('.picture__likes').textContent = picture.likes;
  photosElement.querySelector('.picture__comments').textContent = picture.comments.length;
  photosElement.querySelector('.picture__img').dataset.pictureId = picture.id;

  return photosElement;
>>>>>>> b9891b7 (Исправления после созвона)
=======

  return imageElement;
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)
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
