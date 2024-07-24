import { isEscapeKey } from './utils.js';
import { generatePhoto } from './data.js';

<<<<<<< HEAD
const bigPicture = document.querySelector('.big-picture');

bigPicture.addEventListener('click', (evt) => {
  evt.preventDefault();
  bigPicture.classList.remove('hidden');
  const createBigImage = () => {
=======
//import {createImages, generateMiniatures} from './miniatures.js';
>>>>>>> 61e95ab (Работаю над 8.1 ч3)

const containerPictures = document.querySelector('.pictures');
const bigPictureElement = document.querySelector('.big-picture');
const bigPicturePreview = document.querySelector('.big-picture__preview');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const commentsSocial = document.querySelector('.social__comment-count');
const commentsLoad = document.querySelector('.comments-loader');
const bodyElements = document.querySelector('.modal-open');

<<<<<<< HEAD
  };
});

=======
//обработчик закрытия Esс
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
  }
};


// открытие модального окна
const openBigPicture = () => {
  bigPictureElement.classList.remove('hidden');
  commentsSocial.classList.add('hidden');
  commentsLoad.classList.add('hidden');
  bodyElements.classList.add('modal-open');
};


// Закрытие модального окна
const closeBigPicture = () => {

  bigPictureClose.addEventListener('click', () =>{
    bigPictureElement.classList.add('hidden');
    onDocumentKeydown();
  });
};


//создание коментариев


//создание элементов для большого изображения
const createBigImage = (PhotoId) => {
  bigPictureElement.querySelector('.img').src = generatePhoto[PhotoId - 1].url;
  bigPictureElement.querySelector('.likes-count').textContent = generatePhoto[PhotoId - 1].likes;
  bigPictureElement.querySelector('.social__comment-shown-count').textContent = generatePhoto[PhotoId - 1].comments.length;
  bigPictureElement.querySelector('.social__comment-total-count').textContent = generatePhoto[PhotoId - 1].comments.length;
  bigPictureElement.querySelector('.social__caption').alt = generatePhoto[PhotoId - 1].description;
};


const isOpenBigPicture = (evt) => {
  if (evt.target.closest('.picture')) {
    const isPicture = evt.target.dataset.PhotoId;
    createBigImage(isPicture);
    openBigPicture();
  }
};

//Обработчик для открытия фото
containerPictures.addEventListener('click', (isOpenBigPicture));

//Обработчик для закрытия фото
containerPictures.addEventListener('click', () =>{
  closeBigPicture();
});

//export {createBigPicture};
>>>>>>> 61e95ab (Работаю над 8.1 ч3)
