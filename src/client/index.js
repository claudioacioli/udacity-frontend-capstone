import './styles/cssura.css'
import { bySelector, byId } from './js/by';
import { getTravelInfo } from './js/travel';

const
/*
 * DOM elements
 */ 
  cityElement = byId('city'),
  buttonElement = bySelector('button[type=submit]'),
/* 
 * handlers
 */
  handleSubmit = e => {
    e.preventDefault();
    getTravelInfo(cityElement.value);
  },

  handleLoad = e => {
    console.log('Hello World');
    buttonElement.addEventListener('click', handleSubmit);
  },

  handleUnload = e => {
    buttonElement.removeEventListener('click', handleSubmit);
    document.removeEventListener('DOMContentLoaded', handleLoad);
  }
;

/**
 * App Start
 */
document.addEventListener('DOMContentLoaded', handleLoad);
document.addEventListener('beforeunload', handleUnload);
