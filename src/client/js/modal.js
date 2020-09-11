import { bySelector, byId } from './by';

const 
  dropElement = bySelector('.modal__backdrop'),
  modalElement = bySelector('.modal'),
  closeElement = byId('close'),
  
  showModal = () => {
    closeElement.addEventListener('click', hideModal);
    dropElement.addEventListener('click', hideModal);
    modalElement.classList.add('modal--show');
  },

  hideModal = () => {
    closeElement.removeEventListener('click', hideModal);
    dropElement.removeEventListener('click', hideModal);
    modalElement.classList.remove('modal--show');
  }
;

export const
  handleOpenModal = e =>
    showModal()
  ,

  handleCloseModal = e =>
    hideModal()
;

