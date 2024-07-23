import {getRandomInteger, randomIdIndex} from './utils.js';

const PHOTO_VALUE = 25;
const LIKESQTY = {
  MIN:15,
  MAX:200};
const COMMENTMAX = 30;
const AVATARS_USERS = {
  MIN:1,
  MAX:6
};

const DESCRIPT_USERS = [
  'Передо мной интересная фотография.',
  'Я думаю, что на ней изображен.',
  'Давайте рассмотрим изображение внимательнее.',
  'Перед нами школьный двор',
  'Если это улица, описать погоду – На снимке запечатлен какой день',
  'светит яркое солнце, на небе облака',
  'На переднем плане мы видим…',
  'Замечательный день',
  'Знакомые места',
  'Забег с собакеном',
  'Отдых с друзьями',
  'Забег в гору',
  'Забеги по песку',
  'Пробежка с Димой',
  'Прогулка по лесу',
  'Прогулка с псом',
  'Походы в магазин',
  'Прогулка во дворе',
  'Трудовые будни',
  'Сборы в школе',
  'Набрали ягод',
  'Я и девчонки',
  'Изучаю Фронтенд',
  'Бежим в парке',
  'Я утром ',
  'Зарядка на свежем воздухе'
];

const USERS_NAME = [
  'Александр',
  'Дмитрий',
  'Антон',
  'Лидия',
  'Лера',
  'Айгуль',
  'Женя',
  'Влад',
  'Надя',
  'Анна',
  'Костя',
  'Валя',
  'Иван',
  'Стас',
  'Владимир',
  'Жанна',
  'Анастасия',
  'Марина',
  'Лёха',
  'Андрей',
  'Лиза',
  'Матвей',
  'Тузик',
  'Бобик',
  'Лаврентий',
  'Эльвира'
];

const USERS_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  ' Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  ' Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const usersComments = () =>
  ({
    id:  randomIdIndex(),
    avatar: `img/avatar-${getRandomInteger(AVATARS_USERS.MIN, AVATARS_USERS.MAX)}.svg`,
    message: USERS_MESSAGE[getRandomInteger(0, USERS_MESSAGE.length - 1)],
    name: USERS_NAME[getRandomInteger(0, USERS_NAME.length - 1)]
  });


const usersPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPT_USERS[getRandomInteger(1, DESCRIPT_USERS.length - 1)],
  likes: getRandomInteger(LIKESQTY.MIN, LIKESQTY.MAX),
  comments: Array.from({length: getRandomInteger(0, COMMENTMAX)},
    usersComments)
}
);

const getUsersPhotos = () => Array.from(
  {length: PHOTO_VALUE},
  (_, index) => usersPhoto(index + 1)
);

<<<<<<< HEAD
const photos = getUsersPhotos();

export{photos};
=======
const generatePhoto = getUsersPhoto();

export{generatePhoto};
>>>>>>> 61e95ab (Работаю над 8.1 ч3)
