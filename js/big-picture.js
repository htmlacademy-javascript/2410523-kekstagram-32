import { isEscapeKey } from './utils.js';
<<<<<<< HEAD
<<<<<<< HEAD
import { getListComments } from './comments.js';

const generateBigPicture = (photos) => {
  const containerPictures = document.querySelector('.pictures');
  const bigPictureElement = document.querySelector('.big-picture');
  const bigPictureClose = document.querySelector('.big-picture__cancel');
  const closeBigPictureElement = document.querySelector('.big-picture__cancel');

=======

=======
import { getListComments } from './comments.js';
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)

//import {createImages, generateMiniatures} from './miniatures.js';
const generateBigPicture = (photos) => {
  const containerPictures = document.querySelector('.pictures');
  const bigPictureElement = document.querySelector('.big-picture');
  const bigPictureClose = document.querySelector('.big-picture__cancel');
  const commentsSocial = document.querySelector('.social__comment-count');
  const commentsLoad = document.querySelector('.comments-loader');
  const bodyElement = document.querySelector('.modal-open');
  const closeBigPictureElement = document.querySelector('.big-picture__cancel');

<<<<<<< HEAD
  // commentCountElement.classList.add('hidden');
  // commentLoaderElement.classList.add('hidden');
  // const closeBigPicture = () => {
  //   bigPictureElement.classList.add('hidden');
  //   bodyElements.classList.remove('modal-open');
  //   document.removeEventListener('keydown', onDocumentKeydown);
  // };
  // bigPictureClose.addEventListener('click', closeBigPicture);
>>>>>>> 4e45a33 (Затык с заданием 8.14)
=======
  commentsSocial.classList.add('hidden');
  commentsLoad.classList.add('hidden');
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)

  //обработчик закрытия Esс
  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
      // eslint-disable-next-line no-use-before-define
=======
>>>>>>> 4e45a33 (Затык с заданием 8.14)
=======
      // eslint-disable-next-line no-use-before-define
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)
      closeBigPicture();
    }
  };


  // открытие модального окна
  const openBigPicture = () => {
    bigPictureElement.classList.remove('hidden');
<<<<<<< HEAD
<<<<<<< HEAD
    document.body.classList.add('modal-open');
=======
    commentsSocial.classList.add('hidden');
    commentsLoad.classList.add('hidden');
    bodyElements.classList.add('modal-open');
>>>>>>> 4e45a33 (Затык с заданием 8.14)
=======
    bodyElement.classList.add('modal-open');
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)
    document.addEventListener('keydown', onDocumentKeydown);
  };


  // Закрытие модального окна
  const closeBigPicture = () => {

    bigPictureClose.addEventListener('click', () =>{
      bigPictureElement.classList.add('hidden');
<<<<<<< HEAD
<<<<<<< HEAD
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown',onDocumentKeydown);
    });
  };

  //создание элементов для большого изображения
  const getBigPicture = (pictureId) => {
    const index = photos.findIndex((photo) =>pictureId === photo.id.toString());
    const { url, likes, comments, description} = photos[index];
=======
      bodyElements.classList.addEventListener('keydown',onDocumentKeydown);
      onDocumentKeydown();
=======
      bodyElement.classList.remove('modal-open');
      bodyElement.classList.removeEventListener('keydown',onDocumentKeydown);

>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)
    });

  };


  //создание элементов для большого изображения
  const getBigPicture = (pictureId) => {
<<<<<<< HEAD
    const index = photos.findIndex((picture) => picture.id.toString() === pictureId);
    const { url, likes, comments, description} = fullPicture[index];

>>>>>>> 4e45a33 (Затык с заданием 8.14)
=======
    const index = photos.findIndex((photo) =>pictureId === photo.id.toString());
    const { url, likes, comments, description} = photos[index];
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)

    bigPictureElement.querySelector('.big-picture__img img').src = url;
    bigPictureElement.querySelector('.likes-count').textContent = likes;
    bigPictureElement.querySelector('.social__comment-shown-count').textContent = comments.length;
    bigPictureElement.querySelector('.social__comment-total-count').textContent = comments.length;
    bigPictureElement.querySelector('.social__caption').textContent = description;
<<<<<<< HEAD
<<<<<<< HEAD
    getListComments(photos[index].comments);
  };

  // функция при клике на миниатюру
  const onClickPhoto = (evt) => {
    const pictureElement = evt.target.closest('.picture');
    if (pictureElement){
      const pictured = evt.target.dataset.pictureId;
=======
=======
    getListComments(photos[index].comments);
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)
  };


  //* функция при клике на миниатюру
  const onClickPhoto = (evt) => {
    const pictureElement = evt.target.closest('.picture');
    if (pictureElement){
<<<<<<< HEAD
      const pictured = pictureElement.dataset.generatePhoto;
>>>>>>> 4e45a33 (Затык с заданием 8.14)
=======
      const pictured = evt.target.dataset.pictureId;
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)
      getBigPicture(pictured);
      openBigPicture();
    }
  };


  //Обработчик для открытия фото
<<<<<<< HEAD
<<<<<<< HEAD
  containerPictures.addEventListener('click', onClickPhoto);

  //Обработчик для закрытия фото
=======
  containerPictures.addEventListener('click', onClickPhoto());
=======
  containerPictures.addEventListener('click', onClickPhoto);
>>>>>>> b9891b7 (Исправления после созвона)

  //Обработчик для закрытия фото

>>>>>>> 4e45a33 (Затык с заданием 8.14)
  closeBigPictureElement.addEventListener('click', () =>{
    closeBigPicture();
  });
};

<<<<<<< HEAD
=======

>>>>>>> 4e45a33 (Затык с заданием 8.14)
export {generateBigPicture};
