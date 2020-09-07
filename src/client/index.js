import { bySelector } from './js/by';

const
/*
 * DOM elements
 */ 
  buttonElement = bySelector('button[type=submit]'),
/* 
 * handlers
 */
  handleSubmit = e => {
    e.preventDefault();
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
