import './styles/cssura-v1.1.5.css'
import './styles/index.css'
import Modal from './js/components/modal';
import Form from './js/components/form';
import CardList from './js/components/cardList';

document.addEventListener('DOMContentLoaded', () => {
  Form.init();
  Modal.init();
  const list = [
    {
      start: '2020-10-05',
      end: '2020-10-05',
      city: 'Aracaju',
      weather: 'Cloudy',
      temp: 28,
      images: [
        {url:'http://www.localizahertz.com/brasil-site/pt-br/rede-de-agencias/PublishingImages/Aracaju/Aracaju-Cabecalho-1.jpg'},
      ]
    },
    {
      start: '2020-10-05',
      end: '2020-10-05',
      city: 'Maceio',
      weather: 'Cloudy',
      temp: 22,
      images: [
        {url:'http://www.localizahertz.com/brasil-site/pt-br/rede-de-agencias/PublishingImages/Aracaju/Aracaju-Cabecalho-1.jpg'},
      ]
    }
  ];
  CardList.init(list);
});
