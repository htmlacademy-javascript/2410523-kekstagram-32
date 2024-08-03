const socialListComments = document.querySelector('.social__comments');
const socialCommentElement = document.querySelector('.social__comment');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const socialPictureElement = document.querySelector('.social__picture');
=======
const socialListComments = document.querySelector('.social__comments');
const socialCommentElement = document.querySelector('.social__comment');
>>>>>>> acfe163412aa14f3c32e147a4c7338c282007419
>>>>>>> 1e0a156 (123)
=======
>>>>>>> c55eb1d (8.15)
=======
>>>>>>> 453059b746f2b6e241cc728ebcaffca50baaadf7
const commentsLoadElement = document.querySelector('.comments-loader');
const commetsShownElement = document.querySelector('.social__comment-shown-count');
const commentsTotalElement = document.querySelector('.social__comment-total-count');

const NEXT_NUBERS_QTY = 5;
let numbersComments = [];
let startIndex = 0;

=======
const socialPictureElement = document.querySelector('.social__picture');
<<<<<<< HEAD
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)
=======
const commentsLoadElement = document.querySelector('.comments-loader');
const commetsShownElement = document.querySelector('.social__comment-shown-count');
const commentsTotalElement = document.querySelector('.social__comment-total-count');

const NEXT_NUBERS_QTY = 5;
let numbersComments = [];
let startIndex = 0;

>>>>>>> 2747420 (сделал коменты 8.15)

//создание 1 комента
const getUserComment = ({avatar, name, message }) => {
  const itemComment = socialCommentElement.cloneNode(true);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const socialPictureElement = itemComment.querySelector('.social__picture');
=======
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)
=======
=======
  const socialPictureElement = itemComment.querySelector('.social__picture');
>>>>>>> acfe163412aa14f3c32e147a4c7338c282007419
>>>>>>> 1e0a156 (123)
=======
  const socialPictureElement = itemComment.querySelector('.social__picture');
>>>>>>> c55eb1d (8.15)
=======
  const socialPictureElement = itemComment.querySelector('.social__picture');
>>>>>>> 453059b746f2b6e241cc728ebcaffca50baaadf7
  socialPictureElement.src = avatar;
  socialPictureElement.alt = name;
  itemComment.querySelector('.social__text').textContent = message;

  return itemComment;
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//  загрузка по 5 коментариев.
const getLoadComments = () => {
=======
const loadComments = () => {
>>>>>>> 2747420 (сделал коменты 8.15)
=======
//  загрузка по 5 коментариев.
const getLoadComments = () => {
>>>>>>> 7138da7 (Отправляю на провекру 8.14 и 8.15)
  const endIndex = Math.min(startIndex + NEXT_NUBERS_QTY, numbersComments.length);
  commetsShownElement.textContent = endIndex;

  numbersComments.slice(startIndex, endIndex).forEach((element) => {
    const listComment = getUserComment(element);
    socialListComments.append(listComment);
  });
  startIndex += NEXT_NUBERS_QTY;
  if (endIndex >= numbersComments.length) {
    commentsLoadElement.classList.add('hidden');
<<<<<<< HEAD
<<<<<<< HEAD
  }
};

//создание списка коментариев
const getListComments = (element) => {
  startIndex = 0;
  numbersComments = element;
  socialListComments.innerHTML = '';
  commentsLoadElement.classList.remove('hidden');
  commentsTotalElement.textContent = element.length;
  getLoadComments();
  //Добавляем обработчик на открытие 5 след коментариев
  commentsLoadElement.addEventListener('click', getLoadComments);
=======
=======

=======
>>>>>>> 7138da7 (Отправляю на провекру 8.14 и 8.15)
  }
};
>>>>>>> 2747420 (сделал коменты 8.15)

//создание списка коментариев
const getListComments = (element) => {
  startIndex = 0;
  numbersComments = element;
  socialListComments.innerHTML = '';
<<<<<<< HEAD
  socialListComments.append(listFragmentElement);
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)
=======
  commentsLoadElement.classList.remove('hidden');
  commentsTotalElement.textContent = element.length;
  getLoadComments();
  //Добавляем обработчик на открытие 5 след коментариев
<<<<<<< HEAD
  commentsLoadElement.addEventListener('click', loadComments);

>>>>>>> 2747420 (сделал коменты 8.15)
=======
  commentsLoadElement.addEventListener('click', getLoadComments);
>>>>>>> 7138da7 (Отправляю на провекру 8.14 и 8.15)
};

export { getListComments };
