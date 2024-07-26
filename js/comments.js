const socialListComments = document.querySelector('.social__comments');
const socialCommentElement = document.querySelector('.social__comment');
const socialPictureElement = document.querySelector('.social__picture');

//создание 1 комента
const getUserComment = ({avatar, name, message }) => {
  const itemComment = socialCommentElement.cloneNode(true);
  socialPictureElement.src = avatar;
  socialPictureElement.alt = name;
  itemComment.querySelector('.social__text').textContent = message;

  return itemComment;
};


//создание списка коментов
const getListComments = (comments) => {
  const listFragmentElement = document.createDocumentFragment();
  comments.forEach((element) => {
    const commentsElement = getUserComment(element);
    listFragmentElement.append(commentsElement);
  });
  socialListComments.innerHTML = '';
  socialListComments.append(listFragmentElement);
};

export { getListComments };
