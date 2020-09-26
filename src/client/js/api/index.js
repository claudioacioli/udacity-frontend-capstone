import { getData, postData } from './rest';

export const
  
  createTravel = async (city, start, end) => {
    const url = `http://localhost:3000/api/`;
    return await postData(url, {city, start, end});
  }

;
