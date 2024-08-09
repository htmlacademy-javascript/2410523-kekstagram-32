const modalElement = document.querySelector('.img-upload');
const effectValueElement = modalElement.querySelector('.effect-level__value');
const imagePreviewElement = modalElement.querySelector('.img-upload__preview img');
const effectsElement = modalElement.querySelector('.effects');
const sliderElement = modalElement.querySelector('.effect-level__slider');
const sliderContainerElement = modalElement.querySelector('.img-upload__effect-level');

// описание сущетвующих эффектов
const effectPicture = {
  DEFAULT: 'none',
  CHROME : 'chrome',
  SEPIA : 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

// описание какие стили приминяются к эффектам
const effectToFilters = {
  [effectPicture.CHROME] : {
    style:'grayscale',
    unit: '',
  },

  [effectPicture.SEPIA]: {
    style:'sepia',
    unit: '',
  },

  [effectPicture.MARVIN]: {
    style:'invert',
    unit: '%',
  },

  [effectPicture.PHOBOS]: {
    style:'blur',
    unit:'px',
  },

  [effectPicture.HEAT]: {
    style:'brightness',
    unit:'',
  },
};

// описание значения и шаг для слайдера noUiSlider
const effectToSliderOptions = {
  [effectPicture.DEFAULT]: {
    min:0,
    max: 100,
    step: 1,
  },

  [effectPicture.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },

  [effectPicture.SEPIA]: {
    min:0,
    max:1,
    step:0.1,
  },

  [effectPicture.MARVIN]: {
    min: 0,
    max: 100,
    step:1,
  },

  [effectPicture.PHOBOS]: {
    min:0,
    max:3,
    step:0.1,
  },

  [effectPicture.HEAT]: {
    min: 1,
    max:3,
    step: 0.1,
  },
};
//
let choosenEffect = effectPicture.DEFAULT;

const isDefault = () => choosenEffect === effectPicture.DEFAULT;

//примение фильтров с полученными значениями
const setImageStyle = () => {
  if (isDefault()) {
    imagePreviewElement.style.filter = null;
    return;
  }
  const {value} = effectValueElement ;
  const {style, unit} = effectToFilters[choosenEffect];
  imagePreviewElement.style.filter = `${style}(${value}${unit})`;
};

const openSlider = () => {
  sliderContainerElement.classList.remove('hidden');
};

const closeSlider = () => {
  sliderContainerElement.classList.add('hidden');
};

//передает значения от noUiSlider
const onSliderUpdate = () => {
  effectValueElement.value = sliderElement.noUiSlider.get();
  setImageStyle();
};

//создание слайдера при инициализации эффекта
const createSlider = ({min, max, step}) => {
  noUiSlider.create(sliderElement, {
    range: {min, max},
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  closeSlider();
};

//функция при изменения слайдера передает новые значения
const updateSlider = ({min, max, step}) => {
  sliderElement.noUiSlider.updateOptions({
    range: {min, max},
    step,
    start: max,
  });
};

const setSlider = () => {
  if (isDefault()) {
    closeSlider();
  } else {
    updateSlider(effectToSliderOptions[choosenEffect]);
    openSlider();
  }
};

const setEffect = (effect) => {
  choosenEffect = effect;
  setSlider();
  setImageStyle();
};

//сбрасывает эффект до default
const resetEffectPicture = () => {
  setEffect(effectPicture.DEFAULT);
};

const onEffectsChange = (evt) => {
  setEffect(evt.target.value);
};
//Инициализирует эффекты
const initEffectPicture = () => {
  createSlider(effectToSliderOptions[choosenEffect]);
  effectsElement.addEventListener('change', onEffectsChange);
};

export {initEffectPicture, resetEffectPicture};
