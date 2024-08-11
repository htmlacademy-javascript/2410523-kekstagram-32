import { generateMiniatures } from './miniatures';

const PICTURES_COUNT = 10;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filterElement = document.querySelector('.img-filters');
let currentFilter = Filter.DEFAULT;
let pictures = [];

const sortRandomly = () => Math.random() - 0.5;

//Сортировка по коментариям
const sortByComments = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

//Функция с фильтрацией
const getFilteredPictures = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(sortRandomly).slice(0, PICTURES_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(sortByComments);
    default:
      return[...pictures];
  }
};


//Обработчик клика по фильтрам
const setOnFilterClick = (callback) => {
  filterElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }
    const clickedButton = evt.target;
    if (clickedButton.id === currentFilter) {
      return;
    }
    filterElement.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    currentFilter = clickedButton.id;
    callback(getFilteredPictures());
  });
};

const initFilters = (loadedPictires, callback) => {
  filterElement.classList.remove('img-filters--inactive');
  pictures = [...loadedPictires];
  generateMiniatures(pictures);
  setOnFilterClick(callback);
};

export {initFilters, getFilteredPictures};
