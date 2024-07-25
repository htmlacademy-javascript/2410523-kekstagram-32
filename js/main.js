import {generatePhoto} from './data.js';
import {generateMiniatures} from './miniatures.js';
import {generateBigPicture} from'./big-picture.js';

generateMiniatures(generatePhoto);
generateBigPicture(generatePhoto);
