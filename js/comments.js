
const socialListComments = document.querySelector('.social__comments');
const socialCommentElement = document.querySelector('.social__comment');
const socialPictureElement = document.querySelector('.social__picture');
const commentsLoadElement = document.querySelector('.comments-loader');
const commetsShownElement = document.querySelector('.social__comment-shown-count');
const commentsTotalElement = document.querySelector('.social__comment-total-count');

const NEXT_NUBERS_QTY = 5;
let numbersComments = [];
let startIndex = 0;


//создание 1 комента
const getUserComment = ({avatar, name, message }) => {
  const itemComment = socialCommentElement.cloneNode(true);
  socialPictureElement.src = avatar;
  socialPictureElement.alt = name;
  itemComment.querySelector('.social__text').textContent = message;

  return itemComment;
};

const loadComments = () => {
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


  //   commentsTotalElement.textContent = numbersComments;
  //   commetsShownElement.textContent = endIndex;

};

//создание списка коментов
const getListComments = (element) => {
//   const listFragmentElement = document.createDocumentFragment();
//   comments.forEach((element) => {
//     const commentsElement = getUserComment(element);
//     listFragmentElement.append(commentsElement);
//   });
  startIndex = 0;
  numbersComments = element;
  socialListComments.innerHTML = '';
  commentsLoadElement.classList.remove('hidden');
  commentsTotalElement.textContent = element.length;
  //socialListComments.append(listFragmentElement);
  loadComments();

  //Добавляем обработчик на открытие 5 след коментариев
  commentsLoadElement.addEventListener('click', loadComments);

};

export { getListComments };
