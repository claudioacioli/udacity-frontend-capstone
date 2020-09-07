import { getInfoByCity } from './api.js';

export const  
  getTravelInfo = city => {
    getInfoByCity(city)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.error(err)
      });
  }
;
