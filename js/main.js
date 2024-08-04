import {photos} from './data.js';
import {generateMiniatures} from './miniatures.js';
import {generateBigPicture} from'./big-picture.js';
import './upload-form-modal.js';

generateMiniatures(photos);
generateBigPicture(photos);
