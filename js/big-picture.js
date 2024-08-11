import { isEscapeKey } from './utils.js';
import { getListComments } from './comments.js';

const generateBigPicture = (photos) => {
  const containerPicturesElement = document.querySelector('.pictures');
  const bigPictureElement = document.querySelector('.big-picture');
  const closeBigPictureElement = document.querySelector('.big-picture__cancel');


  //обработчик закрытия Esс
  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      // eslint-disable-next-line no-use-before-define
      closeBigPicture();
    }
  };


  // открытие модального окна
  const openBigPicture = () => {
    bigPictureElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
  };


  // Закрытие модального окна
  const closeBigPicture = () => {

    //closeBigPictureElement.addEventListener('click', () =>{
    bigPictureElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown',onDocumentKeydown);
  };


  //создание элементов для большого изображения
  const getBigPicture = (pictureId) => {
    const index = photos.findIndex((photo) =>pictureId === photo.id.toString());
    const { url, likes, comments, description} = photos[index];

    bigPictureElement.querySelector('.big-picture__img img').src = url;
    bigPictureElement.querySelector('.likes-count').textContent = likes;
    bigPictureElement.querySelector('.social__comment-shown-count').textContent = comments.length;
    bigPictureElement.querySelector('.social__comment-total-count').textContent = comments.length;
    bigPictureElement.querySelector('.social__caption').textContent = description;
    getListComments(photos[index].comments);
  };

  // функция при клике на миниатюру
  const onClickPhoto = (evt) => {
    const pictureElement = evt.target.closest('.picture');
    if (pictureElement){
      const pictured = evt.target.dataset.pictureId;
      getBigPicture(pictured);
      openBigPicture();
    }
  };


  //Обработчик для открытия фото
  containerPicturesElement.addEventListener('click', onClickPhoto);

  //Обработчик для закрытия фото
  closeBigPictureElement.addEventListener('click', () =>{
    closeBigPicture();
  });
};

export {generateBigPicture};
