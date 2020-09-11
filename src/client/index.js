import './styles/cssura.css'
import './styles/app.css'
import { bySelector, byId } from './js/by';
import { getTravelInfo } from './js/travel';

const
/*
 * DOM elements
 */ 
  cityElement = byId('city'),
  modalElement = bySelector('.modal'),
  openElement = bySelector('button[type=button]'),
  closeElement = byId('close'),
  buttonElement = bySelector('button[type=submit]'),
/* 
 * handlers
 */

  showModal = () => {
    modalElement.classList.add('modal--show');
  },

  hideModal = () => {
    modalElement.classList.remove('modal--show');
  },

  handleSubmit = e => {
    e.preventDefault();
    getTravelInfo(cityElement.value)
      .then(hideModal)
      .catch(err => console.err(err));
  },
  
  handleModal = e => {
    showModal();
  },

  handleLoad = e => {
    const search = new URLSearchParams(window.location.search);
    const city = search.get('city') ? search.get('city') : 'Brasilia';
    getTravelInfo(city);
    buttonElement.addEventListener('click', handleSubmit);
    openElement.addEventListener('click', showModal);
    closeElement.addEventListener('click', hideModal);
  },

  handleUnload = e => {
    openElement.removeEventListener('click',showModal);
    closeElement.removeEventListener('click', hideModal);
    buttonElement.removeEventListener('click', handleSubmit);
    document.removeEventListener('DOMContentLoaded', handleLoad);
  }
;

/**
 * App Start
 */
document.addEventListener('DOMContentLoaded', handleLoad);
document.addEventListener('beforeunload', handleUnload);
