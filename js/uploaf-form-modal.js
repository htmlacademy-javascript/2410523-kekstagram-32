import { isEscapeKey } from './utils';

const uploadInputElement = document.querySelector('.img-upload__input');
const uploadOverlayElement = document.querySelector('.img-upload__overlay');
const buttonCloseUploadElement = document.querySelector('.img-upload__cancel');


//обработчик закрытия Esс
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    getCloseLoad();
  }
};

const getLoadImage = () => {
  uploadInputElement.addEventListener('click', () => {
    uploadOverlayElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });
};

const getCloseLoad = () => {
  buttonCloseUploadElement.addEventListener('click', () => {
    uploadOverlayElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  });
};

export {getLoadImage, getCloseLoad};
