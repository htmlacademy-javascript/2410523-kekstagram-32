const socialListCommentsElement = document.querySelector('.social__comments');
const socialCommentElement = document.querySelector('.social__comment');
const commentsLoadElement = document.querySelector('.comments-loader');
const commetsShownElement = document.querySelector('.social__comment-shown-count');
const commentsTotalElement = document.querySelector('.social__comment-total-count');

const NEXT_NUBERS_QTY = 5;
let NumbersComments = [];
let startIndex = 0;

//создание 1 комента
const getUserComment = ({avatar, name, message }) => {
  const itemComment = socialCommentElement.cloneNode(true);
  const socialPictureElement = itemComment.querySelector('.social__picture');
  socialPictureElement.src = avatar;
  socialPictureElement.alt = name;
  itemComment.querySelector('.social__text').textContent = message;
  return itemComment;
};

//  загрузка по 5 коментариев.
const getLoadComments = () => {
  const endIndex = Math.min(startIndex + NEXT_NUBERS_QTY, NumbersComments.length);
  commetsShownElement.textContent = endIndex;

  NumbersComments.slice(startIndex, endIndex).forEach((element) => {
    const listComment = getUserComment(element);
    socialListCommentsElement.append(listComment);
  });
  startIndex += NEXT_NUBERS_QTY;
  if (endIndex >= NumbersComments.length) {
    commentsLoadElement.classList.add('hidden');
  }
};

//создание списка коментариев
const getListComments = (element) => {
  startIndex = 0;
  NumbersComments = element;
  socialListCommentsElement.innerHTML = '';
  commentsLoadElement.classList.remove('hidden');
  commentsTotalElement.textContent = element.length;
  getLoadComments();
  //Добавляем обработчик на открытие 5 след коментариев
  commentsLoadElement.addEventListener('click', getLoadComments);
};

export { getListComments };
