import { getData } from './rest.js';

export const
  
  getInfoByCity = async city => {
    const result = await getData(`http://localhost:3000/api/?city=${city}`);
    return result;
  }

;
