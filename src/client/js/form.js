import { byId } from './by';
import { getTravelInfo } from './travel';

const 
  
  CSS_CLASS_ERROR = 'textfield--error',

  cityElement = byId('city'),
  dateElement = byId('date'),
  citySpanElement = cityElement.nextElementSibling,
  dateSpanElement = dateElement.nextElementSibling,
  
  isEmpty = value  => 
    !value.toString().trim().length
  ,

  renderEmptyCity = () => {
    citySpanElement.textContent = 'Please specify the city of your next travel!';
    citySpanElement.classList.add(CSS_CLASS_ERROR);
  },

  renderEmptyDate = () => {
    dateSpanElement.textContent = 'Please specify the date of your next travel!';
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

    dateSpanElement.classList.remove(CSS_CLASS_ERROR);
    
    getTravelInfo(city);

  }
;

export { 
  handleSubmit,
  renderResetForm
};
