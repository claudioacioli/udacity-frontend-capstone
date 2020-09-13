import { byId, bySelector } from './by';
import { getInfoByCity } from './api';
import Info from './info';
import Modal from './modal';

const 
  
  CSS_CLASS_ERROR = 'textfield--error',

  buttonElement = bySelector('button[type=submit]'),
  cityElement = byId('city'),
  dateElement = byId('date'),
  citySpanElement = cityElement.nextElementSibling,
  dateSpanElement = dateElement.nextElementSibling,
  
  isEmpty = value  => 
    !value.toString().trim().length
  ,

  isMoreThen = (a, b) =>
    a > b
  ,

  renderEmptyCity = () => {
    citySpanElement.textContent = 'Please specify the city of your next travel!';
    citySpanElement.classList.add(CSS_CLASS_ERROR);
  },

  renderEmptyDate = () => {
    dateSpanElement.textContent = 'Please specify the date of your next travel!';
    dateSpanElement.classList.add(CSS_CLASS_ERROR);
  },
  
  renderInvalidDate = () => {
    dateSpanElement.textContent = 'Please specify a valid date: Is tomorrow more then today.';
    dateSpanElement.classList.add(CSS_CLASS_ERROR);
  },

  renderResetForm = () => {
    cityElement.value = '';
    dateElement.value = '';
    citySpanElement.classList.remove(CSS_CLASS_ERROR);
    dateSpanElement.classList.remove(CSS_CLASS_ERROR);
  },

  handleSubmit = e => {
    
    e.preventDefault();

    const city = cityElement.value;
    const date = dateElement.value;

    if(isEmpty(city))
      return renderEmptyCity();

    citySpanElement.classList.remove(CSS_CLASS_ERROR);
    
    if(isEmpty(date))
      return renderEmptyDate();

    try {
      if(!isMoreThen(dateElement.valueAsDate.getTime(), (new Date()).getTime()))
        return renderInvalidDate();
    } catch (ex) {
      return renderInvalidDate();
    }

    dateSpanElement.classList.remove(CSS_CLASS_ERROR);
    
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
