import { getData, postData, deleteData } from './rest';
import { URL_API } from '../utils/constants';

export const

  readTravels = async () =>
    await getData(`${URL_API}/`)
  ,

  createTravel = async (city, start, end) => 
    await postData(`${URL_API}/`, {city, start, end})
  ,

  deleteTravel = async id => 
    await deleteData(`${URL_API}/${id}`)
;
