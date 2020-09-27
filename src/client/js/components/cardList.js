import { byId } from '../utils/by';
import { deleteTravel } from '../api';
import Card from './card';

const
  containerElement = byId('container'),

  handleRemove = e => {
    const element = e.target;
    if(element.tagName !== 'BUTTON')
      return;

    e.preventDefault();
    const id = element.dataset.id;
    deleteTravel(id)
      .then(() => Card.remove(id))
      .catch(err => console.error(err))
  },

  init = (data=[]) => {
    const fragment = document.createDocumentFragment();

    for(const item of data) 
      fragment.appendChild(Card.create(item));
    
    containerElement.appendChild(fragment);
    containerElement.addEventListener('click', handleRemove);
  },

  append = item => 
    containerElement.appendChild(Card.create(item))
;

export default{
  init,
  append
};
