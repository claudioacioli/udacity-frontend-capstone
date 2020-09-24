import { byId } from '../utils/by';
import Card from './card';

const
  containerElement = byId('container'),

  init = (data=[]) => {
    const fragment = document.createDocumentFragment();
    for(const item of data) 
      fragment.appendChild(Card.create(item));
    containerElement.appendChild(fragment);  
  },

  append = item => {
    containerElement.appendChild(Card.create(item));
  }
;

export default{
  init,
  append
};
