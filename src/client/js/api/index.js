import { getData } from './rest';

export const
  
  getTravelInfo = async (city, start, end) => {
    const url = `http://localhost:3000/api/?city=${city}&start=${start}&end=${end}`;
    return await getData(url);
  }

;
