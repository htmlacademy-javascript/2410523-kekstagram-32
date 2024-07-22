import {getUsersPhoto} from './data.js';
import {generateMiniatures} from './miniatures.js';
import { createBigPicture } from './bigPicture.js';

generateMiniatures(getUsersPhoto());
createBigPicture();
