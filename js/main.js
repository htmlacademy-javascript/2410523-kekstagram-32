const photoVolume = 25;
const likesMin = 15;
const likesMax = 200;
const commentMax = 30;
const avatarMin = 1;
const avatarMax = 6;

const descripUsers = [
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

const usersName = [
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

const usersMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  ' Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  ' Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const usersIdIndex = () => {
  let id = 1;
  return () => {
    id ++;
    return id;
  };
};

const randomIdIndex = usersIdIndex();

const usersComments = () =>
  ({
    id:  randomIdIndex,
    avatar: `img/avatar-${getRandomInteger(avatarMin, avatarMax)}.svg`,
    message: usersMessage[getRandomInteger(0, usersMessage.length - 1)],
    name: usersName[getRandomInteger(0, usersName.length - 1)]
  });


const usersPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: descripUsers[getRandomInteger(1, descripUsers.length - 1)],
  likes: getRandomInteger (likesMin, likesMax),
  comments: Array.from({length: getRandomInteger(0, commentMax)},
    usersComments)
}
);

const getUsersPhoto = () => Array.from(
  {length: photoVolume},
  (_, index) => usersPhoto(index + 1)
);

getUsersPhoto();


