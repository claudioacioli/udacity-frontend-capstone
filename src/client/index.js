import './styles/cssura-v1.1.4.css'
import './styles/app.css'
import { bySelector, byId } from './js/by';
import { handleOpenModal } from './js/modal';
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
  }
;
/**
 * App Start
 */

document.addEventListener('DOMContentLoaded', () => {
  getTravelInfo('Brasilia');
  buttonElement.addEventListener('click', handleSubmit);
  openElement.addEventListener('click', handleOpenModal);
});

document.addEventListener('beforeunload', () => {
  openElement.removeEventListener('click',handleModal);
  buttonElement.removeEventListener('click', handleSubmit);
  document.removeEventListener('DOMContentLoaded', handleLoad);
});
