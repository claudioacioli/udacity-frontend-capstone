import './styles/cssura-v1.1.5.css'
import './styles/index.css'
import { readTravels } from './js/api';
import Modal from './js/components/modal';
import Form from './js/components/form';
import CardList from './js/components/cardList';

document.addEventListener('DOMContentLoaded', () => {
  Form.init();
  Modal.init();
  readTravels()
    .then(CardList.init)
    .catch(err => console.error(err))
});
