import {photos} from './data.js';
import {generateMiniatures} from './miniatures.js';
import {generateBigPicture} from'./big-picture.js';
import { getLoadImage, getCloseLoad } from './uploaf-form-modal.js';

generateMiniatures(photos);
generateBigPicture(photos);
getLoadImage(); //временно
getCloseLoad(); //временно
