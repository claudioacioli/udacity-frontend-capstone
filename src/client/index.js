import { bySelector } from './js/by';

const
// elements 
  buttonElement = bySelector('button[type=submit]'),

// functions
  handleLoad = e => {
    console.log('Hello World');
    buttonElement.addEventListener('click', handleSubmit);
  },

  handleSubmit = e => {
    e.preventDefault();
  },

  handleUnload = e => {
    buttonElement.removeEventListener('click', handleSubmit);
    document.removeEventListener('DOMContentLoaded', handleLoad);
  }
;

// handlers
document.addEventListener('DOMContentLoaded', handleLoad);
document.addEventListener('beforeunload', handleUnload);
