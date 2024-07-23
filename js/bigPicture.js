import { isEscapeKey } from './utils.js';
import { generatePhoto } from './data.js';

//import {createImages, generateMiniatures} from './miniatures.js';

const containerPictures = document.querySelector('.pictures');
const bigPictureElement = document.querySelector('.big-picture');
const bigPicturePreview = document.querySelector('.big-picture__preview');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const commentsSocial = document.querySelector('.social__comment-count');
const commentsLoad = document.querySelector('.comments-loader');
const bodyElements = document.querySelector('.modal-open');

//обработчик закрытия Esс
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureClose();
  }
};


// открытие модального окна
const openBigPicture = () => {
  bigPictureElement.classList.remove('hidden');
  commentsSocial.classList.add('hidden');
  commentsLoad.classList.add('hidden');
  bodyElements.classList.add('modal-open');
  document.addEventListener('click', () => {

  });
};


// Закрытие модального окна
const closeBigPicture = () => {
  commentsSocial.classList.remove('hidden');
  commentsLoad.classList.remove('hidden');
  bodyElements.classList.remove('modal-open');
  bigPictureClose.addEventListener('click', () =>{
    bigPictureElement.classList.add('hidden');
    onDocumentKeydown();
  });
};


//создание коментариев


//создание элементов для большого изображения
const createBigImage = (picture) => {
  bigPictureElement.querySelector('.img').src = generatePhoto[picture - 1].url;
  bigPictureElement.querySelector('.likes-count').textContent = generatePhoto[picture - 1].likes;
  bigPictureElement.querySelector('.social__comment-shown-count').textContent = generatePhoto[picture - 1].comments.length;
  bigPictureElement.querySelector('.social__comment-total-count').textContent = generatePhoto[picture - 1].comments.length;
  bigPictureElement.querySelector('.social__caption').textContent = generatePhoto[picture - 1].description;
};

//Обработчик для открытия фото
containerPictures.addEventListener('click', () => {
  openBigPicture();
});

//Обработчик для закрытия фото
containerPictures.addEventListener('click', () =>{
  closeBigPicture();
});

//export {createBigPicture};
