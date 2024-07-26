const socialListComments = document.querySelector('.social__comments');
const socialCommentElement = document.querySelector('.social__comment');
<<<<<<< HEAD
const commentsLoadElement = document.querySelector('.comments-loader');
const commetsShownElement = document.querySelector('.social__comment-shown-count');
const commentsTotalElement = document.querySelector('.social__comment-total-count');

const NEXT_NUBERS_QTY = 5;
let numbersComments = [];
let startIndex = 0;

=======
const socialPictureElement = document.querySelector('.social__picture');
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)

//создание 1 комента
const getUserComment = ({avatar, name, message }) => {
  const itemComment = socialCommentElement.cloneNode(true);
<<<<<<< HEAD
  const socialPictureElement = itemComment.querySelector('.social__picture');
=======
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)
  socialPictureElement.src = avatar;
  socialPictureElement.alt = name;
  itemComment.querySelector('.social__text').textContent = message;

  return itemComment;
};

<<<<<<< HEAD
//  загрузка по 5 коментариев.
const getLoadComments = () => {
  const endIndex = Math.min(startIndex + NEXT_NUBERS_QTY, numbersComments.length);
  commetsShownElement.textContent = endIndex;

  numbersComments.slice(startIndex, endIndex).forEach((element) => {
    const listComment = getUserComment(element);
    socialListComments.append(listComment);
  });
  startIndex += NEXT_NUBERS_QTY;
  if (endIndex >= numbersComments.length) {
    commentsLoadElement.classList.add('hidden');
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

//создание списка коментов
const getListComments = (comments) => {
  const listFragmentElement = document.createDocumentFragment();
  comments.forEach((element) => {
    const commentsElement = getUserComment(element);
    listFragmentElement.append(commentsElement);
  });
  socialListComments.innerHTML = '';
  socialListComments.append(listFragmentElement);
>>>>>>> 8731489 (Исправил ошибки  и работаю над списками комент)
};

export { getListComments };
