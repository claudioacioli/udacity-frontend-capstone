import { getData } from './rest.js';

export const
  
  getInfoByCity = async city => {
    const result = await getData(`/api/?city=${city}`);
    return result;
  }

;
