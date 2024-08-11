import {resetScalePicture} from './scale-picture';
import {initEffectPicture, resetEffectPicture } from './effect-picture';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const uploadInputElement = form.querySelector('.img-upload__input');
const uploadOverlayElement = form.querySelector('.img-upload__overlay');
const buttonCloseUploadElement = form.querySelector('.img-upload__cancel');
const inputHeshtagsElement = form.querySelector('.text__hashtags');
const textCommentsElement = form.querySelector('.text__description');
const submitButtonElement = form.querySelector('.img-upload__submit');
const photoPreviewElement = form.querySelector('.img-upload__preview img');
const effectPreviewElement = form.querySelectorAll('.effects__preview');
const MAX_HASHTAGS = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const FILE_TYPES = ['jpeg', 'jpg', 'png'];
const ErrorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAGS} хэш-тегов`,
  NOT_UNIQUE: 'Хеш-теги должны быть уникальными',
  INVALID_PATTERN: 'Неправильный хеш-тег'
};
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SUBMITTING: 'Отправляю...',
};
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});
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
const toggleSubmitButton = (isDisabled) => {
  submitButtonElement.disabled = isDisabled;
  submitButtonElement.textContent = isDisabled
    ? SubmitButtonText.SUBMITTING
    : SubmitButtonText.IDLE;
};
const isTextFocused = () =>
  document.activeElement === inputHeshtagsElement ||
  document.activeElement === textCommentsElement;


const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));
const hasValidTags = (value) => normalizeTags(value).every((tag) => VALID_SYMBOLS.test(tag));
const hasValidCount = (value) => normalizeTags(value).length <= MAX_HASHTAGS;
const hasUniqueTags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const setOnFormSubmit = (callback) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if(isValid){
      toggleSubmitButton(true);
      await callback(new FormData(form));
      toggleSubmitButton();
    }
  });
};
pristine.addValidator(
  inputHeshtagsElement,
  hasValidCount,
  ErrorText.INVALID_COUNT,
  3,
  true
);
pristine.addValidator(
  inputHeshtagsElement,
  hasUniqueTags,
  ErrorText.NOT_UNIQUE,
  2,
  true
);
pristine.addValidator(
  inputHeshtagsElement,
  hasValidTags,
  ErrorText.INVALID_PATTERN,
  1,
  true
);
const onFormSubmit = (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
};

const isErrorMessageShown = () => Boolean(document.querySelector('.error'));

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it)=> fileName.endsWith(it));
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
form.addEventListener('submit', onFormSubmit);
initEffectPicture();

export {setOnFormSubmit, getCloseLoad};
