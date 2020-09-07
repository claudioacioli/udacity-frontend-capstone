import { bySelector } from './js/by';

const
// elements 
  buttonElement = bySelector('button[type=submit]'),

// functions
  handleLoad = e => {
    console.log('Hello World');
  }
;

// handlers
document.addEventListener('DOMContentLoaded', handleLoad);
document.removeEventListener('DOMContentLoaded', handleLoad);
