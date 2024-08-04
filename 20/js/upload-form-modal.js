
import { initEffectPicture, resetEffectPicture } from './effect-picture';
import { resetScalePicture } from './scale-picture';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const uploadInputElement = form.querySelector('.img-upload__input');
const uploadOverlayElement = form.querySelector('.img-upload__overlay');
const buttonCloseUploadElement = form.querySelector('.img-upload__cancel');
const inputHeshtagsElement = form.querySelector('.text__hashtags');
const textCommentsElement = form.querySelector('.text__description');

const MAX_HASHTAGS = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const errorText = {
  INVALID_COUNT: `Максимум ${MAX_HASHTAGS} хэш-тегов`,
  NOT_UNIQUE: 'Хеш-теги должны быть уникальными',
  INVALID_PATTERN: 'Неправильный хеш-тег'
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

  resetScalePicture();
  resetEffectPicture();
  uploadOverlayElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
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


const onPopupClose = () => {
  getCloseLoad();
};

const onPopupOpen = () => {
  getLoadImage();
};

pristine.addValidator(
  inputHeshtagsElement,
  hasValidCount,
  errorText.INVALID_COUNT,
  3,
  true
);
pristine.addValidator(
  inputHeshtagsElement,
  hasUniqueTags,
  errorText.NOT_UNIQUE,
  2,
  true
);
pristine.addValidator(
  inputHeshtagsElement,
  hasValidTags,
  errorText.INVALID_PATTERN,
  1,
  true
);

const onFormSubmit = (evt) => {
  const isValid = pristine.validate();
  if(!isValid){
    evt.preventDefault();
  }
};

//обработчик закрытия Esс
function onDocumentKeydown (evt) {
  // eslint-disable-next-line no-use-before-define
  if (evt.key === 'Escape' && !isTextFocused()) {
    evt.preventDefault();
    getCloseLoad();
  }
}

uploadInputElement.addEventListener('change', onPopupOpen);
buttonCloseUploadElement.addEventListener('click', onPopupClose);
form.addEventListener('submit', onFormSubmit);

initEffectPicture();
