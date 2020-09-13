import { bySelector, byId } from './by';

const 

  CSS_CLASS_SHOW = 'modal--show',

  openElement = bySelector('button[type="button"]'),
  dropElement = bySelector('.modal__backdrop'),
  modalElement = bySelector('.modal'),
  closeElement = byId('close'),
  
  showModal = () => {
    closeElement.addEventListener('click', hideModal);
    dropElement.addEventListener('click', hideModal);
    modalElement.classList.add(CSS_CLASS_SHOW);
  },

  hideModal = () => {
    closeElement.removeEventListener('click', hideModal);
    dropElement.removeEventListener('click', hideModal);
    modalElement.classList.remove(CSS_CLASS_SHOW);
  },

  init = () => {
    openElement.addEventListener('click', showModal);
    closeElement.addEventListener('click', hideModal);
  }
;

export default {
  init,
  close: hideModal
}

