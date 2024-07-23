<<<<<<< HEAD
import {photos} from './data.js';
import {generateMiniatures} from './miniatures.js';
import {generateBigPicture} from'./big-picture.js';

generateMiniatures(photos);
generateBigPicture(photos);
=======
import {generatePhoto} from './data.js';
import {generateMiniatures} from './miniatures.js';
import './bigPicture.js';

generateMiniatures(generatePhoto);

>>>>>>> 61e95ab (Работаю над 8.1 ч3)
