import { bySelector, byId } from './by';
import { renderResetForm } from './form';

const 

  CSS_CLASS_SHOW = 'modal--show',

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

  handleOpenModal = e => 
    showModal()
  ,

  handleCloseModal = e => 
    hideModal();
;

export {
  handleOpenModal,
  handleCloseModal
}

