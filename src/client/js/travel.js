import { getInfoByCity } from './api.js';

export const  
  getTravelInfo = async city => {
    const result = await getInfoByCity(city)
    console.log(result);
  }
;
