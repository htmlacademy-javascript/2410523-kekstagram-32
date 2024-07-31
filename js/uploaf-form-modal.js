//import { isEscapeKey } from './utils';

const body = document.querySelector('.body');
const form = document.querySelector('.img-upload__form');
const uploadInputElement = form.querySelector('.img-upload__input');
const uploadOverlayElement = form.querySelector('.img-upload__overlay');
const buttonCloseUploadElement = form.querySelector('.img-upload__cancel');
const inputHeshtagsElement = form.querySelector('.text__hashtags');
const textCommentsElement = form.querySelector('.text__description');
//const inputContainerElement = document.querySelector('.img-upload__field-wrapper');
//const MAX_LENGTH_COMMENT = 140;
//const MAX_LENGTH_HASHTAG = 20;

const MAX_HASHTAGS = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const errorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAGS} хэш-тегов`,
  NOT_UNIQUE: 'Хеш-теги должны быть уникальными',
  INVALID_PATTERN: 'Неправильный хеш-тег'
};

const pristine = new Pristine(form, {
  classTo: 'img-uplosd__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});


//обработчик закрытия Esс
function onDocumentKeydown (evt) {
  // eslint-disable-next-line no-use-before-define
  if (evt.key === 'Escape' && !isTextFocused()) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    getCloseLoad();
  }
}

const getLoadImage = () => {
  uploadOverlayElement.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};


const getCloseLoad = () => {
  pristine.reset();
  form.reset();
  uploadOverlayElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  //buttonCloseUploadElement.addEventListener('click', onPopupClose);
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

const onFormSubmit = (evt) => {
  const isValid = pristine.validate();
  if(!isValid){
    evt.preventDefault();
  }
};

const onPopupClose = () => {
  getCloseLoad();
};

const onPopupOpen = () => {
  getLoadImage();
};

pristine.addValidator(
  uploadInputElement,
  hasValidCount,
  errorText.INVALID_COUNT,
  3,
  true
);
pristine.addValidator(
  uploadInputElement,
  hasUniqueTags,
  errorText.NOT_UNIQUE,
  2,
  true
);
pristine.addValidator(
  uploadInputElement,
  hasValidTags,
  errorText.INVALID_PATTERN,
  1,
  true
);

uploadInputElement.addEventListener('change', onPopupOpen);
buttonCloseUploadElement.addEventListener('click', onPopupClose);
form.addEventListener('submit', onFormSubmit);

//export {getLoadImage, getCloseLoad};

