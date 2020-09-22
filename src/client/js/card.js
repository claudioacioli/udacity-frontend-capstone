import { byId, bySelector, byAll } from './by';
import { CSS_CLASS_HIDE } from './constants';

const
  template = byId('card-template'),
  imageElement = bySelector('.card__img', template.content),
  dateElement = bySelector('.card__span', template.content),
  titleElement = bySelector('.card__title', template.content),
  auxElements = byAll('.card__text', template.content),
  tempElement = bySelector('h2', auxElements[0]),
  weatherElement = bySelector('span', auxElements[1]),
  
  handleError = e => 
    e.target.classList.add('hide')
  ,

  createImage = ({url}) => {
    const imageElement = new Image();
    imageElement.src = url;
    imageElement.addEventListener('error', handleError);
    return imageElement;
  },

  createCard = ({start, end, city, temp, weather, images}) => {
    dateElement.textContent = `${start} to ${end}`;
    titleElement.textContent = city;
    tempElement.textContent = temp;
    weatherElement.textContent = weather;
    imageElement.appendChild(createImage(images[0]));
    const cloneElement = document.importNode(template.content, true);
    return cloneElement; 
  }
;

export default {
  create: createCard
}
