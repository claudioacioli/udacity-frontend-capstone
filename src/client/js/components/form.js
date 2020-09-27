import { byId, bySelector } from '../utils/by';
import { createTravel } from '../api';
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
import CardList from './cardList';
import Modal from './modal';

const 

  buttonElement = bySelector('button[type=submit]'),
  cityElement = byId('city'),
  startElement = byId('start'),
  endElement = byId('end'),
  citySpanElement = cityElement.nextElementSibling,
  startSpanElement = startElement.nextElementSibling,
  endSpanElement = endElement.nextElementSibling,
  
  renderEmptyCity = () => {
    citySpanElement.textContent = MESSAGE_ERROR_EMPTY_CITY;
    citySpanElement.classList.add(CSS_CLASS_INPUT_ERROR);
  },

  renderEmptyDate = element => {
    element.textContent = MESSAGE_ERROR_EMPTY_DATE;
    element.classList.add(CSS_CLASS_INPUT_ERROR);
  },
  
  renderInvalidDate = element => {
    element.textContent = MESSAGE_ERROR_INVALID_DATE;
    element.classList.add(CSS_CLASS_INPUT_ERROR);
  },

  renderLoading = () => {
    buttonElement.textContent = 'travelling';
    buttonElement.disabled = true;
  },

  renderResetForm = () => {
    cityElement.value = '';
    startElement.value = '';
    endElement.value = '';
    citySpanElement.classList.remove(CSS_CLASS_INPUT_ERROR);
    startSpanElement.classList.remove(CSS_CLASS_INPUT_ERROR);
    endSpanElement.classList.remove(CSS_CLASS_INPUT_ERROR);
    buttonElement.textContent = 'Lets see...';
    buttonElement.disabled = false;
  },

  handleSubmit = e => {
    
    e.preventDefault();

    const city = cityElement.value;
    const start = startElement.value;
    const end = endElement.value;

    if(isEmpty(city))
      return renderEmptyCity();

    citySpanElement.classList.remove(CSS_CLASS_INPUT_ERROR);
    
    if(isEmpty(start))
      return renderEmptyDate(startSpanElement);

    const todayDate = new Date();
    const startDate = startElement.valueAsDate;
    if(!startDate 
      || !isMoreThen(startDate.getTime(), todayDate.getTime()))
        return renderInvalidDate(startSpanElement);

    startSpanElement.classList.remove(CSS_CLASS_INPUT_ERROR);
    
    if(isEmpty(end))
      return renderEmptyDate(endSpanElement);

    const endDate = endElement.valueAsDate;
    if(!endDate
      || !isMoreThen(endDate.getTime(), startDate.getTime()))
        return renderInvalidDate(endSpanElement);

    endSpanElement.classList.remove(CSS_CLASS_INPUT_ERROR);
    renderLoading();

    createTravel(
      city, 
      startDate.getTime(), 
      endDate.getTime()
    ).then(result => {
      renderResetForm();
      CardList.append(result);
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
