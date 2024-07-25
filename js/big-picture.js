import { isEscapeKey } from './utils.js';


//import {createImages, generateMiniatures} from './miniatures.js';
const generateBigPicture = (fullPicture) => {
  const containerPictures = document.querySelector('.pictures');
  const bigPictureElement = document.querySelector('.big-picture');
  const bigPictureClose = document.querySelector('.big-picture__cancel');
  const commentsSocial = document.querySelector('.social__comment-count');
  const commentsLoad = document.querySelector('.comments-loader');
  const bodyElements = document.querySelector('.modal-open');
  const closeBigPictureElement = document.querySelector('.big-picture__cancel');

  // commentCountElement.classList.add('hidden');
  // commentLoaderElement.classList.add('hidden');
  // const closeBigPicture = () => {
  //   bigPictureElement.classList.add('hidden');
  //   bodyElements.classList.remove('modal-open');
  //   document.removeEventListener('keydown', onDocumentKeydown);
  // };
  // bigPictureClose.addEventListener('click', closeBigPicture);

  //обработчик закрытия Esс
  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeBigPicture();
    }
  };


  // открытие модального окна
  const openBigPicture = () => {
    bigPictureElement.classList.remove('hidden');
    commentsSocial.classList.add('hidden');
    commentsLoad.classList.add('hidden');
    bodyElements.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
  };


  // Закрытие модального окна
  const closeBigPicture = () => {

    bigPictureClose.addEventListener('click', () =>{
      bigPictureElement.classList.add('hidden');
      bodyElements.classList.addEventListener('keydown',onDocumentKeydown);
      onDocumentKeydown();
    });
  };


  //создание элементов для большого изображения
  const getBigPicture = (pictureId) => {
    const index = photos.findIndex((picture) => picture.id.toString() === pictureId);
    const { url, likes, comments, description} = fullPicture[index];


    bigPictureElement.querySelector('.big-picture__img img').src = url;
    bigPictureElement.querySelector('.likes-count').textContent = likes;
    bigPictureElement.querySelector('.social__comment-shown-count').textContent = comments.length;
    bigPictureElement.querySelector('.social__comment-total-count').textContent = comments.length;
    bigPictureElement.querySelector('.social__caption').textContent = description;
  };
  //displayComments(generatePhoto[index].comments);


  //* функция при клике на миниатюру
  const onClickPhoto = (evt) => {

    //if (evt.target.closest('.picture')) {
    //const isPicture = evt.target.dataset.generatePhoto;
    const pictureElement = evt.target.closest('.picture');
    if (pictureElement){
      const pictured = pictureElement.dataset.generatePhoto;
      getBigPicture(pictured);
      openBigPicture();
    }
  };


  //Обработчик для открытия фото
  containerPictures.addEventListener('click', onClickPhoto);

  //Обработчик для закрытия фото

  closeBigPictureElement.addEventListener('click', () =>{
    closeBigPicture();
  });
};


export {generateBigPicture};