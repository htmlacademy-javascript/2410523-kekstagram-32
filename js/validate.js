const form = document.querySelector('.img-upload__form');
const submitButtonElement = form.querySelector('.img-upload__submit');
const inputHeshtagsElement = form.querySelector('.text__hashtags');

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

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it)=> fileName.endsWith(it));
};

const toggleSubmitButton = (isDisabled) => {
  submitButtonElement.disabled = isDisabled;
  submitButtonElement.textContent = isDisabled
    ? SubmitButtonText.SUBMITTING
    : SubmitButtonText.IDLE;
};

const setOnFormSubmit = (callback) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if(isValid){
      toggleSubmitButton(true);
      await callback(new FormData(form));
      toggleSubmitButton();
    } else {
      evt.preventDefault();
    }
  });
};

export {pristine, isValidType, setOnFormSubmit};
