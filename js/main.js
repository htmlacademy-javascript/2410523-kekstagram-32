import {generateMiniatures} from './miniatures.js';
import {generateBigPicture} from'./big-picture.js';
import {setOnFormSubmit, getCloseLoad} from './upload-form-modal.js';
import {getData, sendData} from './api.js';
import {showAlert, debounce} from './utils.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import { initFilters, getFilteredPictures } from './filters-picture.js';

//Получение данных из сервера
setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    getCloseLoad();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});
try {
  const data = await getData();
  const debounceGenerateMiniatures = debounce(generateMiniatures);
  initFilters(data, debounceGenerateMiniatures);
  generateMiniatures(getFilteredPictures());
  generateMiniatures(data);
  generateBigPicture(data);
} catch {
  showAlert();
}
