import './styles/cssura.css'
import './styles/app.css'
import { bySelector, byId } from './js/by';
import { handleOpenModal, handleCloseModal } from './js/modal';
import { getTravelInfo } from './js/travel';

const
/*
 * DOM elements
 */ 
  cityElement = byId('city'),
  openElement = bySelector('button[type=button]'),
  buttonElement = bySelector('button[type=submit]'),
/* 
 * handlers
 */

  handleSubmit = e => {
    e.preventDefault();
    getTravelInfo(cityElement.value)
      .then(handleCloseModal)
      .catch(err => console.error(err));
  },

  handleLoad = e => {
    const search = new URLSearchParams(window.location.search);
    const city = search.get('city') ? search.get('city') : 'Brasilia';
    
    getTravelInfo(city);

    buttonElement.addEventListener('click', handleSubmit);
    openElement.addEventListener('click', handleOpenModal);
  },

  handleUnload = e => {
    openElement.removeEventListener('click',handleModal);
    buttonElement.removeEventListener('click', handleSubmit);
    document.removeEventListener('DOMContentLoaded', handleLoad);
  }
;

/**
 * App Start
 */
document.addEventListener('DOMContentLoaded', handleLoad);
document.addEventListener('beforeunload', handleUnload);
