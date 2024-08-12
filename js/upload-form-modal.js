import {resetScalePicture} from './scale-picture';
import {initEffectPicture, resetEffectPicture } from './effect-picture';
import { isValidType, pristine } from './validate';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const uploadInputElement = form.querySelector('.img-upload__input');
const uploadOverlayElement = form.querySelector('.img-upload__overlay');
const buttonCloseUploadElement = form.querySelector('.img-upload__cancel');
const photoPreviewElement = form.querySelector('.img-upload__preview img');
const effectPreviewElement = form.querySelectorAll('.effects__preview');
const textCommentsElement = form.querySelector('.text__description');
const inputHeshtagsElement = form.querySelector('.text__hashtags');

const isTextFocused = () =>
  document.activeElement === inputHeshtagsElement ||
  document.activeElement === textCommentsElement;

const isErrorMessageShown = () => Boolean(document.querySelector('.error'));

const getLoadImage = () => {
  uploadOverlayElement.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};
const getCloseLoad = () => {
  pristine.reset();
  form.reset();
  resetEffectPicture();
  resetScalePicture();
  uploadOverlayElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

//обработчик закрытия Esс
function onDocumentKeydown (evt) {
  if (evt.key === 'Escape' && !isTextFocused() && !isErrorMessageShown()) {
    evt.preventDefault();
    getCloseLoad();
  }
}

const onPopupClose = () => {
  getCloseLoad();
};

const onPopupOpen = () => {
  const file = uploadInputElement.files[0];

  if (file && isValidType(file)){
    photoPreviewElement.src = URL.createObjectURL(file);
    effectPreviewElement.forEach((preview) => {
      preview.style.backgroundImage = `url('${photoPreviewElement.src}')`;
    });
  }
  getLoadImage();
};

uploadInputElement.addEventListener('change', onPopupOpen);
buttonCloseUploadElement.addEventListener('click', onPopupClose);
initEffectPicture();

export {getCloseLoad};
