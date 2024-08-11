const modalElement = document.querySelector('.img-upload');
const effectValueElement = modalElement.querySelector('.effect-level__value');
const imagePreviewElement = modalElement.querySelector('.img-upload__preview img');
const effectsElement = modalElement.querySelector('.effects');
const sliderElement = modalElement.querySelector('.effect-level__slider');
const sliderContainerElement = modalElement.querySelector('.img-upload__effect-level');

// описание сущетвующих эффектов
const EffectPicture = {
  DEFAULT: 'none',
  CHROME : 'chrome',
  SEPIA : 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

// описание какие стили приминяются к эффектам
const EffectToFilters = {
  [EffectPicture.CHROME] : {
    style:'grayscale',
    unit: '',
  },

  [EffectPicture.SEPIA]: {
    style:'sepia',
    unit: '',
  },

  [EffectPicture.MARVIN]: {
    style:'invert',
    unit: '%',
  },

  [EffectPicture.PHOBOS]: {
    style:'blur',
    unit:'px',
  },

  [EffectPicture.HEAT]: {
    style:'brightness',
    unit:'',
  },
};

// описание значения и шаг для слайдера noUiSlider
const EffectToSliderOptions = {
  [EffectPicture.DEFAULT]: {
    min:0,
    max: 100,
    step: 1,
  },

  [EffectPicture.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },

  [EffectPicture.SEPIA]: {
    min:0,
    max:1,
    step:0.1,
  },

  [EffectPicture.MARVIN]: {
    min: 0,
    max: 100,
    step:1,
  },

  [EffectPicture.PHOBOS]: {
    min:0,
    max:3,
    step:0.1,
  },

  [EffectPicture.HEAT]: {
    min: 1,
    max:3,
    step: 0.1,
  },
};
//
let choosenEffect = EffectPicture.DEFAULT;

const isDefault = () => choosenEffect === EffectPicture.DEFAULT;

//примение фильтров с полученными значениями
const setImageStyle = () => {
  if (isDefault()) {
    imagePreviewElement.style.filter = null;
    return;
  }
  const {value} = effectValueElement ;
  const {style, unit} = EffectToFilters[choosenEffect];
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
    updateSlider(EffectToSliderOptions[choosenEffect]);
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
  setEffect(EffectPicture.DEFAULT);
};

const onEffectsChange = (evt) => {
  setEffect(evt.target.value);
};
//Инициализирует эффекты
const initEffectPicture = () => {
  createSlider(EffectToSliderOptions[choosenEffect]);
  effectsElement.addEventListener('change', onEffectsChange);
};

export {initEffectPicture, resetEffectPicture};
