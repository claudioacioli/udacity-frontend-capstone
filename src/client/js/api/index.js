import { getData, postData } from './rest';
import { URL_API } from '../utils/constants';

export const

  readTravels = async () =>
    await getData(URL_API)
  ,

  createTravel = async (city, start, end) => 
    await postData(URL_API, {city, start, end})

;
