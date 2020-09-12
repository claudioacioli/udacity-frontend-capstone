import './styles/cssura-v1.1.5.css'
import './styles/app.css'
import { bySelector } from './js/by';
import { handleOpenModal } from './js/modal';
import { handleSubmit } from './js/form';
//import { getTravelInfo } from './js/travel';

const
/*
 * DOM elements
 */ 
  openElement = bySelector('button[type=button]'),
  buttonElement = bySelector('button[type=submit]')
;
/**
 * App Start
 */

document.addEventListener('DOMContentLoaded', () => {
  //getTravelInfo('Brasilia');
  buttonElement.addEventListener('click', handleSubmit);
  openElement.addEventListener('click', handleOpenModal);
});

document.addEventListener('beforeunload', () => {
  openElement.removeEventListener('click',handleModal);
  buttonElement.removeEventListener('click', handleSubmit);
  document.removeEventListener('DOMContentLoaded', handleLoad);
});
