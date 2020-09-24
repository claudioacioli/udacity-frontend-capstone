import { byId, bySelector } from '../utils/by';
import { getInfoByCity } from '../api';
import { 
  CSS_CLASS_INPUT_ERROR,
  MESSAGE_ERROR_EMPTY_CITY,
  MESSAGE_ERROR_EMPTY_DATE,
  MESSAGE_ERROR_INVALID_DATE
} from '../utils/constants';
import {
  isEmpty,
  isMoreThen
} from '../utils';
import Info from './info';
import Modal from './modal';

const 

  buttonElement = bySelector('button[type=submit]'),
  cityElement = byId('city'),
  dateElement = byId('date'),
  citySpanElement = cityElement.nextElementSibling,
  dateSpanElement = dateElement.nextElementSibling,
  
  renderEmptyCity = () => {
    citySpanElement.textContent = MESSAGE_ERROR_EMPTY_CITY;
    citySpanElement.classList.add(CSS_CLASS_INPUT_ERROR);
  },

  renderEmptyDate = () => {
    dateSpanElement.textContent = MESSAGE_ERROR_EMPTY_DATE;
    dateSpanElement.classList.add(CSS_CLASS_INPUT_ERROR);
  },
  
  renderInvalidDate = () => {
    dateSpanElement.textContent = MESSAGE_ERROR_INVALID_DATE;
    dateSpanElement.classList.add(CSS_CLASS_INPUT_ERROR);
  },

  renderResetForm = () => {
    cityElement.value = '';
    dateElement.value = '';
    citySpanElement.classList.remove(CSS_CLASS_INPUT_ERROR);
    dateSpanElement.classList.remove(CSS_CLASS_INPUT_ERROR);
  },

  handleSubmit = e => {
    
    e.preventDefault();

    const city = cityElement.value;
    const date = dateElement.value;

    if(isEmpty(city))
      return renderEmptyCity();

    citySpanElement.classList.remove(CSS_CLASS_INPUT_ERROR);
    
    if(isEmpty(date))
      return renderEmptyDate();

    if(!dateElement.valueAsDate 
      || !isMoreThen(dateElement.valueAsDate.getTime(), (new Date()).getTime()))
        return renderInvalidDate();

    dateSpanElement.classList.remove(CSS_CLASS_INPUT_ERROR);
    
    getInfoByCity(city)
      .then(result => {
        Info.render(result);
        Modal.close();
      })
      .catch(err => {
        console.error(err);
      })

  },

  init = () => {
    buttonElement.addEventListener("click", handleSubmit);
  }
;

export default {
  init
};
