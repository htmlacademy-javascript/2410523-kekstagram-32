import {generateMiniatures} from './miniatures.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureItem = document.querySelector('.big-picture__img');
const likesUsers = document.querySelector('.likes-count');
const numberComments = document.querySelector('.social__comment-show-count');
const socialComments = document.querySelector('.social__comments');


const createBigPicture = () => {
  bigPicture.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    generateMiniatures();
  // const createBigImage = (picture) => {
  //   bigPictureItem.src = picture.url;
  //   likesUsers.textContent = picture.likes;
  //   numberComments.textContent = picture.comments;
  //   socialComments;
  }
  );
};

export {createBigPicture};
