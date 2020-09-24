import { getData } from './rest';

export const
  
  getInfoByCity = async city => {
    const result = await getData(`http://localhost:3000/api/?city=${city}`);
    return result;
  }

;
