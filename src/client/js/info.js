import { byId, bySelector } from './by';

const

  wallElement = bySelector('.bg--city'),
  placeImgElement = byId('place-img'),
  nameElement = byId('name'),
  tempElement = byId('temp'),
  weatherElement = byId('weather'),
  weatherImgElement = byId('weather-img'), 

  render = async ({temp, weather_icon_url, weather, city_name, images}) => {
    wallElement.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 40%), url(${images[1].url})`;
    placeImgElement.src = images[0].url;
    nameElement.textContent = city_name;
    weatherElement.textContent = weather.description;
    weatherImgElement.src = weather_icon_url;
    tempElement.textContent = temp;
  }
;

export default {
  render
}
